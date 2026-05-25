import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { FiMapPin, FiCalendar, FiChevronDown, FiChevronUp, FiCheckCircle } from 'react-icons/fi';

// ── Reusable circular logo ────────────────────────────────────────────────────
const CircleLogo: React.FC<{ src: string; name: string; size: number }> = ({ src, name, size }) => {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(' ')
    .filter(w => w.length > 1)
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
    ['#ffedd5', '#c2410c'],
  ];
  const [bg, fg] = palettes[name.charCodeAt(0) % palettes.length];

  const base = {
    width: size,
    height: size,
    borderRadius: '50%',
    flexShrink: 0,
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
    border: '3px solid rgba(255,255,255,0.6)',
  } as React.CSSProperties;

  if (!src || failed) {
    return (
      <div
        style={{ ...base, background: bg, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontWeight: 800, color: fg, fontSize: size * 0.32 }}
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

// ── Experience ────────────────────────────────────────────────────────────────
const Experience: React.FC = () => {
  const { experience } = portfolioConfig;
  const [expanded, setExpanded] = useState<number>(experience[0]?.id ?? 1);

  const badgeVariants: Array<'blue' | 'purple' | 'green' | 'pink' | 'yellow'> = [
    'blue', 'purple', 'green', 'pink', 'yellow',
  ];

  return (
    <SectionWrapper id="experience" className="bg-gradient-to-b from-transparent via-purple-50/40 dark:via-purple-950/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and the impact I've made along the way"
          gradient="from-purple-500 via-pink-500 to-red-500"
        />

        <div className="relative">
          {/* Vertical timeline line */}
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
                <div className="absolute left-4 md:left-6 top-7 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      exp.current
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800'
                    }`}
                  >
                    {exp.current && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />}
                  </motion.div>
                </div>

                <GlassCard
                  className="overflow-hidden"
                  hover={false}
                  onClick={() => setExpanded(expanded === exp.id ? -1 : exp.id)}
                >
                  {/* ── Card header ── */}
                  <div className="p-5 cursor-pointer select-none">
                    <div className="flex items-start gap-4">

                      {/* Circular company logo */}
                      <CircleLogo src={exp.logo} name={exp.company} size={48} />

                      {/* Role + meta */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-0.5">
                              <h3 className="text-base font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                              {exp.current && (
                                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                              {exp.company}
                            </p>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
                              <span className="flex items-center gap-1">
                                <FiMapPin size={11} /> {exp.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <FiCalendar size={11} /> {exp.startDate} — {exp.endDate}
                              </span>
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors flex-shrink-0 mt-0.5">
                            {expanded === exp.id ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                          </button>
                        </div>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {exp.technologies.map((tech, ti) => (
                            <Badge key={tech} label={tech} variant={badgeVariants[ti % badgeVariants.length]} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Expanded body ── */}
                  <AnimatePresence>
                    {expanded === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-gray-100 dark:border-white/5 pt-4">
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                            {exp.description}
                          </p>
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                            Key Achievements
                          </p>
                          <div className="space-y-2">
                            {exp.achievements.map(a => (
                              <div key={a} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
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
