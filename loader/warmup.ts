import { resolve } from "path";
import { exists } from "exists";
import { updateAsset } from "../composables/db.ts";

const MANIFEST_PATH = resolve(Deno.cwd(), "_fresh/server/.vite/manifest.json");

export default async function warmup() {
  const manifestExists = await exists(MANIFEST_PATH, { isFile: true });

  if (manifestExists) {
    const manifestContent = await Deno.readTextFile(MANIFEST_PATH);
    const manifest = JSON.parse(manifestContent);

    const cssFiles = manifest?.["fresh:server_entry"]?.css ?? [];
    const css = cssFiles.at(0);

    await updateAsset(css);

    console.log("\nWarmup Completed: Pushed Asset ID Successfully ✅\n");
  }
}
