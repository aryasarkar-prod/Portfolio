import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { FiMapPin, FiCalendar, FiChevronDown, FiChevronUp, FiCheckCircle } from 'react-icons/fi';

const Experience: React.FC = () => {
  const { experience } = portfolioConfig;
  const [expanded, setExpanded] = useState<number>(experience[0]?.id ?? 1);

  const badgeVariants: Array<'blue' | 'purple' | 'green' | 'pink' | 'yellow'> = [
    'blue', 'purple', 'green', 'pink', 'yellow',
  ];

  return (
    <SectionWrapper id="experience" className="bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and the impact I've made along the way"
          gradient="from-purple-400 via-pink-400 to-red-400"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pl-16 md:pl-20 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-6 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      exp.current
                        ? 'border-blue-400 bg-blue-500/20'
                        : 'border-gray-600 bg-gray-800'
                    }`}
                  >
                    {exp.current && (
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    )}
                  </motion.div>
                </div>

                <GlassCard
                  className="overflow-hidden"
                  hover={false}
                  onClick={() => setExpanded(expanded === exp.id ? -1 : exp.id)}
                >
                  {/* Header */}
                  <div className="p-5 cursor-pointer select-none">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
                          <span className="font-semibold text-blue-400">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <FiMapPin size={12} /> {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiCalendar size={12} />
                            {exp.startDate} — {exp.endDate}
                          </span>
                        </div>
                      </div>
                      <button className="text-gray-500 hover:text-white transition-colors flex-shrink-0 mt-1">
                        {expanded === exp.id ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                      </button>
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech, ti) => (
                        <Badge
                          key={tech}
                          label={tech}
                          variant={badgeVariants[ti % badgeVariants.length]}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expanded === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-white/5 pt-4">
                          <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {exp.description}
                          </p>
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                              Key Achievements
                            </p>
                            {exp.achievements.map(a => (
                              <div key={a} className="flex items-start gap-2 text-sm text-gray-400">
                                <FiCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                                {a}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
