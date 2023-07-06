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
        primary: "#111111",
        secondary: "#c6f6d5",
        "text-primary": "#111111",
        "text-secondary": "#666666",
      },
    },
  },
  plugins: [],
};
