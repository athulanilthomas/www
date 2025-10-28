import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";

import UnoCSS from "unocss/vite";
import sitemap from "./plugins/sitemap/index.ts";
import animeSSR from "./plugins/animejs-ssr/index.ts";

const HOSTNAME = "https://athulanilthomas.in";

export default defineConfig({
  plugins: [
    animeSSR(),
    sitemap({ hostname: HOSTNAME }),
    UnoCSS({ mode: "global", inspector: true }),
    fresh(),
  ],
  build: {
    emptyOutDir: true,
  },
});
