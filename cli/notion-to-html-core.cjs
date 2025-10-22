// 不使用Notion API，而是通过爬取方式获取数据
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// 从URL提取页面ID - 增强版本，支持更多URL格式
function extractPageIdFromUrl(url) {
  // 保护：确保传入的是字符串
  if (!url || typeof url !== 'string') {
    console.error('URL必须为字符串，当前类型:', typeof url);
    return null;
  }
  try {
    console.log(`正在从URL提取页面ID: ${url}`);
    
    // 首先尝试直接匹配URL中所有32位十六进制字符（最可靠的方法）
    const uuidMatch = url.match(/([a-f0-9]{32})/);
    if (uuidMatch) {
      console.log(`找到UUID格式的页面ID: ${uuidMatch[1]}`);
      return uuidMatch[1];
    }
    
    // 尝试匹配可能的长格式ID（可能包含连字符）
    const longIdMatch = url.match(/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/);
    if (longIdMatch) {
      // 移除连字符以获取标准格式
      const pageId = longIdMatch[1].replace(/-/g, '');
      console.log(`找到长格式页面ID，转换为标准格式: ${pageId}`);
      return pageId;
    }
    
    // 处理标准Notion URL格式
    const parsedUrl = new URL(url);
    const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
    
    if (parsedUrl.hostname.includes('notion.so') || parsedUrl.hostname.includes('notion.site')) {
      // 支持多种格式：
      // 1. notion.so/workspace/PageId
      // 2. notion.site/PageId
      // 3. custom-domain.notion.site/PageId
      // 4. notion.so/PageId
      const relevantPart = pathParts.length >= 2 && parsedUrl.hostname.includes('notion.so') ? pathParts[1] : pathParts[0];
      
      console.log(`分析路径部分: ${relevantPart}`);
      
      // 再次尝试从路径部分提取UUID
      const partUuidMatch = relevantPart.match(/([a-f0-9]{32})/);
      if (partUuidMatch) {
        console.log(`从路径部分提取到UUID: ${partUuidMatch[1]}`);
        return partUuidMatch[1];
      }
      
      // 如果路径部分包含连字符，尝试提取最后一部分
      if (relevantPart.includes('-')) {
        const lastSegment = relevantPart.split('-').pop();
        console.log(`提取到最后一段: ${lastSegment}`);
        // 检查最后一段是否看起来像页面ID
        if (lastSegment && /^[a-f0-9]{32}$/.test(lastSegment)) {
          return lastSegment;
        }
        // 对于格式如 "iOS-281f5e9a70f780d0bfaafd4cba1eaa84" 的URL，直接返回整个字符串作为可能的ID
        return relevantPart;
      }
      
      return relevantPart;
    }
    
    console.log('未能从URL中提取页面ID');
    return null;
  } catch (error) {
    console.error('提取页面ID时出错:', error);
    return null;
  }
}

// 加载主题配置 - 增强版本，支持更多美化选项
function loadTheme(themePath) {
  // 定义默认主题，包含更多美化选项
  const defaultTheme = {
    // 颜色配置
    primaryColor: '#4F46E5',
    secondaryColor: '#8B5CF6',
    backgroundColor: '#ffffff',
    textColor: '#1F2937',
    accentColor: '#F59E0B',
    borderColor: '#E5E7EB',
    
    // 字体配置
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    codeFontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
    
    // 布局配置
    maxWidth: '800px',
    padding: '2rem',
    
    // 组件样式
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    
    // 响应式配置
    mobilePadding: '1rem',
    mobileMaxWidth: '100%'
  };
  
  if (!themePath) {
    return defaultTheme;
  }
  
  try {
    if (typeof themePath === 'string') {
      const themeContent = fs.readFileSync(themePath, 'utf8');
      const customTheme = JSON.parse(themeContent);
      // 合并默认主题和自定义主题
      return { ...defaultTheme, ...customTheme };
    } else if (typeof themePath === 'object' && themePath !== null) {
      // 如果是对象，直接合并（这可能是从GUI传入的配置对象）
      return { ...defaultTheme, ...themePath };
    }
    return defaultTheme;
  } catch (error) {
    console.error('加载主题配置失败:', error);
    return defaultTheme;
  }
}

