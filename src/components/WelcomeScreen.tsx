import { motion } from 'framer-motion';
import { Sparkles, Gift, Heart } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { triggerRomanticConfetti } from '../utils/confetti';

interface WelcomeScreenProps {
  onOpen: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onOpen }) => {
  const handleOpen = () => {
    triggerRomanticConfetti();
    onOpen();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0a0414] px-4"
    >
      {/* Radiant central backdrop illumination */}
      <div className="absolute w-[650px] h-[650px] bg-gradient-to-tr from-pink-600/20 via-purple-600/20 to-amber-300/10 rounded-full blur-[130px] animate-pulse-glow" />

      {/* Floating Stardust particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: '100vh',
              x: `${(i * 5.8) % 100}vw`,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: '-10vh',
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 8 + (i % 6) * 2,
              repeat: Infinity,
              delay: (i * 0.45) % 5,
              ease: 'linear',
            }}
            className="absolute text-pink-300/60"
          >
            {i % 3 === 0 ? <Heart className="w-4 h-4 fill-pink-400/40" /> : <Sparkles className="w-3.5 h-3.5 text-amber-200/50" />}
          </motion.div>
        ))}
      </div>

      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-xl w-full mx-auto text-center p-8 sm:p-12 rounded-3xl glass-panel-glow"
      >
        {/* Top glowing badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-300 text-xs sm:text-sm tracking-widest uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span>October 20, 2026 Special</span>
          <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: '4s' }} />
        </motion.div>

        {/* Personalized Name Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-4"
        >
          <p className="text-xl sm:text-2xl text-pink-200/90 font-light">
            Hey <span className="font-serif italic font-normal text-white">{birthdayData.name}</span>,
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-300 via-purple-200 to-amber-200 bg-clip-text text-transparent drop-shadow-sm leading-tight">
            Someone Has a Special Surprise for You... <span className="inline-block animate-bounce">🎁</span>
          </h1>
        </motion.div>

        {/* Friendly subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-purple-200/80 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto"
        >
          A digital celebration created by a friend to wish you the most wonderful, laughter-filled birthday!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <button
            onClick={handleOpen}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white overflow-hidden shadow-glow-pink hover:shadow-glow-purple transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            {/* Gradient background with shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-[length:200%_100%] animate-shimmer" />
            <span className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

            <Gift className="relative z-10 w-5 h-5 text-amber-200 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span className="relative z-10 tracking-wide font-medium">Open Your Surprise 🎁</span>
          </button>
        </motion.div>

        {/* Footer gentle note */}
        <p className="mt-6 text-xs text-pink-300/50 tracking-wider">
          Turn your volume up for the sweetest experience 🎵
        </p>
      </motion.div>
    </motion.div>
  );
};
