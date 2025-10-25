import { schema } from "../data/schema.ts";

import type { Context } from "fresh";
import type { SEO, State } from "../utils.ts";
export type recognizedPaths = keyof typeof schema;

type SEOResponse = { data: { seo: SEO | {} } }

const isRecognisedPath = (path: string): path is recognizedPaths => {
  const paths = Object.keys(schema);
  return paths.includes(path);
};

export function useSEO(ctx: Context<State>): SEOResponse {
  const url = ctx.url;
  const path = url.pathname;
  const response = { seo: isRecognisedPath(path) ? schema[path] : {}}

  return { data: response };
}
