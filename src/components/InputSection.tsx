import React, { useState } from 'react';

interface InputSectionProps {
  onGenerate: (link: string) => Promise<void>;
  isProcessing: boolean;
  notionLink: string;
  onLinkChange: (link: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ onGenerate, isProcessing, notionLink, onLinkChange }) => {
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!notionLink.trim()) {
      setError('请输入Notion页面链接');
      return;
    }
    
    // 简单的URL验证
    try {
      new URL(notionLink);
      setError('');
      onGenerate(notionLink);
    } catch (err) {
      setError('请输入有效的URL');
    }
  };

  const handleClear = (): void => {
    onLinkChange('');
    setError('');
  };

  return (
    <div className="p-5">
      <h3 className="text-lg font-semibold mb-5 text-neutral-900">输入Notion链接</h3>
      
      <div className="bg-neutral-50 border border-neutral-200 rounded-github p-4 mb-5">
        <h4 className="font-medium text-neutral-700 mb-2">准备您的Notion页面</h4>
        <p className="text-sm text-neutral-600">确保您的Notion页面链接可以公开访问。请确认页面已设置为公开访问。</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="notion-link" className="block text-sm font-medium text-neutral-700 mb-1">
            Notion页面链接
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
              🔗
            </div>
            <input
              id="notion-link"
              type="text"
              value={notionLink}
              onChange={(e) => onLinkChange(e.target.value)}
              placeholder="https://www.notion.so/your-page"
              className={`w-full pl-10 pr-10 py-2 rounded-github border ${error ? 'border-red-300' : 'border-neutral-300'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
              disabled={isProcessing}
            />
            {notionLink && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                disabled={isProcessing}
                aria-label="清除输入"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
          {error && (
            <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-github">
              {error}
            </div>
          )}
        </div>
        
        <div className="space-y-3 pt-4">
          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full py-2 px-4 rounded-github font-medium text-white transition-colors ${isProcessing ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'}`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                <span>处理中...</span>
              </div>
            ) : (
              <span>生成预览</span>
            )}
          </button>
          
          <button
            type="button"
            onClick={() => {
            onLinkChange('https://www.notion.so/example-page');
            onGenerate('https://www.notion.so/example-page');
          }}
            disabled={isProcessing}
            className={`w-full py-2 px-4 rounded-github font-medium transition-colors ${isProcessing ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed' : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
          >
            试用示例
          </button>
        </div>
      </form>
      
      {/* 操作流程说明 */}
      <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200 rounded-github">
        <h4 className="font-medium text-neutral-900 mb-3">操作流程</h4>
        <ol className="text-sm text-neutral-700 space-y-2">
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">1</span>
            <span>粘贴您的Notion公开页面链接</span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">2</span>
            <span>点击"生成预览"按钮</span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">3</span>
            <span>等待AI生成网站预览</span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">4</span>
            <span>查看并导出您的新网站</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default InputSection;