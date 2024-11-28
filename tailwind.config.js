/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Open Sans', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        ipad: '820px',
      },
    },
    colors: {
      orange: "#ffb400",
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      richblack: {
        5: "#F1F2FF",
        25: "#DBDDEA",
        50: "#C5C7D4",
        100: "#AFB2BF",
        200: "#999DAA",
        300: "#838894",
        400: "#6E727F",
        500: "#585D69",
        550: "#757575",
        600: "#424854",
        700: "#2C333F",
        800: "#161D29",
        900: "#000814",
        950: "#2b2a2a",
        1000: "#111111",
        1100: "#252525",
        1200: "#939190"
      }
    }
  },
  plugins: [],
};
