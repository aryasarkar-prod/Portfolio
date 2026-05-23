import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import { FiMapPin, FiCalendar, FiAward, FiStar } from 'react-icons/fi';

const Education: React.FC = () => {
  const { education } = portfolioConfig;

  return (
    <SectionWrapper id="education" className="bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic background and the foundations that shaped me"
          gradient="from-cyan-400 via-teal-400 to-green-400"
        />

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <GlassCard className="p-6 md:p-8" hover>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Year indicator */}
                  <div className="flex-shrink-0 md:w-28 text-center">
                    <div className="inline-flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20">
                      <span className="text-lg font-extrabold text-blue-400">{edu.startYear}</span>
                      <div className="w-6 h-px bg-blue-500/40 my-1" />
                      <span className="text-sm font-bold text-purple-400">{edu.endYear}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-blue-400 font-semibold text-base">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold flex-shrink-0">
                        <FiStar size={14} />
                        {edu.grade}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <FiMapPin size={12} className="text-gray-500" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiCalendar size={12} className="text-gray-500" />
                        {edu.startYear} – {edu.endYear}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{edu.description}</p>

                    {/* Highlights */}
                    {edu.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map(h => (
                          <span
                            key={h}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20"
                          >
                            <FiAward size={10} />
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
