import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { FiGithub, FiExternalLink, FiX, FiCode, FiFolder } from 'react-icons/fi';

type Category = 'All' | string;

const badgeVariants: Array<'blue' | 'purple' | 'green' | 'pink' | 'yellow'> = [
  'blue', 'purple', 'green', 'pink', 'yellow',
];

const gradients = [
  'from-blue-600 to-cyan-600',
  'from-purple-600 to-pink-600',
  'from-green-600 to-teal-600',
  'from-orange-600 to-yellow-600',
  'from-red-600 to-pink-600',
  'from-indigo-600 to-blue-600',
];

const Projects: React.FC = () => {
  const { projects } = portfolioConfig;
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filtered = projects.filter(
    p => activeCategory === 'All' || p.category === activeCategory,
  );

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Projects"
          subtitle="A collection of things I've built — from side projects to serious work"
          gradient="from-green-400 via-teal-400 to-cyan-400"
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 dark:bg-white/5 border-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-white/5'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <GlassCard
                  className="overflow-hidden h-full flex flex-col group"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project image / gradient placeholder */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={e => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = 'none';
                        el.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br ${gradients[i % gradients.length]} flex flex-col items-center justify-center gap-2 p-4">
                            <span class="text-5xl opacity-80">${project.title[0]}</span>
                            <span class="text-white/70 text-xs font-mono text-center px-2">${project.category}</span>
                          </div>`;
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium">View Details →</span>
                    </div>

                    {/* Category pill — replaces Featured badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                      <FiFolder size={10} />
                      {project.category}
                    </div>

                    {/* Year */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/60 backdrop-blur text-white text-xs font-medium">
                      {project.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-gray-900 dark:text-white font-bold text-base mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((tag, ti) => (
                        <Badge key={tag} label={tag} variant={badgeVariants[ti % badgeVariants.length]} />
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-xs text-gray-400 px-2 py-1">+{project.tags.length - 4}</span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-3 border-t border-white/5 dark:border-white/5 border-gray-100">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <FiGithub size={14} /> Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors ml-auto"
                        >
                          <FiExternalLink size={14} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {displayed.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🚧</div>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">Projects coming soon!</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">Check back later or visit my GitHub.</p>
          </div>
        )}

        {/* Show more */}
        {filtered.length > 6 && (
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-xl border border-white/10 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-blue-500/30 hover:bg-blue-500/5 transition-all text-sm font-semibold"
            >
              {showAll ? 'Show Less' : `Show ${filtered.length - 6} More Projects`}
            </motion.button>
          </div>
        )}
      </div>

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-2xl"
            >
              {/* Modal hero */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={e => {
                    const el = e.target as HTMLImageElement;
                    const idx = projects.findIndex(p => p.id === selectedProject.id);
                    el.style.display = 'none';
                    el.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br ${gradients[idx % gradients.length]} flex items-center justify-center">
                        <span class="text-7xl">${selectedProject.title[0]}</span>
                      </div>`;
                  }}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur text-white hover:bg-black/80 transition-all"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <span className="px-3 py-1 rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400 text-sm font-medium border border-blue-500/20 flex-shrink-0">
                    {selectedProject.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, ti) => (
                    <Badge key={tag} label={tag} variant={badgeVariants[ti % badgeVariants.length]} />
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-blue-500/30 transition-all text-sm font-medium"
                    >
                      <FiCode size={16} /> View Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all text-sm font-semibold shadow-lg shadow-blue-500/20"
                    >
                      <FiExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Projects;
