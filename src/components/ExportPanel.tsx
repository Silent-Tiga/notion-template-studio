import React, { useState } from 'react';
import { ExportPackage, Notification, NotificationType } from '../types';
import { Download, CheckCircle, AlertCircle, Info, Package, FileText, BookOpen } from 'lucide-react';

interface ExportPanelProps {
  exportPackage: ExportPackage | null;
  isProcessing: boolean;
}

const ExportPanel: React.FC<ExportPanelProps> = ({ exportPackage, isProcessing }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  // Show notification
  const showNotification = (message: string, type: NotificationType = 'success'): void => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const downloadPackage = (): void => {
    if (exportPackage && exportPackage.htmlFile) {
      try {
        // 创建Blob对象
        const blob = new Blob([exportPackage.htmlFile.content], { type: exportPackage.htmlFile.type });
        const url = URL.createObjectURL(blob);
        
        // 创建下载链接
        const a = document.createElement('a');
        a.href = url;
        a.download = exportPackage.htmlFile.name;
        document.body.appendChild(a);
        a.click();
        
        // 清理
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification('Download started successfully!', 'success');
      } catch (error) {
        console.error('下载文件失败:', error);
        showNotification('Failed to download file. Please try again later.', 'error');
      }
    } else {
      showNotification('No package available for download.', 'error');
    }
  };

  if (isProcessing) {
    return (
      <div className="card-glass p-8 rounded-3xl shadow-card flex items-center justify-center min-h-[400px] animate-float-small relative overflow-hidden border border-neutral-100">
        {/* 装饰元素 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
        
        <div className="flex flex-col items-center relative z-10">
          <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full mb-8 flex items-center justify-center animate-spin relative">
            {/* 发光效果 */}
            <span className="absolute -inset-1.5 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow" />
            <Package className="text-primary" size={28} />
          </div>
          <p className="text-neutral-700 font-medium text-center text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Preparing your export package...
          </p>
          <p className="text-neutral-500 text-sm mt-3 max-w-xs text-center">
            Compiling resources may take a moment. Please wait.
          </p>
          
          {/* 装饰气泡 */}
          <div className="bubble-tr absolute top-10 right-10 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-1.5">
              <span className="text-primary font-bold">📦</span>
              <span>Packaging</span>
            </div>
          </div>
          
          <div className="bubble-bl absolute bottom-10 left-10 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small" style={{ animationDelay: '0.3s' }} hover:shadow-md transition-all duration-300>
            <div className="flex items-center gap-1.5">
              <span className="text-secondary font-bold">⚡</span>
              <span>Processing</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!exportPackage) {
    return (
      <div className="card-glass p-8 rounded-3xl shadow-card flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden animate-float-small border border-neutral-100">
        {/* 装饰元素 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mb-8 relative z-10 shadow-md group hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:shadow-lg">
          <Package className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
        </div>
        <h3 className="text-2xl font-semibold text-neutral-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative z-10">
          Export package will be ready soon
        </h3>
        <p className="text-neutral-600 text-center max-w-md relative z-10 mb-8">
          Once the guide is generated, you'll get the full export package.
        </p>
        
        <div className="bubble-tl bg-white/80 backdrop-blur-sm px-6 py-5 rounded-xl shadow-card border border-neutral-100 text-sm text-neutral-700 relative z-10 animate-float-small group hover:shadow-card-hover transition-all duration-300 hover:border-primary/20" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 text-primary mb-4">
            <Info size={18} className="text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium text-base group-hover:text-primary transition-colors duration-300">Included</span>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
              <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={14} />
              </span>
              <span>Complete template files</span>
            </li>
            <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
              <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={14} />
              </span>
              <span>User Guide document</span>
            </li>
            <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
              <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={14} />
              </span>
              <span>Implementation guide</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="card-glass rounded-3xl overflow-hidden shadow-card bg-white hover:shadow-card-hover transition-all duration-500 animate-float-small relative group border border-neutral-100">
      {/* 装饰背景 */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" aria-hidden="true" />
      
      <div className="flex flex-wrap items-center justify-between bg-gradient-to-r from-primary/5 to-secondary/5 px-8 py-6 border-b border-neutral-100/50 gap-4">
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
            <Package size={24} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <h3 className="font-medium text-neutral-800 text-xl group-hover:text-primary transition-colors duration-300">Export Package</h3>
            <p className="text-sm text-neutral-500">Complete site files and user guide</p>
          </div>
        </div>
        <button 
          onClick={downloadPackage}
          className={`px-7 py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${exportPackage?.htmlFile ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:from-primary/90 hover:to-secondary/90 transform hover:-translate-y-1 card-hover relative overflow-hidden group' : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'}`}
          disabled={!exportPackage?.htmlFile}
        >
          {exportPackage?.htmlFile && (
            <>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10"><Download size={18} />
              Download Now</span>
              {/* 渐变发光效果 */}
              <span className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-700"></span>
            </>
          )}
          {!exportPackage?.htmlFile && (
            <>
              <Download size={18} />
              Download Now
            </>
          )}
        </button>
      </div>
      
      <div className="p-8 relative">
        {/* 背景装饰 */}
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
        
        <div className="mb-10 relative">
          {/* 装饰元素 */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Your Complete Template Package
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl relative z-10">
            Includes all files and docs to implement your template
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="card-glass rounded-2xl p-6 bg-white/90 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 card-hover animate-float-small group hover:border-primary/20">
            <div className="flex items-start gap-4 mb-5">
              <div className="bubble-tl bg-gradient-to-br from-primary/10 to-primary/20 text-primary rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                <FileText size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 text-xl group-hover:text-primary transition-colors duration-300">Template Files</h3>
                <p className="text-neutral-600 text-sm">All source files required to implement the website</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">HTML/CSS/JS source files</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">Assets (images, icons)</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">Configuration files</span>
              </li>
            </ul>
          </div>
          
          <div className="card-glass rounded-2xl p-6 bg-white/90 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 card-hover animate-float-small group hover:border-secondary/20" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4 mb-5">
              <div className="bubble-tl bg-gradient-to-br from-secondary/10 to-secondary/20 text-secondary rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:from-secondary/20 group-hover:to-secondary/30 transition-all duration-300">
                <BookOpen size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 text-xl group-hover:text-secondary transition-colors duration-300">Usage Guide</h3>
                <p className="text-neutral-600 text-sm mt-1">Complete user guide and instructions</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">Implementation guide</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">Customization tips</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">FAQ and troubleshooting</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bubble-bl border border-primary/20 rounded-2xl p-7 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-card transition-all duration-300 hover:shadow-card-hover animate-float-small group hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 transition-all duration-500" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <h3 className="font-semibold text-neutral-800 mb-1 text-xl group-hover:text-primary transition-colors duration-300">Ready to download</h3>
              <p className="text-neutral-600">Your package is ready and can be used immediately</p>
            </div>
            <button 
              onClick={downloadPackage}
              className="px-8 py-3.5 rounded-xl font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 animate-float relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10"><Download size={18} />
              Download Now</span>
              {/* 渐变发光效果 */}
              <span className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-700"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Notification component */}
      {notification && (
        <div className={`fixed bottom-5 right-5 z-50 transform transition-all duration-500 translate-y-0 opacity-100 flex items-center gap-3 p-4 rounded-2xl shadow-lg backdrop-blur-sm ${notification.type === 'success' ? 'bg-success text-white' : notification.type === 'error' ? 'bg-error text-white' : 'bg-info text-white'}`}>
          {notification.type === 'success' ? (
            <CheckCircle size={18} />
          ) : notification.type === 'error' ? (
            <AlertCircle size={18} />
          ) : (
            <Info size={18} />
          )}
          <span className="font-medium">{notification.message}</span>
        </div>
      )}
    </div>
  );
}

export default ExportPanel;