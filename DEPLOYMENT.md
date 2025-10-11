# Notion2Web 部署指南

本指南将帮助您部署 Notion2Web 项目，包括前端（React 应用）和后端（Cloudflare Workers API）。

## 目录

1. [前端部署 (Vercel)](#前端部署-vercel)
2. [后端部署 (Cloudflare Workers)](#后端部署-cloudflare-workers)
3. [本地开发配置](#本地开发配置)
4. [环境变量](#环境变量)
5. [常见问题](#常见问题)

## 前端部署 (Vercel)

### 前提条件
- 一个 GitHub/GitLab/Bitbucket 账号
- 一个 Vercel 账号
- 您的项目代码已上传到代码托管平台

### 步骤

1. **登录 Vercel**
   - 访问 [Vercel 官网](https://vercel.com/) 并登录
   - 点击 "New Project" 按钮

2. **导入项目**
   - 选择 "Import from Git Repository"
   - 连接您的代码托管平台账号
   - 选择 `Notion2Web` 项目仓库

3. **配置项目**
   - 项目名称：默认为仓库名称，可自定义
   - Framework Preset：选择 "Vite"
   - Root Directory：保持默认（如果项目在根目录）
   - 构建命令：`npm run build`
   - 输出目录：`dist`
   - 开发命令：`npm run dev`

4. **设置环境变量**
   - 点击 "Environment Variables" 展开
   - 添加以下环境变量：
     - `VITE_NOTION_API_KEY`：您的 Notion API 密钥（可选，也可只在后端设置）
     - `VITE_BACKEND_API_URL`：Cloudflare Workers API 的 URL（如 `https://your-worker.your-domain.workers.dev`）
     - `VITE_APP_TITLE`：应用标题
     - `VITE_APP_DESCRIPTION`：应用描述
   - 点击 "Add" 确认添加

5. **部署项目**
   - 点击 "Deploy" 按钮开始部署
   - Vercel 将自动执行构建流程并部署您的应用
   - 部署完成后，您将获得一个 `.vercel.app` 后缀的 URL

6. **自定义域名（可选）**
   - 部署成功后，进入项目的 "Settings" -> "Domains"
   - 添加您的自定义域名，并按照提示完成 DNS 配置

## 后端部署 (Cloudflare Workers)

### 前提条件
- 一个 Cloudflare 账号
- 安装 [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
- 已创建的 `cloudflare-worker-example.js` 和 `wrangler.toml` 文件

### 步骤

1. **安装 Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```
   这将打开浏览器，让您登录 Cloudflare 并授权 Wrangler 访问您的账号

3. **配置 Notion API 密钥**
   ```bash
   wrangler secret put NOTION_API_KEY
   ```
   按照提示输入您的 Notion API 密钥，这将安全地存储在 Cloudflare 的环境变量中

4. **部署 Worker**
   ```bash
   wrangler deploy
   ```
   这将构建并部署您的 Cloudflare Worker
   部署成功后，您将获得一个类似 `https://your-worker.your-account.workers.dev` 的 URL

5. **验证部署**
   - 使用浏览器或工具（如 Postman、curl）访问您的 Worker URL
   - 例如：`https://your-worker.your-account.workers.dev/api/notion-content`
   - 您应该收到一个包含错误信息的 JSON 响应（因为没有提供 `pageId`），这表明 API 已成功部署

## 本地开发配置

### 前端开发
1. 确保已安装依赖：
   ```bash
   npm install
   ```

2. 启动开发服务器：
   ```bash
   npm run dev
   ```
   这将在 `http://localhost:5173` 启动开发服务器

### 后端开发
1. 启动本地 Worker 开发服务器：
   ```bash
   wrangler dev
   ```
   这将在 `http://localhost:8787` 启动本地 Worker 开发服务器

2. 在前端应用中，将 `VITE_BACKEND_API_URL` 设置为 `http://localhost:8787` 进行本地测试

## 环境变量

### 前端环境变量 (.env 文件)
```env
# 应用配置
VITE_APP_TITLE=Notion2Web
VITE_APP_DESCRIPTION=将任何Notion页面转换为美观的网站

# API配置
VITE_BACKEND_API_URL=https://your-worker.your-domain.workers.dev

# 可选：如果前端直接调用Notion API（不推荐）
# VITE_NOTION_API_KEY=your_notion_api_key_here

# 分析工具
# VITE_FATHOM_SITE_ID=your_fathom_site_id
```

### 后端环境变量 (Cloudflare Workers)
- `NOTION_API_KEY`: 您的 Notion API 密钥（通过 `wrangler secret put` 设置）

## 常见问题

### 1. Notion API 调用失败
- 确保您的 Notion API 密钥有效
- 确保您尝试访问的 Notion 页面已设置为公开或已与集成共享
- 检查 Cloudflare Workers 日志以获取详细错误信息

### 2. 跨域问题
- Cloudflare Workers 代码中已包含 CORS 头配置
- 如果仍有问题，请检查 Vercel 和 Cloudflare 的安全设置

### 3. 部署失败
- 检查构建日志以获取详细错误信息
- 确保所有环境变量都已正确设置
- 确保项目依赖已正确安装

### 4. 性能优化
- 为 Cloudflare Workers 启用缓存
- 优化前端代码，减少不必要的请求
- 考虑使用 Cloudflare CDN 加速静态资源

## 下一步

部署完成后，您可以：
1. [ ] 准备 Product Hunt 发布页面
2. [ ] 添加 Fathom/Plausible 分析
3. [ ] 设置邮件订阅等待列表
4. [ ] 计划 Pro 功能开发

祝您部署顺利！🚀