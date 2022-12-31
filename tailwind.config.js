/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        Valofont: ['ValorantFont', 'monospace'],
      },

      // animation
      keyframes: {
        wiggle: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },

        fadeOut: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out',
        fadeOut: 'fadeOut 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
