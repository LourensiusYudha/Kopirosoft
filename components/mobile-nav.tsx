"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["Features", "#features"],
  ["Solutions", "#solutions"],
  ["Pricing", "#pricing"],
  ["About Us", "#about"],
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="md:hidden">
      <button
        className="focus-ring grid size-11 place-items-center rounded-lg bg-[#1b1b1b] text-white"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-x-4 top-[58px] z-20 overflow-hidden rounded-xl bg-[#1b1b1b] p-3 text-white shadow-[0_24px_60px_rgba(0,0,0,.22)]"
            initial={reduce ? false : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {links.map(([label, href], index) => (
              <motion.a
                key={href}
                href={href}
                className="focus-ring flex min-h-12 items-center rounded-lg px-4 text-base hover:bg-white/10"
                onClick={() => setOpen(false)}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.035 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
