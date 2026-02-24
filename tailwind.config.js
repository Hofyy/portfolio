/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/mainpage.tsx',
    './app/**/*.tsx'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' }
        }
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards'
      }
    }
  },
  plugins: []
}