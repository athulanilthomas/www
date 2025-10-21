/// <reference lib="deno.unstable" />

import { App, staticFiles } from "fresh";
import { define, type State } from "./utils.ts";
import "virtual:uno.css";

export const app = new App<State>();

app.use(staticFiles());

const loggerMiddleware = define.middleware((ctx) => {
  console.log(
    `%c${ctx.req.method} %c${ctx.req.url}`,
    "color: blue; font-style: bold;",
    "color: white; font-style: italic;",
  );
  return ctx.next();
});

app.use(loggerMiddleware);

// Include file-system based routes here
app.fsRoutes();
