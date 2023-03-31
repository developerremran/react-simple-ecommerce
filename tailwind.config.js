/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#570DF8",

          "secondary": "#F000B8",

          "accent": "#37CDBE",

          "neutral": "#1C2B35",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "btnC": "#FF9900",
          "bgNav": "#1C2B35",
          "layout" : "#FFE0B3",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

