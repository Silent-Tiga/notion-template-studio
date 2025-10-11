import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero区域 */}
      <section id="hero" className="mb-16 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            将 Notion 内容转换为响应式网站
          </h1>
          <p className="text-base md:text-lg text-neutral-600 mb-8 max-w-2xl">
            无需编码，AI 自动转换，轻松分享您的想法与知识。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={() => navigate('/convert')}
              className="btn-primary text-sm px-6 py-2 rounded-github font-medium shadow-github"
            >
              立即开始转换
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="btn-secondary text-sm px-6 py-2 rounded-github font-medium"
            >
              查看定价
            </button>
          </div>
        </div>
      
        {/* 特色亮点 */}
        <div id="features" className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* 快速转换 */}
          <div className="card p-6">
            <div className="w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-neutral-900">几秒内完成转换</h3>
            <p className="text-sm text-neutral-600">几秒钟内将Notion内容转换为网页</p>
          </div>
          
          {/* 完全定制 */}
          <div className="card p-6">
            <div className="w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-neutral-900">自定义主题</h3>
            <p className="text-sm text-neutral-600">自定义主题、颜色和布局</p>
          </div>
          
          {/* 安全可靠 */}
          <div className="card p-6">
            <div className="w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-neutral-900">数据加密</h3>
            <p className="text-sm text-neutral-600">数据加密传输，隐私安全</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;