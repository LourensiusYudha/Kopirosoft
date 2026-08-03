export function FinanceLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`}>
      Finance<span className="brand-dots" aria-hidden="true" />
    </span>
  );
}

export function SectionMosaic({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`grid shrink-0 grid-cols-2 grid-rows-2 ${compact ? "ml-0.5 size-4" : "ml-1 size-[22px]"}`}
      aria-hidden="true"
    >
      <span className="bg-[#d9d9d9]" />
      <span className="bg-[#f09235]" />
      <span />
      <span className="bg-[#d66a47]" />
    </span>
  );
}

export function DownloadButton({ label = "Download" }: { label?: string }) {
  return (
    <a
      href="#pricing"
      className="focus-ring group inline-flex h-12 items-center justify-center gap-3 whitespace-nowrap rounded-[7px] bg-[#1b1b1b] px-[18px] text-base font-semibold text-white transition-transform duration-200 active:scale-[.98]"
    >
      <span className="relative block size-[26px] shrink-0 rounded-full bg-white" aria-hidden="true">
        <span className="absolute left-1/2 top-[5px] size-[9px] -translate-x-1/2 rounded-full bg-[#f09235]" />
        <span className="absolute bottom-[5px] left-1/2 size-[9px] -translate-x-1/2 rounded-full bg-[#d66a47]" />
      </span>
      {label}
    </a>
  );
}
