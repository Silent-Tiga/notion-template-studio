/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // GitHub风格配色
        primary: '#2F81F7', // GitHub蓝色
        success: '#28A745', // GitHub绿色
        neutral: {
          50: '#F6F8FA', // GitHub浅灰背景
          100: '#EAECEF', // GitHub次要背景
          200: '#D1D5DB', // 边框色
          300: '#9CA3AF', // 次要文字
          400: '#6B7280', // 中等文字
          500: '#4B5563', // 主要文字
          600: '#374151', // 强调文字
          700: '#1F2937', // 重要文字
          800: '#111827', // 深色
          900: '#030712', // 最深色
        }
      },
      fontFamily: {
        inter: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      // GitHub风格的阴影效果
      boxShadow: {
        'github': '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        'github-hover': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      },
      // 圆角优化（GitHub风格更扁平）
      borderRadius: {
        'github': '6px',
      },
    },
  },
  plugins: [],
}