import React, { useState, useContext } from 'react';
import InputSection from '../components/InputSection';
import PreviewPanel from '../components/PreviewPanel';
import GuidePreview from '../components/GuidePreview';
import ExportPanel from '../components/ExportPanel';
import { fetchNotionContent } from '../services/notionAPI';
import { generateHTML, createExportPackage } from '../services/exportService';
import { generateAIGuide } from '../services/aiService';
import { extractPageId } from '../utils/urlUtils';
import type { ExportPackage, AIGuide, PreviewData } from '../types';
import { AppContext } from '../App';

interface ConvertPageProps {
  onGeneratePreview?: (notionLink: string) => Promise<void>;
}

const ConvertPage: React.FC<ConvertPageProps> = () => {
  // 状态管理
  const [notionLink, setNotionLink] = useState('');
  const [generatedPreview, setGeneratedPreview] = useState<PreviewData | null>(null);
  const [aiGuide, setAIGuide] = useState<AIGuide | null>(null);
  const [exportPackage, setExportPackage] = useState<ExportPackage | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [useBackendAPI, setUseBackendAPI] = useState(false); // 新增：控制是否使用后端API
  
  const { showNotification } = useContext(AppContext);

  // 处理生成预览
  const handleGeneratePreview = async () => {
    if (!notionLink) {
      showNotification('请输入Notion链接', 'warning');
      return;
    }

    setIsProcessing(true);
    try {
      const pageId = extractPageId(notionLink);
      if (!pageId) {
        showNotification('无效的Notion链接，请检查后重试。', 'error');
        setIsProcessing(false);
        return;
      }
      
      // 显示进度通知
      showNotification('正在获取Notion内容...', 'info');
      
      // 获取Notion内容
      const notionContent = await fetchNotionContent(pageId);
      
      // 生成预览数据
      const previewData = await generateHTML(notionContent, undefined, { useBackend: useBackendAPI });
      setGeneratedPreview(previewData);
      
      // 显示进度通知
      showNotification('正在生成AI优化指南...', 'info');
      
      // 生成AI指南
      const guide = await generateAIGuide(notionContent);
      setAIGuide(guide);
      
      // 显示进度通知
      showNotification('正在准备导出包...', 'info');
      
      // 生成导出包
      const exportPackage = await createExportPackage(previewData);
      setExportPackage(exportPackage);
      
      showNotification('转换成功！您可以预览网站和导出文件。', 'success');
    } catch (error) {
      console.error("Error generating preview:", error);
      showNotification('转换失败，请检查Notion链接是否正确并再次尝试。', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-neutral-900">
        转换Notion文档
      </h2>
      
      {/* 内容区域 - 网格布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <div className="card">
          <InputSection 
            onGenerate={handleGeneratePreview}
            isProcessing={isProcessing}
            notionLink={notionLink}
            onLinkChange={setNotionLink}
          />
          
          {/* API选择选项 */}
          <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="useBackendAPI"
                checked={useBackendAPI}
                onChange={(e) => setUseBackendAPI(e.target.checked)}
                className="rounded text-primary focus:ring-primary"
              />
              <label htmlFor="useBackendAPI" className="text-sm text-neutral-700">
                使用 Cloudflare Workers 后端API生成HTML
              </label>
            </div>
            <p className="text-xs text-neutral-500 mt-2">
              {useBackendAPI 
                ? '使用Cloudflare Workers后端API生成HTML，可获取更好的性能和稳定性。'
                : '使用前端直接生成HTML，适用于快速预览。'}
            </p>
          </div>
        </div>
        <div className="card">
          <PreviewPanel 
            previewData={generatedPreview}
            aiGuide={aiGuide}
            isLoading={isProcessing && !generatedPreview}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <GuidePreview 
            guide={aiGuide}
            isLoading={isProcessing && !aiGuide}
            onShowNotification={showNotification}
          />
        </div>
        <div className="card">
          <ExportPanel 
            exportPackage={exportPackage}
            isProcessing={isProcessing && !exportPackage}
          />
        </div>
      </div>
    </div>
  );
};

export default ConvertPage;