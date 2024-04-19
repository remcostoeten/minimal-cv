import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050505",
        secondary: "#0f0f0f",
        regular: "#1a1a1a",
        green: "#00cc96",
        pink: "#ac99ff",
        body: "#050505",
        card: "#0f0f0f",
        white: "#e6e6e6",
        cardalt: "#1a1a1a",
      },
      backgroundColor: {
        primary: "#050505",
        secondary: "#0f0f0f",
        regular: "#1a1a1a",
        green: "#00cc96",
        pink: "#ac99ff",
        body: "#050505",
        card: "#0f0f0f",
        white: "#e6e6e6",
        cardalt: "#1a1a1a",
      },
      borderRadius: {
        radius: "30px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
