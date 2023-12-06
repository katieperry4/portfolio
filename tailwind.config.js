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
        "sea-image": "url('src/assets/deep-sea.jpg')",
        "water-color": "url('src/assets/watercolor.jpg')",
        "dawn-gradient": "url('src/assets/dawn-gradient.jpg')",
      },
      content: {
        moon: "url('src/assets/moon.svg')",
        sun: "url('src/assets/sun.svg')",
      },
    },
  },
  plugins: [],
};
