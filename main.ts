import { App, staticFiles } from "fresh";
import { define, type State } from "./utils.ts";
import "virtual:uno.css";

export const app = new App<State>();

app.use(staticFiles());

const loggerMiddleware = define.middleware((ctx) => {
  console.log(`${ctx.req.method} ${ctx.req.url}`);
  return ctx.next();
});
app.use(loggerMiddleware);

// Include file-system based routes here
app.fsRoutes();
