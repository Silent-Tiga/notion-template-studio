import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section id="hero" className="mb-16 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Convert Notion content into a responsive website
          </h1>
          <p className="text-base md:text-lg text-neutral-600 mb-8 max-w-2xl">
            No coding required. AI converts instantly — share your ideas easily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={() => navigate('/convert')}
              className="btn-primary text-sm px-6 py-2 rounded-github font-medium shadow-github"
            >
              Start Converting
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="btn-secondary text-sm px-6 py-2 rounded-github font-medium"
            >
              View Pricing
            </button>
          </div>
        </div>
      
        {/* Feature Highlights */}
        <div id="features" className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* Fast Conversion */}
          <div className="card p-6">
            <div className="w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-neutral-900">Convert in seconds</h3>
            <p className="text-sm text-neutral-600">Turn Notion content into a webpage in seconds</p>
          </div>
          
          {/* Fully Customizable */}
          <div className="card p-6">
            <div className="w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-neutral-900">Custom themes</h3>
            <p className="text-sm text-neutral-600">Customize theme, colors, and layout</p>
          </div>
          
          {/* Secure and Reliable */}
          <div className="card p-6">
            <div className="w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-neutral-900">Encrypted data</h3>
            <p className="text-sm text-neutral-600">Encrypted transmission keeps your data private</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;