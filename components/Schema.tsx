// deno-lint-ignore-file react-no-danger
import { Head } from "fresh/runtime";

import type { SEO } from "../utils.ts";

export interface SchemaProps {
  seo: SEO | Record<PropertyKey, never>
}

export function Schema({ seo }: SchemaProps) {
  const { title, description, openGraph, twitter, schema } = seo ?? {}
  const parsedSchema = JSON.stringify(schema)

  return (
    <Head>
      <title>{title ?? "Not Found"}</title>
      <meta name="description" content={description ?? "Page Not Found"}></meta>

      <meta property="og:title" content={openGraph?.title}/>
      <meta property="og:description" content={openGraph?.description}/>
      <meta property="og:url" content={openGraph?.url}/>
      <meta property="og:image" content={openGraph?.image}/>
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content={twitter?.card} />
      <meta name="twitter:title" content={twitter?.title} />
      <meta name="twitter:description" content={twitter.description}/>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: parsedSchema}} />
    </Head>
  );
}