const { contextBridge, ipcRenderer } = require('electron');

// 向渲染进程暴露安全的IPC通道
contextBridge.exposeInMainWorld('electronAPI', {
  // 转换Notion页面
  convertNotion: (params) => ipcRenderer.invoke('convert-notion', params),
  // 保存HTML文件
  saveHtml: (params) => ipcRenderer.invoke('save-html', params)
});