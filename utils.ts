import { createDefine } from "fresh";

export interface SEO {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    image: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
  };
  schema: string;
}

// This specifies the type of "ctx.state" which is used to share
// data among middlewares, layouts and routes.
export interface State {
  seo: SEO | Record<PropertyKey, never>;
}

export const define = createDefine<State>();