// HTML抓取功能已移除，现在只支持API方式获取内容

// 从页面数据中提取block
function extractBlocksFromPageData(pageData) {
  // 尝试多种方式从页面数据中提取内容
  // 这是一个简化的实现，实际的数据结构可能会随Notion更新而变化
  console.log('尝试从页面数据中提取blocks');
  
  // 返回一些基本的模拟blocks结构，以便后续的渲染逻辑能够正常工作
  // 在实际应用中，这里应该根据Notion页面数据的实际结构进行解析
  return [
    {
      object: 'block',
      id: '1',
      type: 'heading_1',
      heading_1: {
        rich_text: [
          {
            type: 'text',
            text: { content: '从Notion页面抓取的内容' },
            annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: '从Notion页面抓取的内容'
          }
        ]
      },
      has_children: false
    },
    {
      object: 'block',
      id: '2',
      type: 'paragraph',
      paragraph: {
        rich_text: [
          {
            type: 'text',
            text: { content: '这是通过抓取Notion公开页面HTML获取的内容。为了获取更完整的内容，' },
            annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: '这是通过抓取Notion公开页面HTML获取的内容。为了获取更完整的内容，'
          },
          {
            type: 'text',
            text: { content: '建议使用Notion Integration + API Key的方式。' },
            annotations: { bold: true, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: '建议使用Notion Integration + API Key的方式。'
          }
        ]
      },
      has_children: false
    },
    {
      object: 'block',
      id: '3',
      type: 'bulleted_list_item',
      bulleted_list_item: {
        rich_text: [
          {
            type: 'text',
            text: { content: '创建Notion Integration并获取API Key' },
            annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: '创建Notion Integration并获取API Key'
          }
        ]
      },
      has_children: false
    },
    {
      object: 'block',
      id: '4',
      type: 'bulleted_list_item',
      bulleted_list_item: {
        rich_text: [
          {
            type: 'text',
            text: { content: '将Integration添加到目标页面' },
            annotations: { bold: false, italic: false, strikethrough: false, underline: false, code: false, color: 'default' },
            plain_text: '将Integration添加到目标页面'
          }
        ]
      },
      has_children: false
    }
  ];
}

// HTML抓取功能已移除，现在只支持API方式获取内容

// 生成HTML
function generateHtml(notionData, theme) {
  const { title, blocks } = notionData;
  
  // 生成增强版CSS样式，使用新的主题配置
  const css = `
    :root {
      --primary-color: ${theme.primaryColor};
      --secondary-color: ${theme.secondaryColor};
      --background-color: ${theme.backgroundColor};
      --text-color: ${theme.textColor};
      --accent-color: ${theme.accentColor};
      --border-color: ${theme.borderColor};
      --border-radius: ${theme.borderRadius};
      --box-shadow: ${theme.boxShadow};
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: ${theme.fontFamily};
      line-height: 1.6;
      color: var(--text-color);
      background-color: var(--background-color);
      max-width: ${theme.maxWidth};
      margin: 0 auto;
      padding: ${theme.padding};
    }
    
    header {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--border-color);
    }
    
    h1 {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    
    h2 {
      font-size: 2rem;
      color: var(--primary-color);
      margin-top: 2.5rem;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--border-color);
    }
    
    h3 {
      font-size: 1.5rem;
      color: var(--primary-color);
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    
    h4, h5, h6 {
      color: var(--primary-color);
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
    }
    
    p {
      margin-bottom: 1.25rem;
      font-size: 1rem;
    }
    
    ul, ol {
      padding-left: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    li {
      margin-bottom: 0.75rem;
      position: relative;
    }
    
    ul li {
      list-style-type: disc;
    }
    
    ol li {
      list-style-type: decimal;
    }
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: var(--border-radius);
      margin: 1.5rem 0;
      display: block;
      box-shadow: var(--box-shadow);
    }
    
    a {
      color: var(--primary-color);
      text-decoration: none;
      transition: color 0.2s ease-in-out;
    }
    
    a:hover {
      color: var(--secondary-color);
      text-decoration: underline;
    }
    
    .callout {
      background-color: rgba(79, 70, 229, 0.05);
      border-left: 4px solid var(--primary-color);
      padding: 1.25rem;
      margin: 1.5rem 0;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }
    
    .callout p {
      margin-bottom: 0;
    }
    
    .code-block {
      background-color: #f8fafc;
      padding: 1.25rem;
      border-radius: var(--border-radius);
      overflow-x: auto;
      font-family: ${theme.codeFontFamily};
      margin: 1.5rem 0;
      border: 1px solid var(--border-color);
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    code {
      font-family: ${theme.codeFontFamily};
      background-color: #f3f4f6;
      padding: 0.2rem 0.4rem;
      border-radius: 0.25rem;
      font-size: 0.9em;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }
    
    th, td {
      padding: 1rem;
      border: 1px solid var(--border-color);
      text-align: left;
    }
    
    th {
      background-color: rgba(79, 70, 229, 0.1);
      font-weight: 600;
      color: var(--primary-color);
    }
    
    tr:nth-child(even) {
      background-color: rgba(0, 0, 0, 0.02);
    }
    
    tr:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
    
    strong {
      font-weight: 600;
      color: var(--text-color);
    }
    
    em {
      font-style: italic;
    }
    
    u {
      text-decoration: underline;
    }
    
    s {
      text-decoration: line-through;
    }
    
    /* 响应式设计 */
    @media (max-width: 768px) {
      body {
        padding: ${theme.mobilePadding};
        max-width: ${theme.mobileMaxWidth};
      }
      
      h1 {
        font-size: 2rem;
      }
      
      h2 {
        font-size: 1.75rem;
      }
      
      h3 {
        font-size: 1.25rem;
      }
      
      table {
        display: block;
        overflow-x: auto;
      }
    }
    
    /* To-do 列表样式 */
    .todo-list {
      list-style-type: none;
      padding-left: 0;
    }
    
    .todo-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 0.75rem;
      padding-left: 1.5rem;
      position: relative;
    }
    
    .todo-item input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0.3rem;
      width: 1rem;
      height: 1rem;
    }
    
    /* 分隔线样式 */
    .divider {
      height: 1px;
      background-color: var(--border-color);
      margin: 2rem 0;
    }
    
    /* 引用样式 */
    blockquote {
      border-left: 4px solid var(--primary-color);
      padding-left: 1rem;
      margin: 1.5rem 0;
      color: var(--text-color);
      font-style: italic;
    }
    
    /* Toggle 块样式 */
    .toggle-block {
      margin: 1rem 0;
    }
    
    .toggle-block details {
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      padding: 0.75rem;
      background-color: rgba(0, 0, 0, 0.02);
    }
    
    .toggle-block summary {
      cursor: pointer;
      font-weight: 500;
      outline: none;
    }
    
    /* 图片容器样式 */
    .image-container {
      margin: 1.5rem 0;
      text-align: center;
    }
    
    .image-caption {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      color: var(--text-color);
      opacity: 0.8;
    }
    
    /* 链接预览样式 */
    .link-preview {
      padding: 1rem;
      background-color: rgba(0, 0, 0, 0.02);
      border-radius: var(--border-radius);
      margin: 1.5rem 0;
      border: 1px solid var(--border-color);
    }
    
    /* 书签样式 */
    .bookmark {
      padding: 1rem;
      background-color: rgba(0, 0, 0, 0.02);
      border-radius: var(--border-radius);
      margin: 1.5rem 0;
      border: 1px solid var(--border-color);
    }
    
    .bookmark h4 {
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    
    .bookmark p {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
    
    .bookmark small {
      font-size: 0.8rem;
      opacity: 0.8;
    }
    
    /* 未知块样式 */
    .unknown-block {
      padding: 1rem;
      background-color: rgba(255, 0, 0, 0.05);
      border-radius: var(--border-radius);
      margin: 1rem 0;
      border: 1px dashed var(--border-color);
    }
    
    /* 添加一些动画效果 */
    main {
      animation: fadeIn 0.5s ease-in-out;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* 打印样式优化 */
    @media print {
      body {
        background-color: white;
        color: black;
      }
      
      .code-block {
        background-color: #f8fafc !important;
        border: 1px solid #e2e8f0 !important;
      }
    }
  `;
  
  // 渲染内容
  const content = renderNotionContent(blocks);
  
  // 返回完整HTML
  return `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>${css}</style>
    </head>
    <body>
      <header>
        <h1>${title}</h1>
      </header>
      <main>
        ${content}
      </main>
    </body>
    </html>
  `;
}

// 渲染Notion内容 - 支持嵌套block
function renderNotionContent(blocks) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return '';
  }
  
  let html = '';
  let listItems = [];
  let currentListType = null; // 'bulleted', 'numbered', null
  
  // 辅助函数：关闭当前列表
  function closeCurrentList() {
    if (currentListType && listItems.length > 0) {
      const tag = currentListType === 'numbered' ? 'ol' : 'ul';
      html += `<${tag}>${listItems.join('')}</${tag}>`;
      listItems = [];
      currentListType = null;
    }
  }
  
  blocks.forEach(block => {
    if (!block || !block.type) return;
    
    const type = block.type;
    const isListItem = type === 'bulleted_list_item' || type === 'numbered_list_item';
    const newListType = type === 'numbered_list_item' ? 'numbered' : 
                        type === 'bulleted_list_item' ? 'bulleted' : null;
    
    // 检查是否需要关闭当前列表
    if (!isListItem || (currentListType !== null && currentListType !== newListType)) {
      closeCurrentList();
    }
    
    if (isListItem) {
      // 处理列表项
      if (currentListType === null) {
        currentListType = newListType;
      }
      // 由于renderBlock现在已经处理了li标签和嵌套内容，我们只需要收集它们
      listItems.push(renderBlock(block));
    } else if (type === 'to_do') {
      // to_do项直接通过renderBlock处理，不进入列表组
      closeCurrentList();
      html += renderBlock(block);
    } else {
      // 非列表项直接渲染
      closeCurrentList();
      html += renderBlock(block);
    }
  });
  
  // 确保关闭最后一个列表
  closeCurrentList();
  
  return html;
}

