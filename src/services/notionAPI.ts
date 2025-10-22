// Notion API 服务

// 纯前端直连 Notion API 常量（开发环境走本地代理避免CORS）
const API_HOST = import.meta.env.DEV ? '/notion-api' : 'https://api.notion.com';
const NOTION_API_BASE = `${API_HOST}/v1`;
const NOTION_API_VERSION = '2022-06-28';


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
    type: 'heading' | 'paragraph' | 'image' | 'list' | 'table' | 'callout' | 'quote' | 'toggle';
    content: string;
    properties?: Record<string, any>;
  }>;
  coverImage?: string;
  icon?: string;
}

// 将Worker返回的块数据规范化为前端渲染使用的简化结构
const getText = (rich: any[] = []): string => {
  try {
    return rich
      .map((r: any) => (typeof r.plain_text === 'string' ? r.plain_text : r.text?.content || ''))
      .join('');
  } catch {
    return '';
  }
};

const normalizeBlocks = (blocks: any[] = []): NotionContent['content'] => {
  return blocks.map((b: any) => {
    const t = b?.type;
    switch (t) {
      case 'paragraph':
        return { id: b.id, type: 'paragraph', content: getText(b.paragraph?.rich_text || []) };
      case 'heading_1':
      case 'heading_2':
      case 'heading_3':
        return { id: b.id, type: 'heading', content: getText(b[t]?.rich_text || []) };
      case 'bulleted_list_item':
        return { id: b.id, type: 'list', content: `<li>${getText(b.bulleted_list_item?.rich_text || [])}</li>` };
      case 'numbered_list_item':
        return { id: b.id, type: 'list', content: `<li>${getText(b.numbered_list_item?.rich_text || [])}</li>` };
      case 'quote':
        return { id: b.id, type: 'quote', content: getText(b.quote?.rich_text || []) };
      case 'callout':
        return { id: b.id, type: 'callout', content: getText(b.callout?.rich_text || []) };
      case 'toggle':
        return { id: b.id, type: 'toggle', content: getText(b.toggle?.rich_text || []) };
      case 'image':
        return { id: b.id, type: 'image', content: b.image?.file?.url || b.image?.external?.url || '' };
      default:
        return { id: b.id, type: 'paragraph', content: getText(b[t]?.rich_text || []) };
    }
  });
};

// 纯前端：封装 fetch JSON
const fetchJson = async (url: string, apiKey: string): Promise<any> => {
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Notion-Version': NOTION_API_VERSION
    }
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Notion API 请求失败 ${resp.status}: ${text}`);
  }
  return resp.json();
};

// 纯前端：分页获取所有块
const fetchAllBlocks = async (pageId: string, apiKey: string): Promise<any[]> => {
  let all: any[] = [];
  let startCursor: string | undefined = undefined;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const url = `${NOTION_API_BASE}/blocks/${pageId}/children?page_size=100${startCursor ? `&start_cursor=${startCursor}` : ''}`;
    const data = await fetchJson(url, apiKey);
    all.push(...(data.results || []));
    if (data.has_more && data.next_cursor) {
      startCursor = data.next_cursor;
    } else {
      break;
    }
  }
  return all;
};

/**
 * 获取Notion页面内容
 * @param pageId Notion页面ID
 * @param apiKey Notion API密钥
 * @returns Promise<NotionContent> Notion内容数据
 */
export const fetchNotionContent = async (pageId: string, apiKey: string): Promise<NotionContent> => {
  try {
    const page = await fetchJson(`${NOTION_API_BASE}/pages/${pageId}`, apiKey);
    const blocks = await fetchAllBlocks(pageId, apiKey);

    const titleProp = Object.values(page.properties || {}).find((p: any) => p?.type === 'title') as any;
    const title = getText(titleProp?.title ?? []) || '';

    const normalizedBlocks = normalizeBlocks(blocks || []);
    const finalTitle = title || (normalizedBlocks.find(b => b.type === 'heading')?.content ?? '未命名页面');

    const coverImage = page.cover?.file?.url || page.cover?.external?.url || undefined;
    const icon = page.icon?.emoji || page.icon?.file?.url || page.icon?.external?.url || undefined;

    const normalizedContent: NotionContent = {
      title: finalTitle,
      coverImage,
      icon,
      content: normalizedBlocks
    };

    return normalizedContent;
  } catch (error) {
    console.error('获取Notion内容失败:', error);
    throw new Error('获取Notion内容失败');
  }
};

export const isNotionPagePublic = async (_pageId: string): Promise<boolean> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 200));
    return true;
  } catch (error) {
    console.error('Error checking Notion page visibility:', error);
    return false;
  }
};