import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MailOpen, Sparkles, Feather } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { triggerRomanticConfetti } from '../utils/confetti';

export const BirthdayLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!isOpen) {
      triggerRomanticConfetti();
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="letter" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-pink-400/30 text-pink-300 text-xs tracking-wider uppercase mb-4">
          <Feather className="w-3.5 h-3.5 text-pink-400" />
          <span>A Birthday Note For An Awesome Friend</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-amber-200 bg-clip-text text-transparent">
            Words Written For You 💌
          </span>
        </h2>
        <p className="text-purple-200/80 text-sm sm:text-base max-w-md mx-auto mb-10">
          Click the sealed envelope to unlock a heartfelt birthday wish from a good friend.
        </p>

        {/* Envelope Container */}
        <div className="relative mx-auto flex flex-col items-center">
          {/* Closed Envelope / Trigger Box */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleToggle}
            className={`w-full max-w-lg cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-500 border ${
              isOpen
                ? 'bg-white/10 border-pink-400/50 shadow-glow-purple'
                : 'bg-gradient-to-br from-pink-900/30 via-purple-900/40 to-night-950/80 border-pink-500/30 hover:border-pink-400 shadow-glow-pink'
            } backdrop-blur-xl`}
          >
            {/* Header of Envelope */}
            <div className="flex items-center justify-between pb-4 border-b border-pink-500/20">
              <div className="flex items-center gap-2 text-pink-300 text-sm font-medium">
                {isOpen ? <MailOpen className="w-5 h-5 text-pink-400" /> : <Mail className="w-5 h-5 text-pink-400" />}
                <span>To: {birthdayData.name} ✨</span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-pink-500/20 text-pink-200 border border-pink-500/30">
                {isOpen ? 'Click to Fold' : 'Click to Open'}
              </span>
            </div>

            {/* Wax Seal Graphic when closed */}
            {!isOpen && (
              <div className="py-12 flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-400 p-0.5 shadow-glow-pink animate-pulse-glow flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-rose-950 flex items-center justify-center border-2 border-amber-300/60">
                      <Sparkles className="w-8 h-8 text-amber-300" />
                    </div>
                  </div>
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
                </div>
                <p className="mt-5 text-sm font-serif italic text-pink-200 font-semibold tracking-wide">
                  "Tap the seal to open Bhakti's birthday letter"
                </p>
              </div>
            )}

            {/* Revealed Letter Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 text-left"
                >
                  {/* Parchment styling inside */}
                  <div className="relative p-6 sm:p-8 rounded-2xl bg-[#fffaf0]/95 text-[#2c1810] shadow-2xl border border-amber-200/80 font-sans leading-relaxed selection:bg-pink-300 selection:text-black">
                    {/* Watermark ribbon */}
                    <div className="absolute top-4 right-4 text-3xl opacity-20 pointer-events-none select-none">
                      💌
                    </div>

                    {/* Salutation */}
                    <h3 className="font-serif italic text-2xl sm:text-3xl text-pink-900 font-bold mb-6">
                      {birthdayData.letter.salutation}
                    </h3>

                    {/* Paragraphs */}
                    <div className="space-y-4 text-sm sm:text-base text-gray-800">
                      {birthdayData.letter.paragraphs.map((paragraph, index) => (
                        <p key={index} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Signature */}
                    <div className="mt-8 pt-4 border-t border-amber-900/10 flex flex-col items-end">
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">
                        {birthdayData.letter.closing}
                      </span>
                      <span className="font-serif italic text-lg sm:text-xl font-bold text-pink-800 mt-1">
                        {birthdayData.letter.signature}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