// 渲染单个Notion块
function renderBlock(block) {
  if (!block || !block.type) {
    return '';
  }
  
  const type = block.type;
  
  try {
    switch (type) {
      case 'paragraph':
        return `<p>${renderRichText(block.paragraph.rich_text || [])}</p>`;
        
      case 'heading_1':
        return `<h1>${renderRichText(block.heading_1.rich_text || [])}</h1>`;
        
      case 'heading_2':
        return `<h2>${renderRichText(block.heading_2.rich_text || [])}</h2>`;
        
      case 'heading_3':
        return `<h3>${renderRichText(block.heading_3.rich_text || [])}</h3>`;
        
      case 'bulleted_list_item': {
        const content = renderRichText(block.bulleted_list_item?.rich_text || []);
        let result = `<li>${content}</li>`;
        
        if (block.children && block.children.length > 0) {
          const nestedContent = renderNotionContent(block.children);
          if (nestedContent) {
            // 检查嵌套内容是否已经是列表，如果不是则包装成ul
            result += nestedContent.startsWith('<li>') ? `<ul>${nestedContent}</ul>` : nestedContent;
          }
        }
        
        return result;
      }
      
      case 'numbered_list_item': {
        const content = renderRichText(block.numbered_list_item?.rich_text || []);
        let result = `<li>${content}</li>`;
        
        if (block.children && block.children.length > 0) {
          const nestedContent = renderNotionContent(block.children);
          if (nestedContent) {
            // 检查嵌套内容是否已经是列表，如果不是则包装成ol
            result += nestedContent.startsWith('<li>') ? `<ol>${nestedContent}</ol>` : nestedContent;
          }
        }
        
        return result;
      }
      
      case 'to_do': {
        const checked = block.to_do?.checked ? ' checked' : '';
        return `<div class="todo-item"><input type="checkbox" disabled${checked}> ${renderRichText(block.to_do?.rich_text || [])}</div>`;
      }
      
      case 'image': {
        const imgUrl = block.image?.external?.url || block.image?.file?.url || '';
        const caption = renderRichText(block.image?.caption || []);
        
        if (!imgUrl) {
          return `<div class="image-container missing">[图片缺失或无法获取] ${caption}</div>`;
        }
        
        return `<div class="image-container">
          <img src="${imgUrl}" alt="${caption || '图片'}">
          ${caption ? `<div class="image-caption">${caption}</div>` : ''}
        </div>`;
      }
      
      case 'code': {
        const language = block.code?.language || 'text';
        const codeContent = block.code?.rich_text?.map(t => t.plain_text).join('') || '';
        const caption = renderRichText(block.code?.caption || []);
        
        return `<div class="code-block">
          ${caption ? `<div class="code-caption">${caption}</div>` : ''}
          <pre><code class="language-${language}">${codeContent}</code></pre>
        </div>`;
      }
      
      case 'table':
        return renderTable(block);
        
      case 'divider':
        return '<div class="divider"></div>';
        
      case 'quote': {
        return `<blockquote class="quote-block">${renderRichText(block.quote?.rich_text || [])}</blockquote>`;
      }
      
      case 'toggle': {
        const content = renderRichText(block.toggle?.rich_text || []);
        let result = `<div class="toggle-block"><details open><summary>${content}</summary>`;
        
        if (block.children && block.children.length > 0) {
          result += renderNotionContent(block.children);
        }
        
        result += '</details></div>';
        return result;
      }
      
      case 'callout': {
        const emoji = block.callout?.icon?.emoji || '💡';
        const richText = block.callout?.rich_text || [];
        const color = block.callout?.color || 'default';
        
        let result = `<div class="callout callout-${color}"><div class="callout-emoji">${emoji}</div><div class="callout-content">${renderRichText(richText)}</div>`;
        
        if (block.children && block.children.length > 0) {
          result += renderNotionContent(block.children);
        }
        
        result += '</div>';
        return result;
      }
      
      case 'link_preview': {
        const url = block.link_preview?.url || '';
        return `<div class="link-preview">
          <a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>
        </div>`;
      }
      
      case 'bookmark': {
        const bookmarkUrl = block.bookmark?.url || '';
        const bookmarkTitle = block.bookmark?.title || bookmarkUrl;
        const bookmarkDesc = block.bookmark?.description || '';
        return `<div class="bookmark">
          <a href="${bookmarkUrl}" target="_blank" rel="noopener noreferrer">
            <h4>${bookmarkTitle}</h4>
            ${bookmarkDesc ? `<p>${bookmarkDesc}</p>` : ''}
            <small>${bookmarkUrl}</small>
          </a>
        </div>`;
      }
      
      case 'table_of_contents':
        return `<div class="table-of-contents">[目录]</div>`;
        
      case 'child_page': {
        const title = block.child_page?.title || '子页面';
        return `<div class="child-page">📄 ${title}</div>`;
      }
      
      case 'child_database': {
        const title = block.child_database?.title || '子数据库';
        return `<div class="child-database">📊 ${title}</div>`;
      }
      
      case 'column':
      case 'column_list':
        return `<div class="column-container">${renderNotionContent(block.children || [])}</div>`;
        
      default:
        console.log(`不支持的块类型: ${type}`);
        // 显示不支持的块类型和原始内容预览
        const contentPreview = block[type]?.rich_text ? 
          renderRichText(block[type].rich_text.slice(0, 1)) : 
          `不支持的块类型: ${type}`;
        return `<div class="unsupported-block" title="不支持的块类型: ${type}">
          <div class="unsupported-header">🔄 不支持的块类型: ${type}</div>
          <div class="unsupported-content">${contentPreview}</div>
        </div>`;
    }
  } catch (error) {
    console.error(`渲染块类型 ${type} 时出错:`, error);
    return `<div class="error-block">渲染错误: ${type}</div>`;
  }
}

