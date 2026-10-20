import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BirthdayCake } from './components/BirthdayCake';
import { BirthdayLetter } from './components/BirthdayLetter';
import { MemoryGallery } from './components/MemoryGallery';
import { SurpriseGift } from './components/SurpriseGift';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { audioManager } from './utils/audioPlayer';

export function App() {
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpenSurprise = () => {
    setHasOpened(true);
    // User interaction initiated: play romantic background music
    audioManager.play();
  };

  return (
    <div className="relative min-h-screen bg-[#0b0518] text-white selection:bg-pink-500 selection:text-white">
      {/* Ambient background particles and lighting */}
      <BackgroundEffects />

      {/* Welcome Screen overlay */}
      <AnimatePresence>
        {!hasOpened && <WelcomeScreen onOpen={handleOpenSurprise} />}
      </AnimatePresence>

      {/* Main Birthday Experience */}
      {hasOpened && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <Navbar />
          <HeroSection />
          <BirthdayCake />
          <BirthdayLetter />
          <MemoryGallery />
          <SurpriseGift />
          <Footer />
        </motion.main>
      )}
    </div>
  );
}

export default App;
