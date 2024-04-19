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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        regular: "var(--regular)",
        green: 'var(--green)',
        pink: "var(--pink)",
        body : "var(--body)",
        card : "var(--card)",
        white: "var(--white)",
        cardalt: "var(--card-alt)",
      },
      backgroundColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        regular: "var(--regular)",
        green: 'var(--green)',
        pink: "var(--pink)",
        body : "var(--body)",
        card : "var(--card)",
        white: "var(--white)",
        cardalt: "var(--card-alt)",
      },
      borderRadius: {
        'radius': "var(--radius)"
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