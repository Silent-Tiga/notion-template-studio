The following is a snapshot of a Git repository, rendered as a plain-text “dump” for use by a language model. It is structured in three parts:

1. **Table of Contents:**
   A numbered list of every file included, in the order they appear below.

2. **File Sections:**
   Each file is prefixed by:

   ----[N]
   <relative/path/to/file>

   where `N` is the file’s index (matching the ToC). After that line comes the file’s contents (or, if it’s binary or too large, a brief metadata/truncation marker).

3. **End Marker:**
   A final line containing `--END--` indicates the end of the repository snapshot. Any text that follows should be treated as instructions or queries about this repository.

Use this entire dump as context when answering questions. For example, you can reference specific files by their ToC number or path, inspect code snippets, identify configuration values, and so on.

---

Table of Contents:
1. README.md
2. notion-to-html.ts
3. notion-to-html-core.cjs
4. electron-wrapper.cjs
5. electron-preload.cjs
6. electron-main.cjs
7. themes\default.json
8. gui\index.html

----[1]
README.md
# Notion到HTML转换工具

一个简单高效的工具，支持命令行和图形界面两种方式，用于将Notion页面一键转换为精美的HTML文件。

## 功能特点

- 支持命令行和图形界面两种操作方式
- 支持通过URL或页面ID转换Notion页面
- 自定义主题配置（颜色、字体等）
- 完整支持Notion常见块类型（段落、标题、列表、图片等）
- 响应式设计，适配各种设备
- 支持通过Notion API获取内容

## 安装

在项目根目录执行以下命令安装依赖：

```bash
npm install
```

## 使用方法

### 图形界面方式（推荐）

启动图形界面：

```bash
npm run gui
```

图形界面提供了直观的操作方式：
- 输入Notion页面URL
- 输入Notion API密钥
- 自定义主题颜色
- 点击转换按钮
- 预览并保存HTML文件

### 命令行方式

通过URL转换Notion页面：

```bash
npm run notion-to-html -- --url "https://www.notion.so/workspace/Page-Title-1234567890abcdef1234567890abcdef"
```

通过页面ID转换：

```bash
npm run notion-to-html -- --id "1234567890abcdef1234567890abcdef"
```

### 高级选项

指定输出文件路径：

```bash
npm run notion-to-html -- --url "https://www.notion.so/page-url" --output "output/my-page.html"
```

提供Notion API密钥：

```bash
npm run notion-to-html -- --url "https://www.notion.so/page-url" --api-key "your-notion-api-key"
```

使用自定义主题：

```bash
npm run notion-to-html -- --url "https://www.notion.so/page-url" --theme "cli/themes/my-theme.json"
```

尝试使用公共API（无需密钥，但功能可能受限）：

```bash
npm run notion-to-html -- --url "https://www.notion.so/page-url" --no-api
```

## 配置

### API密钥配置

您可以通过以下方式提供Notion API密钥：

1. 使用`--api-key`参数直接指定
2. 在项目根目录创建`.env`文件，添加以下内容：
   ```
   NOTION_API_KEY=your-notion-api-key
   ```

### 主题配置

您可以创建自定义主题JSON文件，包含以下配置项：

```json
{
  "primaryColor": "#4F46E5",
  "secondaryColor": "#8B5CF6",
  "backgroundColor": "#ffffff",
  "textColor": "#1F2937",
  "fontFamily": "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  "fontSize": "16px",
  "accentColor": "#10B981"
}
```

示例主题文件已提供在`cli/themes/`目录下。

## 支持的块类型

- 段落 (paragraph)
- 标题 (heading_1, heading_2, heading_3)
- 项目符号列表 (bulleted_list_item)
- 编号列表 (numbered_list_item)
- 引用 (quote)
- 代码块 (code)
- 图片 (image)
- 分隔线 (divider)
- 切换块 (toggle)
- 提示框 (callout)
- 表格 (table) - 简化支持

## 注意事项

1. 使用Notion API需要您的页面已分享或您有适当的访问权限
2. 公共API模式（`--no-api`）功能有限，建议优先使用API密钥方式
3. 部分复杂块类型可能无法完全正确渲染

## 示例

### 使用默认设置转换页面

```bash
npm run cli -- --url "https://www.notion.so/Example-Page-1234567890abcdef"
```

### 使用自定义主题和输出路径

```bash
npm run cli -- --url "https://www.notion.so/Example-Page-1234567890abcdef" --theme "cli/themes/default.json" --output "export/my-page.html"
```

## 后续开发计划

- 完善公共API模式
- 支持更多块类型
- 添加资源下载功能（图片等）
- 支持批量转换
- 添加ZIP打包功能
----[2]
notion-to-html.ts
#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
// 导入Notion客户端
import { Client } from '@notionhq/client';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 导入核心转换模块
const { convertNotionToHtml, loadTheme, extractPageId } = require('./notion-to-html-core');

// 解析命令行参数
program
  .version('1.0.0')
  .description('Notion页面转HTML命令行工具')
  .option('-u, --url <url>', 'Notion页面URL')
  .option('-i, --id <id>', 'Notion页面ID')
  .option('-o, --output <path>', '输出HTML文件路径', 'notion-output.html')
  .option('-k, --api-key <key>', 'Notion API密钥，如果不提供则尝试从.env文件读取')
  .option('--theme <theme>', '主题配置文件路径（JSON格式）')
  .option('--no-api', '使用公共API获取（无需API密钥，但可能受限）')
  .option('-g, --gui', '启动图形界面')
  .parse(process.argv);

