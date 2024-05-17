/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        "ikea-logo": " #fae6e6",
        "ikea-background": " #fffefb",
        "ikea-border": " #f0ede8",
        "ikea-footer": " #806e6e",
        "ikea-light": " #ffffff",
        "ikea-blue": " #0058a3",
        "ikea-yellow": " #ffdb00",
        "ikea-yellow-hover": " #ffe53a",
        "ikea-yellow-light": " #fff094",
        "ikea-gray1": " #F5F5F5",
        "text-dark": " rgba(0, 0, 0, 0.74)",
        "ikea-darker": " #111111",
        "text-black": " #000",
        "ikea-grey": " #dfdfdf",
        "ikea-grey-dark": " #999999",
        "ikea-white": " #fff",
        "ikea-divider": " rgba(0, 0, 0, 0.74)",
      },
      borderRadius: {
        "4xl": "1.75rem",
      },
      lineHeight: {
        108: "108%",
      },
      height: {
        0.0625: "0.0625rem",
      },
      // objectPosition: {
      //   "50-50": "center bottom",
      // },
    },
  },
  plugins: [],
};
