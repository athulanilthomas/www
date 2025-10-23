/// <reference lib="deno.unstable" />

import { App, staticFiles } from "fresh";
import { type State } from "./utils.ts";

import "./assets/styles.css"
import "virtual:uno.css";

export const app = new App<State>();

app.use(staticFiles());

// Include file-system based routes here
app.fsRoutes();
