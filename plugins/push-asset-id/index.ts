import { resolve } from "path";
import { exists } from "exists";

import type { Plugin } from "vite";

const MANIFEST_PATH = resolve(Deno.cwd(), "_fresh/server/.vite/manifest.json");

export function pushAssetId(): Plugin {
  return {
    name: "vite-plugin-push-asset-id",
    async closeBundle() {
      const manifestExists = await exists(MANIFEST_PATH, { isFile: true });
      const db = await Deno.openKv?.();

      if (manifestExists && db) {
        const manifestContent = await Deno.readTextFile(MANIFEST_PATH);
        const manifest = JSON.parse(manifestContent);

        const cssFiles = manifest?.["fresh:server_entry"]?.css ?? [];
        const css = cssFiles.at(0);

        console.log('\n\n\n', 'came here with assetId: ', css)

        await db.set(["asset_id"], css);
      }
    },
  };
}
