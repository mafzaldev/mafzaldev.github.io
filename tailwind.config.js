/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1D1916",
        glass: "#9ca3af4d",
        "glass-light": "#9ca3afcc",
        "glass-dark": "#24251f",
        "glass-light-dark": "#24251f89",
      },
      keyframes: {
        run: {
          "0%": {
            transform: "translateX(-20vw)",
          },
          "49.9%": {
            transform: "translateX(100vw)",
          },
          "50%": {
            transform: "translateX(100vw) scaleX(-1)",
          },
          "100%": {
            transform: "translateX(-20vw) scaleX(-1)",
          },
        },
        walk: {
          "0%": {
            transform: "translateX(-10%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "kitty-run": "walk 6s linear infinite",
        "kitty-run-mobile": "run 6s linear infinite",
      },
    },
  },
  plugins: [],
};
