import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gradient?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  gradient = 'from-blue-500 via-purple-500 to-pink-500',
}) => (
  <div className="text-center mb-16">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '60px' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"
    />
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionTitle;
