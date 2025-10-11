// Notion API 服务

/**
 * 从环境变量获取后端API URL
 */
const getBackendApiUrl = (): string => {
  return import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:8787';
};

/**
 * 从Notion链接中提取页面ID
 * @param notionLink Notion页面链接
 * @returns 提取的页面ID或null
 */
export const extractPageId = (notionLink: string): string | null => {
  try {
    // 匹配常见的Notion链接格式
    const regex = /([a-zA-Z0-9]{32}|[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})/;
    const match = notionLink.match(regex);
    
    // 如果没有匹配到ID，但包含'example-page'，返回一个示例ID
    if (!match && notionLink.includes('example-page')) {
      return 'example-page-id';
    }
    
    return match ? match[1] : null;
  } catch (error) {
    console.error('Error extracting Notion page ID:', error);
    return null;
  }
};

/**
 * Notion内容数据结构
 */
export interface NotionContent {
  title: string;
  content: Array<{
    id: string;
    type: 'heading' | 'paragraph' | 'image' | 'list' | 'table' | 'callout' | 'quote';
    content: string;
    properties?: Record<string, any>;
  }>;
  coverImage?: string;
  icon?: string;
}

/**
 * 获取Notion页面内容
 * @param pageId Notion页面ID
 * @returns Promise<NotionContent> Notion内容数据
 */
export const fetchNotionContent = async (pageId: string): Promise<NotionContent> => {
  try {
    // 如果是示例页面ID，返回模拟数据以便快速演示
    if (pageId === 'example-page-id') {
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        title: "Notion 示例页面",
        coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        content: [
          {
            id: '1',
            type: 'heading',
            content: '欢迎使用 AI Notion 转换工具'
          },
          {
            id: '2',
            type: 'paragraph',
            content: '这是一个示例 Notion 页面内容。通过我们的工具，您可以将 Notion 文档转换为精美的响应式网站，无需任何编码知识。'
          },
          {
            id: '3',
            type: 'image',
            content: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          },
          {
            id: '4',
            type: 'heading',
            content: '主要特性'
          },
          {
            id: '5',
            type: 'list',
            content: '快速转换：几秒钟内完成转换过程'
          },
          {
            id: '6',
            type: 'list',
            content: '完全响应式：适配各种设备屏幕'
          },
          {
            id: '7',
            type: 'list',
            content: 'AI优化：智能生成SEO友好的内容'
          },
          {
            id: '8',
            type: 'callout',
            content: '提示：确保您的Notion页面已设置为公开访问。'
          }
        ]
      };
    }

    // 调用Cloudflare Workers后端API
    const apiUrl = getBackendApiUrl();
    const response = await fetch(`${apiUrl}/api/notion-content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pageId }),
    });

    if (!response.ok) {
      throw new Error(`API请求失败: ${response.statusText}`);
    }

    const data = await response.json();
    
    // 检查是否有错误信息
    if (data.error) {
      throw new Error(data.error);
    }

    // 转换API返回的数据格式以匹配NotionContent接口
    // 注意：实际应用中需要根据Cloudflare Worker返回的具体数据格式进行调整
    return {
      title: data.title || 'Notion 页面',
      coverImage: data.coverImage,
      icon: data.icon,
      content: data.content || []
    };
  } catch (error) {
    console.error('Error fetching Notion content:', error);
    throw new Error('获取Notion内容失败，请检查页面ID是否正确且页面已公开。\n' + error.message);
  }
};

/**
 * 检查Notion页面是否公开
 * @param pageId Notion页面ID
 * @returns Promise<boolean> 是否公开
 */
export const isNotionPagePublic = async (_pageId: string): Promise<boolean> => {
  try {
    // 模拟检查页面是否公开
    await new Promise(resolve => setTimeout(resolve, 500));
    return true; // 默认为公开，实际应用中应调用Notion API检查
  } catch (error) {
    console.error('Error checking Notion page visibility:', error);
    return false;
  }
};