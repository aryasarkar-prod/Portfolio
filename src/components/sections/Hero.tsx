import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { portfolioConfig } from '../../config/portfolioConfig';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';

// ── Tiny glowing orbit dot ────────────────────────────────────────────────────
const OrbitDot: React.FC<{
  size: number; color: string; radius: number;
  duration: number; delay?: number; reverse?: boolean;
}> = ({ size, color, radius, duration, delay = 0, reverse = false }) => (
  <motion.div
    className="absolute top-1/2 left-1/2 pointer-events-none"
    style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
  >
    <div className="absolute rounded-full" style={{
      width: size, height: size,
      top: 0, left: '50%',
      marginLeft: -(size / 2), marginTop: -(size / 2),
      background: color,
      boxShadow: `0 0 ${size * 3}px ${color}`,
    }} />
  </motion.div>
);

// ── All orbiting personality + skill tags ─────────────────────────────────────
// One parent div rotates — each pill is pre-positioned at its fixed angle.
// Each pill counter-rotates so text stays upright.
const ORBIT_TAGS = [
  { label: 'Full Stack',    emoji: '💻', color: '#2563eb' },
  { label: 'Open to Work',  emoji: '🚀', color: '#7c3aed' },
  { label: 'Bibliophile',   emoji: '📚', color: '#0e7490' },
  { label: 'Melophile',     emoji: '🎵', color: '#be185d' },
  { label: 'Guitarist',     emoji: '🎸', color: '#b45309' },
  { label: 'Hodophile',     emoji: '✈️', color: '#15803d' },
  { label: 'Sketch Artist', emoji: '🎨', color: '#7e22ce' },
  { label: 'Video Editor',  emoji: '🎬', color: '#dc2626' },
  { label: 'AI Engineer',   emoji: '🤖', color: '#0891b2' },
];
const TAG_RADIUS   = 195; // px from centre to pill
const TAG_DURATION = 34;  // seconds per full revolution

