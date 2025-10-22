/**
 * 导出工具函数
 */
import type { ExportPackage } from '../types';

/**
 * 创建导出包
 * @param htmlContent 要导出的HTML内容
 * @returns 导出包对象
 */
export const createExportPackage = async (htmlContent: string): Promise<ExportPackage> => {
  try {
    // 模拟创建导出包的过程
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 生成一个简化的HTML文件内容（实际项目中可以包含更多样式和脚本）
    const completeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notion Page Export</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1, h2, h3, h4, h5, h6 { margin-top: 1.5em; margin-bottom: 0.5em; font-weight: 600; }
    p { margin-bottom: 1em; }
    ul, ol { margin-bottom: 1em; padding-left: 1.5em; }
    img { max-width: 100%; height: auto; margin: 1em 0; }
    .container { background-color: white; border-radius: 8px; padding: 40px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
  </style>
</head>
<body>
  <div class="container">
    ${htmlContent}
  </div>
</body>
</html>`;
    
    return {
      htmlFile: {
        name: 'notion-export.html',
        content: completeHtml,
        type: 'text/html'
      },
      assets: [],
      metadata: {
        exportDate: new Date().toISOString(),
        version: '1.0',
        source: 'aiNOTION Converter'
      }
    };
  } catch (error) {
    console.error('创建导出包失败:', error);
    // 返回包含错误信息的导出包
    return {
      htmlFile: {
        name: 'notion-export.html',
        content: '<html><body><h1>Export Failed</h1><p>Unable to create export file, please try again later.</p></body></html>',
        type: 'text/html'
      },
      assets: [],
      metadata: {
        exportDate: new Date().toISOString(),
        version: '1.0',
        source: 'aiNOTION Converter',
        error: 'An error occurred during export'
      }
    };
  }
};