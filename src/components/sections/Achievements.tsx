import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import { FiExternalLink } from 'react-icons/fi';

// ── Card image with emoji fallback ───────────────────────────────────────────
const AchievementImage: React.FC<{ src?: string; icon: string; title: string }> = ({ src, icon, title }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="w-full h-28 flex items-center justify-center text-6xl select-none">
        {icon}
      </div>
    );
  }

  return (
    <div className="w-full h-28 flex items-center justify-center p-4">
      <img
        src={src}
        alt={title}
        onError={() => setFailed(true)}
        className="max-h-full max-w-full object-contain"
        style={{ filter: 'var(--ach-img-filter, none)' }}
      />
    </div>
  );
};

const Achievements: React.FC = () => {
  const { achievements } = portfolioConfig;

  const cards = [
    { grad: 'from-yellow-500/10 to-orange-500/10', border: 'border-yellow-300/40 dark:border-yellow-500/20 hover:border-yellow-400/60 dark:hover:border-yellow-500/40', filter: 'none' },
    { grad: 'from-green-500/10 to-teal-500/10',    border: 'border-green-300/40  dark:border-green-500/20  hover:border-green-400/60  dark:hover:border-green-500/40',  filter: 'none' },
    { grad: 'from-orange-500/10 to-yellow-500/10', border: 'border-orange-300/40 dark:border-orange-500/20 hover:border-orange-400/60 dark:hover:border-orange-500/40', filter: 'none' },
    { grad: 'from-gray-500/10 to-slate-500/10',    border: 'border-gray-300/40   dark:border-gray-500/20   hover:border-gray-400/60   dark:hover:border-gray-500/40',   filter: 'none' },
    { grad: 'from-blue-500/10 to-indigo-500/10',   border: 'border-blue-300/40   dark:border-blue-500/20   hover:border-blue-400/60   dark:hover:border-blue-500/40',   filter: 'none' },
    { grad: 'from-purple-500/10 to-pink-500/10',   border: 'border-purple-300/40 dark:border-purple-500/20 hover:border-purple-400/60 dark:hover:border-purple-500/40', filter: 'invert(1) brightness(1.5)' },
  ];

  return (
    <SectionWrapper id="achievements" className="bg-gradient-to-b from-transparent via-yellow-50/40 dark:via-yellow-950/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Achievements"
          subtitle="Certifications, awards, and milestones I'm proud of"
          gradient="from-yellow-500 via-orange-500 to-red-500"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => {
            const card = cards[i % cards.length];
            return (
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
                  className={`h-full flex flex-col rounded-2xl bg-gradient-to-br ${card.grad} backdrop-blur-md border ${card.border} transition-all duration-300 overflow-hidden`}
                  style={{ '--ach-img-filter': card.filter } as React.CSSProperties}
                >
                  {/* ── Image / icon area ── */}
                  <div className="bg-white/30 dark:bg-white/5 border-b border-white/20 dark:border-white/5">
                    <AchievementImage
                      src={(ach as { image?: string }).image}
                      icon={ach.icon}
                      title={ach.title}
                    />
                  </div>

                  {/* ── Content ── */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Date badge */}
                    <div className="flex justify-end mb-3">
                      <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full">
                        {ach.date}
                      </span>
                    </div>

                    <h3 className="text-gray-900 dark:text-white font-bold text-sm mb-1 leading-snug">{ach.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-xs font-semibold mb-2">{ach.organization}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed flex-1 mb-3">{ach.description}</p>

                    {ach.link && ach.link !== '#' && (
                      <a
                        href={ach.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium mt-auto"
                      >
                        Learn More <FiExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
