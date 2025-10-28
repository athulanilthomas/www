import { resolve } from "path";
import { generateSitemap } from "./utils.ts";

import type { Plugin } from "vite";

export interface SitemapPluginOptions {
  hostname: string;
  sitemapPath?: string;
}

export default function sitemap(options: SitemapPluginOptions): Plugin {
  return {
    name: "vite-plugin-fresh-sitemap",
    async buildStart() {
      const { hostname, sitemapPath = "static/sitemap.xml" } = options;

      const sitemapXML = await generateSitemap(hostname);
      const resolvedPath = resolve(Deno.cwd(), sitemapPath);

      await Deno.writeTextFile(resolvedPath, sitemapXML, { create: true });
    },
  };
}
