const keyToIcon = {
  "vue": "i-logos:javascript",
  "nuxt": "i-logos:nuxt-icon",
  "fresh": "i-logos:fresh",
  "vite": "i-logos:vitejs",
  "webpack": "i-logos:webpack",
  "turborepo": "i-logos:turborepo-icon",
  "node": "i-logos:nodejs-icon-alt",
  "deno": "i-logos:deno",
  "javascript": "i-logos:javascript",
  "typescript": "i-logos:typescript-icon",
  "python": "i-logos:python",
  "github": "i-logos:github-actions",
  "docker": "i-logos:docker-icon",
  "nginx": "i-logos:nginx",
};

export type Tech = { label: string; key: keyof typeof keyToIcon };

export interface TechCardProps {
  title: string;
  items: Tech[];
}

// flex items-center-safe justify-start gap-3.5

export function TechCard(props: TechCardProps) {
  const skills = props.items.map((skill) => {
    return ({ key: skill.key, label: skill.label, icon: keyToIcon[skill.key] });
  });

  return (
    <div class="h-max px-5 py-9 border-[#232323] border-1 border-solid rounded-xl">
      <h3 class="color-white mb-5">{props.title}</h3>
      <div class="grid grid-rows-3 grid-flow-col gap-x-10 gap-y-3">
        {skills.map((tech) => (
          <span
            key={tech.key}
            class="flex items-center-safe justify-start gap-3.5"
          >
            <div class="rounded-100% size-8.5 bg-[#211F23] flex items-center justify-center">
              <div class={tech.icon}></div>
            </div>
            <span class="text-sm">{tech.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
