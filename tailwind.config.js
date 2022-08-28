/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008000",
        secondary: "#DEE1EC",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
