/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ner: {
          dark: '#0B132B',
          navy: '#1C2541',
          slate: '#3A506B',
          teal: '#5BC0BE',
          cyan: '#6FFFE9',
          danger: '#EF4444',
          warning: '#F59E0B',
          amber: '#D97706',
          safe: '#10B981',
          card: '#131D35',
          cardBorder: '#233554'
        }
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar': 'radar 3s linear infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
