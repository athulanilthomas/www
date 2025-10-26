import { Schema } from "../Schema.tsx"
import { Avatar } from "../../islands/Homepage/Avatar.tsx";
import { SkillsCarousel } from "../../islands/Carousel/SkillsCarousel.tsx";
import { TechCarousel } from "../../islands/Carousel/TechCarousel.tsx";

import type { State } from "../../utils.ts";

export function Home({ state }: { state: State }) {
  return (
    <div>
      <Schema {...state}/>

      <main class="min-h-100%">
        <section class="text-align-center xl:text-align-initial flex flex-col xl:flex-row-reverse items-center justify-center xl:justify-between xl:mt-24 2xl:mt-40 xl:py-0 xl:px-26 2xl:py-0 2xl:px-50">
          <Avatar class="sm:pt-10 w-auto xl:w-30rem xl:h-auto inline-block" />
          <div class="my-0 mx-10.5 xl:m-unset xl:w-120">
            <h1 class="text-white text-4xl xl:text-19.52 leading-normal mt-10 ">
              Hi, I’m Athul
            </h1>
            <p class="mt-5.5 text-gray-500 line-height-[1.875rem] leading-7.5 xl:leading-8 [&_span]:text-white [&_span]:font-bold">
              During my <span>6 years</span> as{" "}
              <span>Front-End Software Engineer</span>, My role has extended
              beyond coding to effective communication with various departments,
              to define new features and spearheading the development of new
              apps.
            </p>
            <div class="mt-14 flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-3.5 xl:gap-7 [&>a:hover]:brightness-[0.8]">
              <a
                class="w-46 h-11.5 text-4 bg-white text-gray-900 text-align-center px-10 py-3 rounded-25 font-bold"
                href="#"
              >
                Download CV
              </a>
              <a class="text-primary" href="/experience">See experiences</a>
            </div>
          </div>
        </section>

        <section class="mt-61 xl:flex items-center gap-32 xl:ps-26 overflow-hidden xl:gap-8 [&_p]:text-gray-500 [&_p]:w-[245px] [&_p]:mx-auto [&_p]:my-0 xl:[&_p]:m-unset [&_strong]:block [&_strong]:font-size-[5rem] [&_strong]:text-white [&_strong]:m-[-0.6rem 0]">
          <div class="w-100% xl:w-16% text-align-center xl:text-align-initial relative before:content-[''] before:absolute before:z-9999">
            <p>6 years of</p>
            <strong>XP</strong>
            <p>working with JS universe</p>
          </div>
          <div class="overflow-hidden">
            <SkillsCarousel class="w-100% mx-3.438rem my-2.125rem xl:m-unset" />
          </div>
        </section>

        <section>
          <div class="text-align-center my-52.5 mx-0 text-10 xl:text-22.5 font-semibold [&>h2:not(:last-child)]:mb-[25px]">
            <h2 class="text-[#66EDB8]">TypeScript</h2>
            <h2 class="text-[#26E097]">Deno</h2>
            <h2 class="text-[#00AD61]">Vue JS</h2>
          </div>
        </section>

        <section class="mb-27.5">
          <h2 class="text-size-[2rem] xl:text-size-6xl text-gray-300 text-align-center max-w-[320px] xl:max-w-[650px] mx-auto my-0">
            The technologies I’ve been using...
          </h2>
          <TechCarousel class="mt-15.5" />
        </section>
      </main>
    </div>
  );
}
