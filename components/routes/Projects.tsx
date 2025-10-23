import { Head } from "fresh/runtime";
import { projects } from "../../data/projects.ts";

export function Projects() {
  return (
    <main>
      <Head>
        <title>Projects - Athul Anil Thomas</title>
      </Head>
      <ul class="px-8.5 py-0 xl:p-unset xl:max-w-1120px 2xl:max-w-1520px mt-8rem mx-0 mb-5rem xl:mt-12rem xl:mx-auto xl:mb-8.75rem 2xl:mt-15.625rem 2xl:mx-auto 2xl:mb-8.75rem">
        {projects.map((project) => (
          <li class="flex flex-col xl:flex-row gap-7 xl:gap-unset text-center xl:text-left xl:items-center xl:justify-between justify-center p-2.125rem border-gray-700 border-1px border-solid rounded-10 not-last:mb-2rem">
            <div class="flex flex-col gap-2.5">
              <h2 class="text-white font-semibold xl:font-size-7">
                {project.title}
              </h2>
              <p class="text-primary">
                {project.description}
              </p>
              <p class="text-gray-500">Type: {project.type}</p>
            </div>
            <div class="flex justify-center">
              <a
                target="_blank"
                class="font-size-7 xl:font-size-10 i-grommet-icons:github text-primary hover:brightness-[0.8]"
                href={project.link}
              />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
