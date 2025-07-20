/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#F6FF00',  // Bright neon yellow
        dark: '#0a0a0a',  // Deep dark background
      },
      animation: {
        float: "float 4s ease-in-out infinite",     // Smooth vertical float
        glow: "glow 2s ease-in-out infinite",       // Pulsing glow
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 8px #F6FF00, 0 0 16px #F6FF00',
          },
          '50%': {
            boxShadow: '0 0 12px #F6FF00, 0 0 24px #F6FF00',
          },
        },
      },
    },
  },
  plugins: [],
};
