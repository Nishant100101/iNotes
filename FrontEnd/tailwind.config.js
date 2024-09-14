/** @type {import('tailwindcss').Config} */
export default {
  content: ["*", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        Coral: "lightpink",
        Peach: "lightsalmon",
        Sand: "moccasin",
        Beige: "beige",
        Sky: "powderblue",
        Silver: "gainsboro",
        Ice: "lightsteelblue",
        Lavender: "thistle",
        Blush: "mistyrose",
        Cream: "blanchedalmond",
      },
    },
  },
  plugins: [],
};
