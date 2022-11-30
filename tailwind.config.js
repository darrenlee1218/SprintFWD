const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: colors.teal,
      light: colors.white,
      dark: colors.black,
      error: colors.red,
      warning: colors.yellow,
      info: colors.blue,
      neutral: colors.slate,
      transparent: colors.transparent,
      gray: colors.gray
    },
  },
  plugins: [],
}
