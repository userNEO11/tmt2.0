import React, { useEffect, useState } from 'react';
import { BalwantLogo } from './BalwantLogo';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Sparkles } from 'lucide-react';

interface SitePreloaderProps {
  onComplete: () => void;
}

export const SitePreloader: React.FC<SitePreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(15);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Fast, lightweight loading simulation (~700ms total)
    const timer1 = setTimeout(() => setProgress(45), 150);
    const timer2 = setTimeout(() => setProgress(85), 380);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setIsExiting(true);
    }, 620);

    const timerComplete = setTimeout(() => {
      onComplete();
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerComplete);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          id="site-fast-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 text-white select-none px-4"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none -z-0 animate-pulse" />

          <div className="relative z-10 flex flex-col items-center max-w-xs w-full text-center">
            {/* Logo with gentle pulse */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mb-6 p-2 bg-white/95 rounded-xs shadow-2xl border border-amber-400/40"
            >
              <BalwantLogo className="h-16 w-auto max-w-[210px]" />
            </motion.div>

            {/* Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="mb-5 flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-300 font-hindi">
                सरिया नहीं, फौलाद है ये
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            </motion.div>

            {/* High-speed Progress Bar */}
            <div className="w-full bg-zinc-800/80 rounded-full h-1.5 overflow-hidden border border-zinc-700/50 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              />
            </div>

            {/* Tagline / Subtitle */}
            <div className="mt-3 flex items-center justify-between w-full text-[11px] font-mono-tech text-zinc-400">
              <span>Fe 550D / CRS Steel</span>
              <span className="text-amber-400 font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SitePreloader;
