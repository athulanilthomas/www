const keyToIcon = {
  "vue": "i-logos:javascript",
  "nuxt": "i-logos:javascript",
  "fresh": "i-logos:javascript",
  "vite": "i-logos:javascript",
  "webpack": "i-logos:javascript",
  "turborepo": "i-logos:javascript",
  "node": "i-logos:javascript",
  "deno": "i-logos:javascript",
  "javascript": "i-logos:javascript",
  "typescript": "i-logos:javascript",
  "python": "i-logos:javascript",
  "github": "i-logos:javascript",
  "docker": "i-logos:javascript",
  "nginx": "i-logos:javascript",
};

export type Tech = { label: string; key: keyof typeof keyToIcon };

export interface TechCardProps {
  title: string;
  items: Tech[];
}

export function TechCard(props: TechCardProps) {
  const skills = props.items.map((skill) => {
    return ({ key: skill.key, label: skill.label, icon: keyToIcon[skill.key] });
  });

  return (
    <section>
      <div>
        <h3>{props.title}</h3>
        {skills.map((tech) => (
          <span key={tech.key}>
            <div class=""></div>
            {tech.label}
          </span>
        ))}
      </div>
    </section>
  );
}
