// 导出服务功能
import type { NotionContent } from './notionAPI';
import type { PreviewData, ExportPackage, File as CustomFile } from '../types';

/**
 * 从环境变量获取后端API URL
 */
const getBackendApiUrl = (): string => {
  return import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:8787';
};

/**
 * 配置选项
 */
export interface ExportOptions {
  useBackend?: boolean;
}

/**
 * 网站主题配置
 */
export interface ThemeConfig {
  primaryColor?: string;
  secondaryColor?: string;
  fontFamily?: string;
  fontSize?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

/**
 * 生成HTML预览数据
 * @param notionContent Notion内容数据
 * @param theme 主题配置（可选）
 * @param options 配置选项（可选）
 * @returns PreviewData 预览数据
 */
export const generateHTML = async (notionContent: NotionContent, theme?: ThemeConfig, options?: ExportOptions): Promise<PreviewData> => {
  try {
    // 检查是否使用后端API
    const useBackend = options?.useBackend || false;
    
    if (useBackend) {
      // 使用Cloudflare Workers后端API生成HTML
      return await generateHtmlWithBackend(notionContent, theme);
    }
    
    // 默认使用前端生成HTML
    // 设置默认主题
    const defaultTheme: ThemeConfig = {
      primaryColor: '#4F46E5',
      secondaryColor: '#8B5CF6',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      fontSize: '16px',
      backgroundColor: '#ffffff',
      textColor: '#1F2937',
      accentColor: '#10B981'
    };
    
    const selectedTheme = { ...defaultTheme, ...theme };
    
    // 生成HTML内容
    const htmlContent = createHTMLFromNotionContent(notionContent, selectedTheme);
    
    // 提取页面特征
    const features = extractFeaturesFromContent(notionContent);
    
    return {
      title: notionContent.title || 'Notion 转换页面',
      description: '通过 AI Notion 转换工具生成的精美网页',
      imageUrl: notionContent.coverImage || getDefaultImage(),
      features: features,
      htmlContent: htmlContent
    };
  } catch (error) {
    console.error('Error generating HTML:', error);
    throw new Error('生成HTML预览失败\n' + (error as Error).message);
  }
};

/**
 * 使用后端API生成HTML
 * @param notionContent Notion内容数据
 * @param theme 主题配置
 * @returns Promise<PreviewData> 预览数据
 */
async function generateHtmlWithBackend(notionContent: NotionContent, theme?: ThemeConfig): Promise<PreviewData> {
  try {
    const apiUrl = getBackendApiUrl();
    const response = await fetch(`${apiUrl}/api/generate-html`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notionContent, theme }),
    });

    if (!response.ok) {
      throw new Error(`后端API请求失败: ${response.statusText}`);
    }

    const data = await response.json();
    
    // 检查是否有错误信息
    if (data.error) {
      throw new Error(data.error);
    }

    // 提取页面特征（也可以由后端返回）
    const features = extractFeaturesFromContent(notionContent);
    
    return {
      title: notionContent.title || 'Notion 转换页面',
      description: '通过 AI Notion 转换工具生成的精美网页',
      imageUrl: notionContent.coverImage || getDefaultImage(),
      features: features,
      htmlContent: data.htmlContent || ''
    };
  } catch (error) {
    console.error('Error generating HTML with backend API:', error);
    throw new Error('后端API生成HTML失败: ' + (error as Error).message);
  }
}

/**
 * 从Notion内容创建HTML
 * @param content Notion内容数据
 * @param theme 主题配置
 * @returns HTML字符串
 */
const createHTMLFromNotionContent = (content: NotionContent, theme: ThemeConfig): string => {
  const styleBlock = `
    <style>
      :root {
        --primary-color: ${theme.primaryColor};
        --secondary-color: ${theme.secondaryColor};
        --font-family: ${theme.fontFamily};
        --font-size: ${theme.fontSize};
        --background-color: ${theme.backgroundColor};
        --text-color: ${theme.textColor};
        --accent-color: ${theme.accentColor};
      }
      
      body {
        font-family: var(--font-family);
        font-size: var(--font-size);
        color: var(--text-color);
        background-color: var(--background-color);
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }
      
      h1, h2, h3, h4, h5, h6 {
        color: var(--primary-color);
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      
      p {
        margin-bottom: 1.5rem;
      }
      
      img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 2rem 0;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      
      ul, ol {
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
      }
      
      li {
        margin-bottom: 0.5rem;
      }
      
      .callout {
        background-color: rgba(16, 185, 129, 0.1);
        border-left: 4px solid var(--accent-color);
        padding: 1rem;
        border-radius: 0 8px 8px 0;
        margin: 1.5rem 0;
      }
      
      .quote {
        font-style: italic;
        border-left: 4px solid var(--secondary-color);
        padding-left: 1rem;
        margin: 1.5rem 0;
        color: #4B5563;
      }
      
      .cover-image {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 0;
        margin: 0 0 2rem 0;
      }
    </style>
  `;
  
  let bodyContent = '';
  
  // 添加封面图片
  if (content.coverImage) {
    bodyContent += `<img src="${content.coverImage}" alt="Cover" class="cover-image">`;
  }
  
  // 添加标题
  bodyContent += `<h1>${content.title}</h1>`;
  
  // 添加内容块
  content.content.forEach(block => {
    switch (block.type) {
      case 'heading':
        bodyContent += `<h2>${block.content}</h2>`;
        break;
      case 'paragraph':
        bodyContent += `<p>${block.content}</p>`;
        break;
      case 'image':
        bodyContent += `<img src="${block.content}" alt="Content image">`;
        break;
      case 'list':
        bodyContent += `<li>${block.content}</li>`;
        break;
      case 'callout':
        bodyContent += `<div class="callout">${block.content}</div>`;
        break;
      case 'quote':
        bodyContent += `<div class="quote">${block.content}</div>`;
        break;
      default:
        bodyContent += `<p>${block.content}</p>`;
    }
  });
  
  // 包装在完整的HTML结构中
  return `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${content.title || 'Notion 转换页面'}</title>
      ${styleBlock}
    </head>
    <body>
      <div class="container">
        ${bodyContent}
      </div>
    </body>
    </html>
  `;
};

