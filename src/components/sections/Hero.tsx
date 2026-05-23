import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { portfolioConfig } from '../../config/portfolioConfig';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';

const Hero: React.FC = () => {
  const { name, bio, typingRoles, profilePicture, social, email, resumeUrl, availableForWork, stats } = portfolioConfig;

  const socials = [
    { icon: <FiGithub size={20} />, href: social.github, label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: social.linkedin, label: 'LinkedIn' },
    { icon: <FiMail size={20} />, href: `mailto:${email}`, label: 'Email' },
  ];

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Build type animation sequence from roles
  const typingSequence = typingRoles.flatMap(role => [role, 2000]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.15) 0%, transparent 50%)`,
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Available badge */}
            {availableForWork && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </motion.div>
            )}

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-blue-400 font-mono text-lg mb-2 font-medium"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            {/* Typing roles */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold mb-6 h-10"
            >
              <span className="text-gray-400">I'm a </span>
              <TypeAnimation
                sequence={typingSequence as (string | number)[]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed"
            >
              {bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59,130,246,0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-purple-500 transition-all"
              >
                View My Work
              </motion.button>
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-blue-500/40 transition-all flex items-center gap-2"
              >
                <FiDownload size={16} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
            className="flex-shrink-0"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)',
                  padding: '3px',
                  borderRadius: '50%',
                }}
              >
                <div className="w-full h-full rounded-full bg-gray-950" />
              </motion.div>

              {/* Second ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full border border-dashed border-blue-500/30"
              />

              {/* Profile Image */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-white/10">
                <img
                  src={profilePicture}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={e => {
                    const t = e.target as HTMLImageElement;
                    t.style.display = 'none';
                    t.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-7xl font-extrabold text-white select-none">
                        ${name.split(' ').map((n: string) => n[0]).join('')}
                      </div>`;
                  }}
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3 py-2 bg-blue-600/90 backdrop-blur rounded-xl text-xs font-semibold text-white shadow-lg shadow-blue-500/30 border border-blue-400/30"
              >
                💻 Full Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 px-3 py-2 bg-purple-600/90 backdrop-blur rounded-xl text-xs font-semibold text-white shadow-lg shadow-purple-500/30 border border-purple-400/30"
              >
                🚀 Open to Work
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center p-4 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/5 hover:border-blue-500/20 transition-all"
            >
              <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <FiArrowDown size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
