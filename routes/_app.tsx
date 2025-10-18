import { define } from "../utils.ts";
import { asset } from "fresh/runtime";
import { serverStyleSheet } from "virtual:server-styles";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={asset(serverStyleSheet)}></link>
      </head>
      <body class="bg-[#0c0c0d]" f-client-nav>
        <Component />
      </body>
    </html>
  );
});
