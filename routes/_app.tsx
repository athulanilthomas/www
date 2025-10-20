import { define } from "../utils.ts";
import { asset } from "fresh/runtime";

export default define.page(function App({ Component, state }) {
  function getSSRAssetLink() {
    const assetFile = decodeURIComponent(state.ssrAsset?.file ?? '')

    return assetFile ? <link rel="stylesheet" href={asset(assetFile)}></link> : "";
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
