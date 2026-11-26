/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FFF9F1',
          50: '#FFFEFA',
          100: '#FFF9F1',
          200: '#F9F1E5',
          300: '#F3E8D7',
        },
        champagne: {
          DEFAULT: '#F3E8D7',
          light: '#F8F1E7',
          dark: '#E7D5BF',
        },
        antique: {
          DEFAULT: '#65452F',
          light: '#7F5A3F',
          dark: '#4F3422',
        },
        cocoa: {
          DEFAULT: '#39291F',
          light: '#4E3A2E',
          dark: '#241913',
        },
        gold: {
          DEFAULT: '#B99A63',
          light: '#D3BA8D',
          dark: '#9A7D49',
          accent: '#A68346',
        },
        rose: {
          DEFAULT: '#D7A49B',
          light: '#E5C0B9',
          dark: '#BF857A',
        },
        sage: {
          DEFAULT: '#92977C',
          light: '#ACAF9D',
          dark: '#767C60',
        },
        'warm-white': '#FFFEFA',
      },
      fontFamily: {
        'serif-tamil': ['"Noto Serif Tamil"', 'serif'],
        'sans-tamil': ['"Noto Sans Tamil"', 'sans-serif'],
        'serif-en': ['"Cormorant Garamond"', 'serif'],
        'display-en': ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'paper-texture': "radial-gradient(#d3ba8d 0.75px, transparent 0.75px), radial-gradient(#d3ba8d 0.75px, #FFF9F1 0.75px)",
      },
      boxShadow: {
        'royal': '0 20px 40px -15px rgba(101, 69, 47, 0.15), 0 0 25px -5px rgba(185, 154, 99, 0.12)',
        'card-lux': '0 10px 30px -10px rgba(57, 41, 31, 0.1), 0 0 1px 1px rgba(185, 154, 99, 0.25)',
        'gold-glow': '0 0 25px rgba(185, 154, 99, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'petal-fall': 'fall 10s linear infinite',
        'pulse-subtle': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        fall: {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
