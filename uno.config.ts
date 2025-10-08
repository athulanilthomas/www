import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind4,
} from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  presets: [
    presetAttributify({/* preset options */}),
    presetWind4({
      preflights: {
        reset: true,
        theme: "on-demand",
      },
    }),
    presetScrollbar(),
    presetIcons({ scale: 1.1 }),
    presetWebFonts({
      provider: "google",
      fonts: { sans: "Raleway" },
    }),
  ],
  rules: [
    [/^clip-path-\[(.+)\]$/, ([, d]) => ({ "clip-path": d })],
  ],
  shortcuts: {
    "header-base":
      "flex items-center overflow-hidden overflow-x-visible position-fixed bg-[rgba(33,31,35,0.35)] backdrop-blur-[20px] rounded-[6.25rem] px-[3.25rem] py-[1.375rem] z-9999",
    "skill-card-base":
      "w-[13.75rem] lg:w-[25.625rem] h-[11.875rem] lg:h-[17.5rem] rounded-[3.75rem] flex flex-col justify-center items-start py-0 px-[1.875rem]",
  },
  extendTheme: (theme) => {
    return {
      ...theme,
      colors: {
        ...(theme?.colors ?? {}),
        primary: "#00DC82",
        secondary: "#FFFFFF",
        territory: "#020420",
        brand: {
          primary: "#00DC82",
          secondary: "#FFFFFF",
          territory: "#020420",
        },
      },
    };
  },
  safelist: [
    "[&_span]:text-white",
    "[&_span]:font-bold",
    "[&>a:hover]:brightness-[0.8]",
    "[&_p]:text-gray-400",
    "[&_p]:w-[245px]",
    "[&_p]:mx-auto",
    "[&_p]:my-0",
    "md:[&_p]:m-unset",
    "[&_strong]:block",
    "[&_strong]:font-size-[5rem]",
    "[&_strong]:text-white",
    "[&_strong]:m-[-0.6rem 0]",
    "before:content-['']",
    "before:absolute",
    "before:z-9999",
    "[&>h2:not(:last-child)]:mb-[25px]",
  ],
});
