import { createRef } from "preact";
import { TechCard, Tech } from "../../components/homepage/TechCard.tsx";
import { useEffect } from "preact/hooks";
import { techs } from "../../data/tech.ts"

import EmblaCarousel, { EmblaOptionsType } from "embla-carousel";

type TechGroup = { title: string; items: Tech[] };

export function TechCarousel() {
  const carouselRoot = createRef();
  const options: EmblaOptionsType = { loop: true, dragFree: true, align: 'start' };

  const technologies = Object.values(techs) as TechGroup[]

  useEffect(() => {
    const slider = EmblaCarousel(carouselRoot.current, options);
    return () => slider.destroy();
  }, []);

  return (
    <div class="tech-carousel overflow-hidden" ref={carouselRoot}>
      <div class="tech-carousel-container grid grid-flow-col gap-x-20 lg:grid-auto-cols-30% grid-auto-cols-30% touch-pan-y touch-pinch-zoom">
        {technologies.map((tech) => (
          <TechCard title={tech.title} items={tech.items} class="last:mr-20"/>
        ))}
      </div>
    </div>
  );
}
