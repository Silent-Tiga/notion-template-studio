The following is a snapshot of a Git repository, rendered as a plain-text “dump” for use by a language model. It is structured in three parts:

1. **Table of Contents:**
   A numbered list of every file included, in the order they appear below.

2. **File Sections:**
   Each file is prefixed by:

   ----[N]
   <relative/path/to/file>

   where `N` is the file’s index (matching the ToC). After that line comes the file’s contents (or, if it’s binary or too large, a brief metadata/truncation marker).

3. **End Marker:**
   A final line containing `--END--` indicates the end of the repository snapshot. Any text that follows should be treated as instructions or queries about this repository.

Use this entire dump as context when answering questions. For example, you can reference specific files by their ToC number or path, inspect code snippets, identify configuration values, and so on.

---

Table of Contents:
1. vite-env.d.ts
2. main.tsx
3. index.css
4. App.tsx
5. utils\urlUtils.ts
6. utils\notionParser.ts
7. utils\htmlGenerator.ts
8. utils\exportUtils.ts
9. utils\aiGuideGenerator.ts
10. types\index.ts
11. services\notionAPI.ts
12. services\exportService.ts
13. services\aiService.ts
14. pages\PricingPage.tsx
15. pages\HomePage.tsx
16. pages\ConvertPage.tsx
17. components\SidebarRight.tsx
18. components\SidebarLeft.tsx
19. components\PreviewPanel.tsx
20. components\NotionToHtmlConverter.tsx
21. components\InputSection.tsx
22. components\Icon.tsx
23. components\Icon.d.ts
24. components\Header.tsx
25. components\GuidePreview.tsx
26. components\Footer.tsx
27. components\ExportPanel.tsx
28. assets\logo.svg
29. assets\icons.svg

----[1]
vite-env.d.ts
/// <reference types="vite/client" />

// SVG 模块类型声明
declare module '*.svg' {
  const content: string;
  export default content;
}
----[2]
main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
----[3]
index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --primary: 47 129 247;
    --success: 40 167 69;
    --neutral: 17 24 39;
    --base-100: 255 255 255;
  }
}

@layer components {
  /* GitHub风格卡片样式 */
  .card {
    @apply bg-white border border-neutral-200 rounded-github p-6 shadow-github transition-all duration-300 hover:shadow-github-hover;
  }
  
  /* 侧边栏导航项 */
  .sidebar-item {
    @apply flex items-center gap-3 px-3 py-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 rounded-github transition-colors duration-200 w-full text-left;
  }
  
  .sidebar-item-active {
    @apply bg-neutral-100 text-neutral-900 font-medium;
  }
  
  /* 输入框样式 */
  .input-field {
    @apply w-full px-3 py-2 border border-neutral-200 rounded-github focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all bg-white;
  }
  
  /* GitHub风格按钮 */
  .btn-primary {
    @apply bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-github transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
  }
  
  .btn-secondary {
    @apply border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 font-medium py-2 px-4 rounded-github transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-2;
  }
  
  .btn-success {
    @apply bg-success hover:bg-success/90 text-white font-medium py-2 px-4 rounded-github transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2;
  }
  
  /* 链接样式 */
  .link {
    @apply text-primary hover:text-primary/80 hover:underline decoration-2 underline-offset-2 transition-colors duration-200;
  }
  
  /* 分隔线 */
  .divider {
    @apply border-t border-neutral-200 my-4;
  }
  
  /* 三栏布局容器 */
  .app-layout {
    @apply flex min-h-screen bg-neutral-50 text-neutral-800;
  }
  
  /* 左侧边栏 */
  .sidebar {
    @apply w-60 bg-white border-r border-neutral-200 flex-shrink-0 overflow-y-auto py-4 sticky top-0 h-screen;
  }
  
  /* 主内容区 */
  .main-content {
    @apply flex-1 min-w-0 p-6;
  }
  
  /* 右侧边栏 */
  .right-sidebar {
    @apply w-72 border-l border-neutral-200 flex-shrink-0 overflow-y-auto p-4 sticky top-0 h-screen hidden lg:block;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  /* Icon sizes */
  .icon-xs {
    width: 0.75rem;
    height: 0.75rem;
  }
  
  .icon-sm {
    width: 1rem;
    height: 1rem;
  }
  
  .icon-md {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .icon-lg {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .icon-xl {
    width: 2rem;
    height: 2rem;
  }
  
  .icon-2xl {
    width: 2.5rem;
    height: 2.5rem;
  }
}
----[4]
App.tsx
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
----[5]
utils\urlUtils.ts
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
----[6]
utils\notionParser.ts
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
----[7]
utils\htmlGenerator.ts
// HTML生成工具

/**
 * HTML生成配置选项
 */
export interface HTMLGeneratorOptions {
  title?: string;
  lang?: string;
  metaTags?: Array<{ name: string; content: string }>;
  externalStyles?: string[];
  externalScripts?: string[];
  inlineStyles?: string;
  inlineScripts?: string;
  favicon?: string;
  includeGoogleFonts?: boolean;
  googleFonts?: string[];
}

/**
 * 创建基础HTML结构
 * @param content 页面内容
 * @param options 生成选项
 * @returns 完整的HTML字符串
 */
export const createBasicHTML = (content: string, options?: HTMLGeneratorOptions): string => {
  const defaultOptions: HTMLGeneratorOptions = {
    title: 'Notion 转换页面',
    lang: 'zh-CN',
    metaTags: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: '通过 AI Notion 转换工具生成的精美网页' }
    ],
    externalStyles: [],
    externalScripts: [],
    inlineStyles: '',
    inlineScripts: '',
    favicon: '',
    includeGoogleFonts: false,
    googleFonts: []
  };
  
  const config = { ...defaultOptions, ...options };
  
  // 生成meta标签
  const metaHtml = config.metaTags
    ? config.metaTags.map(tag => `<meta name="${tag.name}" content="${tag.content}">`).join('\n      ') + '\n      ' 
    : '';
  
  // 生成外部样式链接
  const stylesHtml = config.externalStyles
    ? config.externalStyles.map(style => `<link rel="stylesheet" href="${style}">`).join('\n      ') + '\n      ' 
    : '';
  
  // 生成外部脚本链接
  const scriptsHtml = config.externalScripts
    ? config.externalScripts.map(script => `<script src="${script}"></script>`).join('\n      ') + '\n      ' 
    : '';
  
  // 生成Google字体链接
  const googleFontsHtml = config.includeGoogleFonts && config.googleFonts && config.googleFonts.length > 0
    ? `<link rel="preconnect" href="https://fonts.googleapis.com">\n      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n      <link href="https://fonts.googleapis.com/css2?family=${config.googleFonts.join('&family=')}&display=swap" rel="stylesheet">\n      `
    : '';
  
  // 生成favicon链接
  const faviconHtml = config.favicon ? `<link rel="icon" href="${config.favicon}" type="image/svg+xml">\n      ` : '';
  
  return `
<!DOCTYPE html>
<html lang="${config.lang}">
<head>
  <meta charset="UTF-8">
  ${metaHtml}${faviconHtml}${googleFontsHtml}${stylesHtml}${scriptsHtml}
  ${config.inlineStyles ? `<style>${config.inlineStyles}</style>` : ''}
  <title>${config.title}</title>
</head>
<body>
  ${content}
  ${config.inlineScripts ? `<script>${config.inlineScripts}</script>` : ''}
</body>
</html>`;
};

/**
 * 生成响应式CSS样式
 * @param themeColors 主题颜色配置
 * @returns CSS样式字符串
 */
export const generateResponsiveStyles = (themeColors?: Record<string, string>): string => {
  const defaultColors = {
    primary: '#4F46E5',
    secondary: '#8B5CF6',
    accent: '#10B981',
    background: '#ffffff',
    text: '#1F2937',
    'text-secondary': '#4B5563',
    border: '#E5E7EB'
  };
  
  const colors = { ...defaultColors, ...themeColors };
  
  return `
:root {
  --primary-color: ${colors.primary};
  --secondary-color: ${colors.secondary};
  --accent-color: ${colors.accent};
  --background-color: ${colors.background};
  --text-color: ${colors.text};
  --text-secondary-color: ${colors['text-secondary']};
  --border-color: ${colors.border};
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --radius-sm: 0.25rem;
  --radius: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* 标题样式 */
h1, h2, h3, h4, h5, h6 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--primary-color);
}

h1 {
  font-size: 2.25rem;
  font-weight: 700;
}

h2 {
  font-size: 1.875rem;
}

h3 {
  font-size: 1.5rem;
}

@media (min-width: 640px) {
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2.25rem;
  }
  
  h3 {
    font-size: 1.875rem;
  }
}

/* 段落和文本样式 */
p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary-color);
}

strong {
  font-weight: 600;
  color: var(--text-color);
}

/* 链接样式 */
a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

/* 图片样式 */
img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius);
  display: block;
  margin: 2rem 0;
  box-shadow: var(--shadow-md);
}

/* 列表样式 */
ul, ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary-color);
}

/* 卡片样式 */
.card {
  background-color: var(--background-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* 按钮样式 */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border-radius: var(--radius);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  outline: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #4338ca;
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
}

.btn-secondary:hover {
  background-color: #7c3aed;
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

/* 布局辅助类 */
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-4 {
  gap: 1rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-8 {
  gap: 2rem;
}

/* 响应式网格 */
.grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 间距类 */
.mt-4 {
  margin-top: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pt-8 {
  padding-top: 2rem;
}

.pb-8 {
  padding-bottom: 2rem;
}`;
};

/**
 * 压缩HTML字符串
 * @param html 原始HTML字符串
 * @returns 压缩后的HTML字符串
 */
export const minifyHTML = (html: string): string => {
  // 移除注释
  let minified = html.replace(/<!--[^>]*-->/g, '');
  
  // 移除多余的空白字符
  minified = minified.replace(/\s+/g, ' ');
  
  // 移除行首和行尾的空白
  minified = minified.trim();
  
  // 移除HTML标签之间的空白
  minified = minified.replace(/\s+</g, '<');
  minified = minified.replace(/>\s+/g, '>');
  
  return minified;
};

/**
 * 美化HTML字符串（用于调试）
 * @param html 压缩的HTML字符串
 * @returns 格式化后的HTML字符串
 */
export const prettifyHTML = (html: string): string => {
  let tabLevel = 0;
  let result = '';
  let inTag = false;
  let inComment = false;
  let inScript = false;
  let inStyle = false;
  
  for (let i = 0; i < html.length; i++) {
    const char = html[i];
    const nextChar = html[i + 1] || '';
    
    // 处理注释
    if (char === '<' && nextChar === '!') {
      inComment = true;
    }
    
    if (char === '>' && html.substring(i - 2, i + 1) === '-->') {
      inComment = false;
    }
    
    // 处理script标签
    if (!inComment && char === '<' && html.substring(i, i + 7).toLowerCase() === '<script') {
      inScript = true;
    }
    
    if (!inComment && char === '<' && html.substring(i, i + 9).toLowerCase() === '</script>') {
      inScript = false;
    }
    
    // 处理style标签
    if (!inComment && char === '<' && html.substring(i, i + 6).toLowerCase() === '<style') {
      inStyle = true;
    }
    
    if (!inComment && char === '<' && html.substring(i, i + 8).toLowerCase() === '</style>') {
      inStyle = false;
    }
    
    // 不处理脚本和样式内容的格式化
    if (inScript || inStyle || inComment) {
      result += char;
      continue;
    }
    
    // 开始标签
    if (char === '<' && nextChar !== '/') {
      result += '\n' + '  '.repeat(tabLevel) + char;
      tabLevel++;
      inTag = true;
    }
    // 结束标签
    else if (char === '<' && nextChar === '/') {
      tabLevel--;
      result += '\n' + '  '.repeat(tabLevel) + char;
      inTag = true;
    }
    // 标签结束
    else if (char === '>') {
      result += char;
      inTag = false;
    }
    // 普通字符
    else {
      if (!inTag && char === ' ' && result[result.length - 1] === ' ') {
        // 跳过连续的空格
        continue;
      }
      result += char;
    }
  }
  
  // 移除多余的空行
  return result.replace(/\n\s*\n/g, '\n').trim();
};

/**
 * 提取HTML中的关键元素
 * @param html HTML字符串
 * @returns 包含标题、描述、图片等关键元素的对象
 */
export const extractHTMLMetadata = (html: string): Record<string, string | string[]> => {
  const metadata: Record<string, string | string[]> = {};
  
  // 提取标题
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  if (titleMatch && titleMatch[1]) {
    metadata.title = titleMatch[1].trim();
  }
  
  // 提取描述
  const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"/i);
  if (descMatch && descMatch[1]) {
    metadata.description = descMatch[1].trim();
  }
  
  // 提取图片
  const images: string[] = [];
  const imageRegex = /<img\s+[^>]*src="(.*?)"[^>]*>/gi;
  let imageMatch;
  while ((imageMatch = imageRegex.exec(html)) !== null) {
    if (imageMatch[1]) {
      images.push(imageMatch[1].trim());
    }
  }
  
  if (images.length > 0) {
    metadata.images = images;
  }
  
  // 提取链接
  const links: string[] = [];
  const linkRegex = /<a\s+[^>]*href="(.*?)"[^>]*>/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    if (linkMatch[1]) {
      links.push(linkMatch[1].trim());
    }
  }
  
  if (links.length > 0) {
    metadata.links = links;
  }
  
  return metadata;
};
----[8]
utils\exportUtils.ts
/**
 * 导出工具函数
 */
