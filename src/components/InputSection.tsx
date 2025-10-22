import React, { useState } from 'react';

interface InputSectionProps {
  onGenerate: (mode: 'single' | 'site', linkOrId: string, apiKey: string, slugProperty?: string) => Promise<void>;
  isProcessing: boolean;
  notionLink: string;
  onLinkChange: (link: string) => void;
  mode: 'single' | 'site';
  onModeChange: (mode: 'single' | 'site') => void;
  databaseLink: string;
  onDatabaseLinkChange: (link: string) => void;
  slugProperty: string;
  onSlugPropertyChange: (prop: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ onGenerate, isProcessing, notionLink, onLinkChange, mode, onModeChange, databaseLink, onDatabaseLinkChange, slugProperty, onSlugPropertyChange }) => {
  const [error, setError] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [apiKeyError, setApiKeyError] = useState<string>('');
  const [showApiKey, setShowApiKey] = useState<boolean>(false);

  const validateUrl = (url: string): boolean => {
    try { new URL(url); return true; } catch { return false; }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    let hasError = false;

    if (mode === 'single') {
      if (!notionLink.trim()) {
        setError('请输入 Notion 页面链接');
        hasError = true;
      } else if (!validateUrl(notionLink)) {
        setError('请输入有效的 URL');
        hasError = true;
      } else {
        setError('');
      }
    } else {
      if (!databaseLink.trim()) {
        setError('请输入 Notion Database 链接或 ID');
        hasError = true;
      } else {
        setError('');
      }
    }

    setApiKeyError('');

    if (!hasError) {
      const input = mode === 'single' ? notionLink : databaseLink;
      onGenerate(mode, input, apiKey, slugProperty || undefined);
    }
  };

  const handleClear = (): void => {
    if (mode === 'single') {
      onLinkChange('');
    } else {
      onDatabaseLinkChange('');
    }
    setError('');
    setApiKey('');
    setApiKeyError('');
  };

  return (
    <div className="p-5">
      <h3 className="text-lg font-semibold mb-5 text-neutral-900">输入 Notion 页面 / 数据库</h3>

      <div className="bg-neutral-50 border border-neutral-200 rounded-github p-4 mb-5">
        <h4 className="font-medium text-neutral-700 mb-2">准备你的 Notion 内容</h4>
        <ul className="text-sm text-neutral-600 space-y-2">
          <li>1. 确保你的 Notion 页面或数据库已授权给 Integration</li>
          <li>2. 在 Notion 中点击 Share → Invite，添加 Integration</li>
          <li>3. API Key 可选（默认共享只读密钥，支持公开内容）</li>
        </ul>
      </div>

      {/* 模式切换 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-neutral-700 mb-1">站点模式</label>
        <div className="flex gap-4">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="radio" name="site-mode" value="single" checked={mode === 'single'} onChange={() => onModeChange('single')} disabled={isProcessing} />
            <span>单页面</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="radio" name="site-mode" value="site" checked={mode === 'site'} onChange={() => onModeChange('site')} disabled={isProcessing} />
            <span>多页面（Database）</span>
          </label>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'single' ? (
          <div>
            <label htmlFor="notion-link" className="block text-sm font-medium text-neutral-700 mb-1">Notion 页面链接</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">🔗</div>
              <input
                id="notion-link"
                type="text"
                value={notionLink}
                onChange={(e) => onLinkChange(e.target.value)}
                placeholder="https://www.notion.so/your-page"
                className={`w-full pl-10 pr-10 py-2 rounded-github border ${error ? 'border-red-300' : 'border-neutral-300'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
                disabled={isProcessing}
              />
              {(notionLink || error) && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                  disabled={isProcessing}
                  aria-label="Clear input"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
            {error && (
              <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-github">{error}</div>
            )}
          </div>
        ) : (
          <>
            <div>
              <label htmlFor="database-link" className="block text-sm font-medium text-neutral-700 mb-1">Notion Database 链接或 ID</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">🗂️</div>
                <input
                  id="database-link"
                  type="text"
                  value={databaseLink}
                  onChange={(e) => onDatabaseLinkChange(e.target.value)}
                  placeholder="https://www.notion.so/your-database 或数据库ID"
                  className={`w-full pl-10 pr-10 py-2 rounded-github border ${error ? 'border-red-300' : 'border-neutral-300'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
                  disabled={isProcessing}
                />
                {(databaseLink || error) && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                    disabled={isProcessing}
                    aria-label="Clear input"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
              {error && (
                <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-github">{error}</div>
              )}
            </div>
            <div>
              <label htmlFor="slug-prop" className="block text-sm font-medium text-neutral-700 mb-1">Slug 映射属性 <span className="text-neutral-500">(可选，默认 Name)</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">🏷️</div>
                <input
                  id="slug-prop"
                  type="text"
                  value={slugProperty}
                  onChange={(e) => onSlugPropertyChange(e.target.value)}
                  placeholder="例如：Slug、URL Title 等"
                  className={`w-full pl-10 pr-10 py-2 rounded-github border border-neutral-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
                  disabled={isProcessing}
                />
              </div>
              <div className="mt-2 text-xs text-neutral-500">如果提供，将优先使用该属性生成 slug，否则按 Name 生成。</div>
            </div>
          </>
        )}

        <div>
          <label htmlFor="api-key" className="block text-sm font-medium text-neutral-700 mb-1">
            Notion API Key <span className="text-neutral-500">(可选)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">🔑</div>
            <input
              id="api-key"
              type={showApiKey ? "text" : "password"}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="留空使用共享只读密钥"
              className={`w-full pl-10 pr-10 py-2 rounded-github border ${apiKeyError ? 'border-red-300' : 'border-neutral-300'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
              disabled={isProcessing}
            />
            <button
              type="button"
              onClick={() => setShowApiKey(!showApiKey)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
              disabled={isProcessing}
              aria-label={showApiKey ? "Hide key" : "Show key"}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 10.5A2.5 2.5 0 1 0 8 5.5a2.5 2.5 0 0 0 0 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          {apiKeyError && (
            <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-github">{apiKeyError}</div>
          )}
          <div className="mt-2 text-xs text-neutral-500">
            默认使用共享只读 Integration（仅支持公开内容）。如需转换私有内容，请输入你的 API Key。
            <div>
              <a href="https://www.notion.so/my-integrations" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">如何获取 Notion API Key？</a>
            </div>
          </div>
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
              if (mode === 'single') {
                onLinkChange('https://www.notion.so/example-page');
                onGenerate('single', 'https://www.notion.so/example-page', '', undefined);
              } else {
                onDatabaseLinkChange('https://www.notion.so/example-database');
                onGenerate('site', 'https://www.notion.so/example-database', '', 'Slug');
              }
            }}
            disabled={isProcessing}
            className={`w-full py-2 px-4 rounded-github font-medium transition-colors ${isProcessing ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed' : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
          >
            试用示例
          </button>
        </div>
      </form>

      {/* 使用说明 */}
      <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200 rounded-github">
        <h4 className="font-medium text-neutral-900 mb-3">使用说明</h4>
        <ol className="text-sm text-neutral-700 space-y-2">
          <li className="flex items-start"><span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">1</span><span>粘贴 Notion 页面或数据库链接</span></li>
          <li className="flex items-start"><span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">2</span><span>点击“生成预览”</span></li>
          <li className="flex items-start"><span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">3</span><span>等待 AI 生成页面或站点预览</span></li>
          <li className="flex items-start"><span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">4</span><span>导出站点包或托管部署</span></li>
        </ol>
      </div>
    </div>
  );
};

export default InputSection;