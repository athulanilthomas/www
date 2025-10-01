import { Partial } from "fresh/runtime";
import { define } from "../../utils.ts";
import { Projects } from "../../components/routes/Projects.tsx";

import type { RouteConfig } from "fresh";

export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default define.page(function ProjectsPage(_ctx) {
  return (
    <Partial name="content">
      <Projects />
    </Partial>
  );
});
