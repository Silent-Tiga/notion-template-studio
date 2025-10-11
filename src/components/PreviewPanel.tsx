import React, { useState } from 'react';
import type { PreviewData, AIGuide } from '../types';
import { Eye, Download, Share2, Sparkles } from 'lucide-react';

interface PreviewPanelProps {
  previewData: PreviewData | null;
  aiGuide?: AIGuide | null;
  isLoading: boolean;
  onExportClick?: () => void;
  onShareClick?: () => void;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ previewData, aiGuide, isLoading, onExportClick, onShareClick }) => {
  const [activeTab, setActiveTab] = useState<'website' | 'guide'>('website');
  const [progress, setProgress] = useState(0);

  // 模拟加载进度
  React.useEffect(() => {
    if (isLoading && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + Math.floor(Math.random() * 15) + 5, 100));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, progress]);

  // 重置进度条
  React.useEffect(() => {
    if (!isLoading) {
      setProgress(0);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="p-5 border border-neutral-200 rounded-github bg-white">
        <div className="flex items-center gap-3 mb-8">
          <Eye className="text-primary" size={24} />
          <h2 className="text-xl font-bold text-neutral-900">预览效果</h2>
        </div>
        
        <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-neutral-800 mb-4">正在生成预览</h3>
            <p className="text-neutral-600 text-center max-w-md mb-6">AI正在分析您的Notion内容并创建网页</p>
            
            <div className="mt-6 w-full max-w-md h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full"
                style={{width: `${progress}%`}}
              ></div>
            </div>
            <div className="mt-3 text-sm text-neutral-500">
              {progress < 30 && '正在解析Notion内容...'}
              {progress >= 30 && progress < 70 && '正在优化页面布局...'}
              {progress >= 70 && '正在生成预览图像...'}
            </div>
          </div>
      </div>
    );
  }

  if (!previewData) {
    return (
      <div className="p-5 border border-neutral-200 rounded-github bg-white">
        <div className="flex items-center gap-3 mb-8">
          <Eye className="text-primary" size={24} />
          <h2 className="text-xl font-bold text-neutral-900">预览效果</h2>
        </div>
        
        <div className="p-8 border border-neutral-200 rounded-github text-center">
          <div className="bg-primary/5 rounded-full p-5 mb-6 inline-block">
            <Eye className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-neutral-800 mb-4">预览将显示在这里</h3>
          <p className="text-neutral-600 max-w-md mx-auto mb-6">
            输入Notion链接后，您将在此处看到生成的网页预览。
          </p>
          <div className="bg-neutral-50 p-4 rounded-github border border-neutral-200 text-neutral-600 max-w-md mx-auto">
            <p className="flex items-center gap-2 mb-2 font-medium text-primary">
              <Sparkles size={16} className="text-primary" />
              智能提示
            </p>
            <p className="text-sm">预览内容将完全匹配您的Notion页面结构和设计，并由AI自动优化布局和样式。</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 border border-neutral-200 rounded-github bg-white">
      <div className="flex items-center gap-3 mb-8">
        <Eye className="text-primary" size={24} />
        <h2 className="text-xl font-bold text-neutral-900">预览效果</h2>
      </div>
      
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <p className="text-neutral-600">
          查看转换后的网站效果或AI生成的优化指南
        </p>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveTab('website')}
            className={`px-4 py-2 rounded-github text-sm font-medium ${activeTab === 'website' ? 'bg-primary text-white' : 'text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
          >
            网站预览
          </button>
          <button 
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 rounded-github text-sm font-medium ${activeTab === 'guide' ? 'bg-primary text-white' : 'text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
            disabled={!aiGuide}
          >
            AI指南
          </button>
        </div>
      </div>
      
      <div className="border border-neutral-200 rounded-github overflow-hidden bg-white">
        {/* 模拟浏览器窗口 */}
        <div className="bg-neutral-800 px-4 py-2 flex items-center border-b border-neutral-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center text-xs text-neutral-400 truncate px-4">
            https://ai-notion-preview.com/your-page
          </div>
          <div className="w-8"></div> {/* 占位符，用于平衡布局 */}
        </div>
        
        {/* 预览内容 */}
        <div className="bg-white p-6">
          {activeTab === 'website' ? (
            <>
              {/* 英雄区域 */}
              <div className="bg-primary text-white mb-8 p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">{previewData.title}</h1>
                <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">{previewData.description}</p>
                <button className="bg-white text-primary px-6 py-2 rounded-github font-medium hover:bg-neutral-100">
                  立即开始
                </button>
              </div>
              
              {/* 特色图片占位区 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border-2 border-dashed border-primary/20 rounded-github w-full h-60 flex flex-col items-center justify-center p-6">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-github flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-800 mb-2">特色图片 1</h3>
                  <p className="text-neutral-600 text-center text-sm">展示您的产品核心功能或优势</p>
                </div>
                <div className="border-2 border-dashed border-primary/20 rounded-github w-full h-60 flex flex-col items-center justify-center p-6">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-github flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-800 mb-2">特色图片 2</h3>
                  <p className="text-neutral-600 text-center text-sm">突出您的产品安全保障或认证</p>
                </div>
              </div>
              
              {/* 关键特性 */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-6 text-center">关键特性</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(previewData.features || []).map((feature, index) => (
                    <div key={feature.id || index} className="p-5 rounded-github border border-neutral-200 bg-white hover:border-primary/20">
                      <div className="bg-primary/10 text-primary w-12 h-12 rounded-github flex items-center justify-center mb-4">
                        <span className="font-bold text-lg">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-medium mb-3 text-neutral-800">{feature.title}</h3>
                      <p className="text-neutral-600 text-sm">{feature.description || '这个特性可以帮助用户更好地理解产品功能和优势。'}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 定价CTA */}
              <div className="bg-primary text-white p-8 text-center">
                <h2 className="text-xl font-bold mb-4">准备开始了吗？</h2>
                <p className="text-lg mb-6 text-white/90">立即加入我们，解锁全部功能</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-primary px-6 py-2 rounded-github font-medium hover:bg-neutral-100">
                    立即购买
                  </button>
                  <button className="bg-transparent border border-white text-white px-6 py-2 rounded-github font-medium hover:bg-white/10">
                    联系销售
                  </button>
                </div>
              </div>
            </>
          ) : aiGuide ? (
            <div className="bg-neutral-50 rounded-github p-5 border border-neutral-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-github flex items-center justify-center text-primary border border-neutral-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-800">AI优化指南</h3>
                </div>
                
                <div className="space-y-5">
                  {aiGuide.steps.map((step, index) => (
                    <div key={step.id || index} className="p-5 rounded-github border border-neutral-200 bg-white">
                      <h4 className="font-medium text-neutral-800 mb-3 flex items-center gap-3">
                        <div className={`w-7 h-7 ${step.priority === 'high' ? 'bg-primary/10 text-primary' : 'bg-neutral-100 text-neutral-600'} rounded-github flex items-center justify-center text-xs font-bold`}>{index + 1}</div>
                        {step.title}
                      </h4>
                      <p className="text-neutral-600 text-sm mb-4">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center bg-neutral-50 rounded-github">
                <div className="bg-white rounded-full p-4 mb-6 border border-neutral-200">
                  <Sparkles className="w-6 h-6 text-neutral-400" />
                </div>
                <h3 className="text-lg font-medium text-neutral-800 mb-3">AI指南生成中</h3>
                <p className="text-neutral-600 mb-6 text-sm">请稍候，我们正在为您生成详细的优化指南</p>
                <div className="w-40 h-2 bg-neutral-200 rounded-github overflow-hidden">
                  <div className="h-full w-3/4 bg-primary rounded-github" />
                </div>
              </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex flex-wrap justify-end gap-3">
        <button 
          onClick={onShareClick}
          className="px-4 py-2 border border-neutral-300 rounded-github text-neutral-700 hover:bg-neutral-50 flex items-center gap-2"
        >
          <Share2 size={16} />
          分享预览
        </button>
        <button 
          onClick={onExportClick}
          className="px-4 py-2 bg-primary text-white rounded-github hover:bg-primary-dark flex items-center gap-2"
        >
          <Download size={16} />
          导出产品包
        </button>
      </div>
    </div>
  );
};

export default PreviewPanel;