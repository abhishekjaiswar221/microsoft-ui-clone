/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "md-mobile": "375px",
      "lg-mobile": "425px",
      "sm-tablet": "640px",
      tablet: "768px",
      laptop: "1024px",
      "md-laptop": "1280px",
      "lg-laptop": "1440px",
      "xl-laptop": "1536px",
      "4k-monitor": "2560px",
    },
    extend: {},
  },
  plugins: [],
};
