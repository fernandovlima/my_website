/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-dark": "rgb(36, 36, 36)",
        "gray-medium": "rgb(50, 50, 50)",
        "gray-light": "rgb(130, 130, 130)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
