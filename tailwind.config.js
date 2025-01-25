/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  
 /*eslint no-undef: "error"*/
  plugins: [require("daisyui")],
};
