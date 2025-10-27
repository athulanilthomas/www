import { Partial } from "fresh/runtime";
import { define } from "../../utils.ts";
import { Experience } from "../../components/routes/Experience.tsx";

import type { RouteConfig } from "fresh";

export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default define.page(function ExperiencePage(_ctx) {
  return (
    <Partial name="content">
      <Experience state={_ctx.state}/>
    </Partial>
  );
});
