import React from 'react';

export type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name: string;
  size?: IconSize;
  className?: string;
  color?: string;
  strokeWidth?: number;
  hoverEffect?: boolean;
  [key: string]: any;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'md', 
  className = '', 
  color = 'currentColor',
  strokeWidth = 2,
  hoverEffect = false,
  ...props 
}) => {
  const sizeClasses = {
    '2xs': 'w-2 h-2',
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  const hoverClasses = hoverEffect ? 'transition-all duration-300 hover:scale-110' : '';
  const iconSizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <svg 
      className={`${iconSizeClass} ${hoverClasses} ${className}`} 
      fill="none" 
      stroke={color}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;