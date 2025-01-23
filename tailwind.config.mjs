/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    theme: [
      {
        colors: {
          primary: "#D8EFD3",
          secondary: "#55AD9B",
          accent: "#95D2B3",
          neutral: "#F1F8E8",
          "base-100": "#ffffff",
          "base-200": "#EEEEEE",
        },
      },
    ],
  },
};

export default config;
