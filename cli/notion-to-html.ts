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