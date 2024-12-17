/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        like: {
          "0%": { transform: "scale(1)" },
          "90%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        like: "like 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
}

