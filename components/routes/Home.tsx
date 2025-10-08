import { Head } from "fresh/runtime";
import { Avatar } from "../../islands/Homepage/Avatar.tsx";
import { SkillsCarousel } from "../../islands/Carousel/SkillsCarousel.tsx";

export function Home() {
  return (
    <div>
      <Head>
        <title>Athul Anil Thomas</title>
      </Head>
      <main class="min-h-100%">
        <section class="text-align-center md:text-align-initial flex flex-col md:flex-row-reverse items-center justify-center md:justify-between md:mt-24 2xl:mt-40 md:py-0 md:px-26 2xl:py-0 2xl:px-50">
          <Avatar class="w-40 md:w-100 sm:pt-25" />
          <div class="m-1.05 md:m-unset md:w-120">
            <h1 class="text-white text-4xl md:text-19.52 leading-normal mt-10 ">
              Hi, I’m Athul
            </h1>
            <p class="mt-5.5 text-gray-500 line-height-normal leading-7.5 md:leading-8 [&_span]:text-white [&_span]:font-bold">
              During my <span>6 years</span> as{" "}
              <span>Front-End Software Engineer</span>, My role has extended
              beyond coding to effective communication with various departments,
              to define new features and spearheading the development of new
              apps.
            </p>
            <div class="mt-14 flex flex-col md:flex-row justify-center md:justify-start items-center gap-3.5 md:gap-7 [&>a:hover]:brightness-[0.8]">
              <a
                class="w-46 h-11.5 bg-white text-gray-900 text-align-center px-10 py-3 rounded-25 font-bold"
                href=""
              >
                Download CV
              </a>
              <a class="text-primary" href="/experience">See experiences</a>
            </div>
          </div>
        </section>

        <section class="mt-61 md:flex items-center gap-32 md:ps-26 overflow-hidden xl:gap-8 [&_p]:text-gray-500 [&_p]:w-[245px] [&_p]:mx-auto [&_p]:my-0 md:[&_p]:m-unset [&_strong]:block [&_strong]:font-size-[5rem] [&_strong]:text-white [&_strong]:m-[-0.6rem 0]">
          <div class="w-100% md:w-16% text-align-center md:text-align-initial relative before:content-[''] before:absolute before:z-9999">
            <p>6 years of</p>
            <strong>XP</strong>
            <p>working with JS universe</p>
          </div>
          <div class="overflow-hidden">
            <SkillsCarousel class="w-100% mx-3.438rem my-2.125rem xl:m-unset" />
          </div>
        </section>

        <section>
          <div class="text-align-center my-52.5 mx-0 text-10 md:text-22.5 font-semibold [&>h2:not(:last-child)]:mb-[25px]">
            <h2 class="text-[#66EDB8]">TypeScript</h2>
            <h2 class="text-[#26E097]">Deno</h2>
            <h2 class="text-[#00AD61]">Vue JS</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
