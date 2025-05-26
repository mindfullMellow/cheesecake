/** @type {import('tailwindcss').Config} */
export default {
  purge: ["index.html"],
  darkMode: false,
  content: ["./*.html", "./*.js"],
  theme: {
    //overriding all  defualt styles

    // adding my won styles to the tailwind classes
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
        inika: ["inika", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },

      backgroundImage: {
        "hero-bg": "url('/img/hero-background-color.png')",
      },

      colors: {
        "cheese-brown": {
          50: "#f9f7f1",
          100: "#eee6d7",
          200: "#dccbab",
          300: "#c9ae80",
          400: "#bd9762",
          500: "#b1804f",
          600: "#9c6743",
          700: "#82513b",
          800: "#6f4436",
          900: "#59372e",
          950: "#321c16",
        },

        "cheese-cream": {
          50: "#fff8e1",
          100: "#fff2c0",
          200: "#ffe385",
          300: "#ffcb3f",
          400: "#ffaf0b",
          500: "#f49500",
          600: "#d36f00",
          700: "#a84b00",
          800: "#8a3b09",
          900: "#75300e",
          950: "#451703",
        },
      },

      fontSize: {
        h1: "2.986rem",
        h2: "2.488rem",
        h3: "2.074rem",
        h4: "1.728rem",
        h5: "1.44rem",
        h6: "1.2rem",
        p: "1rem",
        sm: "0.833rem",
        xsm: "0.694rem",
      },
    },
  },
  plugins: [],
};
