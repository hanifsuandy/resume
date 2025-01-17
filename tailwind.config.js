/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        husky: {
          50: "#FFF5EB",
          100: "#FFEEDB",
          200: "#FFE2C2",
          300: "#FFD4A3",
          400: "#FFC685",
          500: "#FFB561",
          600: "#FFA033",
          700: "#FF8800",
          800: "#E07800",
          900: "#C76A00",
          950: "#B35F00"
        },
      },
      fontSize: {
        'credits': '0.5rem',
      },
    },
  },
  plugins: [],
};
