/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      midnight: "#171A21",
      violet: "#5D4CA9",
      "light-red": "#E5625E",
      "tea-green": "#C4F1BE",
      "light-pink": "#fffbfd",
    },
    extend: {
      height: {
        128: "32rem",
      },
      backgroundImage: {
        "sea-image": "url('/deep-sea.webp')",
        "water-color": "url('/watercolor.webp')",
      },
      content: {
        moon: "url('/moon.svg')",
        sun: "url('/sun.svg')",
      },
    },
  },
  plugins: [],
};
