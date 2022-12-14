module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#97D2A2",
          "secondary": "#35A0AD",
          "accent": "#0580A7",
          "neutral": "#F3F4F6",
          "base-100": "#ffffff",
          "success": "#7CBC71",
          "warning": "#FBB848",
          "info": "#FFEEEA",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}