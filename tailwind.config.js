module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "pack-train": "url('../assets/headerimage3.jpg')",
    },
    letterSpacing: {
      tight: "-.015em",
    },
    extend: {
      height: {
        "half-screen": "50vh",
      },
      colors: {
        "light-green": "#209FAE",
        "light-white": "#DAF0F2",
        pink: "#D75995",
        gray: "#464646",
        "dark-gray": "#2C2C2C",
      },
    },
  },
  plugins: [],
};
