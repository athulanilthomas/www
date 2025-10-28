import { define } from "../utils.ts";
import { Experience } from "../components/routes/Experience.tsx";

export default define.page(function ExperiencePage(_ctx) {
  return <Experience state={_ctx.state} />;
});
