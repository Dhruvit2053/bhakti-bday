import { useEffect, useState } from 'react';

export const BackgroundEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating background elements (hearts, stars, sparkles)
  const floatingItems = [
    { icon: '✨', size: 'text-sm', top: '12%', left: '8%', delay: '0s', dur: '8s' },
    { icon: '🌸', size: 'text-lg', top: '22%', left: '85%', delay: '1s', dur: '9s' },
    { icon: '💖', size: 'text-sm', top: '45%', left: '5%', delay: '2s', dur: '10s' },
    { icon: '⭐', size: 'text-xs', top: '65%', left: '92%', delay: '3s', dur: '7s' },
    { icon: '🌷', size: 'text-base', top: '80%', left: '15%', delay: '1.5s', dur: '11s' },
    { icon: '✨', size: 'text-base', top: '35%', left: '90%', delay: '2.5s', dur: '8.5s' },
    { icon: '💗', size: 'text-xs', top: '90%', left: '80%', delay: '0.5s', dur: '9.5s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep dreamy radial ambient backgrounds */}
      <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-blush-500/15 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-lavender-500/15 rounded-full blur-[160px]" />
      <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[150px]" />
      <div className="absolute top-2/3 left-10 w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-[120px]" />

      {/* Subtle cursor light halo for desktop */}
      {!isTouchDevice && mousePos.x >= 0 && (
        <div
          className="fixed rounded-full blur-[90px] transition-transform duration-100 ease-out will-change-transform bg-gradient-to-r from-pink-500/15 via-purple-400/10 to-yellow-300/10 w-[350px] h-[350px]"
          style={{
            transform: `translate(${mousePos.x - 175}px, ${mousePos.y - 175}px)`,
          }}
        />
      )}

      {/* Floating gentle romantic particles */}
      {floatingItems.map((item, idx) => (
        <div
          key={idx}
          className={`absolute ${item.size} opacity-40 select-none animate-float-slow transition-opacity`}
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.dur,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};
