import { AboutReadingText } from "@/components/about-reading-text";
import { SectionMosaic } from "@/components/brand";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section id="about" className="container-wide pb-[66px] pt-10">
      <Reveal className="reference-sans mx-auto max-w-[588px]">
        <div className="inline-flex items-start">
          <h2 className="text-2xl font-bold leading-8 tracking-[-.04em]">About</h2>
          <SectionMosaic compact />
        </div>
        <AboutReadingText />
      </Reveal>
    </section>
  );
}
