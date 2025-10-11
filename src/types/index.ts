/**
 * 项目类型定义
 */

/**
 * 通知类型枚举
 */
export type NotificationType = 'success' | 'error' | 'info' | 'warning';

/**
 * 通知接口
 */
export interface Notification {
  message: string;
  type: NotificationType;
}

/**
 * AI指南步骤接口
 */
export interface AIGuideStep {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

/**
 * AI指南接口
 */
export interface AIGuide {
  title: string;
  steps: AIGuideStep[];
  summary: string;
  timestamp: string;
}

/**
 * 文件接口
 */
export interface File {
  name: string;
  content: string;
  type: string;
}

/**
 * 导出包元数据接口
 */
export interface ExportMetadata {
  exportDate: string;
  version: string;
  source: string;
  error?: string;
  title?: string;
  description?: string;
}

/**
 * 预览数据接口
 */
export interface PreviewData {
  title: string;
  description: string;
  imageUrl?: string;
  features?: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  htmlContent: string;
}

/**
 * 导出包接口
 */
export interface ExportPackage {
  htmlFile: File;
  assets: File[];
  metadata: ExportMetadata;
}