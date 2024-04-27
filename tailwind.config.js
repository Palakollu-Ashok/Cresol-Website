/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      fontFamily: {
        Nunito: ["Poppins", "sans-serif"],
      },
      colors: {
        secondary: "#f6490d",
        primary: "#035aa6",
        "primary-dark": "#0c4e98",
        "primary-light": "#1d75b7",
        muted: "#54595f",
        "dark-muted": "#1d1d23",
        "paragraph-color": "#606060",
        red: "#EF4646",
        dark: "#1c1d20",
        light: "#f6f6f6",
        border: "#eeeeee",
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "1920Screen": "1920px",
    },
  },
  plugins: [require("@babel/template")],
};
