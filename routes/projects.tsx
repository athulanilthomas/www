import { define } from "../utils.ts";
import { Projects } from "../components/routes/Projects.tsx";

export default define.page(function ProjectsPage(_ctx) {
  return <Projects state={_ctx.state} />;
});