const OrbitalTagRing: React.FC = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    animate={{ rotate: 360 }}
    transition={{ duration: TAG_DURATION, repeat: Infinity, ease: 'linear' }}
  >
    {ORBIT_TAGS.map((tag, i) => {
      const angleDeg = (360 / ORBIT_TAGS.length) * i - 90; // start at top
      const rad = (angleDeg * Math.PI) / 180;
      const cx  = TAG_RADIUS * Math.cos(rad);
      const cy  = TAG_RADIUS * Math.sin(rad);
      return (
        <div
          key={tag.label}
          className="absolute"
          style={{
            top: '50%', left: '50%',
            transform: `translate(calc(-50% + ${cx}px), calc(-50% + ${cy}px))`,
          }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: TAG_DURATION, repeat: Infinity, ease: 'linear' }}
            className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white whitespace-nowrap backdrop-blur-sm border border-white/20 select-none"
            style={{ background: tag.color, boxShadow: `0 2px 14px ${tag.color}70` }}
          >
            {tag.emoji} {tag.label}
          </motion.div>
        </div>
      );
    })}
  </motion.div>
);

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero: React.FC = () => {
  const {
    name, bio, typingRoles, profilePictures,
    social, email, resumeUrl, availableForWork, stats,
  } = portfolioConfig;

  const pics = profilePictures ?? ['/profile.jpg'];
  const [picIndex, setPicIndex] = useState(0);
  useEffect(() => {
    if (pics.length <= 1) return;
    const id = setInterval(() => setPicIndex(i => (i + 1) % pics.length), 3500);
    return () => clearInterval(id);
  }, [pics.length]);

  const initials      = name.split(' ').map((n: string) => n[0]).join('');
  const typingSequence = typingRoles.flatMap(r => [r, 2000]);

  const socials = [
    { icon: <FiGithub size={20} />,   href: social.github,       label: 'GitHub'   },
    { icon: <FiLinkedin size={20} />, href: social.linkedin,     label: 'LinkedIn' },
    { icon: <FiMail size={20} />,     href: `mailto:${email}`,   label: 'Email'    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Animated background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950" />
        <div className="absolute inset-0 opacity-20 dark:opacity-30" style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.15) 0%, transparent 50%)`,
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">

          {/* ── LEFT — text ── */}
          <div className="flex-1 text-center lg:text-left min-w-0">
            {availableForWork && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </motion.div>
            )}

            <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-blue-600 dark:text-blue-400 font-mono text-lg mb-2 font-medium">
              Hello, I'm
            </motion.p>

            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold mb-6 h-10">
              <span className="text-gray-500 dark:text-gray-400">I'm a </span>
              <TypeAnimation
                sequence={typingSequence as (string | number)[]}
                wrapper="span" speed={50} repeat={Infinity}
                className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              />
            </motion.div>

            <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mb-8 leading-relaxed">
              {bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59,130,246,0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#github')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-purple-500 transition-all">
                View My Work
              </motion.button>
              <motion.a href={resumeUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 hover:border-blue-400 dark:hover:border-blue-500/40 transition-all flex items-center gap-2">
                <FiDownload size={16} /> Resume
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-3 justify-center lg:justify-start">
              {socials.map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all">
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — photo carousel with orbital tag ring ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            {/*
              Outer wrapper: large enough (440×440) so the orbiting pills
              at radius 195 don't get clipped.
            */}
            <div className="relative" style={{ width: 440, height: 440 }}>

              {/* ── Orbiting personality + skill tag ring ── */}
              <OrbitalTagRing />

              {/* ── Inner picture frame — centred inside the 440px wrapper ── */}
              <div className="absolute" style={{
                top: '50%', left: '50%',
                width: 300, height: 300,
                transform: 'translate(-50%, -50%)',
              }}>
                {/* Conic gradient spinning ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full p-[3px]"
                  style={{
                    background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4, #10b981, #3b82f6)',
                    borderRadius: '50%',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gray-50 dark:bg-gray-950" />
                </motion.div>

                {/* Dashed ring CCW */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[10px] rounded-full border-2 border-dashed border-blue-400/30 dark:border-blue-500/30"
                />

                {/* Dotted ring CW */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[18px] rounded-full border border-dotted border-purple-400/25 dark:border-purple-500/25"
                />

                {/* Glowing dots */}
                <OrbitDot size={10} color="#3b82f6" radius={138} duration={6}   delay={0}   />
                <OrbitDot size={8}  color="#8b5cf6" radius={138} duration={6}   delay={3}   />
                <OrbitDot size={7}  color="#ec4899" radius={116} duration={9}   delay={1}   reverse />
                <OrbitDot size={6}  color="#06b6d4" radius={116} duration={9}   delay={4.5} reverse />
                <OrbitDot size={5}  color="#10b981" radius={98}  duration={7}   delay={2}   />

                {/* Glow halo */}
                <div className="absolute inset-[22px] rounded-full opacity-20 blur-xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, transparent 70%)' }} />

                {/* Photo carousel */}
                <div className="absolute inset-[22px] rounded-full overflow-hidden border-2 border-white/20 dark:border-white/10 shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div key={picIndex}
                      initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                      className="w-full h-full">
                      <img
                        src={pics[picIndex]}
                        alt={`${name} — photo ${picIndex + 1}`}
                        className="w-full h-full object-cover"
                        onError={e => {
                          const t = e.target as HTMLImageElement;
                          t.style.display = 'none';
                          if (t.parentElement) {
                            t.parentElement.innerHTML = `<div style="width:100%;height:100%;background:linear-gradient(135deg,#2563eb,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:3.5rem;font-weight:900;color:white;user-select:none;border-radius:50%">${initials}</div>`;
                          }
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>{/* end inner frame */}

              {/* Dot indicators */}
              {pics.length > 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 flex gap-1.5 z-10" style={{ bottom: 8 }}>
                  {pics.map((_, idx) => (
                    <button key={idx} onClick={() => setPicIndex(idx)}
                      className={`rounded-full transition-all duration-300 ${idx === picIndex ? 'w-5 h-2 bg-blue-500' : 'w-2 h-2 bg-gray-400 dark:bg-gray-600 hover:bg-blue-400'}`}
                    />
                  ))}
                </div>
              )}
            </div>{/* end 440px wrapper */}
          </motion.div>

        </div>{/* end flex row */}

        {/* ── Stats bar ── */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:border-blue-400/40 dark:hover:border-blue-500/30 transition-all shadow-sm dark:shadow-none">
              <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex justify-center mt-12">
          <motion.button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <FiArrowDown size={18} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
