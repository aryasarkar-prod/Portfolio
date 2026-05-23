import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'blue' | 'purple' | 'green' | 'pink' | 'yellow';
}

const variantMap = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
  pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

const Badge: React.FC<BadgeProps> = ({ label, variant = 'blue' }) => (
  <span
    className={`text-xs font-medium px-3 py-1 rounded-full border ${variantMap[variant]} backdrop-blur-sm`}
  >
    {label}
  </span>
);

export default Badge;
