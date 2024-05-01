import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [nextui()],
} satisfies Config;

export default config;
