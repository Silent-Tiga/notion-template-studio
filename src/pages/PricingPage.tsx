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
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">Simple, Transparent Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 免费版 */}
          <div className="bg-white rounded-2xl shadow-card p-8 border border-neutral-100 hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop relative group">
            {/* 渐变光晕效果 */}
            <span className="absolute -inset-0.5 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"></span>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">Free</h3>
                <p className="text-gray-500">Perfect for personal use</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Convert up to 5 Notion pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Basic customization options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>HTML export</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">✗</span>
                  <span>Advanced AI guide</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">✗</span>
                  <span>Custom domain</span>
                </li>
              </ul>
              <button onClick={() => showNotification('You’re already using the Free plan', 'info')} className="w-full py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary/5 transition-colors duration-300 group-hover:shadow-sm">
                Get Started
              </button>
            </div>
          </div>
          
          {/* 专业版 */}
          <div className="bg-white rounded-2xl shadow-card p-8 border-2 border-primary relative hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop scale-105 transform" style={{ animationDelay: '0.2s' }}>
            {/* 渐变光晕效果 */}
            <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-30"></span>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full shadow-md">
              Most Popular
            </div>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-gray-500">Great for solo devs and small teams</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥39</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Unlimited Notion page conversions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Full customization options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Multiple export formats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Advanced AI guide</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">✗</span>
                  <span>Custom domain</span>
                </li>
              </ul>
              <button onClick={() => showNotification('Thanks for your interest in Pro', 'success')} className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg pulse-glow">
                Upgrade to Pro
              </button>
            </div>
          </div>
          
          {/* 企业版 */}
          <div className="bg-white rounded-2xl shadow-card p-8 border border-neutral-100 hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop relative group" style={{ animationDelay: '0.4s' }}>
            {/* 渐变光晕效果 */}
            <span className="absolute -inset-0.5 bg-gradient-to-r from-secondary/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"></span>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">Enterprise</h3>
                <p className="text-gray-500">Best for companies and large teams</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥199</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Unlimited Notion page conversions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Full customization options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Multiple export formats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Advanced AI guide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Custom domain</span>
                </li>
              </ul>
              <button onClick={() => showNotification('Contact us for enterprise solutions', 'info')} className="w-full py-3 rounded-xl border border-secondary text-secondary font-medium hover:bg-secondary/5 transition-colors duration-300 group-hover:shadow-sm">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;