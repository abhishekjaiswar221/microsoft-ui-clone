/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "md-mobile": "375px",
      "lg-mobile": "425px",
      "md-tablet": "640px",
      "lg-tablet": "768px",
      "sm-laptop": "1024px",
      "md-laptop": "1280px",
      "lg-laptop": "1399px",
      "xl-laptop": "1536px",
      "4k-monitor": "2560px",
    },
    extend: {},
  },
  plugins: [],
};
