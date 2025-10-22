import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SidebarRight from './components/SidebarRight';
import HomePage from './pages/HomePage';
import ConvertPage from './pages/ConvertPage';
import PricingPage from './pages/PricingPage';
import Header from './components/Header';
import type { PreviewData, ExportPackage, AIGuide, NotificationType } from './types';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

// 创建AppContext共享全局功能
export const AppContext = createContext({
  showNotification: (_message: string, _type?: NotificationType) => {},
  showScrollTop: false,
  scrollToTop: () => {},
  isProcessing: false,
  generatedPreview: null as PreviewData | null,
  aiGuide: null as AIGuide | null,
  exportPackage: null as ExportPackage | null
});

// 已移除在 App 中直接使用服务函数；页面内部处理

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isProcessing] = useState(false);
  const [generatedPreview] = useState<PreviewData | null>(null);
  const [aiGuide] = useState<AIGuide | null>(null);
  const [exportPackage] = useState<ExportPackage | null>(null);

  // 显示通知
  const showNotification = (message: string, type: NotificationType = 'success'): void => {
    const notification = document.createElement('div');
    
    // 定义颜色和图标
    let bgColor = 'bg-success';
    let icon = '✓';
    
    if (type === 'error') {
      bgColor = 'bg-error';
      icon = '✕';
    } else if (type === 'warning') {
      bgColor = 'bg-warning';
      icon = '⚠';
    } else if (type === 'info') {
      bgColor = 'bg-info';
      icon = 'ℹ';
    }
    
    // 设置通知内容和样式
    notification.className = `fixed top-4 right-4 z-50 px-4 py-2 ${bgColor} text-white rounded-github shadow-github flex items-center gap-2`;
    notification.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  // 监听滚动显示返回顶部按钮
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 返回顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 定义AppContext的值
  const contextValue = {
    showNotification,
    showScrollTop,
    scrollToTop,
    isProcessing,
    generatedPreview,
    aiGuide,
    exportPackage
  };

  return (
    <Router>
      <AppContext.Provider value={contextValue}>
        {/* 全局顶部导航 */}
        <Header />
        <div className="app-layout">
          {/* 桌面端左侧导航栏 */}
          <aside className="sidebar hidden md:block">
            <div className="px-3 mb-6">
              <h1 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <span className="inline-block w-6 h-6 bg-primary rounded-full"></span>
                AI Notion
              </h1>
            </div>
            
            <nav className="px-2">
              <Link to="/" className="sidebar-item sidebar-item-active">
                Home
              </Link>
              <Link to="/convert" className="sidebar-item">
                Convert
              </Link>
              <Link to="/pricing" className="sidebar-item">
                Pricing
              </Link>
            </nav>
          </aside>

          {/* 主内容区域 */}
          <main className="content">
            {/* 页面内容 */}
            <div className="mt-6 max-w-4xl mx-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/convert" element={<ConvertPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                <Route path="/pricing" element={<PricingPage />} />
              </Routes>
            </div>
          </main>

          {/* 右侧边栏 - 仅在桌面端显示 */}
          <aside className="hidden lg:block">
            <SidebarRight />
          </aside>
          
          {/* 返回顶部按钮 */}
          {showScrollTop && (
            <button 
              onClick={scrollToTop} 
              className="fixed bottom-8 right-8 w-10 h-10 bg-neutral-700 text-white rounded-github flex items-center justify-center shadow-github hover:bg-neutral-800 transition-colors duration-200 z-50"
              aria-label="返回顶部"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          )}
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;