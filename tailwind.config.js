/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ef4444', // red-500
          hover: '#dc2626',   // red-600
          dark: '#991b1b',    // red-800
        },
        secondary: {
          DEFAULT: '#8b5cf6', // purple-500
          hover: '#7c3aed',   // purple-600
          dark: '#6d28d9',    // purple-700
        },
        accent: {
          yellow: '#fbbf24',  // yellow-400
          pink: '#ec4899',    // pink-500
          cyan: '#06b6d4',    // cyan-500
        },
        dark: {
          DEFAULT: '#0f172a', // slate-900
          lighter: '#1e293b', // slate-800
          card: '#334155',    // slate-700
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow-red': '0 0 30px rgba(239, 68, 68, 0.5)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.5)',
        'glow-yellow': '0 0 20px rgba(251, 191, 36, 0.5)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}