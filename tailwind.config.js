module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLight: {
          primary: "#00a5af",
          "primary-content": "#ffffff",
          secondary: "rgb(220, 22, 65)",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      {
        myDark: {
          primary: "#00a5af",
          "primary-content": "#3d4451",
          secondary: "rgb(220, 22, 65)",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#3d4451",
        }
      }
    ],
  },
}
