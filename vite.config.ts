import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";

import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [fresh(), UnoCSS()],
});
