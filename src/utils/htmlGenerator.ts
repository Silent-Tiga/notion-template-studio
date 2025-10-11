// HTML生成工具

/**
 * HTML生成配置选项
 */
export interface HTMLGeneratorOptions {
  title?: string;
  lang?: string;
  metaTags?: Array<{ name: string; content: string }>;
  externalStyles?: string[];
  externalScripts?: string[];
  inlineStyles?: string;
  inlineScripts?: string;
  favicon?: string;
  includeGoogleFonts?: boolean;
  googleFonts?: string[];
}

/**
 * 创建基础HTML结构
 * @param content 页面内容
 * @param options 生成选项
 * @returns 完整的HTML字符串
 */
export const createBasicHTML = (content: string, options?: HTMLGeneratorOptions): string => {
  const defaultOptions: HTMLGeneratorOptions = {
    title: 'Notion 转换页面',
    lang: 'zh-CN',
    metaTags: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: '通过 AI Notion 转换工具生成的精美网页' }
    ],
    externalStyles: [],
    externalScripts: [],
    inlineStyles: '',
    inlineScripts: '',
    favicon: '',
    includeGoogleFonts: false,
    googleFonts: []
  };
  
  const config = { ...defaultOptions, ...options };
  
  // 生成meta标签
  const metaHtml = config.metaTags
    ? config.metaTags.map(tag => `<meta name="${tag.name}" content="${tag.content}">`).join('\n      ') + '\n      ' 
    : '';
  
  // 生成外部样式链接
  const stylesHtml = config.externalStyles
    ? config.externalStyles.map(style => `<link rel="stylesheet" href="${style}">`).join('\n      ') + '\n      ' 
    : '';
  
  // 生成外部脚本链接
  const scriptsHtml = config.externalScripts
    ? config.externalScripts.map(script => `<script src="${script}"></script>`).join('\n      ') + '\n      ' 
    : '';
  
  // 生成Google字体链接
  const googleFontsHtml = config.includeGoogleFonts && config.googleFonts && config.googleFonts.length > 0
    ? `<link rel="preconnect" href="https://fonts.googleapis.com">\n      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n      <link href="https://fonts.googleapis.com/css2?family=${config.googleFonts.join('&family=')}&display=swap" rel="stylesheet">\n      `
    : '';
  
  // 生成favicon链接
  const faviconHtml = config.favicon ? `<link rel="icon" href="${config.favicon}" type="image/svg+xml">\n      ` : '';
  
  return `
<!DOCTYPE html>
<html lang="${config.lang}">
<head>
  <meta charset="UTF-8">
  ${metaHtml}${faviconHtml}${googleFontsHtml}${stylesHtml}${scriptsHtml}
  ${config.inlineStyles ? `<style>${config.inlineStyles}</style>` : ''}
  <title>${config.title}</title>
</head>
<body>
  ${content}
  ${config.inlineScripts ? `<script>${config.inlineScripts}</script>` : ''}
</body>
</html>`;
};

/**
 * 生成响应式CSS样式
 * @param themeColors 主题颜色配置
 * @returns CSS样式字符串
 */
export const generateResponsiveStyles = (themeColors?: Record<string, string>): string => {
  const defaultColors = {
    primary: '#4F46E5',
    secondary: '#8B5CF6',
    accent: '#10B981',
    background: '#ffffff',
    text: '#1F2937',
    'text-secondary': '#4B5563',
    border: '#E5E7EB'
  };
  
  const colors = { ...defaultColors, ...themeColors };
  
  return `
:root {
  --primary-color: ${colors.primary};
  --secondary-color: ${colors.secondary};
  --accent-color: ${colors.accent};
  --background-color: ${colors.background};
  --text-color: ${colors.text};
  --text-secondary-color: ${colors['text-secondary']};
  --border-color: ${colors.border};
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --radius-sm: 0.25rem;
  --radius: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* 标题样式 */
h1, h2, h3, h4, h5, h6 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--primary-color);
}

h1 {
  font-size: 2.25rem;
  font-weight: 700;
}

h2 {
  font-size: 1.875rem;
}

h3 {
  font-size: 1.5rem;
}

@media (min-width: 640px) {
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2.25rem;
  }
  
  h3 {
    font-size: 1.875rem;
  }
}

/* 段落和文本样式 */
p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary-color);
}

strong {
  font-weight: 600;
  color: var(--text-color);
}

/* 链接样式 */
a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

/* 图片样式 */
img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius);
  display: block;
  margin: 2rem 0;
  box-shadow: var(--shadow-md);
}

/* 列表样式 */
ul, ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary-color);
}

/* 卡片样式 */
.card {
  background-color: var(--background-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* 按钮样式 */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border-radius: var(--radius);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  outline: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #4338ca;
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
}

.btn-secondary:hover {
  background-color: #7c3aed;
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

/* 布局辅助类 */
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-4 {
  gap: 1rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-8 {
  gap: 2rem;
}

/* 响应式网格 */
.grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 间距类 */
.mt-4 {
  margin-top: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pt-8 {
  padding-top: 2rem;
}

.pb-8 {
  padding-bottom: 2rem;
}`;
};

