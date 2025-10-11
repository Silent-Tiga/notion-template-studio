# 环境变量配置指南

本指南将帮助您配置项目所需的环境变量，以便正确连接到Cloudflare Workers后端API。

## 1. 主要环境变量

### VITE_BACKEND_API_URL

这是最重要的环境变量，用于指定Cloudflare Workers后端API的URL地址。

- **用途**: 前端应用将使用此URL连接到后端API服务
- **默认值**: 如果未设置，将默认使用 `http://localhost:8787`（适合本地开发）
- **部署时建议**: 在Vercel或Netlify等平台上部署时，必须设置为您实际的Cloudflare Workers API URL

### NOTION_API_KEY

- **用途**: Cloudflare Workers后端需要此密钥来调用Notion API获取内容
- **注意**: 此密钥应该存储在Cloudflare Workers的环境变量中，而不是前端项目中

## 2. 本地开发配置

### 方法1: 使用 .env 文件

在项目根目录创建 `.env` 文件（如果已存在，则编辑它），添加以下内容：

```env
# 本地开发环境变量
NODE_ENV=development

# Cloudflare Workers后端API URL（本地开发时使用wrangler dev运行的地址）
VITE_BACKEND_API_URL=http://localhost:8787

# Vite应用配置
VITE_APP_TITLE="Notion2Web"
VITE_APP_DESCRIPTION="一键将Notion页面转换为精美网站"
```

### 方法2: 直接在命令行中设置

在运行开发服务器前，可以在命令行中临时设置环境变量：

```bash
# Windows PowerShell
$env:VITE_BACKEND_API_URL="http://localhost:8787"
npm run dev

# Linux/macOS
VITE_BACKEND_API_URL=http://localhost:8787 npm run dev
```

## 3. 部署环境配置

### Vercel 部署

1. 登录Vercel控制台，进入您的项目
2. 点击 `Settings` > `Environment Variables`
3. 点击 `Add New Variable`，添加以下环境变量：
   - **Key**: `VITE_BACKEND_API_URL`
   - **Value**: `https://your-cloudflare-worker.workers.dev` （替换为您的实际Cloudflare Workers URL）
4. 保存后，触发一次新的部署

### Netlify 部署

1. 登录Netlify控制台，进入您的项目
2. 点击 `Site settings` > `Build & deploy` > `Environment` > `Environment variables`
3. 点击 `Edit variables`，添加以下环境变量：
   - **Key**: `VITE_BACKEND_API_URL`
   - **Value**: `https://your-cloudflare-worker.workers.dev` （替换为您的实际Cloudflare Workers URL）
4. 保存后，触发一次新的部署

## 4. Cloudflare Workers 环境变量

在Cloudflare Workers中，您需要设置以下环境变量：

1. 登录Cloudflare控制台，进入您的Worker项目
2. 点击 `Settings` > `Variables`
3. 点击 `Add variable`，添加以下环境变量：
   - **Key**: `NOTION_API_KEY`
   - **Value**: 您的Notion API密钥
   - 选中 `Encrypt` 复选框以加密存储

## 5. 常见问题排查

### 问题：无法连接到后端API

- 检查 `VITE_BACKEND_API_URL` 是否设置正确
- 确保Cloudflare Workers服务正在运行且可访问
- 检查浏览器控制台是否有网络错误

### 问题：Notion API返回权限错误

- 确保您的Notion API密钥有效
- 确保Notion页面已设置为公开访问
- 检查Cloudflare Workers中的 `NOTION_API_KEY` 环境变量是否正确设置

### 问题：本地开发时一切正常，但部署后无法工作

- 检查部署平台上的环境变量设置是否正确
- 确保Cloudflare Workers的URL在生产环境中可访问
- 检查浏览器的网络请求，确认API调用URL是否正确

## 6. 安全注意事项

- 不要将Notion API密钥直接硬编码在前端代码中
- 确保所有敏感环境变量都已正确加密存储
- 考虑为生产环境使用单独的API密钥和环境配置

## 7. 其他有用的环境变量

这些环境变量是可选的，但可以根据需要进行配置：

- `VITE_APP_DEBUG=true`: 启用调试模式，显示更多日志信息
- `VITE_APP_THEME=light`: 设置默认主题（light 或 dark）