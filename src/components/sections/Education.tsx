import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import { FiMapPin, FiAward, FiStar } from 'react-icons/fi';

// ── Reusable circular logo ────────────────────────────────────────────────────
const CircleLogo: React.FC<{ src: string; name: string; size: number }> = ({ src, name, size }) => {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(' ')
    .filter(w => w.length > 2)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('') || name[0].toUpperCase();

  const palettes = [
    ['#dbeafe', '#1d4ed8'],
    ['#ede9fe', '#6d28d9'],
    ['#dcfce7', '#15803d'],
    ['#fef9c3', '#a16207'],
    ['#fce7f3', '#be185d'],
    ['#cffafe', '#0e7490'],
  ];
  const [bg, fg] = palettes[name.charCodeAt(0) % palettes.length];

  const base = {
    width: size,
    height: size,
    borderRadius: '50%',
    flexShrink: 0,
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
    border: '3px solid rgba(255,255,255,0.6)',
  } as React.CSSProperties;

  if (!src || failed) {
    return (
      <div
        style={{ ...base, background: bg, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontWeight: 800, color: fg, fontSize: size * 0.3 }}
      >
        {initials}
      </div>
    );
  }

  return (
    <div style={{ ...base, background: '#fff' }}>
      <img
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: size * 0.1 }}
      />
    </div>
  );
};

// ── Education ─────────────────────────────────────────────────────────────────
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
                <div className="flex gap-5 items-start">

                  {/* ── Left column: circular logo + year ── */}
                  <div className="flex flex-col items-center gap-2 flex-shrink-0 w-20">
                    <CircleLogo src={edu.logo} name={edu.institution} size={64} />
                    {/* Year range */}
                    <div className="flex flex-col items-center leading-tight">
                      <span className="text-xs font-bold text-blue-500 dark:text-blue-400">{edu.startYear}</span>
                      <span className="text-gray-400 dark:text-gray-600 text-xs">—</span>
                      <span className="text-xs font-bold text-purple-500 dark:text-purple-400">{edu.endYear}</span>
                    </div>
                  </div>

                  {/* ── Right: content ── */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-0.5">{edu.degree}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{edu.institution}</p>
                      </div>
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs font-semibold flex-shrink-0">
                        <FiStar size={12} />
                        {edu.grade}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <FiMapPin size={11} /> {edu.location}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>

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
