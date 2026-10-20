import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { audioManager } from '../utils/audioPlayer';
import { birthdayData } from '../config/birthdayData';

export const Navbar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    audioManager.setListener((playing) => {
      setIsPlaying(playing);
    });

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMusic = () => {
    audioManager.toggle();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0c0714]/80 backdrop-blur-md border-b border-pink-500/15 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-white font-medium focus:outline-none"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center shadow-glow-pink">
            <Sparkles className="w-4 h-4 text-amber-200 group-hover:scale-110 transition-transform" />
          </span>
          <div className="flex flex-col">
            <span className="font-serif italic text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-pink-200 via-purple-100 to-amber-200 bg-clip-text text-transparent">
              {birthdayData.name}'s Birthday
            </span>
            <span className="text-[10px] text-pink-300/60 uppercase tracking-widest hidden sm:block">
              October 20, 2026
            </span>
          </div>
        </a>

        {/* Section Navigation */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-purple-200">
          <a
            href="#hero"
            className="px-3 py-1 rounded-full hover:text-pink-300 hover:bg-pink-500/10 transition-colors"
          >
            Surprise
          </a>
          <a
            href="#cake"
            className="px-3 py-1 rounded-full hover:text-pink-300 hover:bg-pink-500/10 transition-colors"
          >
            Wish & Cake
          </a>
          <a
            href="#letter"
            className="px-3 py-1 rounded-full hover:text-pink-300 hover:bg-pink-500/10 transition-colors"
          >
            Heartfelt Letter
          </a>
          <a
            href="#gallery"
            className="px-3 py-1 rounded-full hover:text-pink-300 hover:bg-pink-500/10 transition-colors"
          >
            Memories
          </a>
          <a
            href="#gift"
            className="px-3 py-1 rounded-full hover:text-pink-300 hover:bg-pink-500/10 transition-colors"
          >
            Special Gift
          </a>
        </nav>

        {/* Music Player Toggle Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleMusic}
            aria-label={isPlaying ? 'Pause romantic music' : 'Play romantic music'}
            className={`group relative flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border transition-all duration-300 ${
              isPlaying
                ? 'bg-pink-500/20 border-pink-400/40 text-pink-200 shadow-glow-pink'
                : 'bg-white/5 border-white/10 text-purple-300 hover:border-pink-400/30 hover:bg-pink-500/10'
            }`}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-pink-400 animate-pulse" />
                {/* Equalizer Wave Bars */}
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-pink-400 rounded-full animate-bounce" style={{ height: '70%', animationDuration: '0.6s' }} />
                  <span className="w-0.5 bg-purple-400 rounded-full animate-bounce" style={{ height: '100%', animationDuration: '0.8s' }} />
                  <span className="w-0.5 bg-amber-300 rounded-full animate-bounce" style={{ height: '60%', animationDuration: '0.5s' }} />
                  <span className="w-0.5 bg-pink-400 rounded-full animate-bounce" style={{ height: '90%', animationDuration: '0.7s' }} />
                </div>
                <span className="text-xs font-medium hidden sm:inline text-pink-200">
                  Music On
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-medium hidden sm:inline text-purple-300 group-hover:text-pink-200">
                  Play Music
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
