# Notion2Web: Turn Any Notion Page into a Beautiful Website

A powerful tool to transform your Notion pages into beautiful websites in seconds. No code, no setup. Just paste your link and get a ready-to-use HTML site.

## 🌟 Features

- **One-Click Conversion**: Convert any public Notion page into a beautiful website instantly.
- **Real-time Preview**: See your website come to life before downloading.
- **Ready-to-Deploy HTML**: Download a complete ZIP package with all necessary files.
- **Responsive Design**: Generated websites work perfectly on all devices.
- **Customizable Themes**: Choose from multiple themes to match your style.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0 or later)
- npm (v6.0 or later) or yarn

### Installation

1. Clone the repository:
```bash
# 如果您从GitHub克隆
# git clone https://github.com/your-username/notion2web.git
# cd notion2web

# 或者直接在当前目录安装依赖
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📖 Usage

1. **Enter Your Notion Link**: Paste the URL of a public Notion page you want to convert.
2. **Generate Preview**: Click the "Convert" button to create your website.
3. **Preview and Customize**: See the generated website and select your preferred theme.
4. **Download**: Get your complete HTML package ready for deployment.

## 🔧 Configuration

To use the full functionality, you'll need to set up API keys for Notion:

1. Create a `.env` file in the root directory with the following content:
```env
# Notion API 密钥
NOTION_API_KEY=your_notion_integration_secret_here

# 环境模式
NODE_ENV=production

# 应用配置
VITE_APP_TITLE=Notion2Web
VITE_APP_DESCRIPTION=Turn any Notion page into a beautiful website in seconds
```

## 🚀 Deployment

### Option 1: Deploy to Vercel (Recommended)

1. Sign up for a free account at [Vercel](https://vercel.com)
2. Connect your GitHub repository or upload your project files
3. Add your environment variables (NOTION_API_KEY) in the Vercel dashboard
4. Click "Deploy"
5. Your website will be live at your-username.vercel.app

### Option 2: Deploy to Netlify

1. Sign up for a free account at [Netlify](https://netlify.com)
2. Connect your repository or drag and drop your project folder
3. Configure your build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add your environment variables
5. Click "Deploy Site"

## 🔄 Backend API with Cloudflare Workers

For a production-ready solution, we recommend setting up a Cloudflare Workers backend to handle Notion API calls:

1. Sign up for a free Cloudflare account
2. Install the Cloudflare CLI:
   ```bash
   npm install -g wrangler
   ```
3. Create a new Worker:
   ```bash
   wrangler init notion2web-api
   ```
4. Add your Notion API integration code to the Worker
5. Deploy your Worker:
   ```bash
   wrangler publish
   ```
6. Update your frontend to call your Worker API instead of making direct Notion API calls

## 📝 Privacy & Limitations

- **Privacy**: We do not store your Notion data. All processing is done in memory.
- **Limitations**: Currently only supports public Notion pages.

## 📊 Analytics

For tracking usage and gathering feedback, we recommend integrating lightweight analytics tools like:
- [Fathom Analytics](https://usefathom.com) (privacy-focused)
- [Plausible](https://plausible.io) (open-source and privacy-focused)

## 🎯 Future Roadmap

- **Pro Version**: Support for private Notion pages, custom domains, and premium themes
- **Team Collaboration**: Multi-user support for agencies and teams
- **Template Marketplace**: Designer-created themes available for purchase

## 🔧 Technical Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Cloudflare Workers (recommended) or Vercel Serverless Functions
- **API Integration**: Notion API
- **Deployment**: Vercel, Netlify, or GitHub Pages
- **State Management**: React Context API
- **Build Tool**: Vite

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.