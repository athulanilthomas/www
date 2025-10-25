import type { HTMLAttributes } from "preact";

const skills = {
  typescript: {
    logo: "i-logos:typescript-icon",
    background: "bg-[#7d9ca5]",
    label: "TypeScript",
  },
  javascript: {
    logo: "i-logos:javascript",
    background: "bg-[#c3c99e]",
    label: "JavaScript",
  },
  nuxt: {
    logo: "i-logos:nuxt-icon",
    background: "bg-[#6ae9ba]",
    label: "Nuxt",
  },
  deno: {
    logo: "i-logos:deno",
    background: "bg-[#70ffaf]",
    label: "Deno",
  },
};

export type Skills = keyof typeof skills;

export interface SkillCardProps extends HTMLAttributes {
  skill: Skills;
}

export function SkillCard({ skill, class: cls }: SkillCardProps) {
  return (
    <div
      class={`skill-card-base ${skills[skill].background} ${cls} group/card`}
    >
      <div
        class={`${
          skills[skill].logo
        } text-4xl group-hover/card:scale-104 transition duration-200 ease-in-out`}
      />
      <span class="font-bold mt-3">{skills[skill].label}</span>
    </div>
  );
}