import type { ExportPackage } from '../types';

/**
 * 创建导出包
 * @param htmlContent 要导出的HTML内容
 * @returns 导出包对象
 */
export const createExportPackage = async (htmlContent: string): Promise<ExportPackage> => {
  try {
    // 模拟创建导出包的过程
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 生成一个简化的HTML文件内容（实际项目中可以包含更多样式和脚本）
    const completeHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notion页面导出</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1, h2, h3, h4, h5, h6 { margin-top: 1.5em; margin-bottom: 0.5em; font-weight: 600; }
    p { margin-bottom: 1em; }
    ul, ol { margin-bottom: 1em; padding-left: 1.5em; }
    img { max-width: 100%; height: auto; margin: 1em 0; }
    .container { background-color: white; border-radius: 8px; padding: 40px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
  </style>
</head>
<body>
  <div class="container">
    ${htmlContent}
  </div>
</body>
</html>`;
    
    return {
      htmlFile: {
        name: 'notion-export.html',
        content: completeHtml,
        type: 'text/html'
      },
      assets: [],
      metadata: {
        exportDate: new Date().toISOString(),
        version: '1.0',
        source: 'aiNOTION Converter'
      }
    };
  } catch (error) {
    console.error('创建导出包失败:', error);
    // 返回包含错误信息的导出包
    return {
      htmlFile: {
        name: 'notion-export.html',
        content: '<html><body><h1>导出失败</h1><p>无法创建导出文件，请稍后重试。</p></body></html>',
        type: 'text/html'
      },
      assets: [],
      metadata: {
        exportDate: new Date().toISOString(),
        version: '1.0',
        source: 'aiNOTION Converter',
        error: '导出过程中出现错误'
      }
    };
  }
};
----[9]
utils\aiGuideGenerator.ts
/**
 * AI指南生成器
 */
import type { AIGuide } from '../types';

/**
 * 生成AI优化指南
 * @param notionContent Notion内容
 * @returns AI指南对象
 */
export const generateAIGuide = async (_notionContent: any): Promise<AIGuide> => {
  try {
    // 模拟AI分析过程（实际项目中可以集成真实的AI服务）
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      title: 'Notion页面优化指南',
      steps: [
        {
          id: '1',
          title: '内容结构优化',
          description: '建议将长段落分割为更小的部分，使用更多的小标题提高可读性。',
          priority: 'high'
        },
        {
          id: '2',
          title: '媒体资源添加',
          description: '考虑添加相关图片或视频，增强页面视觉吸引力。',
          priority: 'medium'
        },
        {
          id: '3',
          title: '交互元素',
          description: '添加更多的交互元素，如Toggle列表或复选框，提升用户体验。',
          priority: 'medium'
        }
      ],
      summary: '您的页面内容丰富，通过上述优化可以进一步提升可读性和用户体验。',
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('生成AI指南失败:', error);
    // 返回默认指南结构
    return {
      title: 'Notion页面优化指南',
      steps: [
        {
          id: '1',
          title: '基础结构检查',
          description: '确保页面结构清晰，内容层次分明。',
          priority: 'high'
        }
      ],
      summary: '指南生成过程中遇到问题，请稍后重试。',
      timestamp: new Date().toISOString()
    };
  }
};
----[10]
types\index.ts
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
----[11]
services\notionAPI.ts
// Notion API 服务

// 纯前端直连 Notion API 常量
const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_API_VERSION = '2022-06-28';

/**
 * 从环境变量获取后端API URL（后端已移除）
 */
const getBackendApiUrl = (): string => {
  return '';
};

/**
 * 从Notion链接中提取页面ID
 * @param notionLink Notion页面链接
 * @returns 提取的页面ID或null
 */
export const extractPageId = (notionLink: string): string | null => {
  try {
    // 匹配常见的Notion链接格式
    const regex = /([a-zA-Z0-9]{32}|[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})/;
    const match = notionLink.match(regex);
    
    // 如果没有匹配到ID，但包含'example-page'，返回一个示例ID
    if (!match && notionLink.includes('example-page')) {
      return 'example-page-id';
    }
    
    return match ? match[1] : null;
  } catch (error) {
    console.error('Error extracting Notion page ID:', error);
    return null;
  }
};

/**
 * Notion内容数据结构
 */
export interface NotionContent {
  title: string;
  content: Array<{
    id: string;
    type: 'heading' | 'paragraph' | 'image' | 'list' | 'table' | 'callout' | 'quote' | 'toggle';
    content: string;
    properties?: Record<string, any>;
  }>;
  coverImage?: string;
  icon?: string;
}

// 将Worker返回的块数据规范化为前端渲染使用的简化结构
const getText = (rich: any[] = []): string => {
  try {
    return rich
      .map((r: any) => (typeof r.plain_text === 'string' ? r.plain_text : r.text?.content || ''))
      .join('');
  } catch {
    return '';
  }
};

const normalizeBlocks = (blocks: any[] = []): NotionContent['content'] => {
  return blocks.map((b: any) => {
    const t = b?.type;
    switch (t) {
      case 'paragraph':
        return { id: b.id, type: 'paragraph', content: getText(b.paragraph?.rich_text || []) };
      case 'heading_1':
      case 'heading_2':
      case 'heading_3':
        return { id: b.id, type: 'heading', content: getText(b[t]?.rich_text || []) };
      case 'bulleted_list_item':
        return { id: b.id, type: 'list', content: `<li>${getText(b.bulleted_list_item?.rich_text || [])}</li>` };
      case 'numbered_list_item':
        return { id: b.id, type: 'list', content: `<li>${getText(b.numbered_list_item?.rich_text || [])}</li>` };
      case 'quote':
        return { id: b.id, type: 'quote', content: getText(b.quote?.rich_text || []) };
      case 'callout':
        return { id: b.id, type: 'callout', content: getText(b.callout?.rich_text || []) };
      case 'toggle':
        return { id: b.id, type: 'toggle', content: getText(b.toggle?.rich_text || []) };
      case 'image':
        return { id: b.id, type: 'image', content: b.image?.file?.url || b.image?.external?.url || '' };
      default:
        return { id: b.id, type: 'paragraph', content: getText(b[t]?.rich_text || []) };
    }
  });
};

// 纯前端：封装 fetch JSON
const fetchJson = async (url: string, apiKey: string): Promise<any> => {
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Notion-Version': NOTION_API_VERSION
    }
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Notion API 请求失败 ${resp.status}: ${text}`);
  }
  return resp.json();
};

