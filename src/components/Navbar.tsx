import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { portfolioConfig } from '../config/portfolioConfig';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const { toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-gray-950/80 dark:bg-gray-950/80 border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={() => handleNavClick('#hero')}
              whileHover={{ scale: 1.05 }}
              className="font-extrabold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono cursor-pointer"
            >
              {`<${portfolioConfig.name.split(' ')[0]} />`}
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    active === link.href
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.button>

              {/* Resume button */}
              <motion.a
                href={portfolioConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/20"
              >
                Resume
              </motion.a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(prev => !prev)}
                className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 backdrop-blur-xl bg-gray-950/95 border-b border-white/10 shadow-2xl md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={portfolioConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 text-sm font-semibold text-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
