import { createRef } from "preact";
import { Tech, TechCard } from "../../components/homepage/TechCard.tsx";
import { useEffect } from "preact/hooks";
import { techs } from "../../data/tech.ts";

import EmblaCarousel, { EmblaOptionsType } from "embla-carousel";
import type { HTMLAttributes } from 'preact'

type TechGroup = { title: string; items: Tech[] };

export interface TechCarouselProps extends HTMLAttributes<HTMLDivElement> {}

export function TechCarousel(props: TechCarouselProps) {
  const carouselRoot = createRef();
  const options: EmblaOptionsType = {
    loop: true,
    dragFree: true,
    align: "start",
  };

  const technologies = Object.values(techs) as TechGroup[];

  useEffect(() => {
    const slider = EmblaCarousel(carouselRoot.current, options);
    return () => slider.destroy();
  }, []);

  return (
    <div class={`tech-carousel overflow-hidden ${props.class}`} ref={carouselRoot}>
      <div class="tech-carousel-container grid grid-flow-col gap-x-20 grid-auto-cols-70% xl:grid-auto-cols-28% touch-pan-y touch-pinch-zoom cursor-grab active:cursor-grabbing select-none">
        {technologies.map((tech) => (
          <TechCard title={tech.title} items={tech.items} class="last:mr-12 xl:last:mr-23 min-w-76.252 xl:w-130 h-max px-8.5 py-4.9 border-color-[#232323] border-width-1 border-solid rounded-3" />
        ))}
      </div>
    </div>
  );
}
