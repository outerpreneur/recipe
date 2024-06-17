/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        youngSerif: ["YoungSerif", "serif"],
      },
      colors: {
        raspberry: "#7A284E",
        snow: "#FFF7FB",
        brandyred: "#854632",
        wedgebrown: "#5F564D",
      },
      backgroundColor: {
        snow: "#FFF7FB",
      },
    },
  },
  plugins: [],
};
