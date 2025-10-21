import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";

import UnoCSS from "unocss/vite";
import animeSSR from "./plugins/animejs-ssr/index.ts";

export default defineConfig({
  plugins: [animeSSR(), UnoCSS({ mode: "global", inspector: true }), fresh()],
  build: {
    emptyOutDir: true,
  },
});
