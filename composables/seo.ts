import { schema } from "../data/schema.ts";

import type { Context } from "fresh";
import type { SEO, State } from "../utils.ts";

type SEOResponse = { data: { seo: SEO | Record<PropertyKey, never> } };
type recognizedPath = keyof typeof schema;

export const isRecognisedPath = (path: string): path is recognizedPath => {
  const paths = Object.keys(schema);
  return paths.includes(path);
};

export function useSEO(ctx: Context<State>): SEOResponse {
  const url = ctx.url;
  const path = url.pathname.replace("/partials", "");

  const response = { seo: isRecognisedPath(path) ? schema[path] : {} };

  return { data: response };
}