const options = program.opts();

// 启动GUI界面
function startGui() {
  try {
    console.log('正在启动图形界面...');
    const electronPath = require.resolve('electron');
    const mainProcessPath = path.join(__dirname, 'electron-main.js');
    
    const guiProcess = spawn(electronPath, [mainProcessPath], {
      stdio: 'inherit'
    });
    
    guiProcess.on('error', (err) => {
      console.error('启动图形界面失败:', err);
      console.log('请确保已安装Electron: npm install electron --save-dev');
    });
    
    guiProcess.on('close', (code) => {
      console.log(`图形界面已关闭，退出代码: ${code}`);
    });
  } catch (error) {
    console.error('启动图形界面时发生错误:', error);
    console.log('请确保已安装Electron: npm install electron --save-dev');
  }
}

// 从URL提取页面ID - 直接使用从notion-to-html-core导入的函数

// 从.env文件加载API密钥
function loadApiKey(): string | null {
  try {
    const envPath = path.join(__dirname, '..', '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf-8');
      const match = envContent.match(/NOTION_API_KEY=(.+)/);
      return match ? match[1].trim() : null;
    }
    return null;
  } catch (error) {
    console.error('读取.env文件失败:', error);
    return null;
  }
}

// 定义主题接口
interface ThemeOptions {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily?: string;
  fontSize?: string;
  accentColor?: string;
}

// 使用从notion-to-html-core导入的loadTheme函数来加载主题配置
function loadThemeConfig(themePath?: string): ThemeOptions {
  return loadTheme(themePath);
}

// 使用Notion API获取页面内容
async function fetchNotionContent(pageId: string, apiKey: string): Promise<{ title: string; blocks: any[] }> {
  const notion = new Client({ auth: apiKey });
  
  try {
    // 获取页面元数据
    const pageResponse = await notion.pages.retrieve({ page_id: pageId });
    const title = extractTitleFromPage(pageResponse);
    
    // 获取页面内容块
    const blocksResponse = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100
    });
    
    // 递归获取所有嵌套块
    const blocks = await fetchAllBlocks(notion, blocksResponse.results);
    
    return { title, blocks };
  } catch (error) {
    console.error('获取Notion内容失败:', error);
    throw error;
  }
}

// 从页面数据中提取标题
function extractTitleFromPage(pageData: any): string {
  try {
    if (pageData.properties && pageData.properties.title && pageData.properties.title.title) {
      return pageData.properties.title.title
        .map((item: any) => item.plain_text)
        .join('');
    }
    return 'Notion 页面';
  } catch (error) {
    return 'Notion 页面';
  }
}

// 定义Notion块的接口，使用兼容Notion API返回结构的定义
type NotionBlock = {
  id: string;
  type: string;
  has_children: boolean;
  children?: NotionBlock[];
  [key: string]: any;
};

// 递归获取所有嵌套块
async function fetchAllBlocks(notion: any, blocks: any[]): Promise<any[]> {
  const enrichedBlocks: any[] = [];
  
  for (const block of blocks) {
    if (block.has_children) {
      const childrenResponse = await notion.blocks.children.list({
        block_id: block.id
      });
      block.children = await fetchAllBlocks(notion, childrenResponse.results);
    }
    enrichedBlocks.push(block);
  }
  
  return enrichedBlocks;
}

// 简单的块渲染函数
function renderBlock(block: any): string {
  switch (block.type) {
    case 'paragraph':
      const richText = block.paragraph.rich_text || [];
      return `<p>${renderRichText(richText)}</p>`;
    
    case 'heading_1':
      return `<h1>${renderRichText(block.heading_1.rich_text)}</h1>`;
    
    case 'heading_2':
      return `<h2>${renderRichText(block.heading_2.rich_text)}</h2>`;
    
    case 'heading_3':
      return `<h3>${renderRichText(block.heading_3.rich_text)}</h3>`;
    
    case 'bulleted_list_item':
      const bulletContent = renderRichText(block.bulleted_list_item.rich_text);
      const bulletChildren = block.children ? block.children.map((child: any) => renderBlock(child)).join('') : '';
      return `<li>${bulletContent}${bulletChildren}</li>`;
    
    case 'numbered_list_item':
      const numberContent = renderRichText(block.numbered_list_item.rich_text);
      const numberChildren = block.children ? block.children.map((child: any) => renderBlock(child)).join('') : '';
      return `<li>${numberContent}${numberChildren}</li>`;
    
    case 'callout':
      const icon = block.callout.icon ? `<span class="callout-icon">${block.callout.icon.emoji || '📌'}</span>` : '';
      return `<div class="callout">${icon}${renderRichText(block.callout.rich_text)}</div>`;
    
    case 'quote':
      return `<blockquote>${renderRichText(block.quote.rich_text)}</blockquote>`;
    
    case 'code':
      const language = block.code.language || '';
      return `<pre><code class="language-${language}">${renderRichText(block.code.rich_text)}</code></pre>`;
    
    case 'image':
      const imageUrl = block.image.external?.url || block.image.file?.url || '';
      const caption = block.image.caption ? renderRichText(block.image.caption) : '';
      return `<figure><img src="${imageUrl}" alt="${caption || 'Image'}"><figcaption>${caption}</figcaption></figure>`;
    
    case 'divider':
      return '<hr>';
    
    case 'toggle':
      const toggleContent = renderRichText(block.toggle.rich_text);
      const toggleChildren = block.children ? block.children.map((child: any) => renderBlock(child)).join('') : '';
      return `<details><summary>${toggleContent}</summary>${toggleChildren}</details>`;
    
    case 'table':
      // 简化的表格渲染
      return '<div class="table-container">表格内容</div>';
    
    default:
      return `<div class="unknown-block">[不支持的块类型: ${block.type}]</div>`;
  }
}

