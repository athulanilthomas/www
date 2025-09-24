import type { ComponentChildren } from "preact";

export interface SkillCardProps {
  id?: string;
  onClick?: () => void;
  children?: ComponentChildren;
}

export function SkillCard(props: SkillCardProps) {
  return (
    <div class={`skill-card-base bg-[#C3C99E] hover:scale-102 transition duration-300 ease-in-out`} {...props}></div>
  );
}
