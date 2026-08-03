"use client";

import { navigationLinks, useActiveSection } from "@/components/use-active-section";

export function DesktopNav() {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-lg border border-[#dedede] bg-white p-1 min-[880px]:flex">
      {navigationLinks.map(({ label, href, id }) => {
        const active = activeSection === id;

        return (
          <a
            key={href}
            href={href}
            aria-current={active ? "location" : undefined}
            onClick={() => setActiveSection(id)}
            className={`focus-ring rounded-md px-5 py-2 text-xs font-semibold transition-colors duration-200 hover:bg-[#f4f4f4] ${active ? "text-[#d66a47]" : "text-[#343434]"}`}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
