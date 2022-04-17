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
          secondary: "#3d4451",
          "secondary-content": "#eaeaea",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "neutral-content": "#fafafa",
        },
      },
      {
        myDark: {
          primary: "#00a5af",
          "primary-content": "#3d4451",
          secondary: "#3d4451",
          "secondary-content": "#eaeaea",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#3d4451",
          "neutral-content": "#000",
        }
      }
    ],
  },
}
