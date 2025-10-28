import { define } from "../utils.ts";
import { useSEO } from "../composables/seo.ts";

export default define.middleware(async (ctx) => {
  const seo = useSEO(ctx);
  ctx.state.seo = seo.data.seo;

  return await ctx.next();
});
