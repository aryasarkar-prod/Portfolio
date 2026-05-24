import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import { FiMapPin, FiCalendar, FiCode, FiAward } from 'react-icons/fi';

const About: React.FC = () => {
  const { name, bio, location, funFacts, stats } = portfolioConfig;

  const highlights = [
    { icon: <FiCode className="text-blue-500" size={22} />,   title: 'Clean Code',       desc: 'Maintainable, scalable, well-documented code is my baseline.'       },
    { icon: <FiAward className="text-purple-500" size={22} />, title: 'Performance First', desc: 'Obsessed with optimisation — from first paint to TTI.'               },
    { icon: <FiMapPin className="text-pink-500" size={22} />,  title: 'Collaborative',    desc: 'Strong team player in cross-functional, agile environments.'         },
    { icon: <FiCalendar className="text-cyan-500" size={22} />,title: 'Always Learning',  desc: 'Continuously levelling up with new frameworks & patterns.'           },
  ];

  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="A little about who I am, what I do, and what drives me" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left — bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Hi there 👋 I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {name}
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{bio}</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              When I'm not pushing code, you'll find me exploring new tech, contributing to open-source,
              or competing in hackathons. I believe great software is built at the intersection of
              engineering excellence and thoughtful design.
            </p>

            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-8">
              <FiMapPin className="text-blue-500" size={16} />
              <span className="text-sm">{location}</span>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Fun Facts
              </p>
              {funFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-gray-600 dark:text-gray-400 text-sm bg-gray-100 dark:bg-white/3 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-2.5"
                >
                  {fact}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right — highlight cards + stats ── */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <GlassCard className="p-5 h-full">
                    <div className="mb-3">{h.icon}</div>
                    <h4 className="text-gray-900 dark:text-white font-semibold text-sm mb-2">{h.title}</h4>
                    <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed">{h.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <GlassCard className="p-6" hover={false}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map(stat => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
