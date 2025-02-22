const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FFD700",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};
