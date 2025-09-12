/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 tells Tailwind to scan React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};