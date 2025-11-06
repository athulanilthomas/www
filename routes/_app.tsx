import { define } from "../utils.ts";
import { asset } from "fresh/runtime";
import { getAsset } from "../composables/db.ts";

async function getSSRAssetLink() {
  const assetId = await getAsset();
  const assetFile = decodeURIComponent(assetId ?? "");

  if (assetFile) {
    return <link rel="stylesheet" href={asset(`/${assetFile}`)}></link>;
  }

  return "";
}

export default define.page(async function App({ Component, route }) {
  const canonicalURL = new URL(route ?? "", "https://athulanilthomas.in").href;

  return (
    <html lang="en" class="scrollbar-gutter-[stable]">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico"></link>
        <link rel="canonical" href={canonicalURL} />

        <link rel="preconnect" href="https://fonts.gstatic.com"></link>

        {await getSSRAssetLink()}
      </head>
      <body class="bg-[#0c0c0d]" f-client-nav>
        <Component />
      </body>
    </html>
  );
});
