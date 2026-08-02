"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";

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
    title: "Daily money, handled with clarity.",
    body: "Our platform provides state-of-the-art features tailored around your spending behavior, facilitating informed financial choices and straightforward goal completion.",
    type: "none",
  },
];

function Overlay({ type }: { type: string }) {
  if (type === "transfer") {
    return (
      <div className="currency-widget absolute left-1/2 top-4 w-[66%] -translate-x-1/2 p-3 text-[#222]">
        <div className="grid grid-cols-2 gap-3 text-[10px]">
          <div><span className="text-[#777]">Sender</span><b className="mt-1 block text-sm">Neobank</b><span>Ngozi Adanna</span><strong className="mt-2 block text-lg text-[#ee6038]">$ 9,500</strong></div>
          <div><span className="text-[#777]">Recipient</span><b className="mt-1 block text-sm">Bank of America</b><span>Babatunde Aliyu</span><strong className="mt-2 block text-lg text-[#ee6038]">$ 9,500</strong></div>
        </div>
      </div>
    );
  }
  if (type === "chart") {
    return (
      <div className="currency-widget absolute bottom-4 left-4 w-[66%] p-3 text-[#222]">
        <div className="flex items-start justify-between"><div><b className="block text-sm">USD to EUR</b><span className="text-[9px] text-[#777]">US Dollar to Euro</span></div><strong className="text-sm text-[#ff8600]">$ 1,200</strong></div>
        <div className="mini-line mt-2" />
      </div>
    );
  }
  if (type === "exchange") {
    return (
      <div className="currency-widget absolute -left-5 bottom-4 w-[74%] p-3 text-[#222]">
        <b className="text-xs">Convert currencies</b>
        <div className="mt-2 flex justify-between text-[10px]"><span>GBP British Pound</span><span>EUR Euro</span></div>
        <strong className="mt-2 block text-right text-lg text-[#ff8600]">€ 0,0</strong>
      </div>
    );
  }
  return null;
}

export function Showcase() {
  const [offset, setOffset] = useState(0);
  const reduce = useReducedMotion();
  const ordered = [...slides.slice(offset), ...slides.slice(0, offset)];

  return (
    <section id="solutions" className="dark-showcase mx-4 overflow-hidden rounded-lg py-14 text-white sm:mx-6 lg:py-16">
      <div className="flex items-start justify-between gap-6 px-8 sm:px-12">
        <h2 className="max-w-[520px] text-2xl font-bold leading-[1.18] tracking-[-.04em] sm:text-3xl">
          Empower your financial future<br />with smart banking solutions.
        </h2>
        <div className="flex shrink-0 gap-2 pt-2">
          <button className="focus-ring grid size-11 place-items-center rounded-lg bg-[#6d3425] text-[#ed6b43] transition-transform duration-200 active:scale-[.96]" onClick={() => setOffset((offset + slides.length - 1) % slides.length)} aria-label="Previous solution"><ArrowLeft size={20} /></button>
          <button className="focus-ring grid size-11 place-items-center rounded-lg bg-white text-[#191919] transition-transform duration-200 active:scale-[.96]" onClick={() => setOffset((offset + 1) % slides.length)} aria-label="Next solution"><ArrowRight size={20} /></button>
        </div>
      </div>
      <motion.div layout className="mt-12 grid grid-flow-col auto-cols-[82%] gap-5 overflow-x-auto px-8 pb-2 [scrollbar-width:none] sm:auto-cols-[48%] sm:px-12 lg:auto-cols-[31%] xl:auto-cols-[25%]">
        <AnimatePresence initial={false} mode="popLayout">
          {ordered.map((slide) => (
            <motion.article
              layout="position"
              key={slide.image}
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="min-w-0"
            >
              <div className="relative aspect-[1.05] overflow-hidden rounded-lg">
                <Image src={slide.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 82vw, 360px" />
                <Overlay type={slide.type} />
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug tracking-[-.025em]">{slide.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{slide.body}</p>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