// 渲染富文本内容
function renderRichText(richTexts: any[]): string {
  return richTexts.map((text) => {
    let content = text.plain_text || '';
    const annotations = text.annotations || {};
    
    if (annotations.bold) content = `<strong>${content}</strong>`;
    if (annotations.italic) content = `<em>${content}</em>`;
    if (annotations.strikethrough) content = `<s>${content}</s>`;
    if (annotations.underline) content = `<u>${content}</u>`;
    if (annotations.code) content = `<code>${content}</code>`;
    
    if (text.href) content = `<a href="${text.href}" target="_blank" rel="noopener noreferrer">${content}</a>`;
    
    return content;
  }).join('');
}

// 渲染Notion内容为HTML
function renderNotionContent(blocks: any[]): string {
  let html = '';
  let currentListType: string | null = null;
  let listHtml = '';
  
  blocks.forEach((block) => {
    if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
      if (currentListType === null) {
        currentListType = block.type;
        listHtml = renderBlock(block);
      } else if (currentListType === block.type) {
        listHtml += renderBlock(block);
      } else {
        // 不同类型的列表，先关闭当前列表
        const listTag = currentListType === 'bulleted_list_item' ? 'ul' : 'ol';
        html += `<${listTag}>${listHtml}</${listTag}>`;
        currentListType = block.type;
        listHtml = renderBlock(block);
      }
    } else {
      // 非列表项，先关闭当前列表
      if (currentListType !== null) {
        const listTag = currentListType === 'bulleted_list_item' ? 'ul' : 'ol';
        html += `<${listTag}>${listHtml}</${listTag}>`;
        currentListType = null;
        listHtml = '';
      }
      html += renderBlock(block);
    }
  });
  
  // 关闭最后一个列表
  if (currentListType !== null) {
    const listTag = currentListType === 'bulleted_list_item' ? 'ul' : 'ol';
    html += `<${listTag}>${listHtml}</${listTag}>`;
  }
  
  return html;
}