/**
 * 压缩HTML字符串
 * @param html 原始HTML字符串
 * @returns 压缩后的HTML字符串
 */
export const minifyHTML = (html: string): string => {
  // 移除注释
  let minified = html.replace(/<!--[^>]*-->/g, '');
  
  // 移除多余的空白字符
  minified = minified.replace(/\s+/g, ' ');
  
  // 移除行首和行尾的空白
  minified = minified.trim();
  
  // 移除HTML标签之间的空白
  minified = minified.replace(/\s+</g, '<');
  minified = minified.replace(/>\s+/g, '>');
  
  return minified;
};

/**
 * 美化HTML字符串（用于调试）
 * @param html 压缩的HTML字符串
 * @returns 格式化后的HTML字符串
 */
export const prettifyHTML = (html: string): string => {
  let tabLevel = 0;
  let result = '';
  let inTag = false;
  let inComment = false;
  let inScript = false;
  let inStyle = false;
  
  for (let i = 0; i < html.length; i++) {
    const char = html[i];
    const nextChar = html[i + 1] || '';
    
    // 处理注释
    if (char === '<' && nextChar === '!') {
      inComment = true;
    }
    
    if (char === '>' && html.substring(i - 2, i + 1) === '-->') {
      inComment = false;
    }
    
    // 处理script标签
    if (!inComment && char === '<' && html.substring(i, i + 7).toLowerCase() === '<script') {
      inScript = true;
    }
    
    if (!inComment && char === '<' && html.substring(i, i + 9).toLowerCase() === '</script>') {
      inScript = false;
    }
    
    // 处理style标签
    if (!inComment && char === '<' && html.substring(i, i + 6).toLowerCase() === '<style') {
      inStyle = true;
    }
    
    if (!inComment && char === '<' && html.substring(i, i + 8).toLowerCase() === '</style>') {
      inStyle = false;
    }
    
    // 不处理脚本和样式内容的格式化
    if (inScript || inStyle || inComment) {
      result += char;
      continue;
    }
    
    // 开始标签
    if (char === '<' && nextChar !== '/') {
      result += '\n' + '  '.repeat(tabLevel) + char;
      tabLevel++;
      inTag = true;
    }
    // 结束标签
    else if (char === '<' && nextChar === '/') {
      tabLevel--;
      result += '\n' + '  '.repeat(tabLevel) + char;
      inTag = true;
    }
    // 标签结束
    else if (char === '>') {
      result += char;
      inTag = false;
    }
    // 普通字符
    else {
      if (!inTag && char === ' ' && result[result.length - 1] === ' ') {
        // 跳过连续的空格
        continue;
      }
      result += char;
    }
  }
  
  // 移除多余的空行
  return result.replace(/\n\s*\n/g, '\n').trim();
};

/**
 * 提取HTML中的关键元素
 * @param html HTML字符串
 * @returns 包含标题、描述、图片等关键元素的对象
 */
export const extractHTMLMetadata = (html: string): Record<string, string | string[]> => {
  const metadata: Record<string, string | string[]> = {};
  
  // 提取标题
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  if (titleMatch && titleMatch[1]) {
    metadata.title = titleMatch[1].trim();
  }
  
  // 提取描述
  const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"/i);
  if (descMatch && descMatch[1]) {
    metadata.description = descMatch[1].trim();
  }
  
  // 提取图片
  const images: string[] = [];
  const imageRegex = /<img\s+[^>]*src="(.*?)"[^>]*>/gi;
  let imageMatch;
  while ((imageMatch = imageRegex.exec(html)) !== null) {
    if (imageMatch[1]) {
      images.push(imageMatch[1].trim());
    }
  }
  
  if (images.length > 0) {
    metadata.images = images;
  }
  
  // 提取链接
  const links: string[] = [];
  const linkRegex = /<a\s+[^>]*href="(.*?)"[^>]*>/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    if (linkMatch[1]) {
      links.push(linkMatch[1].trim());
    }
  }
  
  if (links.length > 0) {
    metadata.links = links;
  }
  
  return metadata;
};