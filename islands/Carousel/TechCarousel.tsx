import { createRef } from "preact";
import { TechCard, Tech } from "../../components/homepage/TechCard.tsx";
import { useEffect } from "preact/hooks";
import { techs } from "../../data/tech.ts"

import EmblaCarousel, { EmblaOptionsType } from "embla-carousel";

type TechGroup = { title: string; items: Tech[] };

export function TechCarousel() {
  const carouselRoot = createRef();
  const options: EmblaOptionsType = { loop: true, active: true };

  const technologies = Object.values(techs) as TechGroup[]

  useEffect(() => {
    const slider = EmblaCarousel(carouselRoot.current, options);
    return () => slider.destroy();
  }, []);

  return (
    <div class="skills-carousel overflow-hidden" ref={carouselRoot}>
      <div class="skills-carousel-container grid grid-flow-col grid-auto-cols-[30%]">
        {technologies.map((tech) => (
          <TechCard title={tech.title} items={tech.items}/>
        ))}
      </div>
    </div>
  );
}
