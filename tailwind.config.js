/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '380px', // Pantallas extra pequeñas a partir de 380px
      },
      colors: {
        brand: {
          DEFAULT: "#171717",
          accent: "#FF3636",
          yellow: "#FFD600",
          blue: "#0099FF",
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', "Oswald", "sans-serif"],
        body: ["Urbanist", "Montserrat", "sans-serif"],
        streetwear: ["var(--font-sedgwick-ave)", "cursive"],
      },
    },
  },
  plugins: [],
};
