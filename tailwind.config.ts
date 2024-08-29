import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./assets/images/homapage/hero-bg.svg')",
        "footer-bg": "url('./assets/images/homapage/footer-bg.svg')",
        "green-blur-bg": "url('./assets/images/homapage/footer-bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
