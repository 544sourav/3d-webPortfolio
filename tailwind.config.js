/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '-100': '-1',
    },
    fontFamily: {
      worksans: ["Work Sans", "sans-serif"],
      poppins: ['Poppins', "sans-serif"]
    },
    colors: {
      gray: {
        200: "#D5DAE1"
      },
      black: {
        DEFAULT: "#000",
        500: "#1D2235"
      },
      blue: {
        500: "#2b77e7"
      }
    },
    },
  },
  plugins: [],
}

