/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        husky: {
          50: "#fffaf0",
          100: "#fef4da",
          200: "#fee9b4",
          300: "#fedd89",
          400: "#fdcf60",
          500: "#fdb240",
          600: "#f3922b",
          700: "#da7525",
          800: "#b3591f",
          900: "#8f451a",
          950: "#56260f",
        },
      },
      fontSize: {
        'credits': '0.5rem',
      },
    },
  },
  plugins: [],
};
