/** @type {import('tailwindcss').Config} */
module.exports = {
 darkMode: "class",
 content: ["./**/*.{html,js}"],
 theme: {
  extend: {
   sepia: { 25: ".25", 50: ".50", 75: ".75" },
   rotate: { 5: "5deg" },
  },
 },
 plugins: [],
};
