module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      tight: "-.015em",
    },
    extend: {
      height: {
        "half-screen": "50vh",
        "half-full-screen": "75vh",
      },
      backgroundImage: {
        "header-screen": "url('/assets/png/bg-about.png')",
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
