// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "eng-main-font": ["Poppins", "sans-serif"],
        "kor-main-font": ["Noto Sans KR", "sans-serif"],
        "sub-font": ["Quicksand", "sans-serif"],
      },
      animation: {
        fadeIn1: "fadeIn 2s ease-in forwards",
        fadeIn2: "fadeIn 4s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
