# 将单页应用转换为多页面应用的完整实现方案

## 问题分析

您感觉到"只能在一个页面内跳转"是正确的，因为当前应用是一个**典型的单页应用(SPA)**。所有内容都在同一个页面上展示，导航是通过锚点链接和滚动来实现的，而不是真正的页面切换。

## 解决方案：集成React Router

要实现真正的多页面体验，我们需要集成React Router库。下面是完整的实现方案：

### 步骤1：安装React Router依赖

```bash
npm install react-router-dom
```

### 步骤2：创建页面组件

在`src/pages`目录下创建以下页面组件：

1. **HomePage.tsx** - 首页，包含Hero区域和功能介绍
2. **ConvertPage.tsx** - 转换页面，包含输入和预览功能
3. **PricingPage.tsx** - 定价页面

### 步骤3：更新App.tsx以支持路由

```tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ConvertPage from './pages/ConvertPage';
import PricingPage from './pages/PricingPage';

// 定义通知类型
type NotificationType = 'success' | 'error' | 'info' | 'warning';

export const AppContext = React.createContext({
  showNotification: (message: string, type: NotificationType) => {},
  showScrollTop: false,
  scrollToTop: () => {},
});

const App: React.FC = () => {
  // 控制返回顶部按钮显示
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 添加视差滚动效果
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax-bg');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.1');
        (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
      
      // 控制返回顶部按钮显示
      setShowScrollTop(scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 返回顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 显示通知
  const showNotification = (message: string, type: NotificationType = 'success'): void => {
    // 保留原有的通知实现逻辑
    const notification = document.createElement('div');
    // ... 现有代码 ...
    document.body.appendChild(notification);
  };

  return (
    <Router>
      <AppContext.Provider value={{ showNotification, showScrollTop, scrollToTop }}>
        <div className="min-h-screen gradient-bg relative overflow-hidden">
          {/* 增强的背景装饰元素 */}
          <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" aria-hidden="true" />
          
          {/* 使用Header组件 */}
          <Header />
          
          {/* 路由定义 */}
          <main className="container mx-auto py-8 px-4 relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/convert" element={<ConvertPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          
          {/* 使用Footer组件 */}
          <Footer />
          
          {/* 返回顶部按钮 */}
          {showScrollTop && (
            <button 
              onClick={scrollToTop} 
              className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-fade-in transform hover:scale-110 pulse-glow"
              aria-label="返回顶部"
            >
              <span className="text-xl font-bold">↑</span>
            </button>
          )}
        </div>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
```

### 步骤4：创建页面组件文件

#### HomePage.tsx
```tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Hero区域 */}
      <section id="hero" className="text-center mb-20 mt-12 relative overflow-hidden pb-12">
        {/* 增强的装饰性元素 */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute -top-20 -right-40 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        
        {/* 省略部分装饰元素... */}
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 relative z-10 text-shadow animate-fade-in group">
          将您的Notion内容转换为<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient group-hover:scale-105 transition-transform duration-500">精美网站</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto relative z-10 animate-fade-in-delay">
          使用AI技术一键将Notion文档转换为响应式网站，无需编码技能，轻松分享您的想法与知识。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <button 
            onClick={() => navigate('/convert')}
            className="btn btn-primary text-lg px-10 py-6 rounded-2xl font-medium shadow-lg hover:shadow-xl animate-float-small"
          >
            <span className="mr-2">✨</span>立即开始转换
          </button>
          <button 
            onClick={() => navigate('/pricing')}
            className="btn btn-secondary text-lg px-10 py-6 rounded-2xl font-medium animate-float-small"
          >
            <span className="mr-2">💰</span>查看定价
          </button>
        </div>
      
        {/* 特色亮点 */}
        <div id="features" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* 省略特色亮点卡片实现... */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
```

