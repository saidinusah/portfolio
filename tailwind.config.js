/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#c6f6d5",
        "text-primary": "#111111",
        "text-secondary": "#666666",
        'alt-heading': '#ACB2E9',
        'primary': '#9597B1',
        'about':'#B1B4D0'
      },
      fontFamily: {
        'fraunces-bold': ["fraunces-bold"],
        'fraunces-semibold': ["fraunces-semibold"],
        'fraunces-medium': ["fraunces-medium"],
        'fraunces-regular': ["fraunces-regular"],

        // avenir
        'avenir-black': ["avenir-black"],
        'avenir-heavy': ["avenir-heavy"],
        'avenir-medium': ["avenir-medium"],
        'avenir-regular': ["avenir-regular"],
        'avernir-light': ["avernir-light"],
      }
    },
  },
  plugins: [],
};
