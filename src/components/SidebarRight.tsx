import React from 'react';

const SidebarRight: React.FC = () => {
  // Simulated latest updates data
  const latestUpdates = [
    {
      time: '3 hours ago',
      description: 'Added support for Notion database export',
      icon: '🆕'
    },
    {
      time: '1 day ago',
      description: 'Optimized mobile responsiveness',
      icon: '⚡️'
    },
    {
      time: '2 days ago',
      description: 'Launched multi-language support',
      icon: '🌐'
    }
  ];

  return (
    <div className="w-full lg:w-80 p-4">
      <div className="bg-neutral-100 rounded-github p-5">
        <h3 className="text-sm font-semibold text-neutral-900 mb-4">Latest Updates</h3>
        <ul className="space-y-3 mb-4">
          {latestUpdates.map((update, index) => (
            <li key={index} className="flex items-start">
              <span className="text-neutral-500 mr-2 mt-0.5">{update.icon}</span>
              <span className="text-sm text-neutral-600">
                <span className="text-neutral-500">{update.time}: </span>{update.description}
              </span>
            </li>
          ))}
        </ul>
        <button className="text-sm text-primary hover:text-primary-dark">
          View more updates →
        </button>
      </div>
    </div>
  );
};

export default SidebarRight;