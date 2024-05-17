import type { Config } from "tailwindcss";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    variants: {
      extend: {
        boxShadow: ['hover'],
      }
    },
    extend: {
      backgroundColor: {
        body: "var(--body)",
        card: "#0f0f0f",
        cardalt: "#1a1a1a",
        pink: "var(--pink)",
        white: "var(--white)",
        green: "var(--green)",
      },
      boxShadow: {
        'glow-green': '0 0 10px #00cc96, 0 0 20px #00cc96, 0 0 30px #00cc96, 0 0 40px #00cc96',
      },
      colors: {
        text: "#999",
        green: "var(--green)",
        pink: "var(--pink)",
        white: "var(--white)",
        "text-regular": "var(--text-regular)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        card: {
          DEFAULT: "hsl(#0f0f0f)",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        radius: "var(--radius)",
      },
      width: {
        page: "800px",
      },
      spaceY: {
        24: "24px",
      },
      borderColor: {
        green: "var(--green)",
        pink: "var(--pink)",
      },
      gap: {
        24: "24px",
        small: "2px",
      },
      fontSize: {
        xxs: "12px",
        36: "36px",
      },
      padding: {
        24: "24px",
        page: "24px 24px 102px",
      },
      height: {
        260: "260px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    "tailwindcss-animate",
    addVariablesForColors,
  ],
} satisfies Config;

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
