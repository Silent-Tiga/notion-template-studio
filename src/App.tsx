import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SidebarRight from './components/SidebarRight';
import HomePage from './pages/HomePage';
import ConvertPage from './pages/ConvertPage';
import PricingPage from './pages/PricingPage';
import type { PreviewData, ExportPackage, AIGuide, NotificationType } from './types';

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

// 引入service和utils功能
import { fetchNotionContent, extractPageId } from './services/notionAPI';
import { generateAIGuide } from './services/aiService';
import { generateHTML, createExportPackage } from './services/exportService';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedPreview, setGeneratedPreview] = useState<PreviewData | null>(null);
  const [aiGuide, setAiGuide] = useState<AIGuide | null>(null);
  const [exportPackage, setExportPackage] = useState<ExportPackage | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 移动端侧边栏切换
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 处理生成预览的逻辑
  const handleGeneratePreview = async (notionLink: string): Promise<void> => {
    setIsProcessing(true);
    try {
      // 提取Notion页面ID
      const pageId = extractPageId(notionLink);
      if (!pageId) {
        showNotification('无效的Notion链接，请检查后重试。', 'error');
        setIsProcessing(false);
        return;
      }
      
      // 显示进度通知
      showNotification('正在获取Notion内容...', 'info');
      
      // 获取Notion内容
      const notionContent = await fetchNotionContent(pageId);
      
      // 生成预览数据
      const previewData = generateHTML(notionContent);
      setGeneratedPreview(previewData);
      
      // 显示进度通知
      showNotification('正在生成AI优化指南...', 'info');
      
      // 生成AI指南
      const guide = await generateAIGuide(notionContent);
      setAiGuide(guide);
      
      // 显示进度通知
      showNotification('正在准备导出包...', 'info');
      
      // 生成导出包
      const exportPackage = await createExportPackage(previewData);
      setExportPackage(exportPackage);
      
      showNotification('转换成功！您可以预览网站和导出文件。', 'success');
    } catch (error) {
      console.error("Error generating preview:", error);
      showNotification('转换失败，请检查Notion链接是否正确并再次尝试。', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  // 显示通知
  const showNotification = (message: string, type: NotificationType = 'success'): void => {
    const notification = document.createElement('div');
    
    // 定义颜色和图标
    let bgColor = 'bg-success';
    let icon = '✓';
    
    if (type === 'error') {
      bgColor = 'bg-error';
      icon = '❌';
    } else if (type === 'info') {
      bgColor = 'bg-primary';
      icon = 'ℹ';
    } else if (type === 'warning') {
      bgColor = 'bg-warning';
      icon = '⚠️';
    }
    
    notification.className = `fixed top-20 right-6 z-50 transform transition-all duration-500 translate-y-0 opacity-100 flex items-center gap-3 p-3 rounded-github shadow-github ${bgColor} text-white`;
    
    // 创建图标div
    const iconContainer = document.createElement('div');
    iconContainer.className = 'w-8 h-8 flex items-center justify-center';
    iconContainer.textContent = icon;
    notification.appendChild(iconContainer);
    
    // 创建消息文本节点
    const messageSpan = document.createElement('span');
    messageSpan.className = 'font-medium text-sm';
    messageSpan.textContent = message;
    notification.appendChild(messageSpan);
    
    // 添加关闭按钮
    const closeButton = document.createElement('button');
    closeButton.className = 'ml-4 text-white opacity-70 hover:opacity-100 transition-opacity';
    closeButton.textContent = '×';
    closeButton.style.fontSize = '1.25rem';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => {
      notification.classList.add('translate-y-[-20px]', 'opacity-0');
      setTimeout(() => notification.remove(), 500);
    };
    notification.appendChild(closeButton);
    
    document.body.appendChild(notification);
    
    // 自动关闭
    setTimeout(() => {
      notification.classList.add('translate-y-[-20px]', 'opacity-0');
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, 5000);
  };

  // 添加滚动效果
  useEffect(() => {
    const handleScroll = () => {
      // 控制返回顶部按钮显示
      setShowScrollTop(window.scrollY > 500);
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
              <Link to="/convert" className="sidebar-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Convert
              </Link>
              <Link to="/pricing" className="sidebar-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2" ry="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                Pricing
              </Link>
              <Link to="/examples" className="sidebar-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 18l6-6-6-6"></path>
                  <path d="M8 6l-6 6 6 6"></path>
                </svg>
                Examples
              </Link>
            </nav>
            
            <div className="divider mx-3"></div>
            
            <nav className="px-2">
              <Link to="/login" className="sidebar-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Login
              </Link>
              <Link to="/signup" className="sidebar-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Sign Up
              </Link>
            </nav>
            
            <div className="divider mx-3"></div>
            
            <nav className="px-2">
              <Link to="/privacy-policy" className="sidebar-item text-xs text-neutral-400">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="sidebar-item text-xs text-neutral-400">
                Terms of Service
              </Link>
            </nav>
            
            <div className="px-3 mt-auto pt-4 mt-6">
              <p className="text-xs text-neutral-400">© 2023 AI Notion</p>
            </div>
          </aside>

          {/* 移动端侧边栏 */}
          <div className={`fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>
          <aside className={`fixed left-0 top-0 h-full bg-white border-r border-neutral-200 z-50 md:hidden transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ width: '80%', maxWidth: '280px' }}>
            <div className="p-4 flex justify-between items-center border-b border-neutral-200">
              <h1 className="text-xl font-bold text-neutral-900">AI Notion</h1>
              <button onClick={toggleSidebar} className="p-1 rounded-full hover:bg-neutral-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" x2="6" y1="6" y2="18"></line>
                  <line x1="6" x2="18" y1="6" y2="18"></line>
                </svg>
              </button>
            </div>
            <nav className="py-4">
              {/* 移动端导航项 */}
              <Link to="/" className="sidebar-item sidebar-item-active" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
              <Link to="/convert" className="sidebar-item" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Convert
              </Link>
              <Link to="/pricing" className="sidebar-item" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2" ry="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                Pricing
              </Link>
              <Link to="/examples" className="sidebar-item" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 18l6-6-6-6"></path>
                  <path d="M8 6l-6 6 6 6"></path>
                </svg>
                Examples
              </Link>
              <div className="divider mx-3"></div>
              <Link to="/login" className="sidebar-item" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Login
              </Link>
              <Link to="/signup" className="sidebar-item" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Sign Up
              </Link>
            </nav>
          </aside>

          {/* 主内容区 */}
          <main className="main-content">
            {/* 顶部工具栏 */}
            <div className="sticky top-0 bg-white border-b border-neutral-200 p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <button className="md:hidden p-2 rounded-full hover:bg-neutral-100" onClick={toggleSidebar}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                </button>
                <div className="hidden md:flex items-center gap-6">
                  <Link to="/" className="text-neutral-700 hover:text-primary font-medium text-sm">Home</Link>
                  <Link to="/convert" className="text-neutral-700 hover:text-primary font-medium text-sm">Convert</Link>
                  <Link to="/pricing" className="text-neutral-700 hover:text-primary font-medium text-sm">Pricing</Link>
                  <Link to="/examples" className="text-neutral-700 hover:text-primary font-medium text-sm">Examples</Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Link to="/login" className="btn-secondary text-sm hidden md:block">
                  Login
                </Link>
                <Link to="/signup" className="btn-success text-sm">
                  Sign Up
                </Link>
              </div>
            </div>

            {/* 页面内容 */}
            <div className="mt-6 max-w-4xl mx-auto">
              <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/convert" element={<ConvertPage onGeneratePreview={handleGeneratePreview} />} />
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