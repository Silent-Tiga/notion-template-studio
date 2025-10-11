// Notion解析工具

/**
 * Notion区块类型
 */
export type NotionBlockType = 
  | 'paragraph'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'bulleted_list_item'
  | 'numbered_list_item'
  | 'to_do'
  | 'toggle'
  | 'callout'
  | 'quote'
  | 'divider'
  | 'image'
  | 'video'
  | 'file'
  | 'pdf'
  | 'bookmark'
  | 'code'
  | 'table'
  | 'table_row'
  | 'table_cell'
  | 'embed'
  | 'link_preview'
  | 'synced_block'
  | 'template'
  | 'link_to_page'
  | 'equation'
  | 'breadcrumb'
  | 'table_of_contents'
  | 'column_list'
  | 'column'
  | 'child_page'
  | 'child_database';

/**
 * Notion富文本类型
 */
export type NotionRichTextType = 'text' | 'mention' | 'equation';

/**
 * Notion富文本格式
 */
export interface NotionRichTextFormat {
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
  color?: string;
}

/**
 * Notion富文本元素
 */
export interface NotionRichText {
  type: NotionRichTextType;
  text?: { content: string; link?: { url: string } };
  mention?: Record<string, any>;
  equation?: { expression: string };
  annotations: NotionRichTextFormat;
  plain_text: string;
  href?: string;
}

/**
 * Notion区块基础接口
 */
export interface NotionBlock {
  id: string;
  type: NotionBlockType;
  created_time: string;
  last_edited_time: string;
  created_by: { id: string; object: string };
  last_edited_by: { id: string; object: string };
  has_children: boolean;
  archived: boolean;
}

/**
 * 解析后的Notion内容接口
 */
export interface ParsedNotionContent {
  title: string;
  blocks: Array<{
    id: string;
    type: string;
    content: string;
    properties?: Record<string, any>;
    children?: Array<{
      id: string;
      type: string;
      content: string;
      properties?: Record<string, any>;
    }>;
  }>;
  coverImage?: string;
  icon?: string;
  createdTime?: string;
  lastEditedTime?: string;
}

/**
 * 解析Notion API响应
 * @param notionResponse Notion API的原始响应数据
 * @returns 解析后的Notion内容
 */
export const parseNotionResponse = (notionResponse: Record<string, any>): ParsedNotionContent => {
  try {
    const parsedContent: ParsedNotionContent = {
      title: extractTitle(notionResponse),
      blocks: [],
      coverImage: extractCoverImage(notionResponse),
      icon: extractIcon(notionResponse),
      createdTime: notionResponse.created_time,
      lastEditedTime: notionResponse.last_edited_time
    };
    
    // 解析区块内容
    if (notionResponse.results && Array.isArray(notionResponse.results)) {
      parsedContent.blocks = notionResponse.results.map((block: Record<string, any>) => {
        return parseNotionBlock(block);
      }).filter((block): block is NonNullable<typeof block> => block !== null);
    }
    
    return parsedContent;
  } catch (error) {
    console.error('Error parsing Notion response:', error);
    throw new Error('解析Notion内容失败');
  }
};

/**
 * 从Notion响应中提取标题
 * @param notionResponse Notion API响应数据
 * @returns 页面标题
 */
export const extractTitle = (notionResponse: Record<string, any>): string => {
  // 尝试从不同位置提取标题
  if (notionResponse.properties && notionResponse.properties.title && notionResponse.properties.title.title) {
    return parseRichTextArray(notionResponse.properties.title.title);
  }
  
  if (notionResponse.title && Array.isArray(notionResponse.title)) {
    return parseRichTextArray(notionResponse.title);
  }
  
  if (notionResponse.name && Array.isArray(notionResponse.name)) {
    return parseRichTextArray(notionResponse.name);
  }
  
  // 如果没有找到标题，返回默认标题
  return 'Notion 页面';
};

/**
 * 从Notion响应中提取封面图片
 * @param notionResponse Notion API响应数据
 * @returns 封面图片URL或undefined
 */
export const extractCoverImage = (notionResponse: Record<string, any>): string | undefined => {
  if (!notionResponse.cover) {
    return undefined;
  }
  
  if (notionResponse.cover.type === 'file') {
    return notionResponse.cover.file.url;
  } else if (notionResponse.cover.type === 'external') {
    return notionResponse.cover.external.url;
  }
  
  return undefined;
};

/**
 * 从Notion响应中提取图标
 * @param notionResponse Notion API响应数据
 * @returns 图标URL或emoji或undefined
 */
export const extractIcon = (notionResponse: Record<string, any>): string | undefined => {
  if (!notionResponse.icon) {
    return undefined;
  }
  
  if (notionResponse.icon.type === 'emoji') {
    return notionResponse.icon.emoji;
  } else if (notionResponse.icon.type === 'file') {
    return notionResponse.icon.file.url;
  } else if (notionResponse.icon.type === 'external') {
    return notionResponse.icon.external.url;
  }
  
  return undefined;
};

/**
 * 解析Notion区块
 * @param block Notion区块数据
 * @returns 解析后的区块对象或null（如果无法解析）
 */