#### ConvertPage.tsx
```tsx
import React, { useState, useContext } from 'react';
import InputSection from '../components/InputSection';
import PreviewPanel from '../components/PreviewPanel';
import GuidePreview from '../components/GuidePreview';
import ExportPanel from '../components/ExportPanel';
import { fetchNotionContent } from '../services/notionService';
import { generateHTML } from '../utils/htmlGenerator';
import { generateAIGuide } from '../utils/aiGuideGenerator';
import { createExportPackage } from '../utils/exportUtils';
import { extractPageId } from '../utils/urlUtils';
import type { ExportPackage, AIGuide } from '../types';
import { AppContext } from '../App';

const ConvertPage: React.FC = () => {
  // 状态管理
  const [notionLink, setNotionLink] = useState('');
  const [generatedPreview, setGeneratedPreview] = useState<string | null>(null);
  const [aiGuide, setAIGuide] = useState<AIGuide | null>(null);
  const [exportPackage, setExportPackage] = useState<ExportPackage | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { showNotification } = useContext(AppContext);

  // 处理生成预览
  const handleGeneratePreview = async () => {
    if (!notionLink) {
      showNotification('请输入Notion链接', 'warning');
      return;
    }

    setIsProcessing(true);
    try {
      const pageId = extractPageId(notionLink);
      if (!pageId) {
        showNotification('无效的Notion链接，请检查后重试。', 'error');
        setIsProcessing(false);
        return;
      }
      
      // 省略处理逻辑...
      
      showNotification('转换成功！您可以预览网站和导出文件。', 'success');
    } catch (error) {
      console.error("Error generating preview:", error);
      showNotification('转换失败，请检查Notion链接是否正确并再次尝试。', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">
        一键转换Notion文档
      </h2>
      
      {/* 内容区域 - 网格布局 */}
      <div id="demo" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 animate-fade-in">
        {/* 增强的装饰性背景元素 */}
        <div className="absolute -left-32 top-1/2 w-96 h-96 bg-indigo-100/70 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute -right-32 top-1/2 w-96 h-96 bg-purple-100/70 rounded-full filter blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="animate-float-small relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-700 animate-pulse-slow"></div>
          <div className="relative z-10">
            <InputSection 
              onGenerate={handleGeneratePreview}
              isProcessing={isProcessing}
            />
          </div>
        </div>
        <div className="animate-float-small" style={{ animationDelay: '0.2s' }}>
          <PreviewPanel 
            previewData={generatedPreview}
            isLoading={isProcessing && !generatedPreview}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="animate-float-small" style={{ animationDelay: '0.3s' }}>
          <GuidePreview 
            guide={aiGuide}
            isLoading={isProcessing && !aiGuide}
            onShowNotification={showNotification}
          />
        </div>
        <div className="animate-float-small relative group" style={{ animationDelay: '0.5s' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-700 animate-pulse-slow"></div>
          <div className="relative z-10">
            <ExportPanel 
              exportPackage={exportPackage}
              isProcessing={isProcessing && !exportPackage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvertPage;
```

#### PricingPage.tsx
```tsx
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
                {/* 省略其他特性... */}
              </ul>
              <button onClick={() => showNotification('您已在使用免费版', 'info')} className="w-full py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary/5 transition-colors duration-300 group-hover:shadow-sm">
                开始使用
              </button>
            </div>
          </div>
          
          {/* 专业版 */}
          {/* 省略专业版卡片实现... */}
          
          {/* 企业版 */}
          {/* 省略企业版卡片实现... */}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
```

### 步骤5：更新Header组件以支持导航

```tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-40 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mr-2">ai</div>
          <div className="text-2xl font-bold text-gray-900">NOTION</div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors duration-300">首页</Link>
          <Link to="/convert" className="font-medium text-gray-700 hover:text-primary transition-colors duration-300">转换</Link>
          <Link to="/pricing" className="font-medium text-gray-700 hover:text-primary transition-colors duration-300">定价</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">登录</button>
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300">注册</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
```

## 实现说明

1. **应用类型**：当前应用是一个**单页应用(SPA)**，所有内容都在同一个页面上展示
2. **导航机制**：使用锚点链接和JavaScript滚动实现页面内导航，而不是传统的多页面跳转
3. **多页面实现**：通过集成React Router，我们可以将应用拆分为独立的页面组件，实现真正的页面切换

## 关键变化点

1. 添加了`AppContext`来共享全局功能（如通知和滚动）
2. 使用`BrowserRouter`包裹整个应用
3. 使用`Routes`和`Route`定义不同的页面路径
4. 使用`Link`组件创建导航链接
5. 使用`useNavigate`钩子进行编程式导航
6. 将原App.tsx中的内容拆分到不同的页面组件中

## 部署步骤

1. 安装依赖：`npm install react-router-dom`
2. 创建页面组件文件夹和文件
3. 复制上述代码到相应文件
4. 运行开发服务器：`npm run dev`
5. 构建生产版本：`npm run build`

通过这些更改，您的应用将拥有真正的多页面导航体验，用户可以在不同的页面间切换，而不仅仅是在一个页面内滚动。