/**
 * 从内容中提取特征列表
 * @param content Notion内容数据
 * @returns 特征数组
 */
const extractFeaturesFromContent = (content: NotionContent): Array<{id: string; title: string; description: string}> => {
  const features: Array<{id: string; title: string; description: string}> = [];
  
  // 检查内容类型，添加相应的特征
  if (content.content.some(item => item.type === 'image')) {
    features.push({
      id: 'feature-1',
      title: '精美图片展示',
      description: '页面包含高质量图片，提升视觉体验'
    });
  }
  
  if (content.content.some(item => item.type === 'list')) {
    features.push({
      id: 'feature-2',
      title: '结构化信息列表',
      description: '内容采用列表形式组织，便于阅读和理解'
    });
  }
  
  if (content.content.some(item => item.type === 'callout')) {
    features.push({
      id: 'feature-3',
      title: '重要提示突出显示',
      description: '关键信息通过提示框突出显示'
    });
  }
  
  if (content.coverImage) {
    features.push({
      id: 'feature-4',
      title: '专业封面图片',
      description: '页面配有专业封面图片，提升整体美观度'
    });
  }
  
  // 如果没有提取到足够的特征，添加默认特征
  if (features.length < 3) {
    const defaultFeatures = [
      {
        id: 'feature-default-1',
        title: '精美响应式设计',
        description: '适配各种屏幕尺寸的响应式布局'
      },
      {
        id: 'feature-default-2',
        title: '易于阅读排版',
        description: '优化的字体和间距，提升阅读体验'
      },
      {
        id: 'feature-default-3',
        title: 'AI优化内容',
        description: '通过AI技术优化的内容展示'
      },
      {
        id: 'feature-default-4',
        title: '快速加载性能',
        description: '优化的代码结构，确保快速加载'
      },
      {
        id: 'feature-default-5',
        title: 'SEO友好结构',
        description: '符合搜索引擎优化的页面结构'
      }
    ];
    
    defaultFeatures.forEach(feature => {
      if (!features.some(f => f.title === feature.title) && features.length < 5) {
        features.push(feature);
      }
    });
  }
  
  return features.slice(0, 5); // 最多返回5个特征
};

/**
 * 获取默认图片URL
 * @returns 默认图片URL
 */
const getDefaultImage = (): string => {
  // 提供几个备选的默认图片
  const defaultImages = [
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  ];
  
  // 随机选择一个默认图片
  return defaultImages[Math.floor(Math.random() * defaultImages.length)];
};

/**
 * 创建导出包
 * @param previewData 预览数据
 * @returns Promise<ExportPackage> 导出包信息
 */
export const createExportPackage = async (previewData: PreviewData): Promise<ExportPackage> => {
  try {
    // 模拟打包过程
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 生成模拟的下载链接（实际应用中应返回真实的下载URL）
    const downloadUrl = '#'; // 在真实应用中，这里应该是实际的文件下载链接
    
    // 生成文件名
    const safeTitle = previewData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').trim();
    const fileName = `${safeTitle}-website-package.zip`;
    
    // 创建一个模拟的File对象
    const htmlFile: CustomFile = {
      name: fileName,
      type: 'application/zip',
      content: downloadUrl // 这里简化处理，实际应用中应该是文件内容
    };
    
    return {
      htmlFile: htmlFile,
      assets: [],
      metadata: {
        exportDate: new Date().toISOString(),
        version: '1.0.0',
        source: 'AI Notion Converter',
        title: previewData.title,
        description: previewData.description
      }
    };
  } catch (error) {
    console.error('Error creating export package:', error);
    throw new Error('创建导出包失败，请稍后重试。');
  }
};

/**
 * 生成预览图（模拟）
 * @param htmlContent HTML内容
 * @returns Promise<string> 预览图URL
 */
export const generatePreviewImage = async (_htmlContent: string): Promise<string> => {
  try {
    // 模拟生成预览图过程
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 返回模拟的预览图URL
    return 'https://via.placeholder.com/800x450?text=Website+Preview';
  } catch (error) {
    console.error('Error generating preview image:', error);
    throw new Error('生成预览图失败');
  }
};