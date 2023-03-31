/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightgreen: "#90DD3E",
        green: "#183D36",
        aqua: "#B0FFFC",
        lightblue: "#DFE5FF",
        white: "#fff",
        brown: "#906D6D",
        blue: "#003DB5",
        background: "#F3F8FF",
      },

      fontFamily: {
        plus: ["Plus Jakarta", "sans-serif"],
      },
    },
  },

  plugins: [require("tailwindcss"), require("autoprefixer")],
};
