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
      title: "AI Website Optimization Guide",
      steps: steps,
      summary: "Based on your content analysis, we provide optimization suggestions to help you build a more professional and engaging website.",
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error generating AI guide:', error);
    throw new Error('Failed to generate AI guide, please try again later.');
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
    title: "Page Structure",
    content: generateStructureSuggestions(content)
  });
  
  // 内容排版建议
  sections.push({
    title: "Typography",
    content: generateTypographySuggestions(content)
  });
  
  // 响应式设计建议
  sections.push({
    title: "Responsive Design",
    content: "Ensure great display on mobile devices and optimize touch interactions. Use flexible layouts and responsive images."
  });
  
  // SEO优化建议
  sections.push({
    title: "SEO Optimization",
    content: generateSEOSuggestions(content)
  });
  
  // 互动元素建议
  sections.push({
    title: "Interactive Elements",
    content: "Consider adding interactive elements such as hover effects, smooth scrolling, and simple animations to improve user experience."
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
  
  let suggestions: string[] = [];
  
  if (!hasImages) {
    suggestions.push("Add relevant images to improve visual appeal and communication.");
  }
  
  if (!hasLists) {
    suggestions.push("Consider using lists to organize information for easier reading and understanding.");
  }
  
  if (!hasHeadings || content.content.filter(item => item.type === 'heading').length < 2) {
    suggestions.push("Add more heading levels to help users quickly scan and understand the content structure.");
  }
  
  if (suggestions.length === 0) {
    return "The page structure looks good; keep the current organization.";
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
    return "Add detailed paragraphs to provide more valuable information.";
  }
  
  if (paragraphCount < 3) {
    return "Consider adding more paragraphs to make the page more comprehensive.";
  }
  
  return "Typography looks good; use consistent font styles and spacing to improve readability.";
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
  
  let suggestions: string[] = [];
  
  if (titleLength < 10 || titleLength > 70) {
    suggestions.push("Keep the title length between 10 and 70 characters for better search engine display.");
  }
  
  if (!hasKeywordInTitle) {
    suggestions.push("Consider including relevant keywords in the title to improve SEO.");
  }
  
  if (suggestions.length === 0) {
    return "SEO looks good; add an appropriate meta description and keyword tags.";
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
          altText: 'Related image'
        }
      };
    }
    return item;
  });
  
  return optimizedContent;
};