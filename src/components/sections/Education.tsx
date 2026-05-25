import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import { FiMapPin, FiCalendar, FiAward, FiStar } from 'react-icons/fi';

// ── Logo with initials fallback ───────────────────────────────────────────────
const InstitutionLogo: React.FC<{ src: string; name: string; size?: number }> = ({
  src, name, size = 56,
}) => {
  const [failed, setFailed] = useState(false);

  // Generate initials: "Jadavpur University" → "JU"
  const initials = name
    .split(' ')
    .filter(w => w.length > 2)          // skip "of", "in", etc.
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');

  // Pick a deterministic colour from the name
  const colours = [
    ['#dbeafe', '#2563eb'], // blue
    ['#ede9fe', '#7c3aed'], // purple
    ['#dcfce7', '#16a34a'], // green
    ['#fef9c3', '#ca8a04'], // yellow
    ['#fce7f3', '#db2777'], // pink
    ['#cffafe', '#0891b2'], // cyan
  ];
  const idx = name.charCodeAt(0) % colours.length;
  const [bg, fg] = colours[idx];

  if (!src || failed) {
    return (
      <div
        className="rounded-2xl flex items-center justify-center font-extrabold text-sm select-none flex-shrink-0 border-2 border-white/20 dark:border-white/10 shadow-md"
        style={{ width: size, height: size, background: bg, color: fg }}
      >
        {initials || name[0].toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="rounded-2xl object-contain border-2 border-white/20 dark:border-white/10 shadow-md bg-white p-1 flex-shrink-0"
      style={{ width: size, height: size }}
    />
  );
};

const Education: React.FC = () => {
  const { education } = portfolioConfig;

  return (
    <SectionWrapper id="education" className="bg-gradient-to-b from-transparent via-cyan-50/40 dark:via-cyan-950/5 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic background and the foundations that shaped me"
          gradient="from-cyan-500 via-teal-500 to-green-500"
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

                  {/* Logo + year column */}
                  <div className="flex-shrink-0 flex md:flex-col items-center gap-4 md:gap-3 md:w-24">
                    <InstitutionLogo src={edu.logo} name={edu.institution} size={64} />
                    {/* Year range pill */}
                    <div className="flex md:flex-col items-center gap-1 text-center">
                      <span className="text-sm font-bold text-blue-500 dark:text-blue-400">{edu.startYear}</span>
                      <span className="text-gray-400 text-xs mx-1 md:mx-0">–</span>
                      <span className="text-sm font-bold text-purple-500 dark:text-purple-400">{edu.endYear}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-base">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-sm font-semibold flex-shrink-0">
                        <FiStar size={14} />
                        {edu.grade}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1"><FiMapPin size={12} /> {edu.location}</span>
                      <span className="flex items-center gap-1"><FiCalendar size={12} /> {edu.startYear} – {edu.endYear}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{edu.description}</p>

                    {edu.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map(h => (
                          <span
                            key={h}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20"
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
