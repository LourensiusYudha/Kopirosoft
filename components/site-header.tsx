import { DesktopNav } from "@/components/desktop-nav";
import { DownloadButton, FinanceLogo } from "@/components/brand";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-[60px] items-center justify-between border-b border-black/[.06] bg-white/95 px-6 backdrop-blur-xl sm:px-10 lg:px-12">
      <a className="focus-ring rounded-md" href="#home">
        <FinanceLogo className="text-[17px]" />
      </a>
      <DesktopNav />
      <div className="hidden min-[880px]:block">
        <DownloadButton />
      </div>
      <MobileNav />
    </header>
  );
}
