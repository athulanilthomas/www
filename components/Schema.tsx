import { Head } from "fresh/runtime";

import type { SEO } from "../utils.ts";

export interface SchemaProps {
  seo: SEO | Record<PropertyKey, never>
}

export function Schema({ seo }: SchemaProps) {
  return (
    <Head>
      <title>{seo?.title ?? "Not Found"}</title>
    </Head>
  );
}