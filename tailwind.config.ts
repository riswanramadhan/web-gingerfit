import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gingerfit: {
          green: "#00A651",
          yellow: "#F5B51B",
          sky: "#28BDEB",
          cream: "#FFF9EF",
          black: "#111111",
          gray: "#E9E4DA",
        },
        product: {
          immunityBooster: "#00A651",
          immunityAid: "#E8AD22",
          runningBooster: "#14DDB0",
          runningHighlight: "#DDF44A",
          vitaminA: "#20B9D6",
          vitaminC: "#FF641F",
          energyBooster: "#111111",
          energyAccent: "#FF5A3C",
        },
        productBg: {
          immunityBooster: "#F0FFF5",
          immunityAid: "#FFF6D8",
          runningBooster: "#E9FFF8",
          vitaminA: "#EAFBFF",
          vitaminC: "#FFF0E8",
          energyBooster: "#F7F7F7",
        },
      },
      boxShadow: {
        soft: "0 14px 36px rgba(17, 17, 17, 0.07)",
        glow: "0 18px 44px rgba(0, 166, 81, 0.2)",
      },
      animation: {
        "soft-pulse": "soft-pulse 2.4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "soft-pulse": {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 18px 40px rgba(0, 166, 81, 0.25)" },
          "50%": { transform: "scale(1.04)", boxShadow: "0 24px 55px rgba(0, 166, 81, 0.35)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
