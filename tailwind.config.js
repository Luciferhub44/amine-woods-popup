/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFE500',
          yellowHover: '#E5CE00',
          red: '#FF2A1E',
          redHover: '#E02116',
          dark: '#0B0C0E',
          darker: '#060708',
          card: '#14161B',
          border: '#282A30',
          riso: '#ECD636',
          risoDark: '#3A370A',
        },
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'brutal-yellow': '4px 4px 0px 0px #FFE500',
        'brutal-red': '4px 4px 0px 0px #FF2A1E',
        'brutal-white': '4px 4px 0px 0px #FFFFFF',
        'brutal-black': '4px 4px 0px 0px #000000',
        'glow-yellow': '0 0 35px -5px rgba(255, 229, 0, 0.35)',
        'glow-red': '0 0 35px -5px rgba(255, 42, 30, 0.35)',
      },
    },
  },
  plugins: [],
};
