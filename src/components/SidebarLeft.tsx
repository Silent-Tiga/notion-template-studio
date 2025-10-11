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