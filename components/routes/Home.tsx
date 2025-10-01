import { Head } from "fresh/runtime";
import { TechCarousel } from "../../islands/Carousel/TechCarousel.tsx";

export function Home() {
  return (
    <div>
      <Head>
        <title>Athul Anil Thomas</title>
      </Head>
      {/* <div class="mb-10">Homepage</div> */}
      <TechCarousel />
    </div>
  );
}
