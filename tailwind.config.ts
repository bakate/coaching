import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|code|date-picker|divider|image|input|kbd|link|modal|navbar|skeleton|snippet|spacer|toggle|user|ripple|spinner|calendar|date-input|popover|avatar).js"
  ],

  theme: {
    extend: {},
  },
  plugins: [nextui()],
} satisfies Config;

export default config;