export const parseNotionBlock = (block: Record<string, any>): ParsedNotionContent['blocks'][0] | null => {
  try {
    const blockType = block.type;
    const blockData = block[blockType] || {};
    
    // 根据区块类型解析不同的内容
    switch (blockType) {
      case 'paragraph':
        return parseParagraphBlock(block, blockData);
      case 'heading_1':
      case 'heading_2':
      case 'heading_3':
        return parseHeadingBlock(block, blockData);
      case 'bulleted_list_item':
      case 'numbered_list_item':
        return parseListItemBlock(block, blockData);
      case 'to_do':
        return parseToDoBlock(block, blockData);
      case 'callout':
        return parseCalloutBlock(block, blockData);
      case 'quote':
        return parseQuoteBlock(block, blockData);
      case 'image':
        return parseImageBlock(block, blockData);
      case 'divider':
        return parseDividerBlock(block);
      case 'code':
        return parseCodeBlock(block, blockData);
      case 'table':
        return parseTableBlock(block, blockData);
      case 'toggle':
        return parseToggleBlock(block, blockData);
      default:
        // 对于不支持的区块类型，尝试作为普通文本处理
        return parseUnknownBlock(block);
    }
  } catch (error) {
    console.error(`Error parsing block of type ${block?.type || 'unknown'}:`, error);
    return null;
  }
};

/**
 * 解析富文本数组
 * @param richTextArray 富文本数组
 * @returns 合并后的纯文本内容
 */
export const parseRichTextArray = (richTextArray: NotionRichText[]): string => {
  if (!Array.isArray(richTextArray)) {
    return '';
  }
  
  return richTextArray
    .map(text => text.plain_text || '')
    .join('');
};

/**
 * 解析段落区块
 */
const parseParagraphBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'paragraph',
    content: parseRichTextArray(blockData.rich_text || [])
  };
};

/**
 * 解析标题区块
 */
const parseHeadingBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  const headingLevel = block.type.replace('heading_', '');
  
  return {
    id: block.id,
    type: `heading_${headingLevel}`,
    content: parseRichTextArray(blockData.rich_text || []),
    properties: {
      level: parseInt(headingLevel)
    }
  };
};

/**
 * 解析列表项区块
 */
const parseListItemBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: block.type,
    content: parseRichTextArray(blockData.rich_text || [])
  };
};

/**
 * 解析待办事项区块
 */
const parseToDoBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'to_do',
    content: parseRichTextArray(blockData.rich_text || []),
    properties: {
      checked: blockData.checked || false
    }
  };
};

/**
 * 解析提示框区块
 */
const parseCalloutBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'callout',
    content: parseRichTextArray(blockData.rich_text || []),
    properties: {
      icon: blockData.icon?.emoji || blockData.icon?.external?.url || blockData.icon?.file?.url,
      color: blockData.color || 'default'
    }
  };
};

/**
 * 解析引用区块
 */
const parseQuoteBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'quote',
    content: parseRichTextArray(blockData.rich_text || [])
  };
};

/**
 * 解析图片区块
 */
const parseImageBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  let imageUrl = '';
  
  if (blockData.type === 'file') {
    imageUrl = blockData.file.url || '';
  } else if (blockData.type === 'external') {
    imageUrl = blockData.external.url || '';
  }
  
  return {
    id: block.id,
    type: 'image',
    content: imageUrl,
    properties: {
      caption: parseRichTextArray(blockData.caption || [])
    }
  };
};

/**
 * 解析分隔线区块
 */
const parseDividerBlock = (block: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'divider',
    content: ''
  };
};

/**
 * 解析代码块区块
 */
const parseCodeBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'code',
    content: parseRichTextArray(blockData.rich_text || []),
    properties: {
      language: blockData.language || 'plaintext'
    }
  };
};

/**
 * 解析表格区块
 */
const parseTableBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'table',
    content: '',
    properties: {
      has_column_header: blockData.has_column_header || false,
      has_row_header: blockData.has_row_header || false,
      table_width: blockData.table_width || 2
    }
  };
};

/**
 * 解析切换区块
 */
const parseToggleBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'toggle',
    content: parseRichTextArray(blockData.rich_text || []),
    properties: {
      collapsed: true // 默认折叠
    }
  };
};

/**
 * 解析未知类型的区块
 */
const parseUnknownBlock = (block: Record<string, any>): ParsedNotionContent['blocks'][0] | null => {
  // 尝试获取任何可能的文本内容
  const blockData = block[block.type] || {};
  
  if (blockData.rich_text && Array.isArray(blockData.rich_text)) {
    const text = parseRichTextArray(blockData.rich_text);
    if (text) {
      return {
        id: block.id,
        type: block.type,
        content: text,
        properties: {
          originalType: block.type
        }
      };
    }
  }
  
  // 如果无法提取内容，返回null
  return null;
};

/**
 * 验证Notion页面ID格式
 * @param pageId Notion页面ID
 * @returns 是否为有效的Notion页面ID
 */
export const isValidNotionPageId = (pageId: string): boolean => {
  // Notion页面ID格式：32个字符的字母数字组合，或带连字符的UUID格式
  const uuidRegex = /^[a-zA-Z0-9]{32}$|^[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}$/;
  return uuidRegex.test(pageId);
};

/**
 * 规范化Notion页面链接
 * @param notionLink Notion页面链接
 * @returns 规范化后的链接
 */
export const normalizeNotionLink = (notionLink: string): string => {
  try {
    const url = new URL(notionLink);
    
    // 处理不同的Notion域名
    if (url.hostname === 'notion.so' || url.hostname === 'www.notion.so') {
      // 保留原始路径，但移除查询参数
      url.search = '';
      return url.toString();
    }
    
    return notionLink;
  } catch (error) {
    console.error('Error normalizing Notion link:', error);
    return notionLink;
  }
};