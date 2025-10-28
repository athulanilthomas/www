import { join, resolve } from "path";
import { SEPARATOR } from "path/constants";

export interface SiteMapEntry {
  loc: string;
  lastmod: string;
  change: "weekly" | "monthly" | "yearly";
  priority: number;
}

/**
 * A list of sitemap entries.
 */
export type Sitemap = SiteMapEntry[];

function processSitemapEntries(sitemap: Sitemap): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${
    sitemap
      .map(({ loc, lastmod, change, priority }) =>
        `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${change}</changefreq><priority>${priority}</priority></url>`
      )
      .join("\n")
  }
</urlset>`;
}

async function* stableRecurseFiles(directory: string): AsyncGenerator<string> {
  const itr = Deno.readDir(directory);
  const files: Deno.DirEntry[] = [];

  for await (const dirEntry of itr) {
    files.push(dirEntry);
  }

  for (const entry of files) {
    const path = join(directory, entry.name);
    yield path;
  }
}

export async function generateSitemap(hostname: string) {
  const sitemapMap = new Map<string, string>(); // Key: loc, Value: lastmod
  const pathMap: Record<string, number> = {}; // Key: path, Value: 0 | 1

  const sourceDir = resolve(Deno.cwd(), "routes");

  function processPathSegments(path: string) {
    if (!path.endsWith(".tsx")) return;

    if (path.includes("_")) {
      pathMap[path] = 0;
      return;
    }

    pathMap[path] = 1;
  }

  async function addDirectory(directory: string) {
    for await (const path of stableRecurseFiles(directory)) {
      processPathSegments(path);
    }
  }

  await addDirectory(sourceDir);

  for (const path in pathMap) {
    if (!(pathMap[path] === 1)) {
      continue;
    }

    const route = path.split(SEPARATOR).at(-1);
    const cleanedPath = `/${route}`.replace(/\.tsx$/, "").replace(
      /\index$/,
      "",
    );

    if (cleanedPath.replace("/", "").trim() === "") continue;

    const loc = `${hostname}${cleanedPath}`;
    const mod = new Date().toISOString();

    sitemapMap.set(loc, mod);
  }

  const sitemapEntries: Sitemap = Array.from(sitemapMap.entries()).map((
    [loc, lastmod],
  ) => ({
    loc,
    lastmod,
    change: "weekly",
    priority: 0.5,
  }));

  return processSitemapEntries(sitemapEntries);
}
