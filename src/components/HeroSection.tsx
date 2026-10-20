import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cake, ChevronDown, PartyPopper } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { triggerRomanticConfetti } from '../utils/confetti';

export const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isToday: true,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      // Target midnight tonight (end of her birthday in India)
      const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
      const diff = endOfToday.getTime() - now.getTime();

      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds, isToday: true });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0, isToday: true });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Decorative Floating Balloons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Balloon 1: Pink */}
        <motion.div
          animate={{
            y: [-10, 20, -10],
            rotate: [-4, 5, -4],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-[6%] sm:left-[12%] flex flex-col items-center opacity-80"
        >
          <div className="w-14 h-18 sm:w-16 sm:h-20 bg-gradient-to-t from-pink-500 to-pink-300 rounded-full shadow-glow-pink flex items-center justify-center text-xl">
            🎈
          </div>
          <div className="w-0.5 h-16 bg-pink-300/40" />
        </motion.div>

        {/* Balloon 2: Lavender */}
        <motion.div
          animate={{
            y: [15, -15, 15],
            rotate: [6, -6, 6],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-28 right-[8%] sm:right-[14%] flex flex-col items-center opacity-80"
        >
          <div className="w-14 h-18 sm:w-16 sm:h-20 bg-gradient-to-t from-purple-500 to-lavender-300 rounded-full shadow-glow-purple flex items-center justify-center text-xl">
            🎈
          </div>
          <div className="w-0.5 h-16 bg-purple-300/40" />
        </motion.div>

        {/* Balloon 3: Golden */}
        <motion.div
          animate={{
            y: [-5, 15, -5],
            rotate: [-3, 4, -3],
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="hidden lg:flex absolute bottom-24 left-[15%] flex-col items-center opacity-70"
        >
          <div className="w-12 h-16 bg-gradient-to-t from-amber-500 to-yellow-200 rounded-full shadow-glow-gold flex items-center justify-center text-lg">
            ✨
          </div>
          <div className="w-0.5 h-12 bg-yellow-300/40" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Sparkle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel border border-pink-400/30 text-pink-300 text-sm mb-8"
        >
          <PartyPopper className="w-4 h-4 text-pink-400" />
          <span className="font-medium tracking-wide">A Celebration for an Awesome Friend</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight sm:leading-none mb-6"
        >
          <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent drop-shadow glow-text-pink">
            Happy Birthday,
          </span>
          <br />
          <span className="font-serif italic font-normal bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100 bg-clip-text text-transparent">
            {birthdayData.name}! 🎂❤️
          </span>
        </motion.h1>

        {/* Heartfelt Quote / Hero Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl text-purple-100/90 font-light leading-relaxed max-w-2xl mx-auto mb-10"
        >
          "{birthdayData.heroMessage}"
        </motion.p>

        {/* Live Digital Celebration & Midnight Countdown Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto p-6 sm:p-7 rounded-3xl glass-panel-glow mb-10"
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-pink-500/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                Live Celebration Ticker
              </span>
            </div>
            <span className="text-xs text-pink-300/80 font-medium">India Standard Time (IST)</span>
          </div>

          <div className="text-center mb-4">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-200 to-pink-300 bg-clip-text text-transparent">
              🎉 Today is Bhakti's Special Day!
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/70 mt-1">
              Hours of joy remaining in today's grand birthday celebration:
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
            <div className="p-3 sm:p-4 rounded-2xl bg-black/30 border border-pink-500/20 shadow-inner">
              <span className="text-2xl sm:text-4xl font-extrabold text-pink-300 font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="block text-[10px] sm:text-xs text-purple-200/70 uppercase tracking-wider mt-1">
                Hours Left
              </span>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-black/30 border border-pink-500/20 shadow-inner">
              <span className="text-2xl sm:text-4xl font-extrabold text-purple-300 font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="block text-[10px] sm:text-xs text-purple-200/70 uppercase tracking-wider mt-1">
                Minutes
              </span>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-black/30 border border-pink-500/20 shadow-inner">
              <span className="text-2xl sm:text-4xl font-extrabold text-amber-300 font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="block text-[10px] sm:text-xs text-purple-200/70 uppercase tracking-wider mt-1">
                Seconds
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quick action buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#cake"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-glow-pink hover:scale-105 active:scale-95 transition-transform"
          >
            <Cake className="w-4 h-4 text-amber-200" />
            <span>Blow The Candles 🎂</span>
          </a>

          <button
            onClick={triggerRomanticConfetti}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-panel hover:bg-pink-500/20 border border-pink-400/30 text-pink-200 font-medium hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>Shower Confetti ✨</span>
          </button>
        </motion.div>

        {/* Gentle scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-14 inline-block text-purple-300/60"
        >
          <a href="#cake" className="flex flex-col items-center gap-1 hover:text-pink-300 transition-colors">
            <span className="text-xs uppercase tracking-widest font-light">Scroll Down</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
