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
          <h2 className="text-xl font-bold text-neutral-900">Preview</h2>
        </div>
        
        <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-neutral-800 mb-4">Generating Preview</h3>
            <p className="text-neutral-600 text-center max-w-md mb-6">AI is analyzing your Notion content and building the page</p>
            
            <div className="mt-6 w-full max-w-md h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full"
                style={{width: `${progress}%`}}
              ></div>
            </div>
            <div className="mt-3 text-sm text-neutral-500">
              {progress < 30 && 'Parsing Notion content...'}
              {progress >= 30 && progress < 70 && 'Optimizing page layout...'}
              {progress >= 70 && 'Generating preview image...'}
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
          <h2 className="text-xl font-bold text-neutral-900">Preview</h2>
        </div>
        
        <div className="p-8 border border-neutral-200 rounded-github text-center">
          <div className="bg-primary/5 rounded-full p-5 mb-6 inline-block">
            <Eye className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-neutral-800 mb-4">Preview will appear here</h3>
          <p className="text-neutral-600 max-w-md mx-auto mb-6">
            Paste a Notion link to see the generated website preview here.
          </p>
          <div className="bg-neutral-50 p-4 rounded-github border border-neutral-200 text-neutral-600 max-w-md mx-auto">
            <p className="flex items-center gap-2 mb-2 font-medium text-primary">
              <Sparkles size={16} className="text-primary" />
              Smart Tip
            </p>
            <p className="text-sm">The preview will match your Notion page structure and design, with AI-optimized layout and styles.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 border border-neutral-200 rounded-github bg-white">
      <div className="flex items-center gap-3 mb-8">
        <Eye className="text-primary" size={24} />
        <h2 className="text-xl font-bold text-neutral-900">Preview</h2>
      </div>
      
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <p className="text-neutral-600">
          View the converted website or the AI optimization guide
        </p>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveTab('website')}
            className={`px-4 py-2 rounded-github text-sm font-medium ${activeTab === 'website' ? 'bg-primary text-white' : 'text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
          >
            Website
          </button>
          <button 
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 rounded-github text-sm font-medium ${activeTab === 'guide' ? 'bg-primary text-white' : 'text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
            disabled={!aiGuide}
          >
            AI Guide
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
            // 使用生成的 HTML 内容进行真实预览，而不是模板占位
            previewData?.htmlContent ? (
              <div className="border border-neutral-200 rounded-github overflow-hidden">
                <iframe
                  srcDoc={previewData.htmlContent}
                  title="Notion Page Preview"
                  className="w-full min-h-[600px]"
                  sandbox="allow-same-origin allow-scripts"
                />
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-primary/5 rounded-full p-5 mb-6 inline-block">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-neutral-800 mb-3">No HTML content</h3>
                <p className="text-neutral-600 text-sm">Please generate a preview or check if the conversion succeeded.</p>
              </div>
            )
          ) : aiGuide ? (
            <div className="bg-neutral-50 rounded-github p-5 border border-neutral-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-github flex items-center justify-center text-primary border border-neutral-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-800">AI Optimization Guide</h3>
                </div>
                
                <div className="space-y-5">
                  {aiGuide.steps.map((step, index) => (
                    <div key={step.id || index} className="p-5 rounded-github border border-neutral-200 bg-white">
                      <h4 className="font-medium text-neutral-800 mb-3 flex items-center gap-3">
                        <div className={`${step.priority === 'high' ? 'bg-primary/10 text-primary' : 'bg-neutral-100 text-neutral-600'} w-7 h-7 rounded-github flex items-center justify-center text-xs font-bold`}>{index + 1}</div>
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
                <h3 className="text-lg font-medium text-neutral-800 mb-3">Generating AI Guide</h3>
                <p className="text-neutral-600 mb-6 text-sm">Please wait while we generate a detailed optimization guide.</p>
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
          Share Preview
        </button>
        <button 
          onClick={onExportClick}
          className="px-4 py-2 bg-primary text-white rounded-github hover:bg-primary-dark flex items-center gap-2"
        >
          <Download size={16} />
          Export Package
        </button>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Preview</h3>
        <button
          type="button"
          onClick={() => {
            if (!previewData?.htmlContent) return;
            const blob = new Blob([previewData.htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
          }}
          className="px-3 py-2 text-sm rounded-md bg-primary text-white hover:opacity-90"
          disabled={!previewData?.htmlContent}
        >
          Open in new tab
        </button>
      </div>
    </div>
  );
};

export default PreviewPanel;