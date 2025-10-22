import { convertNotionToHtml } from './cli/notion-to-html-core.cjs';

// 测试函数 - 测试HTML抓取和API两种方式
async function testNotionConversion() {
    try {
        console.log('========================================');
        console.log('开始测试Notion页面转换功能...');
        console.log('========================================\n');
        
        // 测试一个公开的Notion页面
        const testUrl = 'https://notion.so/Notion-API-768285386e794d258e88967b14b5a462';
        console.log(`测试URL: ${testUrl}`);
        console.log('\n1. 测试HTML抓取方式（无需API密钥）:');
        
        // 使用HTML抓取方式（不提供API密钥）
        const result1 = await convertNotionToHtml(testUrl, {
            debug: true,
            primaryColor: '#4F46E5',
            backgroundColor: '#ffffff',
            textColor: '#1F2937'
        });
        
        // 输出结果摘要
        console.log('\n转换结果摘要:');
        console.log(`- 标题: ${result1.title}`);
        console.log(`- 内容块数量: ${result1.blocks.length}`);
        console.log(`- HTML长度: ${result1.htmlContent.length} 字符`);
        
        // 输出前几个内容块的类型
        console.log('\n前3个内容块的类型:');
        result1.blocks.slice(0, 3).forEach((block, index) => {
            if (block.text) {
                console.log(`块 ${index + 1}: ${block.type || 'text'} - ${block.text.substring(0, 100)}...`);
            } else {
                console.log(`块 ${index + 1}: ${JSON.stringify(block).substring(0, 150)}...`);
            }
        });
        
        console.log('\n========================================');
        console.log('\n2. API方式使用说明:');
        console.log('----------------------------------------');
        console.log('要使用API方式获取更完整的内容，请按照以下步骤操作:');
        console.log('1. 访问 https://www.notion.so/my-integrations 创建API密钥');
        console.log('2. 打开您的Notion页面，添加该integration的访问权限');
        console.log('3. 使用以下代码格式提供API密钥:');
        console.log('   const result = await convertNotionToHtml(url, {');
        console.log('     apiKey: "YOUR_API_KEY"');
        console.log('   });');
        console.log('\nHTML抓取方式可能无法获取完整内容，建议使用API方式！');
        
        console.log('\n========================================');
        console.log('测试完成！');
        console.log('========================================');
        
    } catch (error) {
        console.error('\n测试过程中出现错误:');
        console.error(error.message);
        console.log('\n请尝试提供有效的Notion API密钥以获取更好的转换结果。');
    }
}

// 运行测试
testNotionConversion();