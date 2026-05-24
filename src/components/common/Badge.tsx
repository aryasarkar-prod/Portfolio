import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'blue' | 'purple' | 'green' | 'pink' | 'yellow';
}

const variantMap = {
  blue:   'bg-blue-100   dark:bg-blue-500/10   text-blue-600   dark:text-blue-400   border-blue-200   dark:border-blue-500/20',
  purple: 'bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/20',
  green:  'bg-green-100  dark:bg-green-500/10  text-green-600  dark:text-green-400  border-green-200  dark:border-green-500/20',
  pink:   'bg-pink-100   dark:bg-pink-500/10   text-pink-600   dark:text-pink-400   border-pink-200   dark:border-pink-500/20',
  yellow: 'bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/20',
};

const Badge: React.FC<BadgeProps> = ({ label, variant = 'blue' }) => (
  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${variantMap[variant]}`}>
    {label}
  </span>
);

export default Badge;
