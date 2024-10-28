import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        radial:
          "radial-gradient(circle, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0.1) 100%);",
        "header-img": "url('../public/Image.png')",
        "mobile-img": "url('../public/mobile-img.png')",
      },
      screens: {
        xl: "1441px",
        lg: "1025px",
      },
    },
  },
  plugins: [],
};
export default config;
