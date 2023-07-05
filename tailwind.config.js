const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        cyan: {
          100: "#2DC7ED",
        },
        blue: {
          400: "#5390E3",
          600: "#1357B3",
        },
      },
      colors: {
        background: "#06090F",
        white: {
          0: "#ffffff",
          100: "#FAFCFC",
          300: "#D8DBE3",
        },
        gray: {
          300: "#717274",
          400: "#7C7D80",
          500: "#595A5C",
          900: "#151B26",
        },
        cyan: {
          100: "#2DC7ED",
        },
        blue: {
          400: "#5390E3",
          600: "#1357B3",
        },
        purple: {
          50: "#FDF9FF",
          100: "#FAF3FF",
          125: "#9992a3",
          150: "#F6E6FF",
          200: "#E0AAFF",
          300: "#C77DFF",
          400: "#9D4EDD",
          500: "#7B2CBF",
          600: "#5A189A",
          700: "#3C096C",
          800: "#240046",
          900: "#0A001A",
        },
        rose: {
          light: "#EFBCD5",
          dark: "#BE97C6",
        },
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: "translateX(200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: "translateX(-200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
          to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
};
