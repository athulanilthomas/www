import { SkillCard, Skills } from "../../components/homepage/SkillCard.tsx";
import { IS_BROWSER } from "fresh/runtime";

export function SkillsCarousel() {
  const skills: Skills[] = ['typescript', 'javascript', 'nuxt', 'deno']

  return (
    <div class="skills-carousel">
      <div class="skills-carousel-container">
        {skills.map((skill) => (<SkillCard class="skills-carousel-slide" key={skill}/>))}
      </div>
    </div>
  );
}
