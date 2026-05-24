import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = true, onClick }) => (
  <motion.div
    onClick={onClick}
    whileHover={hover ? { y: -5, scale: 1.015 } : {}}
    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    className={`
      backdrop-blur-md
      bg-white/80 dark:bg-gray-800/70
      border border-gray-200 dark:border-gray-700/60
      rounded-2xl shadow-sm dark:shadow-xl
      ${hover
        ? 'cursor-pointer hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:shadow-md dark:hover:shadow-blue-500/10 dark:hover:shadow-2xl'
        : ''}
      transition-all duration-300
      ${className}
    `}
  >
    {children}
  </motion.div>
);

export default GlassCard;
