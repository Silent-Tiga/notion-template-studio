#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

// 直接启动Electron主进程
function startElectron() {
  try {
    console.log('正在启动图形界面...');
    
    // Electron主进程路径
    const mainProcessPath = path.join(__dirname, 'electron-main.cjs');
    
    console.log(`主进程文件: ${mainProcessPath}`);
    
    // 使用npx electron来启动，避免路径问题
    const electronProcess = spawn('npx', ['electron', mainProcessPath], {
      stdio: 'inherit',
      shell: true // 在Windows上使用shell
    });
    
    electronProcess.on('error', (err) => {
      console.error('启动Electron失败:', err);
    });
    
    electronProcess.on('close', (code) => {
      console.log(`Electron已关闭，退出代码: ${code}`);
    });
    
  } catch (error) {
    console.error('启动图形界面时发生错误:', error);
  }
}

// 运行启动函数
startElectron();