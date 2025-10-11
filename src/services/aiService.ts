// AI服务功能
import type { NotionContent } from './notionAPI';
import type { AIGuide, AIGuideStep } from '../types';

/**
 * AI指南生成参数
 */
export interface GenerateGuideParams {
  content: NotionContent;
  targetAudience?: 'beginner' | 'intermediate' | 'advanced';
  includeDesignTips?: boolean;
  includeContentTips?: boolean;
  includeMarketingTips?: boolean;
}

/**
 * 生成AI网站优化指南
 * @param content Notion内容数据
 * @returns Promise<AIGuide> AI优化指南
 */
export const generateAIGuide = async (content: NotionContent): Promise<AIGuide> => {
  try {
    // 模拟AI处理过程
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 分析内容，生成针对性的建议
    const guideSections = generateGuideSections(content);
    
    // 将sections转换为AIGuideStep格式
    const steps: AIGuideStep[] = guideSections.map((section, index) => ({
      id: `step-${index + 1}`,
      title: section.title,
      description: section.content,
      priority: index < 3 ? 'high' : 'medium'
    }));
    
    return {
      title: "AI 网站优化指南",
      steps: steps,
      summary: "根据您的内容分析，我们提供了一系列优化建议，帮助您创建更加专业和吸引人的网站。",
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error generating AI guide:', error);
    throw new Error('生成AI指南失败，请稍后重试。');
  }
};

/**
 * 基于Notion内容生成指南部分
 * @param content Notion内容数据
 * @returns 指南部分数组
 */
const generateGuideSections = (content: NotionContent): Array<{ title: string; content: string }> => {
  const sections: Array<{ title: string; content: string }> = [];
  
  // 页面结构优化建议
  sections.push({
    title: "页面结构优化",
    content: generateStructureSuggestions(content)
  });
  
  // 内容排版建议
  sections.push({
    title: "内容排版",
    content: generateTypographySuggestions(content)
  });
  
  // 响应式设计建议
  sections.push({
    title: "响应式设计",
    content: "确保在移动设备上的良好显示效果，优化触控体验。建议使用弹性布局和响应式图像。"
  });
  
  // SEO优化建议
  sections.push({
    title: "SEO优化",
    content: generateSEOSuggestions(content)
  });
  
  // 互动元素建议
  sections.push({
    title: "互动元素",
    content: "考虑添加更多互动元素，如悬停效果、平滑滚动和简单动画，提升用户体验。"
  });
  
  return sections;
};

/**
 * 生成页面结构建议
 * @param content Notion内容数据
 * @returns 结构建议文本
 */
const generateStructureSuggestions = (content: NotionContent): string => {
  const hasImages = content.content.some(item => item.type === 'image');
  const hasLists = content.content.some(item => item.type === 'list');
  const hasHeadings = content.content.some(item => item.type === 'heading');
  
  let suggestions = [];
  
  if (!hasImages) {
    suggestions.push("添加相关图片可以提高页面吸引力和信息传达效率。");
  }
  
  if (!hasLists) {
    suggestions.push("考虑使用列表来组织信息，使其更易于阅读和理解。");
  }
  
  if (!hasHeadings || content.content.filter(item => item.type === 'heading').length < 2) {
    suggestions.push("增加更多的标题层级，帮助用户快速浏览和理解内容结构。");
  }
  
  if (suggestions.length === 0) {
    return "页面结构良好，建议保持当前的组织方式。";
  }
  
  return suggestions.join(' ');
};

/**
 * 生成排版建议
 * @param content Notion内容数据
 * @returns 排版建议文本
 */
const generateTypographySuggestions = (content: NotionContent): string => {
  const paragraphCount = content.content.filter(item => item.type === 'paragraph').length;
  
  if (paragraphCount === 0) {
    return "建议添加详细的段落内容，为用户提供更多有价值的信息。";
  }
  
  if (paragraphCount < 3) {
    return "考虑增加更多的内容段落，使页面更加丰富和全面。";
  }
  
  return "内容排版合理，建议使用一致的字体样式和间距，提高可读性。";
};

/**
 * 生成SEO建议
 * @param content Notion内容数据
 * @returns SEO建议文本
 */
const generateSEOSuggestions = (content: NotionContent): string => {
  // 检查标题长度和关键词
  const titleLength = content.title.length;
  const hasKeywordInTitle = content.title.toLowerCase().includes('notion') || 
                          content.title.toLowerCase().includes('指南') || 
                          content.title.toLowerCase().includes('教程');
  
  let suggestions = [];
  
  if (titleLength < 10 || titleLength > 70) {
    suggestions.push("标题长度建议在10-70个字符之间，以获得更好的搜索引擎显示效果。");
  }
  
  if (!hasKeywordInTitle) {
    suggestions.push("考虑在标题中包含相关关键词，提高搜索引擎优化效果。");
  }
  
  if (suggestions.length === 0) {
    return "SEO表现良好，建议添加合适的元描述和关键词标签。";
  }
  
  return suggestions.join(' ');
};

/**
 * 优化Notion内容用于网站展示
 * @param content Notion内容数据
 * @returns 优化后的内容
 */
export const optimizeContentForWeb = (content: NotionContent): NotionContent => {
  // 深拷贝原始内容
  const optimizedContent = { ...content, content: [...content.content] };
  
  // 优化标题长度
  if (optimizedContent.title.length > 100) {
    optimizedContent.title = optimizedContent.title.substring(0, 97) + '...';
  }
  
  // 优化图片链接（如果有必要）
  optimizedContent.content = optimizedContent.content.map(item => {
    if (item.type === 'image' && item.content.includes('images.unsplash.com')) {
      return {
        ...item,
        properties: {
          ...item.properties,
          altText: '相关图片展示'
        }
      };
    }
    return item;
  });
  
  return optimizedContent;
};