// 纯前端：分页获取所有块
const fetchAllBlocks = async (pageId: string, apiKey: string): Promise<any[]> => {
  let all: any[] = [];
  let startCursor: string | undefined = undefined;
  // 循环分页
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const url = `${NOTION_API_BASE}/blocks/${pageId}/children?page_size=100${startCursor ? `&start_cursor=${startCursor}` : ''}`;
    const data = await fetchJson(url, apiKey);
    all.push(...(data.results || []));
    if (data.has_more && data.next_cursor) {
      startCursor = data.next_cursor;
    } else {
      break;
    }
  }
  return all;
};

/**
 * 获取Notion页面内容
 * @param pageId Notion页面ID
 * @param apiKey Notion API密钥
 * @returns Promise<NotionContent> Notion内容数据
 */
export const fetchNotionContent = async (pageId: string, apiKey: string): Promise<NotionContent> => {
  try {
    // 纯前端直连 Notion API
    const page = await fetchJson(`${NOTION_API_BASE}/pages/${pageId}`, apiKey);
    const blocks = await fetchAllBlocks(pageId, apiKey);

    // 提取标题（优先title属性，其次首个heading块）
    const titleProp = Object.values(page.properties || {}).find((p: any) => p?.type === 'title') as any;
    const title = getText(titleProp?.title ?? []) || '';

    const normalizedBlocks = normalizeBlocks(blocks || []);
    const finalTitle = title || (normalizedBlocks.find(b => b.type === 'heading')?.content ?? '未命名页面');

    const coverImage = page.cover?.file?.url || page.cover?.external?.url || undefined;
    const icon = page.icon?.emoji || page.icon?.file?.url || page.icon?.external?.url || undefined;

    const normalizedContent: NotionContent = {
      title: finalTitle,
      coverImage,
      icon,
      content: normalizedBlocks
    };

    return normalizedContent;
  } catch (error) {
    console.error('获取Notion内容失败:', error);
    throw new Error('获取Notion内容失败');
  }
};

/**
 * 检查Notion页面是否公开
 * @param pageId Notion页面ID
 * @returns Promise<boolean> 是否公开
 */
export const isNotionPagePublic = async (_pageId: string): Promise<boolean> => {
  try {
    // 前端直连模式下跳过公开性检查，默认返回true
    await new Promise(resolve => setTimeout(resolve, 200));
    return true;
  } catch (error) {
    console.error('Error checking Notion page visibility:', error);
    return false;
  }
};
----[12]
services\exportService.ts
// 导出服务功能
import type { NotionContent } from './notionAPI';
import type { PreviewData, ExportPackage, File as CustomFile } from '../types';
import type { HTMLGeneratorOptions } from '../utils/htmlGenerator';

/**
 * 配置选项（后端已移除，此接口保留但不再使用）
 */
export interface ExportOptions {
  // 已移除后端生成，保留结构避免侵入式改动
  pageId?: string;
  apiKey?: string;
}

/**
 * 从环境变量获取后端API URL（后端已移除）
 */
const getBackendApiUrl = (): string => {
  // 后端已移除，保留占位避免侵入式删除
  return '';
};

/**
 * 网站主题配置
 */
