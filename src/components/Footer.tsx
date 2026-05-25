import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolioConfig';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart, FiFacebook } from 'react-icons/fi';

const Footer: React.FC = () => {
  const { social, email, name } = portfolioConfig;

  const socials = [
    { icon: <FiGithub size={18} />,    href: social.github,        label: 'GitHub'    },
    { icon: <FiLinkedin size={18} />,  href: social.linkedin,      label: 'LinkedIn'  },
    { icon: <FiFacebook size={18} />,  href: social.facebook,      label: 'Facebook'  },
    { icon: <FiInstagram size={18} />, href: social.instagram,     label: 'Instagram' },
    { icon: <FiMail size={18} />,      href: `mailto:${email}`,    label: 'Email'     },
  ];

  return (
    <footer className="relative border-t border-gray-200 dark:border-white/5 bg-white/70 dark:bg-gray-950/50 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            className="font-extrabold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-mono"
          >
            {`<${name.split(' ')[0]} />`}
          </motion.button>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-white/10 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all duration-200"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Made with */}
          <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1">
            Made with{' '}
            <FiHeart className="text-red-400 mx-1" size={14} fill="currentColor" />
            {' '}by{' '}
            <span className="text-gray-800 dark:text-gray-300 font-medium ml-1">{name}</span>
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/5 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} {name}. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
