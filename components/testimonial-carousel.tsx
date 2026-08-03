"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useInfiniteCarousel } from "@/components/use-infinite-carousel";

const testimonials = [
  {
    image: "/images/testimonial-lisa.webp",
    quote: "Finance has revolutionized our cash flow, providing a clear, real-time view of our financial health. A must-have for any modern business.",
    name: "Lisa Bonjour",
    role: "CEO of Podcasterio",
  },
  {
    image: "/images/testimonial-anna.webp",
    quote: "Finance is an indispensable tool for content creators. It has simplified my financial tracking, making tax season a breeze. Highly recommended!",
    name: "Anna Delay",
    role: "Youtuber - 2M Subscriber",
  },
  {
    image: "/images/testimonial-andreas.webp",
    quote: "Finance has transformed our company's financial operations. The insights and efficiency gains are remarkable. A game-changer for Kopirosoft!",
    name: "Andreas Alexan",
    role: "CEO of Kopirosoft",
  },
];

const loopedTestimonials = Array.from({ length: 3 }, (_, copy) =>
  testimonials.map((testimonial) => ({ ...testimonial, copy })),
).flat();

export function TestimonialCarousel() {
  const { activeIndex, firstItemRef, move, trackRef, viewportRef, x } = useInfiniteCarousel(testimonials.length);

  return (
    <div className="container-wide mt-6">
      <div className="mx-auto mb-4 flex max-w-[1244px] justify-end gap-2">
        <button
          type="button"
          aria-controls="testimonial-carousel"
          className="focus-ring grid size-11 place-items-center rounded-lg bg-[#f4f4f4] text-[#d66a47] transition-transform duration-200 active:scale-[.96]"
          onClick={() => move(-1)}
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          type="button"
          aria-controls="testimonial-carousel"
          className="focus-ring grid size-11 place-items-center rounded-lg bg-[#1b1b1b] text-white transition-transform duration-200 active:scale-[.96]"
          onClick={() => move(1)}
          aria-label="Next testimonial"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Testimonial {activeIndex + 1} of {testimonials.length}: {testimonials[activeIndex].name}
      </p>
      <div
        ref={viewportRef}
        id="testimonial-carousel"
        role="region"
        aria-label="Customer testimonials"
        aria-roledescription="carousel"
        className="mx-auto max-w-[1244px] overflow-hidden"
      >
        <motion.div ref={trackRef} className="flex gap-4 lg:gap-7" style={{ x }}>
          {loopedTestimonials.map((testimonial, index) => (
            <article
              ref={index === 0 ? firstItemRef : undefined}
              key={`${testimonial.copy}-${testimonial.name}`}
              aria-hidden={testimonial.copy !== 1}
              aria-label={`${(index % testimonials.length) + 1} of ${testimonials.length}`}
              aria-roledescription="slide"
              role="group"
              className="testimonial-card relative aspect-[.66] w-full shrink-0 overflow-hidden rounded-lg text-white sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-28px)/2)] xl:w-[calc((100%-56px)/3)]"
            >
              <Image
                src={testimonial.image}
                alt={`${testimonial.name} sharing a Finance testimonial`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1279px) 50vw, 396px"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <blockquote className="text-[16px] font-medium leading-[21px] sm:text-lg">“{testimonial.quote}”</blockquote>
                <p className="mt-6 text-[15px] font-bold leading-5">{testimonial.name}</p>
                <p className="mt-1 text-[13.5px] leading-[18px] text-white/80">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
