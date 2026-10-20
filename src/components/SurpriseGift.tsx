import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Heart, RotateCcw, Check } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { triggerRomanticConfetti, triggerStarConfetti } from '../utils/confetti';

export const SurpriseGift: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');

  const fullText = birthdayData.gift.typewriterLines.join(' ');

  const handleOpenGift = () => {
    if (!isOpened) {
      setIsOpened(true);
      triggerRomanticConfetti();
      triggerStarConfetti();
    }
  };

  const handleReset = () => {
    setIsOpened(false);
    setTypewriterText('');
  };

  // Typewriter effect when gift is opened
  useEffect(() => {
    if (!isOpened) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [isOpened, fullText]);

  return (
    <section id="gift" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-pink-400/30 text-pink-300 text-xs tracking-wider uppercase mb-4">
          <Gift className="w-3.5 h-3.5 text-amber-300" />
          <span>The Grand Finale Surprise</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-amber-200 bg-clip-text text-transparent">
            A Box Full of Warmth 🎁
          </span>
        </h2>
        <p className="text-purple-200/80 text-sm sm:text-base max-w-lg mx-auto mb-12">
          Every birthday deserves a grand unboxing. Tap the glowing gift box to reveal your final birthday blessing!
        </p>

        {/* Gift Box Container */}
        <div className="max-w-xl mx-auto p-8 sm:p-12 rounded-3xl glass-panel-glow shadow-glow-purple relative">
          <AnimatePresence mode="wait">
            {!isOpened ? (
              /* Unopened Gift State */
              <motion.div
                key="closed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center py-6 cursor-pointer group"
                onClick={handleOpenGift}
              >
                {/* 3D Animated Gift Box Graphic */}
                <div className="relative w-44 h-44 flex items-center justify-center">
                  {/* Floating aura */}
                  <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-2xl group-hover:bg-pink-500/40 transition-colors animate-pulse" />

                  {/* Gift Box Body */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 w-36 h-36 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 shadow-2xl border-2 border-pink-200/60 flex items-center justify-center overflow-hidden"
                  >
                    {/* Ribbon Vertical */}
                    <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 shadow-md" />
                    {/* Ribbon Horizontal */}
                    <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-amber-300 via-yellow-200 to-amber-400 shadow-md" />

                    {/* Ribbon Bow on top */}
                    <div className="absolute -top-3 flex items-center justify-center z-20">
                      <div className="w-9 h-7 rounded-full bg-amber-300 border-2 border-yellow-100 shadow-md -mr-1 rotate-[-25deg]" />
                      <div className="w-5 h-5 rounded-full bg-amber-400 border border-yellow-100 shadow-sm z-30" />
                      <div className="w-9 h-7 rounded-full bg-amber-300 border-2 border-yellow-100 shadow-md -ml-1 rotate-[25deg]" />
                    </div>

                    <Sparkles className="absolute bottom-2 right-2 w-5 h-5 text-amber-200 animate-spin" style={{ animationDuration: '5s' }} />
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-glow-pink hover:shadow-glow-purple transition-all duration-300 text-base"
                >
                  Tap to Unwrap Your Gift 🎀
                </motion.button>
                <p className="mt-3 text-xs text-pink-300/70">A special surprise awaits you inside...</p>
              </motion.div>
            ) : (
              /* Opened Gift State */
              <motion.div
                key="opened"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                {/* Golden Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Unwrapped with Love</span>
                </div>

                {/* Primary Reveal Headline */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
                  <span className="bg-gradient-to-r from-amber-200 via-pink-200 to-yellow-100 bg-clip-text text-transparent">
                    {birthdayData.gift.revealHeadline}
                  </span>
                </h3>

                {/* Typewriter Body */}
                <div className="min-h-[140px] p-6 rounded-2xl bg-black/40 border border-pink-500/20 text-left font-sans text-sm sm:text-base leading-relaxed text-purple-100 shadow-inner">
                  <p>
                    {typewriterText}
                    <span className="inline-block w-2 h-4 bg-pink-400 ml-1 animate-pulse" />
                  </p>
                </div>

                {/* Wishes Checklist / Pills */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                  {birthdayData.gift.wishes.map((wish, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-pink-500/10 border border-pink-400/20 text-xs sm:text-sm text-pink-200"
                    >
                      <span className="w-5 h-5 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-pink-300" />
                      </span>
                      <span>{wish}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Reset button */}
                <div className="mt-8 pt-4 border-t border-pink-500/20 flex items-center justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel hover:bg-white/10 text-xs text-purple-200 hover:text-pink-200 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Close & Unwrap Again</span>
                  </button>

                  <button
                    onClick={triggerRomanticConfetti}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-xs text-white font-medium shadow-glow-pink hover:scale-105 transition-transform"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Celebrate Bhakti!</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
