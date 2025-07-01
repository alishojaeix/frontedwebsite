/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00AEEF',
        'neon-orange': '#FF6B35', 
        'neon-green': '#7FBA00',
        'neon-yellow': '#FFB900',
        'neon-purple': '#8B5CF6',
        'neon-cyan': '#06B6D4',
        gray: {
          850: '#1f2937',
          950: '#0a0a0a',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite alternate',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 174, 239, 0.6)',
        'neon-orange': '0 0 20px rgba(255, 107, 53, 0.6)',
        'neon-green': '0 0 20px rgba(127, 186, 0, 0.6)',
        'neon-yellow': '0 0 20px rgba(255, 185, 0, 0.6)',
      },
    },
  },
     keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseNeon: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1', boxShadow: '0 0 20px currentColor' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 5px currentColor)' },
          '100%': { filter: 'drop-shadow(0 0 20px currentColor)' },
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

  
  plugins: [],
};