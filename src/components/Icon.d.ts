import React from 'react';

type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name: string;
  size?: IconSize;
  className?: string;
  color?: string;
  strokeWidth?: number;
  hoverEffect?: boolean;
  [key: string]: any;
}

declare const Icon: React.FC<IconProps>;

export default Icon;