/* eslint-disable no-undef */
const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",

      black: "900",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      animation: {
        scaleUp: "1.2s infinite ease-in-out scaleUp",
        stroke: "4s infinite ease-in-out alternate stroke",
      },
      keyframes: {
        scaleUp: {
          "0%, 80%, 100%": {
            transform: "scale(0)",
          },
          "40%": {
            transform: "scale(1)",
          },
        },
        stroke: {
          "0%": {
            fill:'transparent',
            stroke:'white',
            strokeWidth:'2',
            strokeDashoffset:'25%',
            strokeDasharray:'0 32%'
          },
          "50%": {
            fill:'transparent',
            stroke:'white',
            strokeWidth:'2',
          },
          "80%, 100%": {
            fill:'white',
            stroke:'transparent',
            strokeWidth:'0',
            strokeDashoffset:'-25%',
            strokeDasharray:'32% 0'
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") }
      );
    }),
  ],
};
