module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      custom: ["Manrope", "sans-seri"],
    },
    extend: {
      colors: {
        "Light-Cyan": "hsl(193, 38%, 86%)",
        "Neon-Green": "hsl(150, 100%, 66%)",
        "Grayish-Blue": "hsl(217, 19%, 38%)",
        "Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
        "Dark-Blue": "hsl(218, 23%, 16%)",
      },
      boxShadow: {
        "3xl": "0 0px 10px 5px hsl(150, 100%, 66%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
