import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|code|date-picker|divider|image|input|kbd|link|modal|navbar|select|skeleton|snippet|spacer|toggle|user|ripple|spinner|calendar|date-input|popover|listbox|scroll-shadow|avatar).js"
  ],

  theme: {
    extend: {},
  },
  plugins: [nextui(), typography],
} satisfies Config;

export default config;
