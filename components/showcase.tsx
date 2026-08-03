"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useInfiniteCarousel } from "@/components/use-infinite-carousel";

const slides = [
  {
    image: "/images/cash-card.webp",
    title: "Banking for the next generation.",
    body: "Our platform provides state-of-the-art features tailored around your spending behavior, facilitating informed financial choices and straightforward goal completion.",
    type: "exchange",
  },
  {
    image: "/images/transfer.webp",
    title: "Simple banking for a complex world.",
    body: "Our platform provides state-of-the-art features tailored around your spending behavior, facilitating informed financial choices and straightforward goal completion.",
    type: "transfer",
  },
  {
    image: "/images/analytics.webp",
    title: "Painless banking for a connected world.",
    body: "Our platform provides state-of-the-art features tailored around your spending behavior, facilitating informed financial choices and straightforward goal completion.",
    type: "chart",
  },
  {
    image: "/images/calculator.webp",
    title: "Painless banking for a connected world.",
    body: "Our platform provides state-of-the-art features tailored around your spending behavior, facilitating informed financial choices and straightforward goal completion.",
    type: "none",
  },
];

const loopedSlides = Array.from({ length: 3 }, (_, copy) =>
  slides.map((slide) => ({ ...slide, copy })),
).flat();

function Overlay({ type }: { type: string }) {
  if (type === "transfer") {
    return (
      <div className="currency-widget absolute left-1/2 top-4 w-[68%] -translate-x-1/2 overflow-hidden text-[#222]">
        <div className="relative grid grid-cols-2 text-[10px]">
          <span className="absolute bottom-0 left-1/2 top-0 border-l border-[#dedede]" aria-hidden="true" />
          <div className="p-3 pr-4">
            <span className="text-[#777]">Sender</span>
            <Image src="/images/logo-neobank.png" alt="Neobank logo" width={24} height={24} className="mt-1 h-5 w-auto" />
            <b className="mt-1 block text-sm">Neobank</b>
            <span>Ngozi Adanna</span>
            <span className="mt-2 block text-[#777]">Funds Transferred</span>
            <strong className="mt-1 block text-lg text-[#d66a47]">$ 9,500</strong>
          </div>
          <div className="p-3 pl-4">
            <span className="text-[#777]">Recipient</span>
            <Image src="/images/logo-bank-america.png" alt="Bank of America logo" width={24} height={23} className="mt-1 h-5 w-auto" />
            <b className="mt-1 block whitespace-nowrap text-sm">Bank of America</b>
            <span>Babatunde Aliyu</span>
            <span className="mt-2 block text-[#777]">Funds Received</span>
            <strong className="mt-1 block text-lg text-[#d66a47]">$ 9,500</strong>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-[#dedede] px-3 py-2 text-[9px] text-[#777]"><span>Service Charge</span><span>$ 0,0&nbsp;&nbsp; $ 0,3 (8%)</span></div>
      </div>
    );
  }
  if (type === "chart") {
    return (
      <div className="currency-widget absolute bottom-4 left-4 w-[68%] p-3 text-[#222]">
        <div className="flex items-start justify-between"><div><b className="block text-sm">USD to EUR</b><span className="text-[9px] text-[#777]">US Dollar to Euro</span></div><div className="text-right"><strong className="block text-sm text-[#f09235]">$ 1,200</strong><span className="text-[9px] text-[#777]">+ 3.8%</span></div></div>
        <div className="mini-line mt-2" />
      </div>
    );
  }
  if (type === "exchange") {
    return (
      <div className="currency-widget absolute -left-5 bottom-4 w-[76%] overflow-hidden text-[#222]">
        <div className="p-3">
          <b className="text-xs">Convert Currencies</b>
          <div className="mt-2 grid grid-cols-2 gap-3 text-[10px]"><span><b>USD</b> British Pound</span><span><b>EUR</b> South Korean Won</span></div>
          <div className="mt-2 grid grid-cols-2 text-lg font-semibold text-[#f09235]"><span>1,500</span><span className="text-right">€ 0,0</span></div>
        </div>
        <div className="flex items-center justify-between border-t border-[#dedede] px-3 py-2 text-[9px] text-[#777]"><span>Service Charge</span><span>₩ 0,0&nbsp;&nbsp; ₩ 0,3 (8%)</span></div>
      </div>
    );
  }
  return null;
}

export function Showcase() {
  const { firstItemRef, move, trackRef, viewportRef, x } = useInfiniteCarousel(slides.length);

  return (
    <section id="solutions" className="dark-showcase mx-4 h-[704px] overflow-hidden rounded-lg py-14 text-white lg:py-16">
      <div className="flex items-start justify-between gap-6 px-8 sm:px-12">
        <h2 className="max-w-[520px] text-2xl font-bold leading-[1.18] tracking-[-.02em] sm:text-3xl">
          Empower your financial future<br />with smart banking solutions.
        </h2>
        <div className="flex shrink-0 gap-2 pt-2">
          <button className="focus-ring grid size-11 place-items-center rounded-lg bg-[#6d3425] text-[#ed6b43] transition-transform duration-200 active:scale-[.96]" onClick={() => move(-1)} aria-label="Previous solution"><ArrowLeft size={20} /></button>
          <button className="focus-ring grid size-11 place-items-center rounded-lg bg-white text-[#1b1b1b] transition-transform duration-200 active:scale-[.96]" onClick={() => move(1)} aria-label="Next solution"><ArrowRight size={20} /></button>
        </div>
      </div>
      <div className="mt-12 px-8 pb-2 sm:px-12">
        <div
          ref={viewportRef}
          aria-label="Smart banking solutions"
          aria-roledescription="carousel"
          className="overflow-hidden"
        >
          <motion.div ref={trackRef} className="flex gap-5" style={{ x }}>
            {loopedSlides.map((slide, index) => (
              <article
                ref={index === 0 ? firstItemRef : undefined}
                key={`${slide.copy}-${slide.image}`}
                aria-hidden={slide.copy !== 1}
                className="w-full shrink-0 sm:w-[calc((100%-20px)/2)] xl:w-[calc((100%-40px)/3)]"
              >
                <div className="relative aspect-[1.05] overflow-hidden rounded-lg">
                  <Image src={slide.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 82vw, 360px" />
                  <Overlay type={slide.type} />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-[23px] tracking-[-.02em]">{slide.title}</h3>
                <p className="mt-3 text-[15px] leading-[19.5px] text-white/50">{slide.body}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
