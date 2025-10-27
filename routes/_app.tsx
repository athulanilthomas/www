import { define } from "../utils.ts";
import { asset } from "fresh/runtime";

import { getAsset } from "../composables/db.ts";

export default define.page(async function App({ Component }) {
  async function getSSRAssetLink() {
    const assetId = await getAsset();
    const assetFile = decodeURIComponent(assetId ?? "");

    if (assetFile) {
      return <link rel="stylesheet" href={asset(`/${assetFile}`)}></link>;
    }

    return "";
  }

  return (
    <html lang="en" class="scrollbar-gutter-[stable]">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={asset("/favicons/favicon.ico")}></link>

        <link rel="preconnect" href="https://fonts.gstatic.com"></link>

        {await getSSRAssetLink()}
      </head>
      <body class="bg-[#0c0c0d]" f-client-nav>
        <Component />
      </body>
    </html>
  );
});
