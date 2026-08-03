import Image from "next/image";
import { ArrowsLeftRight } from "@phosphor-icons/react/dist/ssr";

const trustedLogos = ["meta", "google", "canva", "adobe", "claude"];

function TrustLogos() {
  return (
    <section aria-label="Trusted companies" className="pb-2 pt-12 text-center">
      <p className="text-[15px] font-semibold text-[#4e4e4e]">Trusted by leading global companies</p>
      <div className="mx-auto mt-7 flex max-w-[560px] flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:flex-nowrap">
        {trustedLogos.map((logo) =>
          logo === "claude" ? (
            <div key={logo} className="flex h-8 w-[92px] items-center justify-center gap-1.5 opacity-25 grayscale">
              <Image src="/images/logo-claude.png" alt="" width={24} height={24} className="size-6 object-contain" />
              <span className="text-[15px] font-normal">Claude</span>
            </div>
          ) : (
            <div key={logo} className="relative h-8 w-[92px] opacity-25 grayscale">
              <Image src={`/images/logo-${logo}.png`} alt={`${logo} logo`} fill className="object-contain" sizes="92px" />
            </div>
          ),
        )}
      </div>
    </section>
  );
}

function HeroWidgets() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[220px] max-w-[1110px] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_60%,transparent)] sm:h-[250px]">
      <div className="currency-widget absolute -left-[46%] top-12 w-[68%] -rotate-[8deg] p-3 opacity-45 sm:left-1 sm:w-[34%] sm:p-5">
        <span className="text-sm font-semibold">Exchange</span>
        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-xs text-[#777]">
          <span className="flex min-w-0 items-center gap-2 rounded-full border border-[#dcdcdc] px-2 py-1">
            <span className="currency-flag usd" aria-hidden="true" />
            <b className="text-[#555]">USD</b>
            <span className="truncate">United States Dollar</span>
          </span>
          <span className="grid size-7 place-items-center rounded-full border border-[#dedede] text-[#aaa]"><ArrowsLeftRight size={13} /></span>
          <span className="flex min-w-0 items-center gap-2 rounded-full border border-[#dcdcdc] px-2 py-1">
            <span className="currency-flag eur" aria-hidden="true" />
            <b className="text-[#555]">EUR</b>
            <span className="truncate">Euro</span>
          </span>
        </div>
        <div className="mt-3 grid grid-cols-2 text-2xl font-semibold text-[#f09235]"><span>$ 1,000</span><span>€ 0,0</span></div>
        <div className="mt-4 h-7 bg-[#eef5ff]" />
      </div>
      <div className="currency-widget absolute left-1/2 top-7 w-[78%] -translate-x-1/2 overflow-hidden opacity-55 sm:w-[34%]">
        <div className="relative grid grid-cols-2 text-[11px] sm:text-sm">
          <span className="absolute bottom-0 left-1/2 top-0 border-l border-[#dedede]" aria-hidden="true" />
          <div className="p-3 pr-4 sm:p-5 sm:pr-6">
            <span className="text-[#777]">From</span>
            <Image src="/images/logo-neobank.png" alt="Neobank logo" width={41} height={41} className="mt-2 h-6 w-auto object-contain sm:h-8" />
            <b className="mt-2 block text-[13px] sm:text-lg">Neobank</b>
            <span className="text-[#777]">Anthony Jobiele</span>
          </div>
          <div className="p-3 pl-4 sm:p-5 sm:pl-6">
            <span className="text-[#777]">To</span>
            <Image src="/images/logo-bank-america.png" alt="Bank of America logo" width={41} height={39} className="mt-2 h-6 w-auto object-contain sm:h-8" />
            <b className="mt-2 block whitespace-nowrap text-[13px] sm:text-lg">Bank of America</b>
            <span className="text-[#777]">Lebron Rayden</span>
          </div>
          <span className="absolute left-1/2 top-[54%] grid size-8 -translate-x-1/2 place-items-center rounded-full border border-[#dedede] bg-white text-[#ee8a73]" aria-hidden="true"><ArrowsLeftRight size={15} /></span>
        </div>
        <div className="grid grid-cols-2 px-3 pb-3 sm:px-5 sm:pb-5">
          <div className="border-t border-[#e7e7e7] pt-3"><span className="block text-xs text-[#b9b9b9] sm:text-sm">Amount</span><strong className="mt-1 block text-2xl font-semibold text-[#f5afa0] sm:text-3xl">$ 1,000</strong></div>
          <div className="border-t border-[#e7e7e7] pl-4 pt-3 sm:pl-6"><span className="block text-xs text-[#b9b9b9] sm:text-sm">Amount</span><strong className="mt-1 block text-2xl font-semibold text-[#f5afa0] sm:text-3xl">$ 1,000</strong></div>
        </div>
      </div>
      <div className="currency-widget absolute -right-[46%] top-12 w-[68%] rotate-[8deg] p-3 opacity-55 sm:right-1 sm:w-[34%] sm:p-5">
        <div className="flex justify-between"><div><b className="block text-lg">USD to IDR</b><span className="text-xs text-[#777]">United States Dollar to Rupiah</span></div><strong className="text-lg text-[#f09235]">$ 200</strong></div>
        <div className="mini-line mt-5 h-20" />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <>
      <section id="home" className="px-4">
        <div className="relative min-h-[620px] overflow-hidden rounded-lg sm:min-h-[650px] lg:min-h-[675px]">
          <Image src="/images/hero.webp" alt="Customer reviewing receipts while managing daily finances" fill priority className="object-cover object-top" sizes="(max-width: 1920px) 100vw, 1888px" />
          <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/45 to-transparent" aria-hidden="true" />
          <div className="absolute left-7 top-12 max-w-[670px] sm:left-9 sm:top-14">
            <h1 className="hero-headline">
              <span className="block text-[30px] leading-none tracking-[-.0515em] sm:text-[42px]">for a Smarter Future.</span>
              <span className="mt-1 block text-[38px] leading-none tracking-[-.0615em] sm:text-[60px]">Banking & Beyond</span>
            </h1>
            <p className="mt-9 max-w-[510px] rounded-lg border border-white/70 bg-white/35 px-5 py-3 text-sm font-medium leading-[19.5px] shadow-[inset_0_1px_0_rgba(255,255,255,.6)] backdrop-blur-md sm:text-[15px]">
              This is your bank, redefined. Get powerful daily banking and global freedom. Sign up for free in a tap.
            </p>
          </div>
          <div className="orange-corner bottom-0 left-0" aria-hidden="true" />
        </div>
      </section>
      <TrustLogos />
      <HeroWidgets />
    </>
  );
}
