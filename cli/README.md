# Notion到HTML转换工具

一个简单高效的工具，支持命令行和图形界面两种方式，用于将Notion页面一键转换为精美的HTML文件。

## 功能特点

- 支持命令行和图形界面两种操作方式
- 支持通过URL或页面ID转换Notion页面
- 自定义主题配置（颜色、字体等）
- 完整支持Notion常见块类型（段落、标题、列表、图片等）
- 响应式设计，适配各种设备
- 支持通过Notion API获取内容

## 安装

在项目根目录执行以下命令安装依赖：

```bash
npm install
```

## 使用方法

### 图形界面方式（推荐）

启动图形界面：

```bash
npm run gui
```

图形界面提供了直观的操作方式：
- 输入Notion页面URL
- 输入Notion API密钥
- 自定义主题颜色
- 点击转换按钮
- 预览并保存HTML文件

### 命令行方式

通过URL转换Notion页面：

```bash
npm run notion-to-html -- --url "https://www.notion.so/workspace/Page-Title-1234567890abcdef1234567890abcdef"
```

通过页面ID转换：

```bash
npm run notion-to-html -- --id "1234567890abcdef1234567890abcdef"
```

### 高级选项

指定输出文件路径：

```bash
npm run notion-to-html -- --url "https://www.notion.so/page-url" --output "output/my-page.html"
```

提供Notion API密钥：

```bash
npm run notion-to-html -- --url "https://www.notion.so/page-url" --api-key "your-notion-api-key"
```

使用自定义主题：

```bash
npm run notion-to-html -- --url "https://www.notion.so/page-url" --theme "cli/themes/my-theme.json"
```

尝试使用公共API（无需密钥，但功能可能受限）：

```bash
npm run notion-to-html -- --url "https://www.notion.so/page-url" --no-api
```

## 配置

### API密钥配置

您可以通过以下方式提供Notion API密钥：

1. 使用`--api-key`参数直接指定
2. 在项目根目录创建`.env`文件，添加以下内容：
   ```
   NOTION_API_KEY=your-notion-api-key
   ```

### 主题配置

您可以创建自定义主题JSON文件，包含以下配置项：

```json
{
  "primaryColor": "#4F46E5",
  "secondaryColor": "#8B5CF6",
  "backgroundColor": "#ffffff",
  "textColor": "#1F2937",
  "fontFamily": "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  "fontSize": "16px",
  "accentColor": "#10B981"
}
```

示例主题文件已提供在`cli/themes/`目录下。

## 支持的块类型

- 段落 (paragraph)
- 标题 (heading_1, heading_2, heading_3)
- 项目符号列表 (bulleted_list_item)
- 编号列表 (numbered_list_item)
- 引用 (quote)
- 代码块 (code)
- 图片 (image)
- 分隔线 (divider)
- 切换块 (toggle)
- 提示框 (callout)
- 表格 (table) - 简化支持

## 注意事项

1. 使用Notion API需要您的页面已分享或您有适当的访问权限
2. 公共API模式（`--no-api`）功能有限，建议优先使用API密钥方式
3. 部分复杂块类型可能无法完全正确渲染

## 示例

### 使用默认设置转换页面

```bash
npm run cli -- --url "https://www.notion.so/Example-Page-1234567890abcdef"
```

### 使用自定义主题和输出路径

```bash
npm run cli -- --url "https://www.notion.so/Example-Page-1234567890abcdef" --theme "cli/themes/default.json" --output "export/my-page.html"
```

## 后续开发计划

- 完善公共API模式
- 支持更多块类型
- 添加资源下载功能（图片等）
- 支持批量转换
- 添加ZIP打包功能