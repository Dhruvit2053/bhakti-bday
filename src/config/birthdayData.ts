/**
 * 🎂 Bhakti's Birthday Surprise Configuration
 * 
 * Thoughtfully styled for an awesome, cherished friend!
 * Edit this file to easily customize messages, dates, photos, and music!
 */

export interface GalleryPhoto {
  id: string;
  url: string;
  fallbackUrl: string;
  title: string;
  subtitle: string;
  dateTag?: string;
  objectPosition?: string;
}

export interface BirthdayConfig {
  name: string;
  birthdayDate: string; // ISO format or YYYY-MM-DD
  welcomeTitle: string;
  welcomeSubtitle: string;
  heroHeading: string;
  heroMessage: string;
  letter: {
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
  };
  gallery: GalleryPhoto[];
  gift: {
    revealHeadline: string;
    typewriterLines: string[];
    wishes: string[];
  };
  music: {
    title: string;
    artist: string;
    audioUrl?: string;
  };
}

export const birthdayData: BirthdayConfig = {
  name: "Bhakti",
  birthdayDate: "2026-10-20T00:00:00+05:30",
  welcomeTitle: "Hey Bhakti,",
  welcomeSubtitle: "A Special Birthday Surprise from a Good Friend! 🎁✨",
  heroHeading: "Happy Birthday, Bhakti! 🎂✨",
  heroMessage:
    "Today is all about you. May your smile always shine brighter than the stars, your heart stay full of happiness, and your life be filled with beautiful memories.",
  letter: {
    salutation: "Dear Bhakti,",
    paragraphs: [
      "Happy Birthday to someone who deserves all the happiness in the world! ❤️",
      "May every new day bring you closer to your dreams. May your smile never fade, your heart always feel loved, and your life be full of wonderful surprises.",
      "Today, I hope you feel as special as you truly are. Keep shining, keep smiling, and never stop being the amazing person you are.",
      "Wishing you endless happiness, beautiful memories, and a magical year ahead.",
      "Happy Birthday once again, Bhakti! 🎂💖",
    ],
    closing: "Your friend always,",
    signature: "Cheers and Best Wishes ✨",
  },
  gallery: [
    {
      id: "mem-1",
      url: "/photos/photo1.jpg",
      fallbackUrl: "/photos/photo1.jpg",
      title: "Radiant & Graceful",
      subtitle: "Looking stunning in royal blue with that signature joyful smile!",
      dateTag: "Grace & Elegance",
      objectPosition: "center 8%",
    },
    {
      id: "mem-2",
      url: "/photos/photo2.jpg",
      fallbackUrl: "/photos/photo2.jpg",
      title: "Traditional Charm",
      subtitle: "Pure elegance and festive cheer captured perfectly.",
      dateTag: "Festive Vibes",
      objectPosition: "center 15%",
    },
    {
      id: "mem-3",
      url: "/photos/photo3.jpg",
      fallbackUrl: "/photos/photo3.jpg",
      title: "Golden Hour Glow",
      subtitle: "Warm coffee, cozy evening vibes, and that effortless bright smile.",
      dateTag: "Cozy Evenings",
      objectPosition: "center 10%",
    },
    {
      id: "mem-4",
      url: "/photos/photo4.jpg",
      fallbackUrl: "/photos/photo4.jpg",
      title: "Friendship & Good Times",
      subtitle: "Celebrating togetherness, endless laughs, and unforgettable memories!",
      dateTag: "Best Buddies",
      objectPosition: "center 15%",
    },
    {
      id: "mem-5",
      url: "/photos/photo5.jpg",
      fallbackUrl: "/photos/photo5.jpg",
      title: "Childlike Wonder & Doraemon",
      subtitle: "Never lose that playful, cheerful spark that makes you so special!",
      dateTag: "Pure Joy",
      objectPosition: "center 15%",
    },
    {
      id: "mem-6",
      url: "/photos/photo6.jpg",
      fallbackUrl: "/photos/photo6.jpg",
      title: "Sunset & Cool Shades",
      subtitle: "Chic sunglasses, festive red, and that radiant golden hour energy!",
      dateTag: "Golden Vibes",
      objectPosition: "center 10%",
    },
  ],
  gift: {
    revealHeadline: "One More Reason to Smile Today — YOU! 🌟",
    typewriterLines: [
      "Bhakti, you bring such genuine kindness, positive energy, and fun into every room you enter.",
      "Having you as a friend is truly awesome, and today is all about celebrating the wonderful person you are.",
      "May this upcoming year bring you thrilling adventures, unstoppable confidence, and all the success in the world.",
      "Happy 20th of October, Bhakti! Keep smiling, keep shining, and stay awesome! 🎂🌟"
    ],
    wishes: [
      "May our friendship continue to be full of laughter and support.",
      "May you crush all your goals and ambitions this year.",
      "May every single day bring reasons to smile and celebrate.",
      "May peace, happiness, and good fortune follow you always."
    ]
  },
  music: {
    title: "Joyful Birthday Music Box",
    artist: "Acoustic Piano & Celesta",
    audioUrl: "/music.mp3",
  },
};
