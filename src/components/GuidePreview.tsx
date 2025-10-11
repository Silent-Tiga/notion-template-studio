import React, { useState } from 'react';
import { Copy, BookOpen, FileText, Sparkles, CheckCircle, FileDown } from 'lucide-react';
import { AIGuide, NotificationType } from '../types';

interface GuidePreviewProps {
  guide: AIGuide | null;
  isLoading: boolean;
  onShowNotification: (message: string, type?: NotificationType) => void;
}

const GuidePreview: React.FC<GuidePreviewProps> = ({ guide, isLoading, onShowNotification }) => {
  const [copyStatus, setCopyStatus] = useState<string>('');

  const copyToClipboard = async (): Promise<void> => {
    if (!guide || !guide.steps) return;
    
    try {
      // 将steps转换为markdown格式
      let markdown = `# ${guide.title}\n\n${guide.summary}\n\n`;
      guide.steps.forEach((step, index) => {
        markdown += `## ${index + 1}. ${step.title}\n\n${step.description}\n\n`;
      });
      
      await navigator.clipboard.writeText(markdown);
      setCopyStatus('copied');
      onShowNotification('指南已复制到剪贴板!', 'success');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch (err) {
      setCopyStatus('error');
      onShowNotification('复制失败，请重试', 'error');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  const downloadPDF = (): void => {
    onShowNotification('PDF下载功能将在后续版本中实现', 'info');
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="card-glass flex flex-col items-center justify-center py-12 relative overflow-hidden rounded-3xl shadow-card animate-float-small border border-neutral-100">
          {/* 装饰性背景元素 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative mb-10 group">
              <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse group-hover:shadow-xl transition-all duration-700">
                <Sparkles className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            
            <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full mb-10 shadow-lg animate-spin relative">
              {/* 发光效果 */}
              <span className="absolute -inset-1.5 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">正在生成您的Notion指南</h3>
            <p className="text-gray-600 text-lg mb-2">我们的AI正在为您创建个性化模板</p>
            <p className="text-gray-500">这通常需要几秒钟时间</p>
            
            {/* 进度条 */}
            <div className="mt-10 w-80 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-md animate-shine"></div>
            </div>
            
            {/* 装饰气泡 */}
            <div className="bubble-tr absolute top-16 right-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-bold">✨</span>
                <span>AI生成中</span>
              </div>
            </div>
            
            <div className="bubble-bl absolute bottom-16 left-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small" style={{ animationDelay: '0.3s' }} hover:shadow-md transition-all duration-300>
              <div className="flex items-center gap-1.5">
                <span className="text-secondary font-bold">📝</span>
                <span>准备内容</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!guide) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="card-glass rounded-3xl p-12 text-center relative overflow-hidden shadow-card animate-float-small border border-neutral-100">
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mb-8 shadow-lg transform transition-transform duration-500 hover:scale-110 group">
              <BookOpen className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">您的指南即将诞生</h3>
            <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
              输入您的需求，我们将为您创建一个完整的Notion模板指南
            </p>
            <div className="bubble-tl bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-white/50 shadow-card transform transition-all duration-500 hover:shadow-card-hover animate-float-small group hover:border-primary/20 hover:bg-white/90" style={{ animationDelay: '0.2s' }}>
              <p className="text-gray-700">
                <span className="font-semibold text-primary group-hover:text-primary/90 transition-colors duration-300">提示:</span> 描述您想要的指南类型，例如"项目管理模板"或"个人任务跟踪器"
              </p>
            </div>
            
            {/* 装饰气泡 */}
            <div className="bubble-tr absolute top-16 right-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-bold">💡</span>
                <span>输入需求</span>
              </div>
            </div>
            
            <div className="bubble-bl absolute bottom-16 left-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small" style={{ animationDelay: '0.3s' }} hover:shadow-md transition-all duration-300>
              <div className="flex items-center gap-1.5">
                <span className="text-secondary font-bold">🚀</span>
                <span>快速生成</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="card-glass rounded-3xl shadow-card overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-card-hover animate-float-small relative group">
        {/* 背景装饰 */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" aria-hidden="true" />
        
        {/* 标题栏 */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-sm"></div>
          <div className="relative z-10 flex items-center group">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 transform transition-transform duration-300 hover:scale-110">
              <BookOpen className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h2 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">指南预览</h2>
          </div>
          
          <div className="relative z-10 flex space-x-4">
            <button 
              onClick={copyToClipboard}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${copyStatus === 'copied' ? 'bg-success text-white shadow-lg' : 'bg-white/20 text-white hover:bg-white/30 shadow-md'}`}
            >
              <span className="relative z-10">{copyStatus === 'copied' ? '已复制' : '复制'}</span>
              {copyStatus !== 'copied' && (
                <>
                  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                  <Copy className="w-4 h-4" />
                </>
              )}
              {copyStatus === 'copied' && (
                <CheckCircle className="w-4 h-4" />
              )}
            </button>
            <button 
              onClick={downloadPDF}
              className="flex items-center space-x-2 px-6 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-md relative overflow-hidden group"
            >
              <span className="relative z-10">PDF</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <FileDown className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="p-8 relative">
          {/* 背景装饰 */}
          <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
          
          {/* 装饰元素 */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          
          {/* 指南标题 */}
          <div className="mb-12 text-center relative">
            <div className="inline-block relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:scale-102 transition-transform duration-500">{guide.title}</h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            </div>
            <div className="flex justify-center mt-8">
              <div className="h-1 w-32 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-full animate-fade-in"></div>
            </div>
          </div>

          {/* 目录导航 */}
          <div className="mb-12 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-card card-hover animate-float-small relative overflow-hidden group">
            {/* 渐变发光效果 */}
            <span className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-700"></span>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center group-hover:text-primary transition-colors duration-300">
                <FileText className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                目录
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guide.steps?.map((step, index) => (
                  <li key={step.id || index} className="flex items-start p-4 rounded-xl hover:bg-white/80 transition-all duration-300 group card-hover">
                    <span className="text-primary font-bold mr-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{index + 1}.</span>
                    <span className="text-gray-700 group-hover:text-primary transition-colors duration-300">{step.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 分节内容 */}
          <div className="space-y-10">
            {guide.steps?.map((step, index) => (
              <div 
                key={step.id || index} 
                id={`section-${index + 1}`}
                className="bubble-tr p-7 bg-gradient-to-br from-white to-primary/5 rounded-2xl border border-gray-100 shadow-card transition-all duration-500 hover:shadow-card-hover card-hover relative overflow-hidden group animate-float-small" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* 渐变发光效果 */}
                <span className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-700"></span>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center group-hover:text-primary/90 transition-colors duration-300">
                    <span className="mr-3 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">{index + 1}</span>
                    {step.title}
                  </h3>
                  <div className="prose prose-indigo max-w-none">
                    {step.description.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 text-gray-600 leading-relaxed animate-fade-in group-hover:text-gray-700 transition-colors duration-300">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 底部装饰 */}
        <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
      </div>
    </div>
  );
};

export default GuidePreview;