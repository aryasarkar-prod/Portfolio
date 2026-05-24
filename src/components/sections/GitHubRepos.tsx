import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink, FiCode } from 'react-icons/fi';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  homepage: string | null;
}

const langColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  Rust: '#dea584',
  Go: '#00add8',
  Java: '#b07219',
  'C++': '#f34b7d',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Shell: '#89e051',
  Dart: '#00b4ab',
  Swift: '#fa7343',
};

const GitHubRepos: React.FC = () => {
  const { social, name } = portfolioConfig;
  const username = social.github.replace('https://github.com/', '').replace(/\/$/, '');

  const [repos, setRepos]     = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data: Repo[]) => {
        const filtered = data
          .filter(r => !r.name.toLowerCase().includes(username.toLowerCase()) || data.length < 5)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filtered);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [username]);

  const displayed = showAll ? repos : repos.slice(0, 6);

  return (
    <SectionWrapper id="github">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="GitHub Activity"
          subtitle={`Open-source work and personal repos from @${username}`}
          gradient="from-green-400 via-teal-400 to-cyan-400"
        />

        {/* GitHub profile banner */}
        <motion.a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="flex items-center justify-between gap-4 p-5 rounded-2xl mb-10
            bg-gray-900 dark:bg-gray-900 border border-gray-700 dark:border-white/10
            hover:border-blue-500/50 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600
              flex items-center justify-center flex-shrink-0">
              <FiGithub size={24} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-base">@{username}</p>
              <p className="text-gray-400 text-sm">View full profile on GitHub</p>
            </div>
          </div>
          <FiExternalLink size={18} className="text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
        </motion.a>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-44 rounded-2xl bg-gray-200/60 dark:bg-gray-800/50
                border border-gray-700 dark:border-white/5 animate-pulse" />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">😕</div>
            <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">
              Couldn't load repos right now
            </p>
            <a href={social.github} target="_blank" rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 text-sm underline underline-offset-2">
              Visit GitHub profile directly →
            </a>
          </div>
        )}

        {/* Repo grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayed.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex flex-col p-5 rounded-2xl h-full
                    bg-white dark:bg-white/5
                    border border-gray-200 dark:border-white/10
                    hover:border-blue-400 dark:hover:border-blue-500/40
                    hover:shadow-md dark:hover:shadow-blue-500/10
                    transition-all duration-300 group"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <FiCode size={15} className="text-blue-500 flex-shrink-0" />
                      <span className="font-bold text-gray-900 dark:text-white text-sm truncate">
                        {repo.name}
                      </span>
                    </div>
                    <FiExternalLink size={14}
                      className="text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                    {repo.description || 'No description provided.'}
                  </p>

                  {/* Topics */}
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {repo.topics.slice(0, 3).map(t => (
                        <span key={t}
                          className="px-2 py-0.5 rounded-full text-xs
                            bg-blue-100 dark:bg-blue-500/10
                            text-blue-600 dark:text-blue-400
                            border border-blue-200 dark:border-blue-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-100 dark:border-white/5">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: langColors[repo.language] || '#6b7280' }} />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 ml-auto">
                      <FiStar size={12} className="text-yellow-500" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <FiGitBranch size={12} className="text-gray-400" />
                      {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Show more / less */}
            {repos.length > 6 && (
              <div className="text-center mt-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAll(v => !v)}
                  className="px-8 py-3 rounded-xl
                    border border-gray-300 dark:border-white/10
                    text-gray-600 dark:text-gray-300
                    hover:text-gray-900 dark:hover:text-white
                    hover:border-blue-400 dark:hover:border-blue-500/30
                    hover:bg-blue-50 dark:hover:bg-blue-500/5
                    transition-all text-sm font-semibold"
                >
                  {showAll ? 'Show Less' : `Show ${repos.length - 6} More Repos`}
                </motion.button>
              </div>
            )}

            {/* Empty state */}
            {repos.length === 0 && (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">📂</div>
                <p className="text-gray-500 dark:text-gray-400">No public repos found.</p>
              </div>
            )}

            {/* GitHub contrib graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-14 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-4"
            >
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">
                Contribution Activity
              </p>
              <img
                src={`https://ghchart.rshah.org/3b82f6/${username}`}
                alt={`${name} GitHub contribution chart`}
                className="w-full rounded-xl"
                onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </motion.div>
          </>
        )}
      </div>
    </SectionWrapper>
  );
};

export default GitHubRepos;
