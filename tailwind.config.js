/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        textMain: "#333333",
        textMinor: "#666666",
        activeColor: "#BE123C",
        bgActive: "#F8E7EB"
      }
    },
  },
  plugins: [],
}

