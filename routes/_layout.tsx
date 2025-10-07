import { Partial } from "fresh/runtime";
import { Header } from "../components/landmarks/Header.tsx";
import { Footer } from "../components/landmarks/Footer.tsx";

import type { PageProps } from "fresh";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="layout">
      <div class="bg-background-primary text-white">
        <Header />
        <div class="max-w-full mx-auto">
          <Partial name="content">
            <Component />
          </Partial>
        </div>
        <Footer />
      </div>
    </div>
  );
}
