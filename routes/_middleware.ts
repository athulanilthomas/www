import { resolve } from "path";
import { exists } from "exists"

import type { Context } from "fresh";
import type { State } from "../utils.ts"

const MANIFEST_PATH = resolve(Deno.cwd(), "_fresh/server/.vite/manifest.json");

export async function handler<T>(ctx: Context<State>) {
    const manifestExists = await exists(MANIFEST_PATH, { isFile: true });

    if (!ctx.state?.ssrAsset?.checked && manifestExists) {
      const manifestContent = await Deno.readTextFile(MANIFEST_PATH);
      const manifest = JSON.parse(manifestContent);

      const cssFiles = manifest?.["fresh:server_entry"]?.css ?? [];
      const css = cssFiles.at(0);

      ctx.state.ssrAsset = {
        checked: !!css,
        file: `/${css}`
      }
    }

    return await ctx.next();
};