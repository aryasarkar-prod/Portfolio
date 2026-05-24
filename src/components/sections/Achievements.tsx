import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import { FiExternalLink } from 'react-icons/fi';

const Achievements: React.FC = () => {
  const { achievements } = portfolioConfig;

  const cards = [
    'from-yellow-500/10 to-orange-500/10 border-yellow-300/40 dark:border-yellow-500/20 hover:border-yellow-400/60 dark:hover:border-yellow-500/40',
    'from-blue-500/10 to-cyan-500/10 border-blue-300/40 dark:border-blue-500/20 hover:border-blue-400/60 dark:hover:border-blue-500/40',
    'from-purple-500/10 to-pink-500/10 border-purple-300/40 dark:border-purple-500/20 hover:border-purple-400/60 dark:hover:border-purple-500/40',
    'from-green-500/10 to-teal-500/10 border-green-300/40 dark:border-green-500/20 hover:border-green-400/60 dark:hover:border-green-500/40',
    'from-red-500/10 to-pink-500/10 border-red-300/40 dark:border-red-500/20 hover:border-red-400/60 dark:hover:border-red-500/40',
    'from-indigo-500/10 to-blue-500/10 border-indigo-300/40 dark:border-indigo-500/20 hover:border-indigo-400/60 dark:hover:border-indigo-500/40',
  ];

  return (
    <SectionWrapper id="achievements" className="bg-gradient-to-b from-transparent via-yellow-50/40 dark:via-yellow-950/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Achievements"
          subtitle="Recognition, awards, and milestones I'm proud of"
          gradient="from-yellow-500 via-orange-500 to-red-500"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`h-full p-6 rounded-2xl bg-gradient-to-br ${cards[i % cards.length]} backdrop-blur-md border transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{ach.icon}</div>
                  <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full">
                    {ach.date}
                  </span>
                </div>

                <h3 className="text-gray-900 dark:text-white font-bold text-base mb-1 leading-snug">{ach.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">{ach.organization}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{ach.description}</p>

                {ach.link && ach.link !== '#' && (
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                  >
                    Learn More <FiExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
