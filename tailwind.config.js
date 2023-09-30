/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        potta: ["Potta One"],
        montserrat: ["Montserrat"],
      },
      screens: {
        sc370: "370px",
      },
    },
  },
  plugins: [],
};
