// deno-lint-ignore-file react-rules-of-hooks
export async function useDatabase() {
  const db = await Deno.openKv();
  return db;
}

export async function updateAsset(input: string) {
  const db = await useDatabase();
  await db.set(["asset_id"], input);
}

export async function getAsset(): Promise<string> {
  const db = await useDatabase();
  return (await db.get(["asset_id"])).value as string ?? "";
}
