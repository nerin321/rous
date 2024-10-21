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
          "radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)",
        "header-img": "url('../public/Image.png')",
      },
    },
  },
  plugins: [],
};
export default config;
