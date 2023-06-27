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
    },
  },
  plugins: [],
};
