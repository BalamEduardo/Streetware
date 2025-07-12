/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
