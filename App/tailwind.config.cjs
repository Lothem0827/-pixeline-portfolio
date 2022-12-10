const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    letterSpacing: {
      smallText: "-.075em",
    },
    //custom font
    fontFamily: {
      inter: ["Inter"],
      ade: ["Ade"],
    },
    //fontsize with line-height
    fontSize: {
      size16: ["16px", "20px"],
      size20: ["20px", "24px"],
      size24: ["24px", "28px"],
      size216: ["216px"],
    },

    extend: {
      colors: {
        dark: "#090909",
        light: "#FBFBFB",
        neon: "#90FF21",
        red: "#F82626",
      },

      spacing: {
        spacing1: "300px",
      },
      margin: {
        "40px": "40px",
        "80px": "80px",
      },
    },
  },

  plugins: [],
};

module.exports = config;
