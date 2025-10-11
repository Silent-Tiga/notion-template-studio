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