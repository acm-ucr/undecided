/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      code: {
        white: "#FFFFFF",
        black: "#1A1A1A",
        darkgray: "#383737",
        gray: "#8A8A8A",
        lightgray: "#C1C1C1",
        green: "#16A94E",
        purple: "#7E87FF",
        pink: "#E6A0C5",
        yellow: "#EBFE64",
        lime: "#C1E952",
        blue: "#4EA8DF",
        cyan: "#5FF9F1",
        orange: "#FABB01",
        lightorange: "#FAD32A",
        pink: "#F9CAD2",
        red: "#FF4B1E",
      },
    },
    extend: {},
  },
  plugins: [],
};
