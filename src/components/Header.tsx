import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { initIdentity, getCurrentUser, onAuthChange, login, register, logout, type AuthUser } from '../services/authService';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<AuthUser | null>(null);

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

  useEffect(() => {
    initIdentity();
    setUser(getCurrentUser());
    const off = onAuthChange(u => setUser(u));
    return () => off();
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
            <Link to="/projects" className="font-medium text-neutral-600 hover:text-primary transition-all duration-300 relative group">
              <span className="absolute inset-0 bg-primary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              <span className="relative z-10 px-3 py-2">Projects</span>
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
            {!user ? (
              <>
                <button 
                  className="btn-ghost text-sm hidden sm:flex relative group px-5 py-2.5 rounded-full border border-gray-200"
                  aria-label="Login"
                  onClick={() => login()}
                >
                  <span className="absolute inset-0 bg-white rounded-full shadow-sm transform scale-95 group-hover:scale-100 transition-all duration-300"></span>
                  <span className="relative z-10 font-medium">Login</span>
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                </button>
                <button 
                  className={`px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm transition-all duration-500 relative overflow-hidden group hover:shadow-lg hover:-translate-y-0.5 ${isScrolled ? 'shadow-medium' : 'shadow-soft'}`}
                  aria-label="Sign Up Free"
                  onClick={() => register()}
                >
                  <span className="relative z-10 flex items-center gap-1.5">Sign Up Free <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" /></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/projects" className="text-sm text-neutral-700 hover:text-primary">我的项目</Link>
                <span className="text-sm text-neutral-600">{user.email || user.name || 'User'}</span>
                <button className="text-sm px-3 py-1.5 rounded-full border border-neutral-200 hover:bg-neutral-100" onClick={() => logout()}>退出</button>
              </div>
            )}
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
            {[              { name: 'Home', to: '/' },              { name: 'Convert', to: '/convert' }, { name: 'Projects', to: '/projects' },             { name: 'Pricing', to: '/pricing' }            ].map((item) => (
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
              {!user ? (
                <>
                  <button 
                    className="btn-ghost text-sm"
                    aria-label="Login"
                    onClick={() => login()}
                  >
                    Login
                  </button>
                  <button 
                    className="btn-primary text-sm shadow-soft"
                    aria-label="Sign Up Free"
                    onClick={() => register()}
                  >
                    Sign Up Free
                  </button>
                </>
              ) : (
                <button className="btn-ghost text-sm" onClick={() => logout()}>退出</button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;