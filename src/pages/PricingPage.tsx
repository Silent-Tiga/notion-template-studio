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