import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';

const iconColors: Record<string, string> = {
  react: '#61dafb', typescript: '#3178c6', nextjs: '#000000', tailwind: '#38bdf8',
  redux: '#764abc', nodejs: '#68a063', express: '#888888', python: '#3776ab',
  graphql: '#e535ab', fastapi: '#059669', mongodb: '#47a248', postgresql: '#336791',
  redis: '#dc382d', mysql: '#4479a1', docker: '#2496ed', aws: '#ff9900',
  git: '#f05032', linux: '#f5a500', figma: '#f24e1e',
};

const iconEmojis: Record<string, string> = {
  react: '⚛️', typescript: '🔷', nextjs: '▲', tailwind: '🎨', redux: '🔮',
  nodejs: '🟩', express: '🚂', python: '🐍', graphql: '◈', fastapi: '⚡',
  mongodb: '🍃', postgresql: '🐘', redis: '🔴', mysql: '🐬', docker: '🐳',
  aws: '☁️', git: '🌿', linux: '🐧', figma: '🖌️',
};

const Skills: React.FC = () => {
  const { skills } = portfolioConfig;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-transparent via-blue-50/50 dark:via-blue-950/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Tech Stack"
          subtitle="Technologies I work with daily to build production-ready applications"
          gradient="from-cyan-500 via-blue-500 to-purple-500"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skills.categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                activeCategory === i
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/20'
                  : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-blue-400 dark:hover:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-white/5'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>{cat.name}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.categories[activeCategory].items.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
            >
              <GlassCard className="p-5" hover>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: `${iconColors[skill.icon] || '#3b82f6'}22` }}
                  >
                    {iconEmojis[skill.icon] || '🔧'}
                  </div>
                  <div className="flex-1 min-w-0 flex justify-between items-center">
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">{skill.name}</span>
                    <span className="text-xs font-bold" style={{ color: iconColors[skill.icon] || '#3b82f6' }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>

                <div className="h-1.5 bg-gray-200 dark:bg-gray-700/60 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.07, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${iconColors[skill.icon] || '#3b82f6'}, ${iconColors[skill.icon] || '#8b5cf6'}88)`,
                    }}
                  />
                </div>

                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Familiar'}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Full tech arsenal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <p className="text-center text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-8">
            Full Tech Arsenal
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.categories.flatMap(cat => cat.items).map((skill, i) => (
              <motion.div
                key={`all-${skill.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60 text-sm text-gray-600 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-white transition-all"
              >
                <span>{iconEmojis[skill.icon] || '🔧'}</span>
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
