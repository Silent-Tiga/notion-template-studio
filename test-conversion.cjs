const { convertNotionToHtml } = require('./cli/notion-to-html-core.cjs');

async function testConversion() {
  console.log('开始测试Notion页面转换...');
  
  try {
    const url = 'https://sustaining-guanaco-0f4.notion.site/iOS-281f5e9a70f780d0bfaafd4cba1eaa84';
    console.log(`测试URL: ${url}`);
    
    const result = await convertNotionToHtml(url, 'test-output.html', {
      primaryColor: '#4f46e5',
      backgroundColor: '#ffffff',
      textColor: '#1f2937',
      apiKey: 'secret_dummy'
    });
    
    console.log('\n转换结果:');
    console.log(`- 标题: ${result.title}`);
    console.log(`- 页面ID: ${result.pageId}`);
    console.log(`- HTML内容已保存到: test-output.html`);
    console.log(`- HTML长度: ${result.htmlContent.length} 字符`);
    
    // 输出HTML内容的前500个字符作为预览
    console.log('\nHTML内容预览:');
    console.log(result.htmlContent.substring(0, 500) + '...');
    
  } catch (error) {
    console.error('转换测试失败:', error);
  }
}

testConversion();