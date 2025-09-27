import { createRef } from "preact";
import { SkillCard, Skills } from "../../components/homepage/SkillCard.tsx";
import { useEffect } from "preact/hooks";
import EmblaCarousel from "embla-carousel";

export function SkillsCarousel() {
  const skills: Skills[] = ["typescript", "javascript", "nuxt", "deno"];
  const options = { loop: false };
  const carouselRoot = createRef();

  useEffect(() => {
    const newEmblaApi = EmblaCarousel(carouselRoot.current, options);
    return () => newEmblaApi.destroy();
  });

  return (
    <div class="skills-carousel overflow-hidden" ref={carouselRoot}>
      <div class="skills-carousel-container grid grid-flow-col grid-auto-cols-[30%]">
        {skills.map((skill) => (
          <SkillCard class="skills-carousel-slide" skill={skill} />
        ))}
      </div>
    </div>
  );
}
