const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

// 导入现有的CLI转换逻辑
const { convertNotionToHtml, extractPageIdFromUrl } = require('./notion-to-html-core.cjs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'electron-preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // 加载GUI界面
  mainWindow.loadFile(path.join(__dirname, 'gui', 'index.html'));

  // 打开开发者工具
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 处理Notion到HTML的转换
ipcMain.handle('convert-notion', async (event, { url, themeConfig, apiKey }) => {
  try {
    console.log('开始转换Notion页面:', { url, themeConfig });
    
    // 从URL提取页面ID
    const pageId = extractPageIdFromUrl(url);
    
    if (!pageId) {
      throw new Error('无法从URL中提取有效的Notion页面ID。请确保URL格式正确，例如：https://www.notion.so/My-Page-8e2579d089d34b6aa02822a4353e8654');
    }
    
    console.log('提取到的页面ID:', pageId);
    
    // 构建选项对象 - 确保包含所有必要的参数
    const options = {
      url: url,
      apiKey: apiKey?.trim() || '',
      theme: themeConfig
    };
    
    // 如果提供了API密钥，添加到选项中
    if (apiKey && apiKey.trim()) {
      console.log('使用Notion API密钥进行转换');
    } else {
      console.log('使用HTML抓取方式进行转换（未提供API密钥）');
      console.log('正在通过公开方式获取页面内容...');
    }
    
    // 执行转换
    const result = await convertNotionToHtml(options);
    
    console.log('转换成功，HTML长度:', result.html ? result.html.length : 'N/A');
    
    return {
      success: true,
      ...result,
      method: apiKey ? 'api' : 'html',
      blocksCount: result.blocks?.length || 0
    };
  } catch (error) {
    console.error('转换过程中发生错误:', error);
    
    // 增强错误信息
    let errorMessage = error.message;
    
    // 检查是否是API相关错误
    if (errorMessage.includes('获取Notion内容失败') || 
        errorMessage.includes('Notion API error') ||
        errorMessage.includes('访问被拒绝')) {
      if (apiKey) {
        errorMessage += '\n\nAPI密钥可能无效或没有访问此页面的权限。\n请检查API密钥是否正确，以及该密钥是否有权限访问指定的Notion页面。';
      } else {
        errorMessage += '\n\n重要提示：当不使用API密钥时，本工具仅支持公开的Notion页面。\n请确保您的页面已设置为公开共享，或者提供有效的Notion API密钥。';
      }
    }
    
    return { success: false, error: errorMessage };
  }
});

// 监听保存文件请求
ipcMain.handle('save-html', async (event, { content, defaultPath }) => {
  try {
    const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, {
      defaultPath: defaultPath || 'notion-output.html',
      filters: [
        { name: 'HTML Files', extensions: ['html'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    });

    if (!canceled && filePath) {
      fs.writeFileSync(filePath, content);
      return { success: true, filePath };
    }
    return { success: false };
  } catch (error) {
    console.error('保存文件失败:', error);
    return { success: false, error: error.message };
  }
});

// 应用生命周期
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});