import React, { useState, useContext } from 'react';
import InputSection from '../components/InputSection';
import PreviewPanel from '../components/PreviewPanel';
import GuidePreview from '../components/GuidePreview';
import ExportPanel from '../components/ExportPanel';
import { generateHTML, createExportPackage, createSiteExportPackage } from '../services/exportService';
import { generateAIGuide } from '../services/aiService';
import { extractPageId } from '../utils/urlUtils';
import type { ExportPackage, AIGuide, PreviewData } from '../types';
import { AppContext } from '../App';
import { checkPublic, convertViaWorker, convertDatabaseToSite } from '../services/backendAPI';
import SeoCheck from '../components/SeoCheck';
import type { NotionContent } from '../services/notionAPI';
import type { SiteManifest } from '../types';
import { siteSync } from '../services/backendAPI';

interface ConvertPageProps {
  onGeneratePreview?: (notionLink: string) => Promise<void>;
}

const ConvertPage: React.FC<ConvertPageProps> = () => {
  // 状态管理
  const [mode, setMode] = useState<'single' | 'site'>('single');
  const [notionLink, setNotionLink] = useState('');
  const [databaseLink, setDatabaseLink] = useState('');
  const [slugProperty, setSlugProperty] = useState('');
  const [generatedPreview, setGeneratedPreview] = useState<PreviewData | null>(null);
  const [siteManifest, setSiteManifest] = useState<SiteManifest | null>(null);
  const [aiGuide, setAIGuide] = useState<AIGuide | null>(null);
  const [exportPackage, setExportPackage] = useState<ExportPackage | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showAuthCard, setShowAuthCard] = useState(false);
  const [authTip, setAuthTip] = useState<string>('');
  const [lastSyncAt, setLastSyncAt] = useState<string>('');
  const [syncMessage, setSyncMessage] = useState<string>('');
  
  const { showNotification } = useContext(AppContext);

  // 生成预览（单页面或站点）
  const handleGeneratePreview = async (inputMode: 'single' | 'site', input: string, apiKey: string, slugProp?: string) => {
    setIsProcessing(true);
    setExportPackage(null);
    setAIGuide(null);
    setSiteManifest(null);
    try {
      if (inputMode === 'single') {
        if (!input || !extractPageId(input)) {
          showNotification('无效的 Notion 链接，请检查后重试。', 'error');
          setIsProcessing(false);
          return;
        }
        // 如果用户提供了 API Key，则跳过共享密钥校验，直接转换
        if (apiKey && apiKey.trim().length > 0) {
          showNotification('使用你提供的 API Key 转换...', 'info');
          const workerContent = await convertViaWorker({ url: input, useAI: false, apiKey });
          const notionContent: NotionContent = {
            title: workerContent.title || 'Untitled',
            content: (workerContent.content || []).map((c: any) => ({
              id: c.id,
              type: ['heading','paragraph','image','list','table','callout','quote','toggle'].includes(c.type) ? c.type : 'paragraph',
              content: typeof c.content === 'string' ? c.content : '',
              properties: c.properties || undefined
            })),
            coverImage: workerContent.coverImage || undefined,
            icon: workerContent.icon || undefined
          };
          const previewData = await generateHTML(notionContent);
          setGeneratedPreview(previewData);
          showNotification('生成 AI 优化指南...', 'info');
          const guide = await generateAIGuide(notionContent);
          setAIGuide(guide);
          showNotification('准备导出包...', 'info');
          const exportPkg = await createExportPackage(previewData);
          setExportPackage(exportPkg);
          showNotification('转换成功！可预览与导出。', 'success');
        } else {
          // 未提供 API Key，使用共享只读密钥并先做权限校验
          showNotification('校验公开权限...', 'info');
          const check = await checkPublic(input);
          if (!check.ok) {
            setShowAuthCard(true);
            setAuthTip(check.tip || '页面尚未授权给我们的 Integration。');
            showNotification('页面未授权，请在 Notion 中邀请 Integration。', 'warning');
            setIsProcessing(false);
            return;
          }
          showNotification('使用共享密钥转换...', 'info');
          const workerContent = await convertViaWorker({ url: input, useAI: false });
          const notionContent: NotionContent = {
            title: workerContent.title || 'Untitled',
            content: (workerContent.content || []).map((c: any) => ({
              id: c.id,
              type: ['heading','paragraph','image','list','table','callout','quote','toggle'].includes(c.type) ? c.type : 'paragraph',
              content: typeof c.content === 'string' ? c.content : '',
              properties: c.properties || undefined
            })),
            coverImage: workerContent.coverImage || undefined,
            icon: workerContent.icon || undefined
          };
          const previewData = await generateHTML(notionContent);
          setGeneratedPreview(previewData);
          showNotification('生成 AI 优化指南...', 'info');
          const guide = await generateAIGuide(notionContent);
          setAIGuide(guide);
          showNotification('准备导出包...', 'info');
          const exportPkg = await createExportPackage(previewData);
          setExportPackage(exportPkg);
          showNotification('转换成功！可预览与导出。', 'success');
        }
      } else {
        // 站点模式：数据库 → 多页面站点
        if (!input || input.trim().length === 0) {
          showNotification('请输入 Notion Database 链接或 ID。', 'error');
          setIsProcessing(false);
          return;
        }
        showNotification('站点生成中...', 'info');
        const manifest = await convertDatabaseToSite({ url: input, apiKey, slugProperty: slugProp });
        setSiteManifest(manifest);
        setGeneratedPreview(null);
        // 站点模式下 AI 指南先留空（后续为每页或站点级指南）
        showNotification('准备站点导出包...', 'info');
        const exportPkg = await createSiteExportPackage(manifest);
        setExportPackage(exportPkg);
        showNotification('站点生成成功！已准备导出。', 'success');
      }
    } catch (error) {
      const msg = (error as Error).message || '';
      if (msg.includes('401') || msg.includes('未授权')) {
        setShowAuthCard(true);
        setAuthTip('请在 Notion 页面 Share → Invite 中添加 Integration。');
        showNotification('Notion 内容未授权，请在页面或数据库邀请 Integration。', 'error');
      } else if (msg.includes('404') || msg.includes('不存在') || msg.includes('无效')) {
        showNotification('内容不存在或链接无效，请检查 URL。', 'error');
      } else if (msg.includes('API密钥') || msg.includes('apiKey')) {
        showNotification('API Key 无效或缺失，请检查输入。', 'error');
      } else {
        showNotification('转换失败，请检查 Notion 链接。', 'error');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const applyShortenTitle = (): void => {
    if (generatedPreview) {
      const newTitle = generatedPreview.title.length > 20 ? generatedPreview.title.slice(0, 20) + '...' : generatedPreview.title;
      setGeneratedPreview({ ...generatedPreview, title: newTitle });
    }
  };

  const handleManualSync = async () => {
    try {
      const payload: any = mode === 'site'
        ? { url: databaseLink, slugProperty }
        : { url: notionLink };
      const result = await siteSync(payload);
      setLastSyncAt(result.checkedAt || new Date().toISOString());
      setSyncMessage(result.message || `已同步（更新数：${result.updates ?? 0}）`);
    } catch (e: any) {
      setSyncMessage(e.message || '同步失败');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          {showAuthCard && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-github mb-4">
              <div className="flex items-start gap-3">
                <div className="text-yellow-600">⚠️</div>
                <div>
                  <div className="font-medium text-yellow-800">页面或数据库未授权</div>
                  <div className="text-sm text-yellow-700">{authTip}</div>
                </div>
              </div>
              <div className="mt-3">
                <button
                  onClick={() => handleGeneratePreview('single', notionLink, '')}
                  className="py-2 px-3 rounded-github bg-primary text-white hover:bg-primary-dark"
                >我已完成授权，重试</button>
              </div>
            </div>
          )}

          <InputSection
            onGenerate={handleGeneratePreview}
            isProcessing={isProcessing}
            notionLink={notionLink}
            onLinkChange={setNotionLink}
            mode={mode}
            onModeChange={setMode}
            databaseLink={databaseLink}
            onDatabaseLinkChange={setDatabaseLink}
            slugProperty={slugProperty}
            onSlugPropertyChange={setSlugProperty}
          />
        </div>
        <div className="card">
          {mode === 'single' ? (
            <PreviewPanel 
              previewData={generatedPreview}
              aiGuide={aiGuide}
              isLoading={isProcessing && !generatedPreview}
            />
          ) : (
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-3 text-neutral-900">站点预览</h3>
              {!siteManifest && (isProcessing ? (
                <div className="text-neutral-600">生成中...</div>
              ) : (
                <div className="text-neutral-600">生成导航预览、页数统计与 slug 映射</div>
              ))}
              {siteManifest && (
                <div className="space-y-3">
                  <div className="text-sm text-neutral-700">站点标题：<span className="font-medium">{siteManifest.siteTitle}</span></div>
                  <div className="text-sm text-neutral-700">页面数：<span className="font-medium">{siteManifest.pages.length}</span></div>
                  <div>
                    <div className="text-sm font-medium text-neutral-800 mb-2">导航</div>
                    <ul className="text-sm text-neutral-700 list-disc pl-5 space-y-1">
                      {siteManifest.navigation.map((nav) => (
                        <li key={nav.slug}><span className="font-medium">{nav.title}</span> <span className="text-neutral-500">/ {nav.slug}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <GuidePreview 
            guide={aiGuide}
            isLoading={isProcessing && !aiGuide}
            onShowNotification={showNotification}
            onApplyTitleShorten={applyShortenTitle}
          />
        </div>
        <div className="card">
          <ExportPanel 
            exportPackage={exportPackage}
            isProcessing={isProcessing && !exportPackage}
          />
        </div>
      </div>
      {/* SEO Check 仅单页面 */}
      {mode === 'single' && (
        <div className="mt-6 card">
          <SeoCheck html={generatedPreview?.htmlContent} />
        </div>
      )}
      {mode === 'site' && siteManifest && (
        <div className="site-preview-panel" style={{ marginTop: 16 }}>
          <div style={{ marginTop: 8, display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: '#6b7280' }}>最近同步：{lastSyncAt ? new Date(lastSyncAt).toLocaleString() : '尚未同步'}</span>
            <button onClick={handleManualSync} style={{ padding: '6px 10px', background: '#4F46E5', color: '#fff', borderRadius: 6 }}>手动刷新</button>
            {syncMessage && <span style={{ color: '#374151' }}>{syncMessage}</span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConvertPage;