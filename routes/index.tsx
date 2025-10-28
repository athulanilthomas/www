import { define } from "../utils.ts";
import { Home } from "../components/routes/Home.tsx";

export default define.page(function HomePage(_ctx) {
  return <Home state={_ctx.state} />;
});
