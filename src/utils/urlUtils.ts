/**
 * 从Notion链接中提取页面ID
 * @param url Notion页面链接
 * @returns 提取的页面ID或null
 */
export const extractPageId = (url: string): string | null => {
  try {
    // 支持多种Notion URL格式
    // 格式1: notion.so/.../...?v=...
    // 格式2: notion.so/.../8e2579d089d34b6aa02822a4353e8654
    // 格式3: notion.so/8e2579d089d34b6aa02822a4353e8654?v=...
    // 格式4: 直接的32位ID或带连字符的UUID
    
    // 匹配32位ID
    const idRegex = /([a-zA-Z0-9]{32})/;
    let match = url.match(idRegex);
    if (match && match[1]) {
      return match[1];
    }
    
    // 匹配带连字符的UUID格式
    const uuidRegex = /([a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})/;
    match = url.match(uuidRegex);
    if (match && match[1]) {
      return match[1];
    }
    
    // 尝试从Notion URL中提取ID
    if (url.includes('notion.so')) {
      // 提取最后一个可能的ID部分
      const parts = url.split('/').filter(Boolean);
      for (let i = parts.length - 1; i >= 0; i--) {
        const part = parts[i].split('?')[0]; // 移除查询参数
        if (part.length >= 10) { // 假设ID至少有10个字符
          return part;
        }
      }
    }
    
    return null;
  } catch (error) {
    console.error('提取Notion页面ID失败:', error);
    return null;
  }
};