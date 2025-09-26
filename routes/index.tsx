import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

import { Footer } from "../components/landmarks/Footer.tsx";
import { Header } from "../components/landmarks/Header.tsx";
import { SkillsCarousel } from "../islands/Carousel/SkillsCarousel.tsx"

export default define.page(function Home(_ctx) {
  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <Head>
        <title>Fresh counter</title>
      </Head>
      <Header />
      <div class="max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-100vh">
        <SkillsCarousel />
      </div>
      <Footer />
    </div>
  );
});
