/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(0, 57, 94)',  // Ton bleu exact ici
      },
    },
  },
  plugins: [],
};