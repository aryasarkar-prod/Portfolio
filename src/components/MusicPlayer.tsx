import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMusic, FiPause, FiPlay, FiVolume2, FiVolumeX, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { portfolioConfig } from '../config/portfolioConfig';

const MusicPlayer: React.FC = () => {
  const { music } = portfolioConfig;
  if (!music?.src) return null;

  const audioRef            = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted]     = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [volume, setVolume]     = useState(0.5);

  /* load audio */
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
    a.loop   = true;
    const onTime  = () => setProgress(a.currentTime);
    const onMeta  = () => setDuration(a.duration);
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('loadedmetadata', onMeta);
    return () => {
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('loadedmetadata', onMeta);
    };
  }, []);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); } else { a.play(); }
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
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={music.src} preload="metadata" />

      {/* Floating player — bottom-left */}
      <div className="fixed bottom-6 left-6 z-50">
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="mb-3 w-72 rounded-2xl backdrop-blur-xl
                bg-white/90 dark:bg-gray-900/90
                border border-gray-200 dark:border-white/10
                shadow-2xl shadow-black/20 p-4"
            >
              {/* Song info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <FiMusic size={16} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                    {music.title ?? 'Background Music'}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {music.artist ?? 'Unknown Artist'}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-3">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={progress}
                  onChange={handleSeek}
                  className="w-full h-1.5 rounded-full accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{fmt(progress)}</span>
                  <span>{fmt(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between gap-2">
                {/* Play / Pause */}
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold shadow-lg shadow-blue-500/20"
                >
                  {playing ? <FiPause size={14} /> : <FiPlay size={14} />}
                  {playing ? 'Pause' : 'Play'}
                </motion.button>

                {/* Mute */}
                <motion.button
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all"
                >
                  {muted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
                </motion.button>

                {/* Volume slider */}
                <input
                  type="range"
                  min={0} max={1} step={0.05}
                  value={volume}
                  onChange={handleVolume}
                  className="flex-1 h-1.5 rounded-full accent-blue-500 cursor-pointer"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setExpanded(e => !e)}
          className={`
            flex items-center gap-2 px-4 py-2.5 rounded-2xl
            backdrop-blur-xl shadow-lg transition-all
            ${playing
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/30'
              : 'bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300'}
          `}
        >
          <motion.div
            animate={playing ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 3, repeat: playing ? Infinity : 0, ease: 'linear' }}
          >
            <FiMusic size={16} />
          </motion.div>
          <span className="text-xs font-semibold">
            {playing ? 'Now Playing' : 'Music'}
          </span>
          {expanded ? <FiChevronDown size={14} /> : <FiChevronUp size={14} />}
        </motion.button>
      </div>
    </>
  );
};

export default MusicPlayer;
