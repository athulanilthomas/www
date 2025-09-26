import type { HTMLAttributes } from 'preact'

const skills = {
  typescript:{
    logo: "i-logos:typescript-icon",
    background: "bg-[#7d9ca5]",
    label: "TypeScript"
  },
  javascript:{
    logo: "i-logos:javascript",
    background: "bg-[#c3c99e]",
    label: "JavaScript"
  },
  nuxt:{
    logo: "i-logos:nuxt-icon",
    background: "bg-[#6ae9ba]",
    label: "Nuxt"
  },
  deno:{
    logo: "i-logos:deno",
    background: "bg-[#70ffaf]",
    label: "Deno"
  },
};

export type Skills = keyof typeof skills

export interface SkillCardProps extends HTMLAttributes {
  key: Skills
}

export function SkillCard({ key, class: cls }: SkillCardProps) {
  return (
    <div
      class={`skill-card-base ${skills[key].background} hover:scale-102 transition duration-300 ease-in-out`}
    >
      <div class={`${skills[key].logo} text-4xl`} />
      <span class="font-bold mt-3">{skills[key].label}</span>
    </div>
  );
}
