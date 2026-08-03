import Image from "next/image";
import { SectionMosaic } from "@/components/brand";
import { Reveal } from "@/components/reveal";

export function SavingsSection() {
  return (
    <section className="container-wide pb-10 pt-7">
      <Reveal>
        <div>
          <div className="inline-flex items-start">
            <h2 className="text-2xl font-bold leading-none tracking-[-.02em] sm:text-[30px]">Saving up to 3% AER Interest</h2>
            <SectionMosaic />
          </div>
          <p className="mt-2 max-w-[425px] text-[15px] leading-[19.5px]">Life, meet savings. Frow your money with 3% AER interest on Instant Access Savings, paid every day</p>
        </div>
      </Reveal>
      <Reveal className="relative mt-7">
        <div className="orange-corner left-0 top-8" aria-hidden="true" />
        <div className="relative aspect-[4.35] min-h-[240px] overflow-hidden rounded-lg">
          <Image src="/images/cash-card.webp" alt="Cash savings at a checkout" fill className="object-cover object-[center_20%]" sizes="(max-width: 768px) 100vw, 1344px" />
          <span className="absolute bottom-6 right-6 size-7 bg-[#f09235] sm:size-9" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
}
