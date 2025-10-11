/**
 * 从Notion链接中提取页面ID
 * @param url Notion页面链接
 * @returns 提取的页面ID或null
 */
export const extractPageId = (url: string): string | null => {
  try {
    // 支持多种Notion URL格式
    const regex = /([a-zA-Z0-9]{32})/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  } catch (error) {
    console.error('提取Notion页面ID失败:', error);
    return null;
  }
};