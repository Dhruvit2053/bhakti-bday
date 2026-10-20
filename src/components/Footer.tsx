import { Sparkles, ArrowUp } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-pink-500/15 bg-[#090312] text-center z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Birthday Icon */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center shadow-glow-pink mb-4">
          <Sparkles className="w-6 h-6 text-amber-200 animate-pulse" />
        </div>

        <h3 className="font-serif italic text-2xl font-bold bg-gradient-to-r from-pink-200 via-purple-100 to-amber-200 bg-clip-text text-transparent mb-2">
          Happy Birthday, {birthdayData.name}! 🎂✨
        </h3>

        <p className="text-purple-300/80 text-xs sm:text-sm max-w-md mx-auto mb-6">
          "May your smile always shine brighter than the stars, your heart stay full of happiness, and your life be filled with beautiful memories."
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel hover:bg-pink-500/20 text-xs text-pink-200 border border-pink-400/30 transition-all hover:scale-105 active:scale-95"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Top</span>
        </button>

        <p className="mt-8 text-[11px] text-purple-400/50">
          Crafted with genuine warmth & best wishes for Bhakti's 2026 Birthday Celebration ✨
        </p>
      </div>
    </footer>
  );
};
