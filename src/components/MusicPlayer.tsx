import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMusic, FiPause, FiPlay, FiVolume2, FiVolumeX, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { portfolioConfig } from '../config/portfolioConfig';

const MusicPlayer: React.FC = () => {
  const { music } = portfolioConfig;

  const audioRef              = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted]     = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [volume, setVolume]     = useState(0.5);
  // Resolve src with Vite base URL so it works on GitHub Pages (/Portfolio/song.mp3)
  const resolvedSrc = music?.src
    ? music.src.startsWith('http')
      ? music.src
      : `${import.meta.env.BASE_URL}${music.src.replace(/^\//, '')}`
    : '';
  const hasSrc = !!resolvedSrc;

  /* Create audio element once src is known */
  useEffect(() => {
    if (!hasSrc) return;
    const a = new Audio(resolvedSrc);
    a.volume  = volume;
    a.loop    = true;
    a.preload = 'metadata';
    audioRef.current = a;

    const onTime = () => setProgress(a.currentTime);
    const onMeta = () => setDuration(a.duration);
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('loadedmetadata', onMeta);

    return () => {
      a.pause();
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('loadedmetadata', onMeta);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSrc]);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); } else { a.play().catch(() => {}); }
    setPlaying(p => !p);
  };

  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = !muted;
    setMuted(m => !m);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = parseFloat(e.target.value);
    setProgress(t);
    if (audioRef.current) audioRef.current.currentTime = t;
  };

  const fmt = (s: number) => {
    if (!s || isNaN(s)) return '0:00';
    const m   = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">

      {/* ── Expanded panel ── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            className="mb-3 w-72 rounded-2xl backdrop-blur-xl
              bg-white/95 dark:bg-gray-900/95
              border border-gray-200 dark:border-white/10
              shadow-2xl shadow-black/25 p-5"
          >
            {/* Song info */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={playing ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 4, repeat: playing ? Infinity : 0, ease: 'linear' }}
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30"
              >
                <FiMusic size={18} className="text-white" />
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                  {music?.title ?? 'Background Music'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {music?.artist ?? 'Unknown Artist'}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-4">
              <input
                type="range" min={0} max={duration || 100} value={progress}
                onChange={handleSeek}
                disabled={!hasSrc}
                className="w-full h-1.5 rounded-full accent-blue-500 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1 font-mono">
                <span>{fmt(progress)}</span>
                <span>{fmt(duration)}</span>
              </div>
            </div>

            {/* Controls row */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: hasSrc ? 1.05 : 1 }}
                whileTap={{ scale: hasSrc ? 0.95 : 1 }}
                onClick={togglePlay}
                disabled={!hasSrc}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                {playing ? <FiPause size={13} /> : <FiPlay size={13} />}
                {playing ? 'Pause' : 'Play'}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                disabled={!hasSrc}
                className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all disabled:opacity-50 flex-shrink-0"
              >
                {muted ? <FiVolumeX size={15} /> : <FiVolume2 size={15} />}
              </motion.button>

              <input
                type="range" min={0} max={1} step={0.05} value={volume}
                onChange={handleVolume}
                disabled={!hasSrc}
                className="flex-1 h-1.5 rounded-full accent-blue-500 cursor-pointer disabled:opacity-40"
              />
            </div>

            {!hasSrc && (
              <p className="mt-3 text-xs text-center text-gray-400 dark:text-gray-500">
                Add a song URL to <code className="bg-gray-100 dark:bg-white/10 px-1 rounded text-blue-500">music.src</code> in config
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle button — always visible ── */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => setExpanded(e => !e)}
        className={`
          flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold
          backdrop-blur-xl shadow-lg border transition-all
          ${playing
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-blue-500/30'
            : 'bg-white/90 dark:bg-gray-900/90 border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:border-blue-400/40'}
        `}
      >
        <motion.span
          animate={playing ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 3, repeat: playing ? Infinity : 0, ease: 'linear' }}
          className="flex items-center"
        >
          <FiMusic size={15} />
        </motion.span>
        <span>{playing ? 'Now Playing' : 'Music'}</span>
        {expanded ? <FiChevronDown size={13} /> : <FiChevronUp size={13} />}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
