const db = await Deno.openKv("db/kv.db");

export async function updateAsset(input: string) {
  await db.set(["asset_id"], input);
}

export async function getAsset(): Promise<string> {
  return (await db.get(["asset_id"])).value as string ?? "";
}
