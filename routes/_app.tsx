import { define } from "../utils.ts";
import { asset } from "fresh/runtime";

import { getAsset } from "../composables/db.ts";

export default define.page(function App({ Component }) {
  async function getSSRAssetLink() {
    const assetId = await getAsset();
    const assetFile = decodeURIComponent(assetId ?? "");

    if (assetFile) {
      return <link rel="preload" href={asset(assetFile)} as="style"></link>;
    }

    return "";
  }

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {getSSRAssetLink()}
      </head>
      <body class="bg-[#0c0c0d]" f-client-nav>
        <Component />
      </body>
    </html>
  );
});
