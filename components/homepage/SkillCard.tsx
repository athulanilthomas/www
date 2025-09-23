import type { ComponentChildren } from "preact";

export interface SkillCardProps {
  id?: string;
  icon: string;
  onClick?: () => void;
  children?: ComponentChildren;
}

export function SkillCard(props: SkillCardProps) {
  return (
    <li class={`skill__card`} {...props}>
      <img src={props.icon} alt="Icon" />
      <span>Skill</span>
    </li>
  );
}