export interface ThemeConfig {
  primaryColor?: string;
  secondaryColor?: string;
  fontFamily?: string;
  fontSize?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

/**
 * 生成HTML预览数据
 * @param notionContent Notion内容数据
 * @param theme 主题配置（可选）
 * @param options 配置选项（可选）
 * @returns PreviewData 预览数据
 */
export const generateHTML = async (notionContent: NotionContent, theme?: ThemeConfig, _options?: ExportOptions): Promise<PreviewData> => {
  try {
    // 纯前端生成HTML：不再调用后端
    const defaultTheme: ThemeConfig = {
      primaryColor: '#4F46E5',
      secondaryColor: '#8B5CF6',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      fontSize: '16px',
      backgroundColor: '#ffffff',
      textColor: '#1F2937',
      accentColor: '#10B981'
    };
    const selectedTheme = { ...defaultTheme, ...theme };

    const htmlContent = createHTMLFromNotionContent(notionContent, selectedTheme);
    const features = extractFeaturesFromContent(notionContent);

    return {
      title: notionContent.title || 'Notion 转换页面',
      description: '通过 AI Notion 转换工具生成的精美网页',
      imageUrl: notionContent.coverImage || getDefaultImage(),
      features: features,
      htmlContent: htmlContent
    };
  } catch (error) {
    console.error('Error generating HTML:', error);
    throw new Error('生成HTML预览失败\n' + (error as Error).message);
  }
};

/**
 * 使用后端API生成HTML（已移除）
 */
async function generateHtmlWithBackend(_notionContent: NotionContent, _theme?: ThemeConfig, _options?: ExportOptions): Promise<PreviewData> {
  throw new Error('后端已移除：请使用纯前端生成HTML');
}

/**
 * 从Notion内容创建HTML
 * @param content Notion内容数据
 * @param theme 主题配置
 * @returns HTML字符串
 */
export const createHTMLFromNotionContent = (content: NotionContent, options: Partial<HTMLGeneratorOptions> & ThemeConfig & { headingColor?: string } = {}): string => {
  const styles = `
    body { font-family: ${options.fontFamily || 'Inter, system-ui, sans-serif'}; color: ${options.textColor || '#1f2937'}; }
    h1, h2, h3 { color: ${options.headingColor || '#111827'}; }
    .container { max-width: 800px; margin: 0 auto; padding: 20px; }
    .hero { background-color: #f3f4f6; padding: 40px; text-align: center; margin-bottom: 20px; }
    .cover { width: 100%; height: 200px; object-fit: cover; border-radius: 12px; }
    .callout { background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; border-radius: 8px; margin: 16px 0; }
    details { margin: 16px 0; }
    details > summary { cursor: pointer; font-weight: 600; }
  `;
  const styleBlock = `<style>${styles}</style>`; // 修复：确保样式变量存在

  // 新增：为标题生成锚点ID，支持 #problems_and_diagnostics 等链接
  const slugify = (text: string): string => {
    if (!text) return 'section';
    return text
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9\u4e00-\u9fa5]+/gi, '_')
      .replace(/_{2,}/g, '_')
      .replace(/^_+|_+$/g, '');
  };

  // 新增：解析显式锚点覆盖，如 "{#id}" 或 末尾 "#id"
  const parseHeadingIdAndText = (text: string): { id: string; display: string } => {
    if (!text) return { id: 'section', display: '' };
    const curly = text.match(/\{#([A-Za-z0-9_-]+)\}/);
    if (curly) {
      return { id: curly[1], display: text.replace(curly[0], '').trim() };
    }
    const trailingHash = text.match(/(?:^|\s)#([A-Za-z0-9_-]+)\s*$/);
    if (trailingHash) {
      return { id: trailingHash[1], display: text.replace(trailingHash[0], '').trim() };
    }
    return { id: slugify(text), display: text };
  };

  const renderBlock = (block: NotionContent['content'][number]): string => {
    switch (block.type) {
      case 'heading': {
        const { id, display } = parseHeadingIdAndText(block.content);
        return `<h2 id="${id}">${display}</h2>`;
      }
      case 'paragraph':
        return `<p>${block.content}</p>`;
      case 'image':
        return `<img src="${block.content}" alt="image" class="cover"/>`;
      case 'list':
        return `<ul>${block.content}</ul>`;
      case 'callout':
        return `<div class="callout">${block.content}</div>`;
      case 'quote':
        return `<blockquote>${block.content}</blockquote>`;
      case 'toggle':
        return `<details><summary>${block.content}</summary></details>`;
      default:
        return `<div>${block.content}</div>`;
    }
  };
  // 使用一次以避免TS6133未使用警告
  void renderBlock;
  let bodyContent = '';
  
  // 添加封面图片
  if (content.coverImage) {
    bodyContent += `<img src="${content.coverImage}" alt="Cover" class="cover-image">`;
  }
  
  // 添加标题（带锚点ID）
  const { id: titleId, display: titleDisplay } = parseHeadingIdAndText(content.title || '');
  bodyContent += `<h1 id="${titleId}">${titleDisplay}</h1>`;
  
  // 添加内容块
  content.content.forEach(block => {
    switch (block.type) {
      case 'heading': {
        const { id, display } = parseHeadingIdAndText(block.content);
        bodyContent += `<h2 id="${id}">${display}</h2>`;
        break;
      }
      case 'paragraph':
        bodyContent += `<p>${block.content}</p>`;
        break;
      case 'image':
        bodyContent += `<img src="${block.content}" alt="Content image">`;
        break;
      case 'list':
        bodyContent += `<ul>${block.content}</ul>`; // 修复：确保列表包含<ul>
        break;
      case 'callout':
        bodyContent += `<div class="callout">${block.content}</div>`;
        break;
      case 'quote':
        bodyContent += `<div class="quote">${block.content}</div>`;
        break;
      default:
        bodyContent += `<p>${block.content}</p>`;
    }
  });
  
  // 包装在完整的HTML结构中
  return `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${content.title || 'Notion 转换页面'}</title>
      ${styleBlock}
    </head>
    <body>
      <div class="container">
        ${bodyContent}
      </div>
    </body>
    </html>
  `;
};

/**
 * 从内容中提取特征列表
 * @param content Notion内容数据
 * @returns 特征数组
 */
const extractFeaturesFromContent = (content: NotionContent): Array<{id: string; title: string; description: string}> => {
  const features: Array<{id: string; title: string; description: string}> = [];
  
  // 检查内容类型，添加相应的特征
  if (content.content.some(item => item.type === 'image')) {
    features.push({
      id: 'feature-1',
      title: '精美图片展示',
      description: '页面包含高质量图片，提升视觉体验'
    });
  }
  
  if (content.content.some(item => item.type === 'list')) {
    features.push({
      id: 'feature-2',
      title: '结构化信息列表',
      description: '内容采用列表形式组织，便于阅读和理解'
    });
  }
  
  if (content.content.some(item => item.type === 'callout')) {
    features.push({
      id: 'feature-3',
      title: '重要提示突出显示',
      description: '关键信息通过提示框突出显示'
    });
  }
  
  if (content.coverImage) {
    features.push({
      id: 'feature-4',
      title: '专业封面图片',
      description: '页面配有专业封面图片，提升整体美观度'
    });
  }
  
  // 如果没有提取到足够的特征，添加默认特征
  if (features.length < 3) {
    const defaultFeatures = [
      {
        id: 'feature-default-1',
        title: '精美响应式设计',
        description: '适配各种屏幕尺寸的响应式布局'
      },
      {
        id: 'feature-default-2',
        title: '易于阅读排版',
        description: '优化的字体和间距，提升阅读体验'
      },
      {
        id: 'feature-default-3',
        title: 'AI优化内容',
        description: '通过AI技术优化的内容展示'
      },
      {
        id: 'feature-default-4',
        title: '快速加载性能',
        description: '优化的代码结构，确保快速加载'
      },
      {
        id: 'feature-default-5',
        title: 'SEO友好结构',
        description: '符合搜索引擎优化的页面结构'
      }
    ];
    
    defaultFeatures.forEach(feature => {
      if (!features.some(f => f.title === feature.title) && features.length < 5) {
        features.push(feature);
      }
    });
  }
  
  return features.slice(0, 5); // 最多返回5个特征
};

/**
 * 获取默认图片URL
 * @returns 默认图片URL
 */
const getDefaultImage = (): string => {
  // 提供几个备选的默认图片
  const defaultImages = [
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  ];
  
  // 随机选择一个默认图片
  return defaultImages[Math.floor(Math.random() * defaultImages.length)];
};

/**
 * 创建导出包
 * @param previewData 预览数据
 * @returns Promise<ExportPackage> 导出包信息
 */
export const createExportPackage = async (previewData: PreviewData): Promise<ExportPackage> => {
  try {
    // 模拟打包过程
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 生成模拟的下载链接（实际应用中应返回真实的下载URL）
    const downloadUrl = '#'; // 在真实应用中，这里应该是实际的文件下载链接
    
    // 生成文件名
    const safeTitle = previewData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').trim();
    const fileName = `${safeTitle}-website-package.zip`;
    
    // 创建一个模拟的File对象
    const htmlFile: CustomFile = {
      name: fileName,
      type: 'application/zip',
      content: downloadUrl // 这里简化处理，实际应用中应该是文件内容
    };
    
    return {
      htmlFile: htmlFile,
      assets: [],
      metadata: {
        exportDate: new Date().toISOString(),
        version: '1.0.0',
        source: 'AI Notion Converter',
        title: previewData.title,
        description: previewData.description
      }
    };
  } catch (error) {
    console.error('Error creating export package:', error);
    throw new Error('创建导出包失败，请稍后重试。');
  }
};

/**
 * 生成预览图（模拟）
 * @param htmlContent HTML内容
 * @returns Promise<string> 预览图URL
 */
export const generatePreviewImage = async (_htmlContent: string): Promise<string> => {
  try {
    // 模拟生成预览图过程
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 返回模拟的预览图URL
    return 'https://via.placeholder.com/800x450?text=Website+Preview';
  } catch (error) {
    console.error('Error generating preview image:', error);
    throw new Error('生成预览图失败');
  }
};
----[13]
services\aiService.ts
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
----[14]
pages\PricingPage.tsx
import React, { useContext } from 'react';
import { AppContext } from '../App';

const PricingPage: React.FC = () => {
  const { showNotification } = useContext(AppContext);
  
  return (
    <div id="pricing" className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl mb-16 animate-fade-in relative overflow-hidden shadow-card">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">简单透明的定价方案</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 免费版 */}
          <div className="bg-white rounded-2xl shadow-card p-8 border border-neutral-100 hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop relative group">
            {/* 渐变光晕效果 */}
            <span className="absolute -inset-0.5 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"></span>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">免费版</h3>
                <p className="text-gray-500">适合个人使用</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥0</span>
                <span className="text-gray-500">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>最多转换 5 个 Notion 页面</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>基础自定义选项</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>HTML 导出</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">✗</span>
                  <span>高级 AI 指南</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">✗</span>
                  <span>自定义域名</span>
                </li>
              </ul>
              <button onClick={() => showNotification('您已在使用免费版', 'info')} className="w-full py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary/5 transition-colors duration-300 group-hover:shadow-sm">
                开始使用
              </button>
            </div>
          </div>
          
          {/* 专业版 */}
          <div className="bg-white rounded-2xl shadow-card p-8 border-2 border-primary relative hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop scale-105 transform" style={{ animationDelay: '0.2s' }}>
            {/* 渐变光晕效果 */}
            <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-30"></span>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full shadow-md">
              最受欢迎
            </div>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">专业版</h3>
                <p className="text-gray-500">适合个人开发者和小团队</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥39</span>
                <span className="text-gray-500">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>无限 Notion 页面转换</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>完整自定义选项</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>多格式导出</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>高级 AI 指南</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">✗</span>
                  <span>自定义域名</span>
                </li>
              </ul>
              <button onClick={() => showNotification('感谢您对专业版的兴趣', 'success')} className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg pulse-glow">
                升级专业版
              </button>
            </div>
          </div>
          
          {/* 企业版 */}
          <div className="bg-white rounded-2xl shadow-card p-8 border border-neutral-100 hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop relative group" style={{ animationDelay: '0.4s' }}>
            {/* 渐变光晕效果 */}
            <span className="absolute -inset-0.5 bg-gradient-to-r from-secondary/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"></span>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">企业版</h3>
                <p className="text-gray-500">适合企业和大型团队</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥199</span>
                <span className="text-gray-500">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>无限 Notion 页面转换</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>完整自定义选项</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>多格式导出</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>高级 AI 指南</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>自定义域名</span>
                </li>
              </ul>
              <button onClick={() => showNotification('联系我们获取企业解决方案', 'info')} className="w-full py-3 rounded-xl border border-secondary text-secondary font-medium hover:bg-secondary/5 transition-colors duration-300 group-hover:shadow-sm">
                联系销售
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
----[15]
pages\HomePage.tsx
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
----[16]
pages\ConvertPage.tsx
import React, { useState, useContext } from 'react';
import InputSection from '../components/InputSection';
import PreviewPanel from '../components/PreviewPanel';
import GuidePreview from '../components/GuidePreview';
import ExportPanel from '../components/ExportPanel';
import { fetchNotionContent } from '../services/notionAPI';
import { generateHTML, createExportPackage } from '../services/exportService';
import { generateAIGuide } from '../services/aiService';
import { extractPageId } from '../utils/urlUtils';
import type { ExportPackage, AIGuide, PreviewData } from '../types';
import { AppContext } from '../App';

interface ConvertPageProps {
  onGeneratePreview?: (notionLink: string) => Promise<void>;
}

const ConvertPage: React.FC<ConvertPageProps> = () => {
  // 状态管理
  const [notionLink, setNotionLink] = useState('');
  const [generatedPreview, setGeneratedPreview] = useState<PreviewData | null>(null);
  const [aiGuide, setAIGuide] = useState<AIGuide | null>(null);
  const [exportPackage, setExportPackage] = useState<ExportPackage | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  // 已移除后端切换
  // const [useBackendAPI, setUseBackendAPI] = useState(false);
  
  const { showNotification } = useContext(AppContext);
  
  // 处理生成预览
  const handleGeneratePreview = async (link: string, apiKey: string) => {
    if (!link) {
      showNotification('请输入Notion链接', 'warning');
      return;
    }

    if (!apiKey) {
      showNotification('请输入Notion API密钥', 'warning');
      return;
    }

    setIsProcessing(true);
    try {
      const pageId = extractPageId(link);
      if (!pageId) {
        showNotification('无效的Notion链接，请检查后重试。', 'error');
        setIsProcessing(false);
        return;
      }
      
      // 显示进度通知
      showNotification('正在获取Notion内容...', 'info');
      
      // 获取Notion内容（纯前端）
      const notionContent = await fetchNotionContent(pageId, apiKey);
      
      // 生成预览数据（纯前端生成HTML）
      const previewData = await generateHTML(notionContent);
      setGeneratedPreview(previewData);
      
      // 显示进度通知
      showNotification('正在生成AI优化指南...', 'info');
      
      // 生成AI指南
      const guide = await generateAIGuide(notionContent);
      setAIGuide(guide);
      
      // 显示进度通知
      showNotification('正在准备导出包...', 'info');
      
      // 生成导出包
      const exportPackage = await createExportPackage(previewData);
      setExportPackage(exportPackage);
      
      showNotification('转换成功！您可以预览网站和导出文件。', 'success');
    } catch (error) {
      const msg = (error as Error).message || '';
      if (msg.includes('401') || msg.includes('未授权')) {
        showNotification('Notion 页面未授权，请在页面中添加 Integration', 'error');
      } else if (msg.includes('404') || msg.includes('不存在') || msg.includes('无效')) {
        showNotification('页面不存在或链接无效，请检查 URL', 'error');
      } else if (msg.includes('API密钥') || msg.includes('apiKey')) {
        showNotification('API Key 无效或缺失，请检查输入', 'error');
      } else {
        showNotification('转换失败，请检查Notion链接是否正确', 'error');
      }
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-neutral-900">
        转换Notion文档
      </h2>
      
      {/* 内容区域 - 网格布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <div className="card">
          <InputSection 
            onGenerate={handleGeneratePreview}
            isProcessing={isProcessing}
            notionLink={notionLink}
            onLinkChange={setNotionLink}
          />
          
          {/* 已移除后端API选择选项 */}
        </div>
        <div className="card">
          <PreviewPanel 
            previewData={generatedPreview}
            aiGuide={aiGuide}
            isLoading={isProcessing && !generatedPreview}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <GuidePreview 
            guide={aiGuide}
            isLoading={isProcessing && !aiGuide}
            onShowNotification={showNotification}
          />
        </div>
        <div className="card">
          <ExportPanel 
            exportPackage={exportPackage}
            isProcessing={isProcessing && !exportPackage}
          />
        </div>
      </div>
    </div>
  );
};

export default ConvertPage;
----[17]
components\SidebarRight.tsx
import React from 'react';

const SidebarRight: React.FC = () => {
  // 模拟最新动态数据
  const latestUpdates = [
    {
      time: '3小时前',
      description: '新增支持 Notion 数据库导出',
      icon: '🆕'
    },
    {
      time: '1天前',
      description: '优化移动端适配',
      icon: '⚡️'
    },
    {
      time: '2天前',
      description: '上线多语言支持',
      icon: '🌐'
    }
  ];

  return (
    <div className="w-full lg:w-80 p-4">
      <div className="bg-neutral-100 rounded-github p-5">
        <h3 className="text-sm font-semibold text-neutral-900 mb-4">最新动态</h3>
        <ul className="space-y-3 mb-4">
          {latestUpdates.map((update, index) => (
            <li key={index} className="flex items-start">
              <span className="text-neutral-500 mr-2 mt-0.5">{update.icon}</span>
              <span className="text-sm text-neutral-600">
                <span className="text-neutral-500">{update.time}：</span>{update.description}
              </span>
            </li>
          ))}
        </ul>
        <button className="text-sm text-primary hover:text-primary-dark">
          查看更多更新 →
        </button>
      </div>
    </div>
  );
};

export default SidebarRight;
----[18]
components\SidebarLeft.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarLeft: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // 定义导航项目
  const navItems = [
    {
      path: '/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      label: 'Home'
    },
    {
      path: '/convert',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      label: 'Convert'
    },
    {
      path: '/pricing',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
      ),
      label: 'Pricing'
    },
    {
      path: '/examples',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      label: 'Examples'
    }
  ];

  // 定义辅助链接
  const helpLinks = [
    {
      path: '/settings',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      label: 'Settings'
    },
    {
      path: '/help',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" x2="12.01" y1="16" y2="16"></line>
          <path d="M11.35 8a1.4 1.4 0 0 0-2.22-.01L6.8 9.8a1 1 0 1 0 1.5 1.35l1.45-1.2a1 1 0 0 1 1.2-.08l2.75 1a1 1 0 0 0 1-.17l1.4-1.4a1 1 0 0 0-1.31-1.5l-1.05.62a1.19 1.19 0 0 1-1.12 0Z"></path>
        </svg>
      ),
      label: 'Help'
    }
  ];

  // 定义法律链接
  const legalLinks = [
    {
      path: '/privacy',
      label: 'Privacy Policy'
    },
    {
      path: '/terms',
      label: 'Terms of Service'
    }
  ];

  return (
    <div className="w-full lg:w-60 bg-neutral-100 h-screen fixed lg:sticky top-0 left-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-4 border-b border-neutral-200">
        <h2 className="text-xl font-bold text-neutral-900">AI Notion</h2>
      </div>
      
      {/* 主导航 */}
      <nav className="p-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-github text-sm mb-1 transition-colors ${pathname === item.path ? 'bg-neutral-200 text-primary' : 'text-neutral-700 hover:bg-neutral-200'}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      
      {/* 分隔线 */}
      <div className="my-2 border-t border-neutral-200 px-4">
        <hr />
      </div>
      
      {/* 帮助链接 */}
      <nav className="p-2">
        {helpLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-3 py-2 rounded-github text-sm mb-1 text-neutral-700 hover:bg-neutral-200 transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      
      {/* 分隔线 */}
      <div className="my-2 border-t border-neutral-200 px-4">
        <hr />
      </div>
      
      {/* 法律链接 */}
      <nav className="p-2">
        {legalLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-3 py-2 text-xs text-neutral-500 hover:text-neutral-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      
      {/* 版权信息 */}
      <div className="mt-auto p-4 border-t border-neutral-200">
        <p className="text-xs text-neutral-500">
          © 2023 AI Notion. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SidebarLeft;
----[19]
components\PreviewPanel.tsx
import React, { useState } from 'react';
import type { PreviewData, AIGuide } from '../types';
import { Eye, Download, Share2, Sparkles } from 'lucide-react';

interface PreviewPanelProps {
  previewData: PreviewData | null;
  aiGuide?: AIGuide | null;
  isLoading: boolean;
  onExportClick?: () => void;
  onShareClick?: () => void;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ previewData, aiGuide, isLoading, onExportClick, onShareClick }) => {
  const [activeTab, setActiveTab] = useState<'website' | 'guide'>('website');
  const [progress, setProgress] = useState(0);

  // 模拟加载进度
  React.useEffect(() => {
    if (isLoading && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + Math.floor(Math.random() * 15) + 5, 100));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, progress]);

  // 重置进度条
  React.useEffect(() => {
    if (!isLoading) {
      setProgress(0);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="p-5 border border-neutral-200 rounded-github bg-white">
        <div className="flex items-center gap-3 mb-8">
          <Eye className="text-primary" size={24} />
          <h2 className="text-xl font-bold text-neutral-900">预览效果</h2>
        </div>
        
        <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-neutral-800 mb-4">正在生成预览</h3>
            <p className="text-neutral-600 text-center max-w-md mb-6">AI正在分析您的Notion内容并创建网页</p>
            
            <div className="mt-6 w-full max-w-md h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full"
                style={{width: `${progress}%`}}
              ></div>
            </div>
            <div className="mt-3 text-sm text-neutral-500">
              {progress < 30 && '正在解析Notion内容...'}
              {progress >= 30 && progress < 70 && '正在优化页面布局...'}
              {progress >= 70 && '正在生成预览图像...'}
            </div>
          </div>
      </div>
    );
  }

  if (!previewData) {
    return (
      <div className="p-5 border border-neutral-200 rounded-github bg-white">
        <div className="flex items-center gap-3 mb-8">
          <Eye className="text-primary" size={24} />
          <h2 className="text-xl font-bold text-neutral-900">预览效果</h2>
        </div>
        
        <div className="p-8 border border-neutral-200 rounded-github text-center">
          <div className="bg-primary/5 rounded-full p-5 mb-6 inline-block">
            <Eye className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-neutral-800 mb-4">预览将显示在这里</h3>
          <p className="text-neutral-600 max-w-md mx-auto mb-6">
            输入Notion链接后，您将在此处看到生成的网页预览。
          </p>
          <div className="bg-neutral-50 p-4 rounded-github border border-neutral-200 text-neutral-600 max-w-md mx-auto">
            <p className="flex items-center gap-2 mb-2 font-medium text-primary">
              <Sparkles size={16} className="text-primary" />
              智能提示
            </p>
            <p className="text-sm">预览内容将完全匹配您的Notion页面结构和设计，并由AI自动优化布局和样式。</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 border border-neutral-200 rounded-github bg-white">
      <div className="flex items-center gap-3 mb-8">
        <Eye className="text-primary" size={24} />
        <h2 className="text-xl font-bold text-neutral-900">预览效果</h2>
      </div>
      
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <p className="text-neutral-600">
          查看转换后的网站效果或AI生成的优化指南
        </p>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveTab('website')}
            className={`px-4 py-2 rounded-github text-sm font-medium ${activeTab === 'website' ? 'bg-primary text-white' : 'text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
          >
            网站预览
          </button>
          <button 
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 rounded-github text-sm font-medium ${activeTab === 'guide' ? 'bg-primary text-white' : 'text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
            disabled={!aiGuide}
          >
            AI指南
          </button>
        </div>
      </div>
      
      <div className="border border-neutral-200 rounded-github overflow-hidden bg-white">
        {/* 模拟浏览器窗口 */}
        <div className="bg-neutral-800 px-4 py-2 flex items-center border-b border-neutral-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center text-xs text-neutral-400 truncate px-4">
            https://ai-notion-preview.com/your-page
          </div>
          <div className="w-8"></div> {/* 占位符，用于平衡布局 */}
        </div>
        
        {/* 预览内容 */}
        <div className="bg-white p-6">
          {activeTab === 'website' ? (
            // 使用生成的 HTML 内容进行真实预览，而不是模板占位
            previewData?.htmlContent ? (
              <div className="border border-neutral-200 rounded-github overflow-hidden">
                <iframe
                  srcDoc={previewData.htmlContent}
                  title="Notion页面预览"
                  className="w-full min-h-[600px]"
                  sandbox="allow-same-origin allow-scripts"
                />
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-primary/5 rounded-full p-5 mb-6 inline-block">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-neutral-800 mb-3">暂无HTML内容</h3>
                <p className="text-neutral-600 text-sm">请先生成预览或检查转换是否成功。</p>
              </div>
            )
          ) : aiGuide ? (
            <div className="bg-neutral-50 rounded-github p-5 border border-neutral-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-github flex items-center justify-center text-primary border border-neutral-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-800">AI优化指南</h3>
                </div>
                
                <div className="space-y-5">
                  {aiGuide.steps.map((step, index) => (
                    <div key={step.id || index} className="p-5 rounded-github border border-neutral-200 bg-white">
                      <h4 className="font-medium text-neutral-800 mb-3 flex items-center gap-3">
                        <div className={`${step.priority === 'high' ? 'bg-primary/10 text-primary' : 'bg-neutral-100 text-neutral-600'} w-7 h-7 rounded-github flex items-center justify-center text-xs font-bold`}>{index + 1}</div>
                        {step.title}
                      </h4>
                      <p className="text-neutral-600 text-sm mb-4">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center bg-neutral-50 rounded-github">
                <div className="bg-white rounded-full p-4 mb-6 border border-neutral-200">
                  <Sparkles className="w-6 h-6 text-neutral-400" />
                </div>
                <h3 className="text-lg font-medium text-neutral-800 mb-3">AI指南生成中</h3>
                <p className="text-neutral-600 mb-6 text-sm">请稍候，我们正在为您生成详细的优化指南</p>
                <div className="w-40 h-2 bg-neutral-200 rounded-github overflow-hidden">
                  <div className="h-full w-3/4 bg-primary rounded-github" />
                </div>
              </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex flex-wrap justify-end gap-3">
        <button 
          onClick={onShareClick}
          className="px-4 py-2 border border-neutral-300 rounded-github text-neutral-700 hover:bg-neutral-50 flex items-center gap-2"
        >
          <Share2 size={16} />
          分享预览
        </button>
        <button 
          onClick={onExportClick}
          className="px-4 py-2 bg-primary text-white rounded-github hover:bg-primary-dark flex items-center gap-2"
        >
          <Download size={16} />
          导出产品包
        </button>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">预览</h3>
        <button
          type="button"
          onClick={() => {
            if (!previewData?.htmlContent) return;
            const blob = new Blob([previewData.htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
          }}
          className="px-3 py-2 text-sm rounded-md bg-primary text-white hover:opacity-90"
          disabled={!previewData?.htmlContent}
        >
          在新标签页打开
        </button>
      </div>
    </div>
  );
};

export default PreviewPanel;
----[20]
components\NotionToHtmlConverter.tsx
import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

// 环境变量
const CLOUDFLARE_WORKER_URL = process.env.REACT_APP_CLOUDFLARE_WORKER_URL || 'http://localhost:8787';

interface ConvertResult {
  success: boolean;
  title?: string;
  htmlContent?: string;
  previewUrl?: string;
  error?: string;
}

interface ThemeOptions {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
}

/**
 * Notion到HTML转换组件
 * 用于展示如何调用Cloudflare Workers API进行Notion内容转换
 */
export const NotionToHtmlConverter: React.FC = () => {
  // 状态管理
  const [notionUrl, setNotionUrl] = useState<string>('');
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [conversionResult, setConversionResult] = useState<ConvertResult | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemeOptions>({
    primaryColor: '#4F46E5',
    secondaryColor: '#8B5CF6',
    backgroundColor: '#ffffff',
    textColor: '#1F2937',
  });
  const [showPreview, setShowPreview] = useState<boolean>(false);

  /**
   * 从Notion URL提取页面ID
   * @param url - Notion页面URL
   * @returns 页面ID或null
   */
  const extractNotionPageId = (url: string): string | null => {
    try {
      const parsedUrl = new URL(url);
      const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
      
      // 处理不同格式的Notion URL
      if (pathParts.length >= 2 && parsedUrl.hostname.includes('notion.so')) {
        // 格式: notion.so/workspace/PageId
        return pathParts[1].split('-').pop() || null;
      } else if (pathParts.length >= 1 && parsedUrl.hostname.includes('notion.site')) {
        // 格式: notion.site/PageId
        return pathParts[0].split('-').pop() || null;
      }
      
      return null;
    } catch (error) {
      console.error('Invalid Notion URL:', error);
      return null;
    }
  };

  /**
   * 处理转换请求
   */
  const handleConvert = async () => {
    // 验证URL
    if (!notionUrl.trim()) {
      alert('请输入Notion页面URL');
      return;
    }

    const pageId = extractNotionPageId(notionUrl);
    if (!pageId) {
      alert('无法从URL中提取Notion页面ID，请检查URL格式');
      return;
    }

    setIsConverting(true);
    setConversionResult(null);
    
    try {
      // 调用Cloudflare Workers API
      const response = await fetch(`${CLOUDFLARE_WORKER_URL}/api/notion-to-html`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageId,
          theme: selectedTheme
        }),
      });

      if (!response.ok) {
        throw new Error(`API调用失败: ${response.statusText}`);
      }

      const result: ConvertResult = await response.json();
      setConversionResult(result);
      
      if (result.success) {
        console.log('转换成功:', result);
      } else {
        alert(`转换失败: ${result.error}`);
      }
    } catch (error) {
      console.error('转换过程中发生错误:', error);
      alert(`转换过程中发生错误: ${error instanceof Error ? error.message : '未知错误'}`);
    } finally {
      setIsConverting(false);
    }
  };

  /**
   * 下载HTML文件
   */
  const downloadHtml = () => {
    if (!conversionResult?.htmlContent) return;
    
    const blob = new Blob([conversionResult.htmlContent], { type: 'text/html;charset=utf-8' });
    const fileName = `${conversionResult.title || 'notion-page'}.html`;
    saveAs(blob, fileName);
  };

  /**
   * 打包下载HTML和资源
   */
  const downloadZip = async () => {
    if (!conversionResult?.htmlContent) return;
    
    const zip = new JSZip();
    const fileName = conversionResult.title || 'notion-page';
    
    // 添加HTML文件
    zip.file(`${fileName}.html`, conversionResult.htmlContent);
    
    // 在实际应用中，这里可以添加更多资源文件
    // 例如从HTML中提取的图片等
    
    try {
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, `${fileName}.zip`);
    } catch (error) {
      console.error('创建ZIP文件失败:', error);
      alert('打包下载失败，请稍后重试');
    }
  };

  /**
   * 更新主题颜色
   */
  const updateThemeColor = (property: keyof ThemeOptions, value: string) => {
    setSelectedTheme(prev => ({
      ...prev,
      [property]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Notion 页面转换工具</h2>
      
      <div className="space-y-6">
        {/* URL输入区域 */}
        <div className="space-y-2">
          <label htmlFor="notionUrl" className="block text-sm font-medium text-gray-700">
            Notion 页面 URL
          </label>
          <input
            type="text"
            id="notionUrl"
            value={notionUrl}
            onChange={(e) => setNotionUrl(e.target.value)}
            placeholder="https://www.notion.so/..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* 主题配置区域 */}
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-medium text-gray-800 mb-3">主题配置</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">主色调</label>
              <input
                type="color"
                value={selectedTheme.primaryColor}
                onChange={(e) => updateThemeColor('primaryColor', e.target.value)}
                className="w-full h-10 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">次要色调</label>
              <input
                type="color"
                value={selectedTheme.secondaryColor}
                onChange={(e) => updateThemeColor('secondaryColor', e.target.value)}
                className="w-full h-10 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">背景色</label>
              <input
                type="color"
                value={selectedTheme.backgroundColor}
                onChange={(e) => updateThemeColor('backgroundColor', e.target.value)}
                className="w-full h-10 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">文字颜色</label>
              <input
                type="color"
                value={selectedTheme.textColor}
                onChange={(e) => updateThemeColor('textColor', e.target.value)}
                className="w-full h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* 转换按钮 */}
        <button
          onClick={handleConvert}
          disabled={isConverting}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isConverting ? '转换中...' : '开始转换'}
        </button>

        {/* 转换结果区域 */}
        {conversionResult?.success && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-3">转换结果</h3>
            
            {/* 页面标题 */}
            {conversionResult.title && (
              <div className="mb-4">
                <p className="text-sm text-gray-600">页面标题:</p>
                <p className="font-medium text-gray-900">{conversionResult.title}</p>
              </div>
            )}

            {/* 操作按钮 */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={downloadHtml}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                下载HTML
              </button>
              <button
                onClick={downloadZip}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                打包下载
              </button>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
              >
                {showPreview ? '隐藏预览' : '预览HTML'}
              </button>
            </div>

            {/* 预览区域 */}
            {showPreview && conversionResult.htmlContent && (
              <div className="mt-4">
                <div className="text-sm text-gray-600 mb-2">HTML预览:</div>
                <div className="border border-gray-300 rounded-md overflow-hidden">
                  <iframe
                    srcDoc={conversionResult.htmlContent}
                    title="Notion页面预览"
                    className="w-full min-h-[400px]"
                    sandbox="allow-same-origin allow-scripts"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* 错误信息 */}
        {conversionResult?.error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
            <p>错误: {conversionResult.error}</p>
          </div>
        )}
      </div>

      {/* 使用说明 */}
      <div className="mt-8 p-4 bg-blue-50 rounded-md">
        <h3 className="text-md font-medium text-blue-800 mb-2">使用说明</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>1. 在输入框中粘贴Notion页面的公开URL</li>
          <li>2. 选择您喜欢的主题颜色</li>
          <li>3. 点击"开始转换"按钮</li>
          <li>4. 转换完成后，可以下载HTML文件或打包下载</li>
          <li>5. 也可以在页面中预览转换后的内容</li>
        </ul>
      </div>
    </div>
  );
};

export default NotionToHtmlConverter;
----[21]
components\InputSection.tsx
import React, { useState } from 'react';

interface InputSectionProps {
  onGenerate: (link: string, apiKey: string) => Promise<void>;
  isProcessing: boolean;
  notionLink: string;
  onLinkChange: (link: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ onGenerate, isProcessing, notionLink, onLinkChange }) => {
  const [error, setError] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [apiKeyError, setApiKeyError] = useState<string>('');
  const [showApiKey, setShowApiKey] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    let hasError = false;
    
    if (!notionLink.trim()) {
      setError('请输入Notion页面链接');
      hasError = true;
    } else {
      // 简单的URL验证
      try {
        new URL(notionLink);
        setError('');
      } catch (err) {
        setError('请输入有效的URL');
        hasError = true;
      }
    }
    
    if (!apiKey.trim()) {
      setApiKeyError('请输入Notion API密钥');
      hasError = true;
    } else {
      // 放宽格式校验：只要非空即可，允许不同前缀（如 secret_, ntn_ 等）
      setApiKeyError('');
    }
    
    if (!hasError) {
      onGenerate(notionLink, apiKey);
    }
  };

  const handleClear = (): void => {
    onLinkChange('');
    setError('');
    setApiKey('');
    setApiKeyError('');
  };

  return (
    <div className="p-5">
      <h3 className="text-lg font-semibold mb-5 text-neutral-900">输入Notion链接</h3>
      
      <div className="bg-neutral-50 border border-neutral-200 rounded-github p-4 mb-5">
          <h4 className="font-medium text-neutral-700 mb-2">准备您的Notion页面</h4>
          <ul className="text-sm text-neutral-600 space-y-2">
            <li>1. 确保您的Notion页面已添加API集成的访问权限</li>
            <li>2. 在Notion页面中点击"分享"，然后邀请您的集成</li>
            <li>3. 提供有效的页面链接和API密钥</li>
          </ul>
        </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="notion-link" className="block text-sm font-medium text-neutral-700 mb-1">
            Notion页面链接
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
              🔗
            </div>
            <input
              id="notion-link"
              type="text"
              value={notionLink}
              onChange={(e) => onLinkChange(e.target.value)}
              placeholder="https://www.notion.so/your-page"
              className={`w-full pl-10 pr-10 py-2 rounded-github border ${error ? 'border-red-300' : 'border-neutral-300'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
              disabled={isProcessing}
            />
            {notionLink && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                disabled={isProcessing}
                aria-label="清除输入"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
          {error && (
            <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-github">
              {error}
            </div>
          )}
        </div>
        
        <div>
          <label htmlFor="api-key" className="block text-sm font-medium text-neutral-700 mb-1">
            Notion API密钥
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
              🔑
            </div>
            <input
              id="api-key"
              type={showApiKey ? "text" : "password"}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="输入你的Notion API密钥"
              className={`w-full pl-10 pr-10 py-2 rounded-github border ${apiKeyError ? 'border-red-300' : 'border-neutral-300'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
              disabled={isProcessing}
            />
            <button
              type="button"
              onClick={() => setShowApiKey(!showApiKey)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
              disabled={isProcessing}
              aria-label={showApiKey ? "隐藏密钥" : "显示密钥"}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 10.5A2.5 2.5 0 1 0 8 5.5a2.5 2.5 0 0 0 0 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          {apiKeyError && (
            <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-github">
              {apiKeyError}
            </div>
          )}
          <div className="mt-2 text-xs text-neutral-500">
            <a href="https://www.notion.so/my-integrations" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              如何获取Notion API密钥？
            </a>
          </div>
        </div>
        
        <div className="space-y-3 pt-4">
          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full py-2 px-4 rounded-github font-medium text-white transition-colors ${isProcessing ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'}`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                <span>处理中...</span>
              </div>
            ) : (
              <span>生成预览</span>
            )}
          </button>
          
          <button
            type="button"
            onClick={() => {
            onLinkChange('https://www.notion.so/example-page');
            onGenerate('https://www.notion.so/example-page', apiKey);
          }}
            disabled={isProcessing}
            className={`w-full py-2 px-4 rounded-github font-medium transition-colors ${isProcessing ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed' : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
          >
            试用示例
          </button>
        </div>
      </form>
      
      {/* 操作流程说明 */}
      <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200 rounded-github">
        <h4 className="font-medium text-neutral-900 mb-3">操作流程</h4>
        <ol className="text-sm text-neutral-700 space-y-2">
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">1</span>
            <span>粘贴您的Notion公开页面链接</span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">2</span>
            <span>点击"生成预览"按钮</span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">3</span>
            <span>等待AI生成网站预览</span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">4</span>
            <span>查看并导出您的新网站</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default InputSection;
----[22]
components\Icon.tsx
import React from 'react';

export type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name: string;
  size?: IconSize;
  className?: string;
  color?: string;
  strokeWidth?: number;
  hoverEffect?: boolean;
  [key: string]: any;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'md', 
  className = '', 
  color = 'currentColor',
  strokeWidth = 2,
  hoverEffect = false,
  ...props 
}) => {
  const sizeClasses = {
    '2xs': 'w-2 h-2',
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  const hoverClasses = hoverEffect ? 'transition-all duration-300 hover:scale-110' : '';
  const iconSizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <svg 
      className={`${iconSizeClass} ${hoverClasses} ${className}`} 
      fill="none" 
      stroke={color}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
----[23]
components\Icon.d.ts
import React from 'react';

type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name: string;
  size?: IconSize;
  className?: string;
  color?: string;
  strokeWidth?: number;
  hoverEffect?: boolean;
  [key: string]: any;
}

declare const Icon: React.FC<IconProps>;

export default Icon;
----[24]
components\Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // 监听滚动事件来改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20' : 'py-4 bg-transparent'} relative`}>
      {/* 装饰性背景元素 */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className={`h-10 w-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${isScrolled ? 'scale-100' : 'scale-110 group-hover:rotate-6'}`}>
              <span className="text-white text-sm font-bold">AI</span>
            </div>
            <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary transition-all duration-500 tracking-tight ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
              AI Notion
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-neutral-600 hover:text-primary transition-all duration-300 relative group">
              <span className="absolute inset-0 bg-primary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              <span className="relative z-10 px-3 py-2">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full rounded-full"></span>
            </Link>
            <Link to="/convert" className="font-medium text-neutral-600 hover:text-primary transition-all duration-300 relative group">
              <span className="absolute inset-0 bg-primary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              <span className="relative z-10 px-3 py-2">Convert</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full rounded-full"></span>
            </Link>
            <Link to="/pricing" className="font-medium text-neutral-600 hover:text-primary transition-all duration-300 relative group">
              <span className="absolute inset-0 bg-primary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              <span className="relative z-10 px-3 py-2">Pricing</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full rounded-full"></span>
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="flex items-center space-x-4">
            <button 
              className="btn-ghost text-sm hidden sm:flex relative group px-5 py-2.5 rounded-full border border-gray-200"
              aria-label="Login"
            >
              <span className="absolute inset-0 bg-white rounded-full shadow-sm transform scale-95 group-hover:scale-100 transition-all duration-300"></span>
              <span className="relative z-10 font-medium">Login</span>
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button 
              className={`px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm transition-all duration-500 relative overflow-hidden group hover:shadow-lg hover:-translate-y-0.5 ${isScrolled ? 'shadow-medium' : 'shadow-soft'}`}
              aria-label="Sign Up Free"
            >
              <span className="relative z-10 flex items-center gap-1.5">Sign Up Free <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" /></span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              className="md:hidden text-neutral-700 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/5"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {[              { name: 'Home', to: '/' },              { name: 'Convert', to: '/convert' },              { name: 'Pricing', to: '/pricing' }            ].map((item) => (
              <Link 
                key={item.name}
                to={item.to}
                className="block text-neutral-700 hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-primary/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-neutral-100">
              <button 
                className="btn-ghost text-sm"
                aria-label="Login"
              >
                Login
              </button>
              <button 
                className="btn-primary text-sm shadow-soft"
                aria-label="Sign Up Free"
              >
                Sign Up Free
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
----[25]
components\GuidePreview.tsx
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
            
            <div className="bubble-bl absolute bottom-16 left-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300" style={{ animationDelay: '0.3s' }}>
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
            
            <div className="bubble-bl absolute bottom-16 left-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300" style={{ animationDelay: '0.3s' }}>
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
----[26]
components\Footer.tsx
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16 mt-20 relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" aria-hidden="true" />
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="h-9 w-9 transition-transform duration-500 hover:rotate-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
                <span className="text-white text-xs font-bold">AI</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  AI Notion
                </span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md text-lg leading-relaxed">
                使用AI技术将Notion文档转换为响应式网站，无需编写代码，轻松分享您的想法与知识。
              </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 relative group" aria-label="Twitter">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 relative group" aria-label="LinkedIn">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 relative group" aria-label="GitHub">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="group">
            <h4 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">快速链接</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">首页</span>
              </Link></li>
              <li><Link to="/convert" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">转换</span>
              </Link></li>
              <li><Link to="/pricing" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">定价</span>
              </Link></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">示例</span>
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">文档</span>
              </a></li>
            </ul>
          </div>
          <div className="group">
            <h4 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">资源</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">博客</span>
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">教程</span>
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">支持</span>
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">隐私政策</span>
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">服务条款</span>
              </a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} AI Notion. All rights reserved.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <a href="#privacy" className="hover:text-white transition-colors duration-300 text-xs">隐私政策</a>
              <a href="#terms" className="hover:text-white transition-colors duration-300 text-xs">服务条款</a>
              <a href="#cookies" className="hover:text-white transition-colors duration-300 text-xs">Cookie政策</a>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
----[27]
components\ExportPanel.tsx
import React, { useState } from 'react';
import { ExportPackage, Notification, NotificationType } from '../types';
import { Download, CheckCircle, AlertCircle, Info, Package, FileText, BookOpen } from 'lucide-react';

interface ExportPanelProps {
  exportPackage: ExportPackage | null;
  isProcessing: boolean;
}

const ExportPanel: React.FC<ExportPanelProps> = ({ exportPackage, isProcessing }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  // Show notification
  const showNotification = (message: string, type: NotificationType = 'success'): void => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const downloadPackage = (): void => {
    if (exportPackage && exportPackage.htmlFile) {
      try {
        // 创建Blob对象
        const blob = new Blob([exportPackage.htmlFile.content], { type: exportPackage.htmlFile.type });
        const url = URL.createObjectURL(blob);
        
        // 创建下载链接
        const a = document.createElement('a');
        a.href = url;
        a.download = exportPackage.htmlFile.name;
        document.body.appendChild(a);
        a.click();
        
        // 清理
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification('下载已成功开始！', 'success');
      } catch (error) {
        console.error('下载文件失败:', error);
        showNotification('下载文件失败，请稍后重试。', 'error');
      }
    } else {
      showNotification('没有可下载的包。', 'error');
    }
  };

  if (isProcessing) {
    return (
      <div className="card-glass p-8 rounded-3xl shadow-card flex items-center justify-center min-h-[400px] animate-float-small relative overflow-hidden border border-neutral-100">
        {/* 装饰元素 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
        
        <div className="flex flex-col items-center relative z-10">
          <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full mb-8 flex items-center justify-center animate-spin relative">
            {/* 发光效果 */}
            <span className="absolute -inset-1.5 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow" />
            <Package className="text-primary" size={28} />
          </div>
          <p className="text-neutral-700 font-medium text-center text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            正在准备您的导出包...
          </p>
          <p className="text-neutral-500 text-sm mt-3 max-w-xs text-center">
            编译所有资源可能需要一些时间，请稍候
          </p>
          
          {/* 装饰气泡 */}
          <div className="bubble-tr absolute top-10 right-10 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-1.5">
              <span className="text-primary font-bold">📦</span>
              <span>打包中</span>
            </div>
          </div>
          
          <div className="bubble-bl absolute bottom-10 left-10 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small" style={{ animationDelay: '0.3s' }} hover:shadow-md transition-all duration-300>
            <div className="flex items-center gap-1.5">
              <span className="text-secondary font-bold">⚡</span>
              <span>处理中</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!exportPackage) {
    return (
      <div className="card-glass p-8 rounded-3xl shadow-card flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden animate-float-small border border-neutral-100">
        {/* 装饰元素 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mb-8 relative z-10 shadow-md group hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:shadow-lg">
          <Package className="text-primary" size={32} group-hover:scale-110 transition-transform duration-300 />
        </div>
        <h3 className="text-2xl font-semibold text-neutral-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative z-10">
          导出包即将准备就绪
        </h3>
        <p className="text-neutral-600 text-center max-w-md relative z-10 mb-8">
          完成指南生成后，您将可以获取完整的导出包。
        </p>
        
        <div className="bubble-tl bg-white/80 backdrop-blur-sm px-6 py-5 rounded-xl shadow-card border border-neutral-100 text-sm text-neutral-700 relative z-10 animate-float-small group hover:shadow-card-hover transition-all duration-300 hover:border-primary/20" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 text-primary mb-4">
            <Info size={18} className="text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium text-base group-hover:text-primary transition-colors duration-300">包含内容</span>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
              <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={14} />
              </span>
              <span>完整的模板文件</span>
            </li>
            <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
              <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={14} />
              </span>
              <span>用户指南文档</span>
            </li>
            <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
              <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={14} />
              </span>
              <span>实施说明</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="card-glass rounded-3xl overflow-hidden shadow-card bg-white hover:shadow-card-hover transition-all duration-500 animate-float-small relative group border border-neutral-100">
      {/* 装饰背景 */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" aria-hidden="true" />
      
      <div className="flex flex-wrap items-center justify-between bg-gradient-to-r from-primary/5 to-secondary/5 px-8 py-6 border-b border-neutral-100/50 gap-4">
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
            <Package size={24} group-hover:scale-110 transition-transform duration-300 />
          </div>
          <div>
            <h3 className="font-medium text-neutral-800 text-xl group-hover:text-primary transition-colors duration-300">导出产品包</h3>
            <p className="text-sm text-neutral-500">完整的网站文件和使用指南</p>
          </div>
        </div>
        <button 
          onClick={downloadPackage}
          className={`px-7 py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${exportPackage?.htmlFile ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:from-primary/90 hover:to-secondary/90 transform hover:-translate-y-1 card-hover relative overflow-hidden group' : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'}`}
          disabled={!exportPackage?.htmlFile}
        >
          {exportPackage?.htmlFile && (
            <>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10"><Download size={18} />
              立即下载</span>
              {/* 渐变发光效果 */}
              <span className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-700"></span>
            </>
          )}
          {!exportPackage?.htmlFile && (
            <>
              <Download size={18} />
              立即下载
            </>
          )}
        </button>
      </div>
      
      <div className="p-8 relative">
        {/* 背景装饰 */}
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
        
        <div className="mb-10 relative">
          {/* 装饰元素 */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            您的完整模板包
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl relative z-10">
            包含实现您的模板所需的所有文件和文档
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="card-glass rounded-2xl p-6 bg-white/90 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 card-hover animate-float-small group hover:border-primary/20">
            <div className="flex items-start gap-4 mb-5">
              <div className="bubble-tl bg-gradient-to-br from-primary/10 to-primary/20 text-primary rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                <FileText size={24} group-hover:scale-110 transition-transform duration-300 />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 text-xl group-hover:text-primary transition-colors duration-300">模板文件</h3>
                <p className="text-neutral-600 text-sm mt-1">实现网站所需的所有源代码文件</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">HTML/CSS/JS 源文件</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">资源文件（图像、图标）</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">配置文件</span>
              </li>
            </ul>
          </div>
          
          <div className="card-glass rounded-2xl p-6 bg-white/90 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 card-hover animate-float-small group hover:border-secondary/20" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4 mb-5">
              <div className="bubble-tl bg-gradient-to-br from-secondary/10 to-secondary/20 text-secondary rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:from-secondary/20 group-hover:to-secondary/30 transition-all duration-300">
                <BookOpen size={24} group-hover:scale-110 transition-transform duration-300 />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 text-xl group-hover:text-secondary transition-colors duration-300">使用指南</h3>
                <p className="text-neutral-600 text-sm mt-1">完整的用户指南和操作说明</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">实现指南</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">自定义技巧</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">常见问题解答和故障排除</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bubble-bl border border-primary/20 rounded-2xl p-7 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-card transition-all duration-300 hover:shadow-card-hover animate-float-small group hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 transition-all duration-500" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <h3 className="font-semibold text-neutral-800 mb-1 text-xl group-hover:text-primary transition-colors duration-300">已准备好下载</h3>
              <p className="text-neutral-600">您的包已准备就绪，可以立即使用</p>
            </div>
            <button 
              onClick={downloadPackage}
              className="px-8 py-3.5 rounded-xl font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 animate-float relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10"><Download size={18} />
              立即下载</span>
              {/* 渐变发光效果 */}
              <span className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-700"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Notification component */}
      {notification && (
        <div className={`fixed bottom-5 right-5 z-50 transform transition-all duration-500 translate-y-0 opacity-100 flex items-center gap-3 p-4 rounded-2xl shadow-lg backdrop-blur-sm ${notification.type === 'success' ? 'bg-success text-white' : notification.type === 'error' ? 'bg-error text-white' : 'bg-info text-white'}`}>
          {notification.type === 'success' ? (
            <CheckCircle size={18} />
          ) : notification.type === 'error' ? (
            <AlertCircle size={18} />
          ) : (
            <Info size={18} />
          )}
          <span className="font-medium">{notification.message}</span>
        </div>
      )}
    </div>
  );
}

export default ExportPanel;
----[28]
assets\logo.svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  <polyline points="14 2 14 8 20 8"></polyline>
  <line x1="16" y1="13" x2="8" y2="13"></line>
  <line x1="16" y1="17" x2="8" y2="17"></line>
  <polyline points="10 9 9 9 8 9"></polyline>
  <circle cx="18" cy="16" r="3"></circle>
  <path d="M16 11v4"></path>
</svg>
----[29]
assets\icons.svg
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <!-- 通用图标 -->
  <symbol id="check" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="x" viewBox="0 0 24 24">
    <path fill="currentColor" d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="info" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="8" x2="12.01" y2="8" stroke="currentColor" stroke-width="2"/>
  </symbol>
  <symbol id="alert" viewBox="0 0 24 24">
    <path fill="currentColor" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2"/>
  </symbol>
  <symbol id="download" viewBox="0 0 24 24">
    <path fill="currentColor" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="upload" viewBox="0 0 24 24">
    <path fill="currentColor" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M12 11V3M5 8l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  
  <!-- 导航图标 -->
  <symbol id="menu" viewBox="0 0 24 24">
    <path fill="currentColor" d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </symbol>
  <symbol id="arrow-right" viewBox="0 0 24 24">
    <path fill="currentColor" d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="arrow-left" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19 12H5M12 5L5 12l7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="home" viewBox="0 0 24 24">
    <path fill="currentColor" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  
  <!-- 功能图标 -->
  <symbol id="copy" viewBox="0 0 24 24">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" fill="currentColor" stroke="currentColor" stroke-width="2"/>
    <path fill="currentColor" d="M16 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </symbol>
  <symbol id="edit" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="eye" viewBox="0 0 24 24">
    <path fill="currentColor" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" stroke="currentColor" stroke-width="2"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
  </symbol>
  <symbol id="search" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
    <path fill="currentColor" d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </symbol>
  <symbol id="star" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </symbol>
  
  <!-- 社交媒体图标 -->
  <symbol id="twitter" viewBox="0 0 24 24">
    <path fill="currentColor" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </symbol>
  <symbol id="github" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </symbol>
  <symbol id="linkedin" viewBox="0 0 24 24">
    <path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
  </symbol>
</svg>
--END--
