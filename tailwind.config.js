/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/**/*.{html,ts}", "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        "fayroz": "#48A6A7",
        "fayroz-2": "#2973B2",
      }
    },
  },
  plugins: [],
};
