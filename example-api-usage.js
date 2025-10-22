import { convertNotionToHtml } from './cli/notion-to-html-core.cjs';
import fs from 'fs';

/**
 * 使用Notion API密钥转换页面的示例
 * 
 * 请按照以下步骤准备：
 * 1. 访问 https://www.notion.so/my-integrations 创建API密钥
 * 2. 打开您的Notion页面，添加该integration的访问权限
 * 3. 将您的API密钥填入下方的API_KEY变量
 */

// 配置信息
const CONFIG = {
  // 替换为您的Notion API密钥
  API_KEY: 'YOUR_NOTION_API_KEY',
  // 替换为您要转换的Notion页面URL
  PAGE_URL: 'https://www.notion.so/your-page-url',
  // 输出文件路径
  OUTPUT_FILE: 'output-with-api.html'
};

// 主函数
async function convertWithApi() {
  console.log('========================================');
  console.log('Notion API转换示例');
  console.log('========================================\n');
  
  // 验证配置
  if (CONFIG.API_KEY === 'YOUR_NOTION_API_KEY') {
    console.error('错误: 请先设置您的Notion API密钥!');
    console.log('\n请按照以下步骤获取API密钥:');
    console.log('1. 访问 https://www.notion.so/my-integrations');
    console.log('2. 点击 "New integration"，填写名称');
    console.log('3. 勾选 "Read content" 权限');
    console.log('4. 复制生成的 "secret_xxx" 字符串');
    console.log('5. 将其粘贴到 CONFIG.API_KEY 变量中\n');
    return;
  }
  
  if (CONFIG.PAGE_URL === 'https://www.notion.so/your-page-url') {
    console.error('错误: 请设置要转换的Notion页面URL!');
    return;
  }
  
  try {
    console.log(`使用API密钥转换页面: ${CONFIG.PAGE_URL}`);
    console.log('请确保您已在Notion页面中添加了该integration的访问权限\n');
    
    // 使用API方式转换
    const result = await convertNotionToHtml(CONFIG.PAGE_URL, {
      apiKey: CONFIG.API_KEY,
      primaryColor: '#4F46E5',
      backgroundColor: '#ffffff',
      textColor: '#1F2937'
    });
    
    // 保存到文件
    fs.writeFileSync(CONFIG.OUTPUT_FILE, result.htmlContent, 'utf8');
    
    console.log('\n========================================');
    console.log('转换成功!');
    console.log('========================================');
    console.log(`- 页面标题: ${result.title}`);
    console.log(`- 内容块数量: ${result.blocks.length}`);
    console.log(`- HTML已保存到: ${CONFIG.OUTPUT_FILE}`);
    console.log(`- HTML长度: ${result.htmlContent.length} 字符`);
    console.log('\n提示: API方式可以获取比HTML抓取方式更完整和准确的内容!');
    
  } catch (error) {
    console.error('\n转换失败:');
    console.error(error.message);
    console.log('\n常见问题解决:');
    console.log('1. 确保API密钥正确');
    console.log('2. 确保您的Notion页面已公开并添加了integration访问权限');
    console.log('3. 确保页面ID可以从URL中正确提取');
    console.log('4. 检查您的网络连接是否正常');
  }
}

// 运行示例
convertWithApi();