// 生成完整的HTML
function generateHtml(notionData: { title: string; blocks: any[] }, theme: ThemeOptions): string {
  const content = renderNotionContent(notionData.blocks);
  
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${notionData.title}</title>
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
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: var(--font-family);
      font-size: var(--font-size);
      color: var(--text-color);
      background-color: var(--background-color);
      line-height: 1.6;
      padding: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    h1, h2, h3 {
      color: var(--primary-color);
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }
    
    h1 {
      font-size: 2.5em;
    }
    
    h2 {
      font-size: 2em;
    }
    
    h3 {
      font-size: 1.5em;
    }
    
    p {
      margin-bottom: 1em;
    }
    
    ul, ol {
      margin-left: 1.5em;
      margin-bottom: 1em;
    }
    
    li {
      margin-bottom: 0.5em;
    }
    
    blockquote {
      border-left: 4px solid var(--accent-color);
      padding-left: 1em;
      margin-left: 0;
      margin-bottom: 1em;
      font-style: italic;
      color: #666;
    }
    
    pre, code {
      font-family: 'Consolas', 'Monaco', monospace;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    
    pre {
      padding: 1em;
      overflow-x: auto;
      margin-bottom: 1em;
    }
    
    code {
      padding: 0.2em 0.4em;
    }
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin-bottom: 1em;
    }
    
    .callout {
      padding: 1em;
      border-radius: 4px;
      background-color: #f9f9f9;
      border-left: 4px solid var(--secondary-color);
      margin-bottom: 1em;
      display: flex;
      align-items: flex-start;
    }
    
    .callout-icon {
      margin-right: 0.5em;
      font-size: 1.2em;
    }
    
    hr {
      border: none;
      border-top: 1px solid #eee;
      margin: 2em 0;
    }
    
    details {
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 0.5em;
      margin-bottom: 1em;
    }
    
    summary {
      cursor: pointer;
      font-weight: bold;
    }
    
    a {
      color: var(--primary-color);
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    @media (max-width: 768px) {
      body {
        padding: 10px;
      }
      
      h1 {
        font-size: 2em;
      }
      
      h2 {
        font-size: 1.5em;
      }
      
      h3 {
        font-size: 1.2em;
      }
    }
  </style>
</head>
<body>
  <div class="notion-content">
    ${content}
  </div>
</body>
</html>`;
}

// 主函数
async function main() {
  try {
    // 获取页面ID
    let pageId = options.id;
    if (!pageId && options.url) {
      pageId = extractPageId(options.url);
      if (!pageId) {
        console.error('错误: 无法从URL中提取Notion页面ID');
        process.exit(1);
      }
    }
    
    if (!pageId) {
      console.error('错误: 必须提供Notion页面URL或页面ID');
      program.help();
      process.exit(1);
    }
    
    console.log(`正在处理Notion页面 (ID: ${pageId})...`);
    
    // 加载API密钥
    let apiKey = options.apiKey || loadApiKey();
    
    if (!options.noApi && !apiKey) {
      console.error('错误: 未找到Notion API密钥。请使用--api-key参数提供密钥或在.env文件中设置NOTION_API_KEY');
      console.log('或者使用 --no-api 参数尝试使用公共API获取（可能受限）');
      process.exit(1);
    }
    
    // 加载主题配置
    const theme = loadThemeConfig(options.theme);
    
    let notionData;
    
    if (options.noApi) {
      // 使用公共API获取（简化实现）
      console.log('使用公共API获取页面内容...');
      // 这里简化处理，实际项目中可以实现公共API调用
      throw new Error('公共API模式尚未完全实现');
    } else {
      // 使用Notion API获取内容
      console.log('使用Notion API获取页面内容...');
      notionData = await fetchNotionContent(pageId, apiKey);
    }
    
    console.log(`成功获取页面: ${notionData.title}`);
    
    // 生成HTML
    console.log('生成HTML...');
    const html = generateHtml(notionData, theme);
    
    // 确保输出目录存在
    const outputDir = path.dirname(options.output);
    if (outputDir && outputDir !== '.') {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // 保存HTML文件
    fs.writeFileSync(options.output, html, 'utf-8');
    
    console.log(`✅ HTML文件已成功生成: ${path.resolve(options.output)}`);
    
  } catch (error) {
    console.error('❌ 转换失败:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

// 如果指定了GUI选项，启动图形界面
if (options.gui) {
  startGui();
}

// 运行主函数
if (!options.gui) {
  main();
}
----[3]
notion-to-html-core.cjs
// 不使用Notion API，而是通过爬取方式获取数据
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// 从URL提取页面ID - 增强版本，支持更多URL格式
function extractPageIdFromUrl(url) {
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
      enhancedErrorMessage += '\n\n请确认：\n1. API密钥格式正确（应以"secret_"开头）\n2. 您已在https://www.notion.so/my-integrations创建了有效的Integration\n3. 您复制的是完整的API密钥';
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
  console.log(`开始转换Notion页面: ${url}`);
  
  if (!url) {
    throw new Error('请提供有效的Notion页面URL');
  }
  
  // 提取页面ID
  const pageId = extractPageIdFromUrl(url);
  if (!pageId) {
    throw new Error('无法从URL中提取页面ID，请检查URL是否正确');
  }
  
  console.log(`从URL中提取到页面ID: ${pageId}`);
  
  // 处理参数 - 支持旧格式和新格式
  let themeConfig = options;
  let apiKey = options.apiKey || options.api_key;
  
  // 如果outputPath是对象，可能是传入了新的选项格式
  if (typeof outputPath === 'object' && outputPath !== null) {
    themeConfig = outputPath;
    apiKey = outputPath.apiKey || outputPath.api_key;
    outputPath = undefined;
  }
  
  // 检查是否提供了API密钥
  if (!apiKey) {
    throw new Error(
      '未提供Notion API密钥。请按以下步骤操作：\n' +
      '1. 访问 https://www.notion.so/my-integrations 创建API密钥\n' +
      '2. 打开您的Notion页面，添加该integration的访问权限\n' +
      '3. 使用 --api-key 参数提供API密钥\n' +
      '\n例如：npm run notion-to-html -- --url "' + url + '" --api-key "YOUR_API_KEY"'
    );
  }
  
  // 加载主题
  const theme = loadTheme(themeConfig);
  console.log('主题配置已加载');
  
  let notionData;
  let apiResponse = null;
  let pageData = null;
  
  try {
    // 使用API方式获取内容
    notionData = await fetchNotionContentWithAPI(pageId, apiKey);
    apiResponse = notionData.apiResponse;
    pageData = notionData.pageData;
    console.log('成功通过API获取页面内容');
    
    console.log(`成功获取页面内容，标题: ${notionData.title}, 内容块数量: ${notionData.blocks?.length || 0}`);
    
    // 生成HTML
    const htmlContent = generateHtml(notionData, theme);
    
    // 保存文件（如果指定了路径）
    if (outputPath && typeof outputPath === 'string') {
      try {
        fs.writeFileSync(outputPath, htmlContent, 'utf8');
        console.log(`HTML已保存到: ${outputPath}`);
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
----[4]
electron-wrapper.cjs
#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

// 直接启动Electron主进程
function startElectron() {
  try {
    console.log('正在启动图形界面...');
    
    // Electron主进程路径
    const mainProcessPath = path.join(__dirname, 'electron-main.cjs');
    
    console.log(`主进程文件: ${mainProcessPath}`);
    
    // 使用npx electron来启动，避免路径问题
    const electronProcess = spawn('npx', ['electron', mainProcessPath], {
      stdio: 'inherit',
      shell: true // 在Windows上使用shell
    });
    
    electronProcess.on('error', (err) => {
      console.error('启动Electron失败:', err);
    });
    
    electronProcess.on('close', (code) => {
      console.log(`Electron已关闭，退出代码: ${code}`);
    });
    
  } catch (error) {
    console.error('启动图形界面时发生错误:', error);
  }
}

// 运行启动函数
startElectron();
----[5]
electron-preload.cjs
const { contextBridge, ipcRenderer } = require('electron');

// 向渲染进程暴露安全的IPC通道
contextBridge.exposeInMainWorld('electronAPI', {
  // 转换Notion页面
  convertNotion: (params) => ipcRenderer.invoke('convert-notion', params),
  // 保存HTML文件
  saveHtml: (params) => ipcRenderer.invoke('save-html', params)
});
----[6]
electron-main.cjs
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

// 导入现有的CLI转换逻辑
const { convertNotionToHtml, extractPageIdFromUrl } = require('./notion-to-html-core.cjs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'electron-preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // 加载GUI界面
  mainWindow.loadFile(path.join(__dirname, 'gui', 'index.html'));

  // 打开开发者工具
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 处理Notion到HTML的转换
ipcMain.handle('convert-notion', async (event, { url, themeConfig, apiKey }) => {
  try {
    console.log('开始转换Notion页面:', { url, themeConfig });
    
    // 从URL提取页面ID
    const pageId = extractPageIdFromUrl(url);
    
    if (!pageId) {
      throw new Error('无法从URL中提取有效的Notion页面ID。请确保URL格式正确，例如：https://www.notion.so/My-Page-8e2579d089d34b6aa02822a4353e8654');
    }
    
    console.log('提取到的页面ID:', pageId);
    
    // 构建选项对象 - 确保包含所有必要的参数
    const options = {
      url: url,
      apiKey: apiKey?.trim() || '',
      theme: themeConfig
    };
    
    // 如果提供了API密钥，添加到选项中
    if (apiKey && apiKey.trim()) {
      console.log('使用Notion API密钥进行转换');
    } else {
      console.log('使用HTML抓取方式进行转换（未提供API密钥）');
      console.log('正在通过公开方式获取页面内容...');
    }
    
    // 执行转换
    const result = await convertNotionToHtml(options);
    
    console.log('转换成功，HTML长度:', result.html ? result.html.length : 'N/A');
    
    return {
      success: true,
      ...result,
      method: apiKey ? 'api' : 'html',
      blocksCount: result.blocks?.length || 0
    };
  } catch (error) {
    console.error('转换过程中发生错误:', error);
    
    // 增强错误信息
    let errorMessage = error.message;
    
    // 检查是否是API相关错误
    if (errorMessage.includes('获取Notion内容失败') || 
        errorMessage.includes('Notion API error') ||
        errorMessage.includes('访问被拒绝')) {
      if (apiKey) {
        errorMessage += '\n\nAPI密钥可能无效或没有访问此页面的权限。\n请检查API密钥是否正确，以及该密钥是否有权限访问指定的Notion页面。';
      } else {
        errorMessage += '\n\n重要提示：当不使用API密钥时，本工具仅支持公开的Notion页面。\n请确保您的页面已设置为公开共享，或者提供有效的Notion API密钥。';
      }
    }
    
    return { success: false, error: errorMessage };
  }
});

// 监听保存文件请求
ipcMain.handle('save-html', async (event, { content, defaultPath }) => {
  try {
    const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, {
      defaultPath: defaultPath || 'notion-output.html',
      filters: [
        { name: 'HTML Files', extensions: ['html'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    });

    if (!canceled && filePath) {
      fs.writeFileSync(filePath, content);
      return { success: true, filePath };
    }
    return { success: false };
  } catch (error) {
    console.error('保存文件失败:', error);
    return { success: false, error: error.message };
  }
});

// 应用生命周期
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
----[7]
themes\default.json
{
  "primaryColor": "#4F46E5",
  "secondaryColor": "#8B5CF6",
  "backgroundColor": "#ffffff",
  "textColor": "#1F2937",
  "fontFamily": "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  "fontSize": "16px",
  "accentColor": "#10B981"
}
----[8]
gui\index.html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notion到HTML转换器</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
      padding: 20px;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    
    .header {
      background: linear-gradient(135deg, #4F46E5, #8B5CF6);
      color: white;
      padding: 20px;
      text-align: center;
    }
    
    .header h1 {
      font-size: 1.8rem;
      margin-bottom: 5px;
    }
    
    .header p {
      opacity: 0.9;
      font-size: 0.9rem;
    }
    
    .content {
      padding: 25px;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #555;
    }
    
    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s;
    }
    
    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
      outline: none;
      border-color: #4F46E5;
      box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 100px;
      font-family: inherit;
    }
    
    .button {
      background-color: #4F46E5;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s;
      width: 100%;
    }
    
    .button:hover {
      background-color: #4338CA;
    }
    
    .button:disabled {
      background-color: #a5b4fc;
      cursor: not-allowed;
    }

    /* 响应式调整 */
    @media (max-width: 768px) {
      .form-group {
        margin-bottom: 20px;
      }

      .action-buttons {
        flex-direction: column;
      }

      .action-buttons button {
        margin-bottom: 10px;
        width: 100%;
      }
    }
    
    .theme-section {
      background-color: #f9fafb;
      padding: 20px;
      border-radius: 6px;
      margin-bottom: 20px;
    }
    
    .theme-colors {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      margin-top: 15px;
    }
    
    .color-input {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .color-input input[type="color"] {
      width: 40px;
      height: 30px;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .color-input input[type="text"] {
      flex: 1;
      width: auto;
    }
    
    .status {
      margin-top: 20px;
      padding: 15px;
      border-radius: 4px;
      font-size: 14px;
    }
    
    .status.success {
      background-color: #dcfce7;
      color: #166534;
      border: 1px solid #bbf7d0;
    }
    
    .status.error {
      background-color: #fee2e2;
      color: #991b1b;
      border: 1px solid #fecaca;
    }
    
    .status.loading {
      background-color: #dbeafe;
      color: #1e40af;
      border: 1px solid #bfdbfe;
    }
    
    /* 预览区域样式 */
    .preview-section {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .preview-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    
    .preview-title {
      margin: 0;
      color: #333;
    }
    
    .preview-actions {
      display: flex;
      gap: 10px;
    }
    
    .preview-content {
      background-color: #fafafa;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      height: 400px;
      overflow-y: auto;
      padding: 10px;
    }
    
    .preview-content iframe {
      width: 100%;
      height: 100%;
      border: none;
      background-color: white;
    }
    
    /* 调试信息面板样式 */
    .debug-section {
      margin-top: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      overflow: hidden;
    }
    
    .debug-header {
      background-color: #f5f5f5;
      padding: 12px 16px;
      cursor: pointer;
      user-select: none;
      font-weight: 500;
      color: #555;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .debug-header:hover {
      background-color: #eeeeee;
    }
    
    .debug-content {
      display: none;
      background-color: #fafafa;
    }
    
    .debug-tabs {
      display: flex;
      background-color: #f0f0f0;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .debug-tab {
      padding: 10px 16px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 14px;
      color: #666;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;
    }
    
    .debug-tab:hover {
      background-color: #e8e8e8;
      color: #333;
    }
    
    .debug-tab.active {
      color: #007bff;
      border-bottom-color: #007bff;
      background-color: #fafafa;
    }
    
    .debug-body {
      max-height: 300px;
      overflow-y: auto;
    }
    
    .debug-panel {
      padding: 16px;
      display: none;
    }
    
    .debug-panel.active {
      display: block;
    }
    
    .debug-panel pre {
      margin: 0;
      background-color: #1e1e1e;
      color: #d4d4d4;
      padding: 12px;
      border-radius: 4px;
      overflow-x: auto;
      font-family: 'Courier New', Courier, monospace;
      font-size: 13px;
    }
    
    .action-buttons {
      display: flex;
      gap: 10px;
      margin-top: 15px;
    }
    
    .action-buttons .button {
      flex: 1;
    }
    
    .save-button {
      background-color: #10b981;
    }
    
    .save-button:hover {
      background-color: #059669;
    }
    
    .theme-options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-top: 10px;
    }

    .info-box {
      background-color: #e3f2fd;
      border-left: 4px solid #1976d2;
      padding: 10px 15px;
      margin: 15px 0;
      border-radius: 4px;
    }

    .required {
      color: #ef4444;
      font-weight: bold;
    }

    .optional {
      color: #6b7280;
      font-weight: normal;
      font-size: 0.85em;
    }

    .help-text {
      display: block;
      margin-top: 5px;
      font-size: 0.85rem;
      color: #666;
    }

    .loading-indicator {
      display: none;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 3px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      border-top-color: #4F46E5;
      animation: spin 1s ease-in-out infinite;
      margin-right: 10px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .option-input {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }
    
    .option-input input[type="checkbox"] {
      width: auto;
      margin: 0;
      cursor: pointer;
    }
    
    .option-input label {
      margin: 0;
      font-weight: normal;
      font-size: 0.9rem;
      cursor: pointer;
    }
    
    #customThemeSection {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
    }
    
    #customThemeSection.show {
      max-height: 300px;
    }
    
    @media (max-width: 600px) {
      .theme-colors {
        grid-template-columns: 1fr;
      }
      
      .action-buttons {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Notion到HTML转换器</h1>
      <p>简单、高效的Notion页面一键转换工具</p>
      <div class="info-box">
        <strong>提示：</strong>本工具仅支持<strong>公开</strong>的Notion页面。请确保您的页面已设置为公开共享。
      </div>
    </div>
    
    <div class="content">
      <div class="form-group">
        <label for="notionUrl">Notion页面URL <span class="required">*</span></label>
        <input 
          type="text" 
          id="notionUrl" 
          placeholder="https://www.notion.so/your-page-url"
          required
        >
        <small class="hint">确保页面已公开：在Notion中点击Share → Copy link → Anyone with the link can view</small>
      </div>
      
      <!-- API密钥输入区域 - 可选，但推荐使用以获取更完整内容 -->
        <div class="form-group">
          <label for="apiKey">Notion API密钥 <span class="optional">（推荐）</span></label>
          <input 
            type="password" 
            id="apiKey" 
            placeholder="secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            title="使用API密钥可以获取更完整的页面内容">
          <small class="hint">
            使用API可以获取更完整的页面内容和样式
          </small>
        </div>
      
      <div class="theme-section">
        <h3>美化设置</h3>
        
        <div class="form-group">
          <label>预设主题</label>
          <select id="presetTheme" class="form-group input">
            <option value="light">明亮主题</option>
            <option value="dark">暗黑主题</option>
            <option value="soft">柔和主题</option>
            <option value="modern">现代主题</option>
            <option value="custom">自定义...</option>
          </select>
        </div>
        
        <div id="customThemeSection">
          <h4 style="margin-top: 15px; margin-bottom: 10px; font-size: 0.9rem; color: #666;">自定义颜色</h4>
          <div class="theme-colors">
            <div class="color-input">
              <input type="color" id="primaryColor" value="#4F46E5">
              <input type="text" id="primaryColorText" value="#4F46E5">
              <label>主色调</label>
            </div>
            <div class="color-input">
              <input type="color" id="secondaryColor" value="#8B5CF6">
              <input type="text" id="secondaryColorText" value="#8B5CF6">
              <label>次要色调</label>
            </div>
            <div class="color-input">
              <input type="color" id="backgroundColor" value="#ffffff">
              <input type="text" id="backgroundColorText" value="#ffffff">
              <label>背景色</label>
            </div>
            <div class="color-input">
              <input type="color" id="textColor" value="#1F2937">
              <input type="text" id="textColorText" value="#1F2937">
              <label>文字色</label>
            </div>
          </div>
        </div>
        
        <h4 style="margin-top: 20px; margin-bottom: 10px; font-size: 0.9rem; color: #666;">美化选项</h4>
        <div class="theme-options">
          <div class="option-input">
            <input type="checkbox" id="enableShadows" checked>
            <label for="enableShadows">启用阴影效果</label>
          </div>
          <div class="option-input">
            <input type="checkbox" id="enableAnimations" checked>
            <label for="enableAnimations">启用动画效果</label>
          </div>
          <div class="option-input">
            <input type="checkbox" id="enableResponsive" checked>
            <label for="enableResponsive">响应式设计</label>
          </div>
          <div class="option-input">
            <input type="checkbox" id="enablePrintStyles" checked>
            <label for="enablePrintStyles">优化打印样式</label>
          </div>
        </div>
      </div>
      
      <button id="convertButton" class="button">开始转换</button>
      <div class="loading-indicator" id="loading">
        <div class="spinner"></div>
        <span>正在转换中...</span>
      </div>
      
      <div id="status" class="status error-box" style="display: none;"></div>
      
      <div id="previewSection" class="preview-section" style="display: none;">
        <div class="preview-header">
          <h3 class="preview-title">转换结果预览</h3>
          <div class="preview-actions">
            <button id="openNewTab" class="button" style="width: auto; padding: 6px 12px; font-size: 14px;">在新标签页打开</button>
          </div>
        </div>
        <div id="previewContent" class="preview-content"></div>
        
        <!-- 调试信息面板 -->
        <div class="debug-section">
          <div class="debug-header" id="debugToggle">
            <span>调试信息 ▼</span>
          </div>
          <div class="debug-content" id="debugContent">
            <div class="debug-tabs">
              <button class="debug-tab active" data-tab="api-response">API 响应</button>
              <button class="debug-tab" data-tab="page-data">页面数据</button>
              <button class="debug-tab" data-tab="error-info">错误信息</button>
            </div>
            <div class="debug-body">
              <div id="apiResponseContent" class="debug-panel active">
                <pre><code>等待转换...</code></pre>
              </div>
              <div id="pageDataContent" class="debug-panel">
                <pre><code>等待转换...</code></pre>
              </div>
              <div id="errorInfoContent" class="debug-panel">
                <pre><code>暂无错误</code></pre>
              </div>
            </div>
          </div>
        </div>
        
        <div class="action-buttons">
          <button id="saveButton" class="button save-button">保存为HTML文件</button>
          <button id="newConvertButton" class="button">新建转换</button>
        </div>
      </div>
    </div>
  </div>
  
  <script>
    // 颜色选择器同步
    document.querySelectorAll('input[type="color"]').forEach(colorInput => {
      const textInput = document.getElementById(colorInput.id + 'Text');
      colorInput.addEventListener('input', () => {
        textInput.value = colorInput.value;
      });
      textInput.addEventListener('input', () => {
        // 简单验证颜色格式
        if (/^#[0-9A-F]{6}$/i.test(textInput.value)) {
          colorInput.value = textInput.value;
        }
      });
    });
    
    // 预设主题配置
    const presetThemes = {
      light: {
        primaryColor: '#4F46E5',
        secondaryColor: '#8B5CF6',
        backgroundColor: '#ffffff',
        textColor: '#1F2937'
      },
      dark: {
        primaryColor: '#6366F1',
        secondaryColor: '#A78BFA',
        backgroundColor: '#111827',
        textColor: '#F9FAFB'
      },
      soft: {
        primaryColor: '#818CF8',
        secondaryColor: '#C084FC',
        backgroundColor: '#F9FAFB',
        textColor: '#4B5563'
      },
      modern: {
        primaryColor: '#3B82F6',
        secondaryColor: '#8B5CF6',
        backgroundColor: '#ffffff',
        textColor: '#111827'
      }
    };
    
    // 监听主题预设选择
    document.getElementById('presetTheme').addEventListener('change', (e) => {
      const themeName = e.target.value;
      const customSection = document.getElementById('customThemeSection');
      
      if (themeName === 'custom') {
        customSection.classList.add('show');
      } else {
        customSection.classList.remove('show');
        const theme = presetThemes[themeName];
        if (theme) {
          document.getElementById('primaryColor').value = theme.primaryColor;
          document.getElementById('primaryColorText').value = theme.primaryColor;
          document.getElementById('secondaryColor').value = theme.secondaryColor;
          document.getElementById('secondaryColorText').value = theme.secondaryColor;
          document.getElementById('backgroundColor').value = theme.backgroundColor;
          document.getElementById('backgroundColorText').value = theme.backgroundColor;
          document.getElementById('textColor').value = theme.textColor;
          document.getElementById('textColorText').value = theme.textColor;
        }
      }
    });
    
    // 获取主题设置
    function getThemeConfig() {
      return {
        primaryColor: document.getElementById('primaryColor').value,
        secondaryColor: document.getElementById('secondaryColor').value,
        backgroundColor: document.getElementById('backgroundColor').value,
        textColor: document.getElementById('textColor').value,
        enableShadows: document.getElementById('enableShadows').checked,
        enableAnimations: document.getElementById('enableAnimations').checked,
        enableResponsive: document.getElementById('enableResponsive').checked,
        enablePrintStyles: document.getElementById('enablePrintStyles').checked
      };
    }
    
    // 显示状态消息
    function showStatus(message, type = 'loading') {
      const statusElement = document.getElementById('status');
      statusElement.textContent = message;
      statusElement.className = `status ${type}`;
      statusElement.style.display = 'block';
    }
    
    // 隐藏状态消息
    function hideStatus() {
      document.getElementById('status').style.display = 'none';
    }
    
    // 显示预览
    function showPreview(htmlContent) {
      const previewSection = document.getElementById('previewSection');
      const previewContent = document.getElementById('previewContent');
      
      // 创建一个沙箱iframe来显示HTML
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '300px';
      iframe.style.border = 'none';
      
      previewContent.innerHTML = '';
      previewContent.appendChild(iframe);
      
      // 写入HTML内容到iframe
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(htmlContent);
      iframeDoc.close();
      
      previewSection.style.display = 'block';
    }
    
    // 处理转换按钮点击
    document.getElementById('convertButton').addEventListener('click', async () => {
      const notionUrl = document.getElementById('notionUrl').value.trim();
      
      if (!notionUrl) {
        showStatus('请输入Notion页面URL', 'error');
        return;
      }
      
      // 显示加载状态
      const convertButton = document.getElementById('convertButton');
      const loadingIndicator = document.getElementById('loading');
      convertButton.disabled = true;
      convertButton.textContent = '正在转换...';
      loadingIndicator.style.display = 'flex';
      
      // 隐藏之前的结果
      hideStatus();
      document.getElementById('previewSection').style.display = 'none';
      
      // 清空调试面板
      updateDebugPanel('api-response', '加载中...');
      updateDebugPanel('page-data', '加载中...');
      updateDebugPanel('error-info', '暂无错误');
      
      try {
        // 获取API密钥（可选）
        const apiKey = document.getElementById('apiKey')?.value || '';
        
        const result = await window.electronAPI.convertNotion({
          url: notionUrl,
          themeConfig: getThemeConfig(),
          apiKey: apiKey
        });
        
        // 更新调试面板 - API响应
        updateDebugPanel('api-response', JSON.stringify({
          success: result.success,
          method: result.method || 'unknown',
          status: result.success ? 'success' : 'error'
        }, null, 2));
        
        // 更新调试面板 - 页面数据
        if (result.pageData) {
          updateDebugPanel('page-data', JSON.stringify(result.pageData, null, 2));
        }
        
        if (result.success) {
          // 显示成功消息，包含使用的方法信息
          const methodInfo = result.method === 'api' ? '（使用API方式）' : '（使用HTML抓取方式）';
          showStatus(`转换成功！${methodInfo}`, 'success');
          
          // 如果是HTML抓取方式，提供使用API的建议
          if (result.method === 'html') {
            setTimeout(() => {
              showStatus('提示：使用Notion API密钥可以获取更完整的页面内容', 'info');
            }, 1500);
          }
          
          showPreview(result.htmlContent);
        } else {
          const errorMessage = result.error || '未知错误';
          showStatus(`转换失败: ${errorMessage}`, 'error');
          updateDebugPanel('error-info', errorMessage);
        }
      } catch (error) {
        console.error('转换错误:', error);
        const errorMessage = `转换发生错误: ${error.message || '发生未知错误'}`;
        showStatus(errorMessage, 'error');
        updateDebugPanel('error-info', errorMessage + '\n\n' + (error.stack || ''));
      } finally {
        // 恢复按钮状态
        convertButton.disabled = false;
        convertButton.textContent = '开始转换';
        loadingIndicator.style.display = 'none';
      }
    });
    
    // 新标签页打开预览
    document.getElementById('openNewTab').addEventListener('click', () => {
      const iframe = document.querySelector('#previewContent iframe');
      if (iframe) {
        const htmlContent = iframe.contentDocument.documentElement.outerHTML;
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      }
    });
    
    // 调试面板切换
    document.querySelectorAll('.debug-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        // 移除所有活动状态
        document.querySelectorAll('.debug-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.debug-panel').forEach(p => p.classList.remove('active'));
        
        // 添加当前活动状态
        tab.classList.add('active');
        const panelId = tab.getAttribute('data-tab') + 'Content';
        document.getElementById(panelId).classList.add('active');
      });
    });
    
    // 调试面板折叠/展开
    document.getElementById('debugToggle').addEventListener('click', () => {
      const content = document.getElementById('debugContent');
      const span = document.querySelector('#debugToggle span');
      
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        span.textContent = '调试信息 ▲';
      } else {
        content.style.display = 'none';
        span.textContent = '调试信息 ▼';
      }
    });
    
    // 更新调试面板内容
    function updateDebugPanel(panelId, content) {
      const elementId = panelId + 'Content';
      const panel = document.getElementById(elementId);
      if (panel) {
        panel.querySelector('code').textContent = content;
      }
    }
    
    // 处理保存按钮点击
    document.getElementById('saveButton').addEventListener('click', async () => {
      const iframe = document.querySelector('#previewContent iframe');
      if (!iframe) return;
      
      const htmlContent = iframe.contentDocument.documentElement.outerHTML;
      const title = iframe.contentDocument.title;
      
      try {
        const result = await window.electronAPI.saveHtml({
          content: htmlContent,
          defaultPath: `${title.replace(/[^\w\s.-]/g, '_')}.html`
        });
        
        if (result.success) {
          showStatus(`文件已保存至: ${result.filePath}`, 'success');
        }
      } catch (error) {
        showStatus(`保存失败: ${error.message}`, 'error');
      }
    });
    
    // 处理新建转换按钮
    document.getElementById('newConvertButton').addEventListener('click', () => {
      document.getElementById('notionUrl').value = '';
      document.getElementById('previewSection').style.display = 'none';
      hideStatus();
      document.getElementById('notionUrl').focus();
    });
    
    // 初始化
    document.getElementById('notionUrl').focus();
  </script>
</body>
</html>
--END--
