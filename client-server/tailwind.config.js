/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-one": "#1B7878",
        "light-weight": "rgba(255,2,255,0.17)",
        "blue-one": "#3692ee",
        "red-one": "#E20000"
      },
    },
  },
  plugins: [],
}
