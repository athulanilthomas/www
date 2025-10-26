import { Schema } from "../Schema.tsx";
import { experience } from "../../data/experience.ts";

import type { State } from "../../utils.ts";

export function Experience({ state }: { state: State }) {
  return (
    <main>
      <Schema {...state}/>

      <header class="flex flex-col items-center gap-9.5 mt-8rem xl:mt-12rem">
        <p class="text-center text-gray-300 max-w-[340px] xl:max-w-[640px] xl:text-[1.5rem] my-0 mx-auto line-height-[2rem] xl:line-height-[3rem] font-light">
          {"< "}
          Get to know me better and explore my journey as a{" "}
          <strong class="font-bold text-white">Software Engineer</strong>
          {" />"}
        </p>
        <a
          class="w-46 h-11.5 text-4 bg-white text-gray-900 text-center py-3 px-10 rounded-25 font-bold hover:filter-brightness-[0.8]"
          href="#"
          download
        >
          Download CV
        </a>
      </header>

      <ul class="xl:max-w-[1120px] 2xl:max-w-[1520px] mt-25 mx-8.5 mb-16 xl:my-25 xl:mx-auto [&>li:not(:last-child)]:mb-8 xl:[&>li:not(:last-child)]:mb-22.5 ">
        {experience.map((exp, idx) => (
          <li
            key={`${idx}_${exp.period}`}
            class="w-100% flex flex-col xl:flex-row gap-15.5 xl:gap-unset justify-start bg-[rgba(33,31,35,0.35)] rounded-10 py-17.5 px-9.5"
          >
            <div className="experience-details xl:w-40%">
              <h2 class="text-white font-semibold font-size-4 xl:font-size-7">
                {exp.role}
              </h2>
              <span class="my-3 mx-0 text-primary block font-size-5.5">
                {exp.role_type}
              </span>
              <time class="text-gray-400">{exp.period}</time>
              <address class="text-gray-400 not-italic">{exp.place}</address>
            </div>

            <div className="experience-activity xl:w-60% [&_p]:mt-4 [&_p]:leading-7.5 [&_p]:text-gray-500">
              <h3 class="font-size-5.5 font-semibold text-primary block font-size-5.5">
                {exp.company}
              </h3>
              {exp.responsibilities.map((resp, idx) => (
                <p key={idx}>• {resp.trim()}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
