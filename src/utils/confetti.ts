import confetti from 'canvas-confetti';

export const triggerRomanticConfetti = () => {
  // Center burst
  confetti({
    particleCount: 80,
    spread: 90,
    origin: { y: 0.6 },
    colors: ['#f472b6', '#ec4899', '#c084fc', '#facc15', '#fce7f3', '#fbcfe8'],
    shapes: ['circle', 'square'],
    scalar: 1.1,
  });

  // Left and right cannons
  setTimeout(() => {
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 60,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#f472b6', '#e879f9', '#fbbf24', '#ffffff'],
    });
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 60,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#c084fc', '#f472b6', '#fde047', '#ffffff'],
    });
  }, 250);
};

export const triggerStarConfetti = () => {
  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#f472b6', '#fbbf24', '#c084fc'],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#f472b6', '#fbbf24', '#c084fc'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
