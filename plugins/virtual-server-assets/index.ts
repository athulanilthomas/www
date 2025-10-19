// deno-lint-ignore no-unversioned-import
import { exists } from "jsr:@std/fs/exists";

import type { Plugin } from "vite";

export default function virtualServerAssets(): Plugin {
  const VIRTUAL_MODULE_ID = "virtual:server-styles";
  const RESOLVED_ID = `\0${VIRTUAL_MODULE_ID}`;
  const MANIFEST_PATH = [Deno.cwd(), "_fresh/server/.vite/manifest.json"].join(
    "/",
  );

  return {
    name: "vite:virtual-server-assets",

    resolveId(id) {
      return id === VIRTUAL_MODULE_ID ? RESOLVED_ID : undefined;
    },

    async load(id, options) {
      if (id !== RESOLVED_ID) return;

      const manifestExists = await exists(MANIFEST_PATH, { isFile: true });
      const isSSR = options?.ssr === true;

      if (!manifestExists || !isSSR) {
        return `export const serverStyleSheet = ""`;
      }

      const manifestContent = await Deno.readTextFile(MANIFEST_PATH);
      const manifest = JSON.parse(manifestContent);

      const cssFiles = manifest?.["fresh:server_entry"]?.css ?? [];
      const css = cssFiles.at(0);

      return `export const serverStyleSheet = ${
        css ? JSON.stringify("/" + css) : ""
      };`;
    },
  };
}
