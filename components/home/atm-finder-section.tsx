import Image from "next/image";
import { Reveal } from "@/components/reveal";

type AtmLocation = readonly [place: string, count: string, accent: boolean];

const leftAtms: AtmLocation[] = [
  ["Middle East", "12+", true],
  ["Caribbean", "7+", false],
  ["Central America", "9+", false],
  ["Nordics", "6+", false],
  ["Baltics", "SOON", false],
  ["Pacific Islands", "SOON", false],
];

const rightAtms: AtmLocation[] = [
  ["Europe", "15+", false],
  ["Asia", "20+", false],
  ["Australia", "5+", false],
  ["Africa", "8+", true],
  ["South America", "SOON", false],
  ["Antarctica", "SOON", false],
];

function AtmGrid({ items }: { items: AtmLocation[] }) {
  return (
    <div className="grid grid-cols-2 overflow-hidden border border-[#dedede] bg-white">
      {items.map(([place, count, accent]) => (
        <div className={`atm-cell ${accent ? "accent" : ""}`} key={place}>
          <h3 className="text-sm font-semibold sm:text-lg sm:leading-6">{place}</h3>
          <strong className={count === "SOON" ? "soon" : "mt-2 block text-4xl font-bold leading-none tracking-[-.06em] text-[#f09235] sm:text-[54px]"}>{count}</strong>
          <span className={`mt-3 block text-[10px] sm:text-xs ${accent ? "text-white" : "text-[#333]"}`}>ATM Machines</span>
        </div>
      ))}
    </div>
  );
}

export function AtmFinderSection() {
  return (
    <section className="container-wide pb-[41px] pt-[76px]">
      <Reveal>
        <h2 className="text-center text-[30px] font-bold leading-none tracking-[-.02em]">Saving Cash for Safety.</h2>
        <p className="mt-3 text-center text-[15px] leading-5 text-[#444]">Find us 24 hours in your country to solve the cash crisis!</p>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_.9fr_1fr] lg:gap-12">
        <Reveal><AtmGrid items={leftAtms} /></Reveal>
        <Reveal className="relative mx-auto aspect-[.76] w-full max-w-[380px] overflow-hidden rounded-lg">
          <Image src="/images/atm.webp" alt="Customer using a 24-hour ATM" fill className="object-cover" sizes="380px" />
        </Reveal>
        <Reveal><AtmGrid items={rightAtms} /></Reveal>
      </div>
    </section>
  );
}
