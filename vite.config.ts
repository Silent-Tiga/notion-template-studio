import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      // 前端同源代理到 Notion API，避免浏览器 CORS
      '/notion-api': {
        target: 'https://api.notion.com',
        changeOrigin: true,
        secure: true,
        // 将 /notion-api/v1/... 重写为 /v1/...
        rewrite: (path) => path.replace(/^\/notion-api/, ''),
      },
    },
  },
})