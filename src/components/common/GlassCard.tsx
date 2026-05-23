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
    whileHover={hover ? { y: -6, scale: 1.02 } : {}}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={`
      backdrop-blur-md
      bg-white/5 dark:bg-white/5
      border border-white/10 dark:border-white/10
      rounded-2xl shadow-xl
      ${hover ? 'cursor-pointer hover:border-blue-500/40 hover:shadow-blue-500/10 hover:shadow-2xl' : ''}
      transition-all duration-300
      ${className}
    `}
  >
    {children}
  </motion.div>
);

export default GlassCard;
