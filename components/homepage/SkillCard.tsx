const skills = {
  typescript:{
    logo: "i-logos:typescript-icon",
    background: "bg-[#7d9ca5]",
    label: "TypeScript"
  },
  javascript:{
    logo: "i-logos:javascript",
    background: "",
    label: "JavaScript"
  },
  nuxt:{
    logo: "i-logos:nuxt-icon",
    background: "",
    label: "Nuxt"
  },
  deno:{
    logo: "i-logos:deno",
    background: "",
    label: "Deno"
  },
};

export interface SkillCardProps {
  id: keyof typeof skills
}

export function SkillCard(props: SkillCardProps) {
  return (
    <div
      class={`skill-card-base ${skills[props.id].background} hover:scale-102 transition duration-300 ease-in-out`}
    >
      <div class={`${skills[props.id].logo} text-5xl`} />
      <span class="font-bold mt-3">{skills[props.id].label}</span>
    </div>
  );
}
