import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wind, PartyPopper, RotateCcw } from 'lucide-react';
import { triggerRomanticConfetti, triggerStarConfetti } from '../utils/confetti';
import { birthdayData } from '../config/birthdayData';

export const BirthdayCake: React.FC = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [wished, setWished] = useState(false);

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    triggerRomanticConfetti();
    triggerStarConfetti();
    setWished(true);
  };

  const handleRelight = () => {
    setCandlesBlown(false);
    setWished(false);
  };

  const handleCelebrate = () => {
    triggerRomanticConfetti();
  };

  return (
    <section id="cake" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-pink-400/30 text-pink-300 text-xs tracking-wider uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>Interactive Wish Ritual</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-amber-200 bg-clip-text text-transparent">
            Make a Wish, {birthdayData.name}! ✨
          </span>
        </h2>
        <p className="text-purple-200/80 text-sm sm:text-base max-w-lg mx-auto mb-12">
          Close your eyes, make the sweetest wish in your heart, and blow out the birthday candles.
        </p>

        {/* 3D Tiered Birthday Cake Card */}
        <div className="relative max-w-md mx-auto p-8 sm:p-12 rounded-3xl glass-panel-glow shadow-glow-pink">
          {/* Ambient Candle Glow aura */}
          {!candlesBlown && (
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-400/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
          )}

          {/* The 3D CSS Cake */}
          <div className="relative w-64 h-64 mx-auto flex flex-col items-center justify-end pb-4 select-none">
            {/* Candles Row */}
            <div className="flex items-end justify-center gap-5 sm:gap-7 mb-2 relative z-20">
              {[0, 1, 2].map((idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Candle Flame or Smoke */}
                  <div className="h-10 flex items-center justify-center">
                    <AnimatePresence>
                      {!candlesBlown ? (
                        <motion.div
                          key="flame"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{
                            scale: 0,
                            opacity: 0,
                            y: -10,
                            transition: { duration: 0.3 },
                          }}
                          className="w-4 h-7 rounded-full bg-gradient-to-t from-orange-500 via-yellow-300 to-white candle-flame shadow-glow-gold cursor-pointer"
                          onClick={handleBlowCandles}
                          title="Click to blow out"
                        />
                      ) : (
                        <motion.div
                          key="smoke"
                          initial={{ opacity: 0.8, y: 0, scale: 0.8 }}
                          animate={{ opacity: 0, y: -25, scale: 1.6 }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                          className="text-xs text-white/40 font-light select-none"
                        >
                          💨
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Candle Stick */}
                  <div className="w-3.5 h-14 rounded-t-sm bg-gradient-to-b from-white via-pink-200 to-purple-200 shadow-md border-x border-pink-300/40 relative overflow-hidden">
                    {/* Candle stripes */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(244,114,182,0.4)_4px,rgba(244,114,182,0.4)_8px)]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Cake Top Tier */}
            <div className="relative w-44 h-16 rounded-t-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 shadow-md border-t-2 border-pink-200 flex items-center justify-center z-10">
              {/* Frosting Drips */}
              <div className="absolute -top-1 inset-x-0 flex justify-around px-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-white/90 rounded-full shadow -mt-2"
                  />
                ))}
              </div>
              {/* Sweet pearls */}
              <div className="flex gap-2">
                <span className="text-sm">🍓</span>
                <span className="text-sm">✨</span>
                <span className="text-sm">🍓</span>
              </div>
            </div>

            {/* Cake Middle Tier */}
            <div className="relative w-56 h-16 rounded-t-xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 shadow-lg border-t-2 border-white/60 flex items-center justify-around px-4 -mt-1 z-0">
              <span className="text-xs font-serif italic text-white/90 font-bold tracking-wider">
                Happy Birthday Bhakti
              </span>
            </div>

            {/* Cake Base Tier */}
            <div className="relative w-64 h-18 rounded-t-xl bg-gradient-to-r from-pink-500 via-lavender-400 to-pink-500 shadow-xl border-t-2 border-pink-200/80 flex items-center justify-center -mt-1">
              <div className="w-full flex justify-around px-3">
                {[...Array(7)].map((_, i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-amber-300 shadow-sm animate-pulse" />
                ))}
              </div>
            </div>

            {/* Cake Stand / Glass Plate */}
            <div className="w-72 h-4 rounded-full bg-gradient-to-r from-white/20 via-white/50 to-white/20 backdrop-blur-md shadow-2xl border border-white/40 -mt-1" />
          </div>

          {/* Interactive Wish Confirmation Message */}
          {wished && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 p-4 rounded-2xl bg-pink-500/20 border border-pink-400/40 text-center"
            >
              <p className="text-amber-200 font-serif italic text-lg sm:text-xl font-semibold">
                "May all your wildest goals and dreams turn into reality, {birthdayData.name}! ✨"
              </p>
              <p className="text-xs text-purple-200 mt-1">
                Your wish is sealed and sent straight to the stars ✨
              </p>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {!candlesBlown ? (
              <button
                onClick={handleBlowCandles}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-glow-pink hover:scale-105 active:scale-95 transition-all text-sm sm:text-base"
              >
                <Wind className="w-4 h-4 text-cyan-200 animate-pulse" />
                <span>Blow Out the Candles 🎂</span>
              </button>
            ) : (
              <button
                onClick={handleRelight}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-panel hover:bg-white/10 text-pink-200 border border-pink-400/30 font-medium hover:scale-105 active:scale-95 transition-all text-sm"
              >
                <RotateCcw className="w-4 h-4 text-pink-300" />
                <span>Relight Candles 🕯️</span>
              </button>
            )}

            <button
              onClick={handleCelebrate}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 text-purple-950 font-bold shadow-glow-gold hover:scale-105 active:scale-95 transition-all text-sm sm:text-base"
            >
              <PartyPopper className="w-4 h-4 text-purple-950" />
              <span>Celebrate! 🎉</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
