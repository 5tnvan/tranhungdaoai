/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FF7700", // Bright orange
          "primary-content": "#1C1C1C", // Deep black for text
          secondary: "#FFB84D", // Soft, glowing orange
          "secondary-content": "#1C1C1C", // Deep black for text
          accent: "#FF5400", // Vibrant reddish-orange
          "accent-content": "#FFFFFF", // Crisp white
          neutral: "#FFFFFF", // Pure white
          "neutral-content": "#1C1C1C", // Deep black for contrast
          "base-100": "#FFF6E5", // Soft, warm white
          "base-200": "#FFE4C2", // Light peachy tone
          "base-300": "#FFD6A7", // Muted orange-peach
          "base-content": "#1C1C1C", // Deep black
          info: "#FF9100", // Bright orange-gold
          success: "#23D160", // Vibrant green
          warning: "#FF8C00", // Strong orange
          error: "#FF2D1A", // Bold red-orange
          "--rounded-btn": "9999rem",
          ".tooltip": { "--tooltip-tail": "6px" },
          ".link": { textUnderlineOffset: "2px" },
          ".link:hover": { opacity: "80%" },
        },
      },
      {
        dark: {
          primary: "#FF8800", // Bright orange
          "primary-content": "#1C1C1C", // Deep black for buttons
          secondary: "#FFAE33", // Glowing orange
          "secondary-content": "#1C1C1C", // Deep black for contrast
          accent: "#FF5400", // Intense reddish-orange
          "accent-content": "#FFFFFF", // Crisp white for contrast
          neutral: "#1C1C1C", // Deep black
          "neutral-content": "#FFFFFF", // Pure white for text
          "base-100": "#1A1A1A", // Rich black
          "base-200": "#292929", // Slightly muted black
          "base-300": "#3A3A3A", // Soft dark gray
          "base-content": "#FFFFFF", // Crisp white for contrast
          info: "#FF9100", // Bright orange-gold
          success: "#22C55E", // Vibrant green
          warning: "#FF7F11", // Intense orange
          error: "#FF2E00", // Vivid red-orange
          "--rounded-btn": "9999rem",
          ".tooltip": { "--tooltip-tail": "6px", "--tooltip-color": "oklch(var(--p))" },
          ".link": { textUnderlineOffset: "2px" },
          ".link:hover": { opacity: "80%" },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: { center: "0 0 12px -2px rgb(0 0 0 / 0.1)" },
      animation: { "pulse-fast": "pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
    },
  },
};
