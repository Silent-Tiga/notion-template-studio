// Cloudflare Workers 示例 - Notion2Web API

// 导入必要的库 (需要在 wrangler.toml 中配置 external 依赖)
// import { Client } from '@notionhq/client';

// 由于Cloudflare Workers的限制，我们使用fetch API直接调用Notion API
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * 处理所有传入请求
 * @param {Request} request - 传入的HTTP请求
 * @returns {Promise<Response>} - HTTP响应
 */
async function handleRequest(request) {
  // 设置CORS头
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  // 处理OPTIONS请求（CORS预检）
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // 路由处理
  const url = new URL(request.url);
  const path = url.pathname;

  // 获取Notion页面内容的端点
  if (path === '/api/notion-content' && request.method === 'POST') {
    return handleNotionContentRequest(request, corsHeaders);
  }

  // 生成HTML的端点
  if (path === '/api/generate-html' && request.method === 'POST') {
    return handleGenerateHtmlRequest(request, corsHeaders);
  }

  // 处理未知路径
  return new Response('Not found', {
    status: 404,
    headers: { ...corsHeaders, 'Content-Type': 'text/plain' }
  });
}

/**
 * 处理获取Notion内容的请求
 * @param {Request} request - HTTP请求
 * @param {Object} corsHeaders - CORS头信息
 * @returns {Promise<Response>} - HTTP响应
 */
async function handleNotionContentRequest(request, corsHeaders) {
  try {
    const { pageId } = await request.json();
    
    if (!pageId) {
      return new Response('Missing pageId', {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // 从环境变量获取Notion API密钥
    // 注意：在实际的Cloudflare Workers环境中，环境变量应通过事件参数的env对象访问，如：event.env.NOTION_API_KEY
    // 这里只是示例，实际使用时需要根据Cloudflare Workers的API进行调整
    const notionApiKey = ''; // 示例值，实际应从环境变量中获取
    
    if (!notionApiKey) {
      throw new Error('Notion API key is not configured');
    }

    // 调用Notion API获取页面内容
    const notionResponse = await fetch(
      `https://api.notion.com/v1/pages/${pageId}?archived=false`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${notionApiKey}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json'
        }
      }
    );

    if (!notionResponse.ok) {
      throw new Error(`Notion API error: ${notionResponse.statusText}`);
    }

    const pageData = await notionResponse.json();
    
    // 获取页面内容（块）
    const blocksResponse = await fetch(
      `https://api.notion.com/v1/blocks/${pageId}/children`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${notionApiKey}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json'
        }
      }
    );

    if (!blocksResponse.ok) {
      throw new Error(`Notion blocks API error: ${blocksResponse.statusText}`);
    }

    const blocksData = await blocksResponse.json();
    
    // 构建返回的数据结构
    const notionContent = {
      title: extractTitleFromPageData(pageData),
      content: blocksData.results,
      coverImage: extractCoverImage(pageData),
      icon: extractIcon(pageData)
    };

    return new Response(JSON.stringify(notionContent), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching Notion content:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

/**
 * 处理生成HTML的请求
 * @param {Request} request - HTTP请求
 * @param {Object} corsHeaders - CORS头信息
 * @returns {Promise<Response>} - HTTP响应
 */
async function handleGenerateHtmlRequest(request, corsHeaders) {
  try {
    const { notionContent, theme } = await request.json();
    
    if (!notionContent) {
      return new Response('Missing notionContent', {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // 生成HTML内容
    const htmlContent = generateHtmlFromNotionContent(notionContent, theme);
    
    return new Response(JSON.stringify({ htmlContent }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error generating HTML:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

/**
 * 从Notion页面数据中提取标题
 * @param {Object} pageData - Notion API返回的页面数据
 * @returns {string} - 页面标题
 */
function extractTitleFromPageData(pageData) {
  // Notion页面标题通常在properties.title中
  if (pageData.properties?.title?.title?.length > 0) {
    return pageData.properties.title.title.map(t => t.plain_text).join('');
  }
  return 'Untitled Page';
}

/**
 * 从Notion页面数据中提取封面图片
 * @param {Object} pageData - Notion API返回的页面数据
 * @returns {string|null} - 封面图片URL或null
 */
function extractCoverImage(pageData) {
  if (pageData.cover?.external?.url) {
    return pageData.cover.external.url;
  }
  if (pageData.cover?.file?.url) {
    return pageData.cover.file.url;
  }
  return null;
}

/**
 * 从Notion页面数据中提取图标
 * @param {Object} pageData - Notion API返回的页面数据
 * @returns {string|null} - 图标URL或null
 */
function extractIcon(pageData) {
  if (pageData.icon?.emoji) {
    return pageData.icon.emoji;
  }
  if (pageData.icon?.external?.url) {
    return pageData.icon.external.url;
  }
  if (pageData.icon?.file?.url) {
    return pageData.icon.file.url;
  }
  return null;
}

/**
 * 从Notion内容生成HTML
 * @param {Object} notionContent - Notion内容数据
 * @param {Object} theme - 主题配置
 * @returns {string} - 生成的HTML字符串
 */
function generateHtmlFromNotionContent(notionContent, theme = {}) {
  // 设置默认主题
  const defaultTheme = {
    primaryColor: '#4F46E5',
    secondaryColor: '#8B5CF6',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '16px',
    backgroundColor: '#ffffff',
    textColor: '#1F2937',
    accentColor: '#10B981'
  };
  
  const selectedTheme = { ...defaultTheme, ...theme };
  
  // 构建HTML模板
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${notionContent.title || 'Notion 转换页面'}</title>
  <style>
    :root {
      --primary-color: ${selectedTheme.primaryColor};
      --secondary-color: ${selectedTheme.secondaryColor};
      --font-family: ${selectedTheme.fontFamily};
      --font-size: ${selectedTheme.fontSize};
      --background-color: ${selectedTheme.backgroundColor};
      --text-color: ${selectedTheme.textColor};
      --accent-color: ${selectedTheme.accentColor};
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
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    h1, h2, h3, h4, h5, h6 {
      color: var(--primary-color);
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    
    h1 {
      font-size: 2.5rem;
      text-align: center;
      margin-top: 1rem;
    }
    
    p {
      margin-bottom: 1.5rem;
    }
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 1.5rem 0;
    }
    
    ul, ol {
      margin-left: 2rem;
      margin-bottom: 1.5rem;
    }
    
    blockquote {
      border-left: 4px solid var(--accent-color);
      padding-left: 1rem;
      margin: 1.5rem 0;
      font-style: italic;
      color: #666;
    }
    
    .cover-image {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 2rem;
    }
    
    .footer {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid #eee;
      text-align: center;
      color: #666;
      font-size: 0.9rem;
    }
    
    .powered-by {
      color: var(--secondary-color);
      text-decoration: none;
    }
  </style>
</head>
<body>
  ${notionContent.coverImage ? `<img src="${notionContent.coverImage}" alt="Cover" class="cover-image">` : ''}
  <h1>${notionContent.title || 'Notion 转换页面'}</h1>
  
  <!-- 这里可以添加更多内容渲染逻辑 -->
  <div class="content">
    <!-- 简化版的内容渲染，实际应用中需要根据Notion内容类型进行更复杂的渲染 -->
    <p>这是由Notion2Web转换工具生成的网页。实际应用中，这里会显示您Notion页面的所有内容。</p>
  </div>
  
  <div class="footer">
    <p>由 <a href="https://your-website.com" class="powered-by" target="_blank">Notion2Web</a> 提供支持</p>
  </div>
</body>
</html>`;
}