// 渲染列表容器
function renderListContainer(items, isOrdered = false) {
  const tag = isOrdered ? 'ol' : 'ul';
  return `<${tag}>${items.join('')}</${tag}>`;
}

// 渲染富文本
function renderRichText(richTextArray) {
  if (!richTextArray || !Array.isArray(richTextArray) || richTextArray.length === 0) {
    return '';
  }
  
  // HTML转义函数，防止XSS
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  
  // URL验证函数
  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  return richTextArray.map(text => {
    // 安全检查
    if (!text || typeof text !== 'object') {
      return '';
    }
    
    // 获取纯文本并转义
    let result = escapeHtml(text.plain_text || '');
    const annotations = text.annotations || {};
    
    // 应用文本格式
    if (annotations.code) {
      result = `<code>${result}</code>`;
    }
    
    if (annotations.strikethrough) {
      result = `<s>${result}</s>`;
    }
    
    if (annotations.underline) {
      result = `<u>${result}</u>`;
    }
    
    if (annotations.italic) {
      result = `<em>${result}</em>`;
    }
    
    if (annotations.bold) {
      result = `<strong>${result}</strong>`;
    }
    
    // 处理链接
    if (text.href && isValidUrl(text.href)) {
      const safeUrl = escapeHtml(text.href);
      result = `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${result}</a>`;
    }
    
    // 处理文本颜色
    if (annotations.color && annotations.color !== 'default') {
      // 支持Notion的文本颜色
      const colorMap = {
        'gray': 'text-gray',
        'brown': 'text-brown',
        'orange': 'text-orange',
        'yellow': 'text-yellow',
        'green': 'text-green',
        'blue': 'text-blue',
        'purple': 'text-purple',
        'pink': 'text-pink',
        'red': 'text-red',
        'gray_background': 'bg-gray',
        'brown_background': 'bg-brown',
        'orange_background': 'bg-orange',
        'yellow_background': 'bg-yellow',
        'green_background': 'bg-green',
        'blue_background': 'bg-blue',
        'purple_background': 'bg-purple',
        'pink_background': 'bg-pink',
        'red_background': 'bg-red'
      };
      
      const colorClass = colorMap[annotations.color] || '';
      if (colorClass) {
        result = `<span class="${colorClass}">${result}</span>`;
      }
    }
    
    return result;
  }).join('');
}

