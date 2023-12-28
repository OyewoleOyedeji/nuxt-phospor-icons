import type { Config } from "tailwindcss";
import { tailwindcssPaletteGenerator } from "@bobthered/tailwindcss-palette-generator";

export default {
  content: [],
  theme: {
    extend: {
      colors: tailwindcssPaletteGenerator({
        colors: ["#b5ac83", "#f6f9f8", "#00DC82", "#3c402b", "#0a100d"],
        names: ["accent", "background", "primary", "secondary", "copy"],
      }),
      fontFamily: {
        mono: ["Courier Prime", "monospace"],
        sans: ["Open Sans", "sans-serif"],
        serif: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;