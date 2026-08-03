"use client";

import { useEffect, useState } from "react";

export const navigationLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Features", href: "#features", id: "features" },
  { label: "Solutions", href: "#solutions", id: "solutions" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "About Us", href: "#about", id: "about" },
] as const;

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navigationLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 60;
      const focusLine = headerBottom + Math.min(window.innerHeight * 0.18, 180);
      const sectionAtFocusLine = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= focusLine && rect.bottom > focusLine;
      });

      if (sectionAtFocusLine) {
        setActiveSection(sectionAtFocusLine.id);
        return;
      }

      const previousSection = sections
        .filter((section) => section.getBoundingClientRect().top <= focusLine)
        .sort((a, b) => b.getBoundingClientRect().top - a.getBoundingClientRect().top)[0];

      if (previousSection) setActiveSection(previousSection.id);
    };

    let observer: IntersectionObserver | null = null;

    const observeFocusLine = () => {
      observer?.disconnect();

      const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 60;
      const topMargin = Math.round(headerBottom);

      observer = new IntersectionObserver(updateActiveSection, {
        rootMargin: `-${topMargin}px 0px -65% 0px`,
        threshold: Array.from({ length: 41 }, (_, index) => index / 40),
      });

      sections.forEach((section) => observer?.observe(section));
      updateActiveSection();
    };

    observeFocusLine();
    window.addEventListener("resize", observeFocusLine);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", observeFocusLine);
    };
  }, []);

  return { activeSection, setActiveSection };
}
