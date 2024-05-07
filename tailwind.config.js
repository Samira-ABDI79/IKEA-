/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      "color-logo": " #fae6e6",
      "color-background": " #fffefb",
      "color-border": " #f0ede8",
      "color-footer": " #806e6e",
      "color-light": " #ffffff",
      "color-ikea-blue": " #0058a3",
      "color-ikea-yellow": " #ffdb00",
      "color-ikea-yellow-hover": " #ffe53a",
      "color-ikea-yellow-light": " #fff094",
      "color-text-dark": " rgba(0, 0, 0, 0.74)",
      "color-text-darker": " #111111",
      "color-text-black": " #000",
      "color-grey": " #dfdfdf",
      "color-grey-dark": " #999999",
    },
    container: {
      center: true,
    },
    extend: {
      // objectPosition: {
      //   "50-50": "center bottom",
      // },
    },
  },
  plugins: [],
};
