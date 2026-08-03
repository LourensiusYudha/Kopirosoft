"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const accessibleText = "We are here to redefine how you interact with money through a modern, transparent, and adaptive banking ecosystem. From daily expense logging to long-term wealth planning, we empower you to take full control of your financial freedom.";

export function AboutReadingText() {
  const targetRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 18%", "end 14%"],
  });
  const secondSentenceColor = useTransform(scrollYProgress, [0.55, 0.9], ["#dedede", "#1b1b1b"]);

  return (
    <p
      ref={targetRef}
      className="mt-3 text-[20px] font-semibold leading-[1.3125] tracking-[-.05em] sm:text-2xl"
    >
      <span className="sr-only">{accessibleText}</span>
      <span aria-hidden="true">
        <span className="text-[#1b1b1b]">
          We are here to redefine how you interact with money<br className="hidden sm:block" />
          through a modern, transparent, and adaptive banking<br className="hidden sm:block" />
          ecosystem.{" "}
        </span>
        <motion.span className="about-reading-secondary" style={{ color: secondSentenceColor }}>
          From daily expense logging to long-term<br className="hidden sm:block" />
          wealth planning, we empower you to take full control of<br className="hidden sm:block" />
          your financial freedom.
        </motion.span>
      </span>
    </p>
  );
}
