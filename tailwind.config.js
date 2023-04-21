/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6e1715',
        'secondary': '#b40129',
        'accent-1': '#df7a92',
        'accent-2': '#e8b6c3',
        'accent-3': '#f6e3ed',
        'highlight': '#fdb8e6'
      }
    },
  },
  plugins: [],
}