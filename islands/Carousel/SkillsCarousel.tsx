import { createRef, HTMLAttributes } from "preact";
import { SkillCard, Skills } from "../../components/homepage/SkillCard.tsx";
import { useEffect } from "preact/hooks";

import EmblaCarousel, { EmblaOptionsType } from "embla-carousel";

export interface SkillsCarouselProps extends HTMLAttributes<HTMLDivElement> {
}

export function SkillsCarousel(props: SkillsCarouselProps) {
  const skills: Skills[] = ["typescript", "javascript", "nuxt", "deno"];
  const carouselRoot = createRef();
  const options: EmblaOptionsType = {
    loop: false,
    align: "start",
    dragFree: true,
  };

  useEffect(() => {
    const slider = EmblaCarousel(carouselRoot.current, options);
    return () => slider.destroy();
  }, []);

  return (
    <div
      class="skills-carousel overflow-hidden"
      className={props.class}
      ref={carouselRoot}
    >
      <div class="skills-carousel-container grid grid-flow-col grid-auto-cols-[65%] xl:grid-auto-cols-[35%] select-none [&_span]:font-bold [&_span]:text-gray-800 [&_span]:block [&_span]:mt-3.2 cursor-grab active:cursor-grabbing">
        {skills.map((skill) => (
          <SkillCard class="skills-carousel-slide" skill={skill} />
        ))}
      </div>
    </div>
  );
}
