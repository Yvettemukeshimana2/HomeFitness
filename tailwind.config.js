 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gray_20: "#F8F4EB",
      gray_50: "#EFE6E",
      gray_100: "#DFCCCC",
      gray_50: "#5E0000",
      primary_100: "FFE1E0",
      primary_300: "#FFA6A3",
      primary_500: "#FF6B66",
      secondary_400: "#FFCD58",
      secondary_500: "#FFC132",
    },
    backgroundImage: (theme) => ({
      gradient_yellowred: "linear-gradient(90deg ,#FF616A)",
      "mobile-home": "url('./assets/im2.jpg')",
    }),

    content: {
      evolve: "url('./assets/im1.jpg')",
      abstract: "url('./assets/im3.jpg')",
    },
    screens: {
      xs: "489px",
      sm: "480px ",
      md:"768px",
      lg:"976px",
      xl:"1440px"

    }
  },
  plugins: [],
};