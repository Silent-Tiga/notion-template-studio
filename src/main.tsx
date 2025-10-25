import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initIdentity } from './services/authService'

// 初始化 Netlify Identity，确保登录态和令牌可用
initIdentity();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)