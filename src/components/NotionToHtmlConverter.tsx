import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

// 环境变量
const CLOUDFLARE_WORKER_URL = process.env.REACT_APP_CLOUDFLARE_WORKER_URL || 'http://localhost:8787';

interface ConvertResult {
  success: boolean;
  title?: string;
  htmlContent?: string;
  previewUrl?: string;
  error?: string;
}

interface ThemeOptions {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
}

/**
 * Notion到HTML转换组件
 * 用于展示如何调用Cloudflare Workers API进行Notion内容转换
 */
export const NotionToHtmlConverter: React.FC = () => {
  // 状态管理
  const [notionUrl, setNotionUrl] = useState<string>('');
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [conversionResult, setConversionResult] = useState<ConvertResult | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemeOptions>({
    primaryColor: '#4F46E5',
    secondaryColor: '#8B5CF6',
    backgroundColor: '#ffffff',
    textColor: '#1F2937',
  });
  const [showPreview, setShowPreview] = useState<boolean>(false);

  /**
   * 从Notion URL提取页面ID
   * @param url - Notion页面URL
   * @returns 页面ID或null
   */
  const extractNotionPageId = (url: string): string | null => {
    try {
      const parsedUrl = new URL(url);
      const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
      
      // 处理不同格式的Notion URL
      if (pathParts.length >= 2 && parsedUrl.hostname.includes('notion.so')) {
        // 格式: notion.so/workspace/PageId
        return pathParts[1].split('-').pop() || null;
      } else if (pathParts.length >= 1 && parsedUrl.hostname.includes('notion.site')) {
        // 格式: notion.site/PageId
        return pathParts[0].split('-').pop() || null;
      }
      
      return null;
    } catch (error) {
      console.error('Invalid Notion URL:', error);
      return null;
    }
  };

  /**
   * 处理转换请求
   */
  const handleConvert = async () => {
    // 验证URL
    if (!notionUrl.trim()) {
      alert('Please enter a Notion page URL');
      return;
    }

    const pageId = extractNotionPageId(notionUrl);
    if (!pageId) {
      alert('无法从URL中提取Notion页面ID，请检查URL格式');
      return;
    }

    setIsConverting(true);
    setConversionResult(null);
    
    try {
      // 调用Cloudflare Workers API
      const response = await fetch(`${CLOUDFLARE_WORKER_URL}/api/notion-to-html`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageId,
          theme: selectedTheme
        }),
      });

      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }

      const result: ConvertResult = await response.json();
      setConversionResult(result);
      
      if (result.success) {
        console.log('转换成功:', result);
      } else {
        alert(`转换失败: ${result.error}`);
      }
    } catch (error) {
      console.error('转换过程中发生错误:', error);
      alert(`转换过程中发生错误: ${error instanceof Error ? error.message : '未知错误'}`);
    } finally {
      setIsConverting(false);
    }
  };

  /**
   * 下载HTML文件
   */
  const downloadHtml = () => {
    if (!conversionResult?.htmlContent) return;
    
    const blob = new Blob([conversionResult.htmlContent], { type: 'text/html;charset=utf-8' });
    const fileName = `${conversionResult.title || 'notion-page'}.html`;
    saveAs(blob, fileName);
  };

  /**
   * 打包下载HTML和资源
   */
  const downloadZip = async () => {
    if (!conversionResult?.htmlContent) return;
    
    const zip = new JSZip();
    const fileName = conversionResult.title || 'notion-page';
    
    // 添加HTML文件
    zip.file(`${fileName}.html`, conversionResult.htmlContent);
    
    // 在实际应用中，这里可以添加更多资源文件
    // 例如从HTML中提取的图片等
    
    try {
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, `${fileName}.zip`);
    } catch (error) {
      console.error('Failed to create ZIP file:', error);
      alert('ZIP download failed, please try again later');
    }
  };

  /**
   * 更新主题颜色
   */
  const updateThemeColor = (property: keyof ThemeOptions, value: string) => {
    setSelectedTheme(prev => ({
      ...prev,
      [property]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Notion Page Conversion Tool</h2>
      
      <div className="space-y-6">
        {/* URL输入区域 */}
        <div className="space-y-2">
          <label htmlFor="notionUrl" className="block text-sm font-medium text-gray-700">
            Notion Page URL
          </label>
          <input
            type="text"
            id="notionUrl"
            value={notionUrl}
            onChange={(e) => setNotionUrl(e.target.value)}
            placeholder="https://www.notion.so/..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* 主题配置区域 */}
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Theme Settings</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
              <input
                type="color"
                value={selectedTheme.primaryColor}
                onChange={(e) => updateThemeColor('primaryColor', e.target.value)}
                className="w-full h-10 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
              <input
                type="color"
                value={selectedTheme.secondaryColor}
                onChange={(e) => updateThemeColor('secondaryColor', e.target.value)}
                className="w-full h-10 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Background Color</label>
              <input
                type="color"
                value={selectedTheme.backgroundColor}
                onChange={(e) => updateThemeColor('backgroundColor', e.target.value)}
                className="w-full h-10 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Text Color</label>
              <input
                type="color"
                value={selectedTheme.textColor}
                onChange={(e) => updateThemeColor('textColor', e.target.value)}
                className="w-full h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* 转换按钮 */}
        <div>
          <button
            onClick={handleConvert}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            {isConverting ? 'Converting...' : 'Start Conversion'}
          </button>
        </div>

        {/* 转换结果区域 */}
        {conversionResult && (
          <div className="p-4 bg-gray-50 rounded-md">
            {/* 页面标题 */}
            {conversionResult.title && (
              <div className="mb-2">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Conversion Result</h3>
                <p className="text-sm text-gray-600">Page Title:</p>
                <p className="font-medium">{conversionResult.title}</p>
              </div>
            )}

            {/* 操作按钮 */}
            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={downloadHtml}
                className="px-3 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Download HTML
              </button>
              <button
                onClick={downloadZip}
                className="px-3 py-1.5 bg-gray-700 text-white rounded hover:bg-gray-800"
              >
                Download ZIP
              </button>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                {showPreview ? 'Hide Preview' : 'Preview HTML'}
              </button>
            </div>

            {/* 预览区域 */}
            {showPreview && (
              <div className="p-3 bg-white rounded border border-gray-200">
                <div className="text-sm text-gray-600 mb-2">HTML Preview:</div>
                <iframe
                  srcDoc={conversionResult.htmlContent}
                  title="Notion Page Preview"
                  className="w-full h-96"
                />
              </div>
            )}

            {/* 错误信息 */}
            {conversionResult.error && (
              <div className="mt-3 p-3 bg-red-50 text-red-700 rounded">
                <p>Error: {conversionResult.error}</p>
              </div>
            )}

            {/* 使用说明 */}
            <div className="mt-4 p-3 bg-blue-50 text-blue-900 rounded">
              <h3 className="text-md font-medium text-blue-800 mb-2">Instructions</h3>
              <ul className="list-disc list-inside text-sm">
                <li>1. Paste the public Notion page URL into the input field</li>
                <li>2. Pick your preferred theme colors</li>
                <li>3. Click the "Start Conversion" button</li>
                <li>4. After conversion, download the HTML file or a ZIP</li>
                <li>5. You can also preview the converted HTML on the page</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotionToHtmlConverter;