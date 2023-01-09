module.exports = {
  purge: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./Layout/**/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Font Imports
    fontFamily: {
      sans: ["Montserrat"],
      hanuman: ["Hanuman"],
      game: ["game"],
      Poppins:["Poppins"],
    },
    container: {
      padding: {
        "2xl": "8rem",
      },
    },
    extend: {
      colors: {
        "behance-gray": "#272530",
        "staking-blue" : {
          400:"rgba(6,11,34, 0.40)",
          900:"rgba(6,20,34, 0.90);"
        },
        "transparent-blue" : "rgba(17,0,234,0.15)",
        "opaque-blue" : "rgba(8, 9, 64, 1)",
        "trans-brown": "rgba(235,107,30,0.40)",
        "idos-gray": "#C4C4C4",
        "idos-yellow": "#64FAA6",
        "bl-grad-start":"#B83EDE",
        "bl-grad-end":"#651FFF",
        "drk-blue-input":"#292273",
        "lt-blue-input":"#5245E6",
        "comp-orange":"rgba(186,111,74,0.70)",

        "primary-black" : "#151515",
        "wordings-white" : "#FFFFFF",
        "dusty-white" : "#E0E0E0",
        "primary-red" : "#F80759",
        "primary-violet" : "#A85DF4",
        "cards-bg" : "#2D2C2C",
        "glow-circle":"rgba(130,130,130,.6)",
        "staking-border":"rgba(132,132,132,.5)",
        "placeholder-white":"rgba(255,255,255,.3)",
        "logo-color" : "rgba(156, 156, 156, .6)"
      },

      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      inset: {
        "50%": "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
