import React from 'react';

const SidebarRight: React.FC = () => {
  // 模拟最新动态数据
  const latestUpdates = [
    {
      time: '3小时前',
      description: '新增支持 Notion 数据库导出',
      icon: '🆕'
    },
    {
      time: '1天前',
      description: '优化移动端适配',
      icon: '⚡️'
    },
    {
      time: '2天前',
      description: '上线多语言支持',
      icon: '🌐'
    }
  ];

  return (
    <div className="w-full lg:w-80 p-4">
      <div className="bg-neutral-100 rounded-github p-5">
        <h3 className="text-sm font-semibold text-neutral-900 mb-4">最新动态</h3>
        <ul className="space-y-3 mb-4">
          {latestUpdates.map((update, index) => (
            <li key={index} className="flex items-start">
              <span className="text-neutral-500 mr-2 mt-0.5">{update.icon}</span>
              <span className="text-sm text-neutral-600">
                <span className="text-neutral-500">{update.time}：</span>{update.description}
              </span>
            </li>
          ))}
        </ul>
        <button className="text-sm text-primary hover:text-primary-dark">
          查看更多更新 →
        </button>
      </div>
    </div>
  );
};

export default SidebarRight;