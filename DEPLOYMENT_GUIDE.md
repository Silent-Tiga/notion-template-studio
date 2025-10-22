# Notion Template Studio 部署指南

## 方案A: Serverless函数+内存处理 架构部署指南

本指南将帮助您部署和配置Serverless函数+内存处理的架构方案，该方案通过Cloudflare Workers调用Notion Public API，在内存中处理数据并生成HTML内容。

### 目录

1. [环境准备](#环境准备)
2. [Cloudflare Workers配置](#cloudflare-workers配置)
3. [本地开发和测试](#本地开发和测试)
4. [部署到Cloudflare](#部署到cloudflare)
5. [前端应用配置](#前端应用配置)
6. [常见问题及解决方案](#常见问题及解决方案)

---

## 环境准备

在开始之前，请确保您已经安装了以下工具：

1. [Node.js](https://nodejs.org/) (v16或更高版本)
2. [npm](https://www.npmjs.com/) 或 [yarn](https://yarnpkg.com/)
3. [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) - Cloudflare Workers的命令行工具

安装Wrangler CLI:

```bash
npm install -g wrangler
```

---

## Cloudflare Workers配置

### 1. 配置Wrangler

首先，使用Wrangler登录您的Cloudflare账户：

```bash
wrangler login
```

这将打开浏览器，引导您完成登录过程。

### 2. 设置环境变量

在Cloudflare Workers中，敏感的环境变量应该使用`wrangler secret`命令设置：

```bash
# 设置Notion API密钥
wrangler secret put NOTION_API_KEY
```

输入您的Notion API密钥（在Notion的[Integrations页面](https://www.notion.so/my-integrations)创建）。

### 3. 更新wrangler.toml配置

编辑项目根目录下的`wrangler.toml`文件，替换以下内容：

```toml
# Cloudflare API 区域
account_id = "<your-account-id>"
```

将`<your-account-id>`替换为您的Cloudflare账户ID。您可以在[Cloudflare仪表板](https://dash.cloudflare.com/)中找到这个ID。

如果您计划将Worker绑定到自定义域名，请更新路由配置：

```toml
# 路由配置
[[routes]]
# 生产环境路由 - 当部署到Cloudflare后，Worker将响应这个URL
pattern = "your-domain.com/api/*"
```

---

## 本地开发和测试

### 1. 启动本地开发服务器

使用Wrangler启动本地开发服务器：

```bash
wrangler dev
```

这将在`http://localhost:8787`启动一个本地开发服务器，您可以使用此URL测试您的Worker。

### 2. 测试API调用

您可以使用curl、Postman或其他API测试工具来测试您的Worker：

```bash
curl -X POST http://localhost:8787/api/notion-to-html \
  -H "Content-Type: application/json" \
  -d '{"pageId":"YOUR_NOTION_PAGE_ID"}'
```

请确保将`YOUR_NOTION_PAGE_ID`替换为您的Notion页面ID。

---

## 部署到Cloudflare

当您完成开发和测试后，可以将Worker部署到Cloudflare：

```bash
wrangler deploy
```

部署完成后，Wrangler将显示您的Worker的URL，格式类似于：`https://notion-to-web-worker.YOUR_USERNAME.workers.dev`。

---

## 前端应用配置

### 1. 更新.env文件

编辑项目根目录下的`.env`文件，更新Cloudflare Workers API URL：

```env
# Cloudflare Workers API URL
REACT_APP_CLOUDFLARE_WORKER_URL=https://notion-to-web-worker.YOUR_USERNAME.workers.dev
```

请将`https://notion-to-web-worker.YOUR_USERNAME.workers.dev`替换为您实际部署的Worker URL。

### 2. 构建前端应用

构建前端应用以便部署：

```bash
npm run build
```

这将在`dist`目录中生成优化后的前端文件。

### 3. 部署前端应用

您可以将前端应用部署到任何静态网站托管服务，如：
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

以Cloudflare Pages为例：

```bash
# 安装Cloudflare Pages CLI
npm install -g @cloudflare/pages-cli

# 部署前端应用
cd dist
npx wrangler pages deploy . --project-name=notion-template-studio
```

---

## 常见问题及解决方案

### 1. Notion API访问权限问题

**问题**：API调用返回401或403错误。

**解决方案**：确保：
- 您的Notion API密钥是有效的
- 您已将Notion集成添加到了目标页面或数据库
- 在Notion页面中授予了集成的编辑或阅读权限

### 2. CORS错误

**问题**：前端应用无法调用Worker API，出现CORS错误。

**解决方案**：确保您的Worker正确设置了CORS头。我们的实现已经包含了必要的CORS头设置。

### 3. 本地开发环境连接问题

**问题**：在本地开发时，前端应用无法连接到Worker。

**解决方案**：确保：
- Wrangler开发服务器正在运行 (`wrangler dev`)
- `.env`文件中的`REACT_APP_CLOUDFLARE_WORKER_URL`设置为`http://localhost:8787`
- 没有防火墙阻止本地连接

---

## 架构说明

### 系统流程

1. **用户输入**：用户在前端应用中输入Notion页面URL。
2. **前端处理**：前端应用从URL提取页面ID，并调用Cloudflare Workers API。
3. **API调用**：Cloudflare Workers使用Notion API密钥调用Notion Public API获取页面内容。
4. **内容处理**：在Worker的内存中，将Notion的JSON数据渲染为HTML字符串。
5. **响应返回**：Worker将生成的HTML字符串返回给前端。
6. **用户交互**：前端显示预览，并提供下载HTML或打包下载的选项。

### 优势

- **零数据库成本**：所有处理都在内存中完成，无需持久化存储。
- **超低延迟**：Serverless函数启动快，响应迅速。
- **无限扩展**：请求多，就多运行几个函数实例，自动弹性扩展。
- **易于部署和维护**：Cloudflare Workers提供了简单的部署和管理体验。
- **成本效益**：按照实际使用量付费，对于低流量应用几乎免费。

---

## 高级配置

### 添加更多主题选项

您可以在`notion-to-web-worker.js`文件中的`generateHtmlFromNotionContent`函数中添加更多主题选项：

```javascript
// 设置默认主题
const defaultTheme = {
  primaryColor: '#4F46E5',
  secondaryColor: '#8B5CF6',
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontSize: '16px',
  backgroundColor: '#ffffff',
  textColor: '#1F2937',
  accentColor: '#10B981'
};
```

### 支持更多Notion块类型

目前的实现支持常见的Notion块类型。您可以在`renderBlock`函数中添加更多块类型的支持：

```javascript
function renderBlock(block) {
  // ... 现有代码 ...
  switch (type) {
    case 'paragraph':
      return renderParagraph(blockContent, block);
    case 'heading_1':
      return renderHeading(blockContent, 'h1');
    // ... 添加更多块类型 ...
    default:
      console.log(`Unsupported block type: ${type}`);
      return renderTextContent(blockContent.rich_text || []);
  }
}
```

---

## 总结

方案A: Serverless函数+内存处理架构是一个轻量级、高性能的解决方案，非常适合MVP（最小可行产品）快速迭代和部署。通过Cloudflare Workers，您可以轻松实现Notion内容到HTML的转换，并为用户提供预览和下载功能，同时保持零数据库成本和无限扩展性。