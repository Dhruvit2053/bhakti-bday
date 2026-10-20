/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
        lavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        night: {
          900: '#0c0714',
          950: '#07030c',
        },
        gold: {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          glow: '#fbbf24',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        cursive: ['"Great Vibes"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'sparkle': 'sparkle 1.8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 15px rgba(244, 114, 182, 0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(216, 180, 254, 0.9))' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.7' },
          '50%': { transform: 'scale(1.3) rotate(180deg)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'glow-pink': '0 0 35px -5px rgba(244, 114, 182, 0.5)',
        'glow-purple': '0 0 35px -5px rgba(168, 85, 247, 0.5)',
        'glow-gold': '0 0 35px -5px rgba(250, 204, 21, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }
    },
  },
  plugins: [],
}