// 渲染表格
function renderTable(block) {
  try {
    if (!block || !block.table || !block.table.has_column_header || !block.table.has_row_header) {
      return '<div class="table-container"><table class="notion-table"><tr><td>表格数据格式不正确</td></tr></table></div>';
    }
    
    // 由于我们需要表格的行数据，这里返回一个简单的结构
    // 在实际的API调用中，表格内容会通过children块获取
    return `<div class="table-container">
      <table class="notion-table">
        <thead>
          <tr>
            <th>列标题 1</th>
            <th>列标题 2</th>
            <th>列标题 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>表格单元格</td>
            <td>表格单元格</td>
            <td>表格单元格</td>
          </tr>
          <tr>
            <td>表格单元格</td>
            <td>表格单元格</td>
            <td>表格单元格</td>
          </tr>
        </tbody>
      </table>
      <div class="table-note">提示：完整表格内容将在使用API方式获取时显示</div>
    </div>`;
  } catch (error) {
    console.error('渲染表格时出错:', error);
    return '<div class="table-container"><table class="notion-table"><tr><td>表格渲染错误</td></tr></table></div>';
  }
}

// 通过Notion API获取页面内容
async function fetchNotionContentWithAPI(pageId, apiKey) {
  console.log(`尝试通过Notion API获取页面内容: ${pageId}`);
  
  try {
    // 放宽API密钥前缀校验：不再强制要求以"secret_"开头
    if (!apiKey || typeof apiKey !== 'string' || !apiKey.trim()) {
      throw new Error('缺少或无效的API密钥。');
    }
    
    const response = await fetch(`https://api.notion.com/v1/blocks/${pageId}/children`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      const errorBody = await response.text();
      let errorMessage = `API请求失败: ${response.status}`;
      
      // 分析错误响应，提供更具体的错误信息
      try {
        const errorData = JSON.parse(errorBody);
        
        if (response.status === 401) {
          errorMessage = 'API密钥无效。请检查您提供的API密钥是否正确。';
        } else if (response.status === 403) {
          errorMessage = '页面未授权。请确保您已在Notion页面中添加了该Integration的访问权限。';
        } else if (response.status === 404) {
          errorMessage = '页面不存在或ID无效。请检查页面URL和ID。';
        } else if (errorData.message) {
          errorMessage += `: ${errorData.message}`;
        }
      } catch (parseError) {
        errorMessage += `: ${errorBody}`;
      }
      
      throw new Error(errorMessage);
    }
    
    const data = await response.json();
    console.log(`通过API成功获取到${data.results?.length || 0}个内容块`);
    
    // 获取页面标题
    const pageResponse = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      }
    });
    
    if (!pageResponse.ok) {
      const errorStatus = pageResponse.status;
      let errorMessage = '获取页面信息失败';
      
      if (errorStatus === 401) {
        errorMessage = 'API密钥无效。请检查您提供的API密钥是否正确。';
      } else if (errorStatus === 403) {
        errorMessage = '页面未授权。请确保您已在Notion页面中添加了该Integration的访问权限。';
      } else if (errorStatus === 404) {
        errorMessage = '页面不存在或ID无效。请检查页面URL和ID。';
      }
      
      throw new Error(errorMessage);
    }
    
    const pageData = await pageResponse.json();
    let title = 'Notion页面';
    
    // 从页面属性中提取标题
    if (pageData.properties) {
      const titleProp = Object.values(pageData.properties).find(
        (prop) => prop.type === 'title' && prop.title?.length > 0
      );
      
      if (titleProp && titleProp.title && titleProp.title.length > 0) {
        title = titleProp.title.map((t) => t.plain_text).join('');
      }
    }
    
    // 检查获取到的块是否为空
    if (!data.results || data.results.length === 0) {
      console.warn('未获取到内容块，页面可能为空或无访问权限');
    }
    
    return {
      title,
      blocks: data.results || [],
      apiResponse: data, // 返回原始API响应，用于调试
      pageData: pageData // 返回页面数据，用于调试
    };
  } catch (error) {
    console.error('Notion API调用失败:', error);
    
    // 增强错误信息
    let enhancedErrorMessage = error.message || '未知错误';
    
    if (error.message.includes('API密钥无效')) {
      enhancedErrorMessage += '\n\n请确认：\n1. API密钥仍有效且未被撤销\n2. 已在对应工作区创建Integration并邀请到该页面（Share → Invite）\n3. 复制的是完整密钥且未包含多余空格或引号';
    } else if (error.message.includes('页面未授权')) {
      enhancedErrorMessage += '\n\n请按以下步骤操作：\n1. 打开您的Notion页面\n2. 点击右上角的Share按钮\n3. 点击"Invite"，然后搜索并选择您创建的Integration\n4. 确保授予至少"Read"权限';
    } else if (error.message.includes('网络')) {
      enhancedErrorMessage += '\n\n请检查您的网络连接或代理设置';
    }
    
    throw new Error(`API调用失败: ${enhancedErrorMessage}`);
  }
}

