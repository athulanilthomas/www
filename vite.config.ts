import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import { default as animeSSR } from "./plugins/animejs-ssr/index.ts";
import { pushAssetId } from "./plugins/push-asset-id/index.ts";

import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    animeSSR(),
    UnoCSS({ mode: "global", inspector: true }),
    fresh(),
    pushAssetId(),
  ],
  build: {
    emptyOutDir: true,
  },
});
