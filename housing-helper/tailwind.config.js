/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        text: "#e8e3e3",
        background: "#242424",
        primary: "#c34950",
        secondary: "#C5050C",
        accent: "#683ffa",
      },
    },
  },
  plugins: [],
};