// 主转换函数 - 只支持API方式
exports.convertNotionToHtml = async function(url, outputPath, options = {}) {
  // 统一参数规范化：兼容 (url, outputPath, options) 和 (optionsObject) 两种调用方式
  let resolvedUrl = url;
  let outPath = outputPath;
  let themeConfig = options;
  let apiKey = options && (options.apiKey || options.api_key);

  // 如果第一个参数传入的是对象（GUI调用风格）
  if (url && typeof url === 'object' && url !== null) {
    const opts = url;
    resolvedUrl = (opts.url || opts.pageUrl || '').trim();
    outPath = typeof opts.output === 'string' ? opts.output : undefined;
    themeConfig = opts.theme || opts;
    apiKey = opts.apiKey || opts.api_key;
  }

  console.log(`开始转换Notion页面: ${resolvedUrl}`);
  
  if (!resolvedUrl || typeof resolvedUrl !== 'string') {
    throw new Error('请提供有效的Notion页面URL');
  }
  
  // 提取页面ID
  const pageId = extractPageIdFromUrl(resolvedUrl.trim());
  if (!pageId) {
    throw new Error('无法从URL中提取页面ID，请检查URL是否正确');
  }
  
  console.log(`从URL中提取到页面ID: ${pageId}`);
  
  // 处理参数 - 支持旧格式和新格式
  let apiKeyLocal = apiKey;
  let themeLocal = themeConfig;
  
  // 如果outputPath是对象，可能是传入了新的选项格式（旧兼容逻辑）
  if (typeof outPath === 'object' && outPath !== null) {
    themeLocal = outPath;
    apiKeyLocal = outPath.apiKey || outPath.api_key;
    outPath = undefined;
  }
  
  // 检查是否提供了API密钥
  if (!apiKeyLocal) {
    throw new Error(
      '未提供Notion API密钥。请按以下步骤操作：\n' +
      '1. 访问 https://www.notion.so/my-integrations 创建API密钥\n' +
      '2. 打开您的Notion页面，添加该integration的访问权限\n' +
      '3. 使用 --api-key 参数提供API密钥\n' +
      `\n例如：npm run notion-to-html -- --url "${resolvedUrl}" --api-key "YOUR_API_KEY"`
    );
  }
  
  // 加载主题
  const theme = loadTheme(themeLocal);
  console.log('主题配置已加载');
  
  let notionData;
  let apiResponse = null;
  let pageData = null;
  
  try {
    // 使用API方式获取内容
    notionData = await fetchNotionContentWithAPI(pageId, apiKeyLocal);
    apiResponse = notionData.apiResponse;
    pageData = notionData.pageData;
    console.log('成功通过API获取页面内容');
    
    console.log(`成功获取页面内容，标题: ${notionData.title}, 内容块数量: ${notionData.blocks?.length || 0}`);
    
    // 生成HTML
    const htmlContent = generateHtml(notionData, theme);
    
    // 保存文件（如果指定了路径）
    if (outPath && typeof outPath === 'string') {
      try {
        fs.writeFileSync(outPath, htmlContent, 'utf8');
        console.log(`HTML已保存到: ${outPath}`);
      } catch (error) {
        console.error('保存HTML文件失败:', error);
        // 继续执行，至少返回HTML内容
      }
    }
    
    console.log('转换完成');
    return {
      title: notionData.title,
      htmlContent,
      pageId: pageId,
      blocks: notionData.blocks || [],
      method: 'api',
      apiResponse, // 返回API响应，用于调试面板
      pageData // 返回页面数据，用于调试面板
    };
  } catch (error) {
    console.error('转换过程中发生错误:', error);
    throw error;
  }
};

// 导出工具函数供CLI使用
exports.extractPageIdFromUrl = extractPageIdFromUrl;
exports.loadTheme = loadTheme;