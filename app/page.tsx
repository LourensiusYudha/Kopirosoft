import Image from "next/image";
import {
  ArrowsLeftRight,
  DiscordLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopNav } from "@/components/desktop-nav";
import { AboutReadingText } from "@/components/about-reading-text";
import { Reveal } from "@/components/reveal";
import { Showcase } from "@/components/showcase";
import { TestimonialCarousel } from "@/components/testimonial-carousel";

const features = [
  {
    image: "/images/city.webp",
    title: "Banking redefined for the modern era.",
    body: "Our app provides advanced tools tailored to your spending habits, promoting informed financial choices and effortless achievement of your objectives.",
  },
  {
    image: "/images/insights.webp",
    title: "Real-time financial insights at your fingertips.",
    body: "Gain a clear perspective of your earnings, outgoings, and investments through interactive dashboards that deliver actionable insights for superior money management.",
  },
  {
    image: "/images/automation.webp",
    title: "Automate savings and payments effortlessly.",
    body: "Configure automated transfers and reminders ensuring timely bill payments and consistent savings growth without any manual intervention.",
  },
  {
    image: "/images/investment.webp",
    title: "Investment strategies simplified.",
    body: "Leverage AI-driven recommendations to construct a diversified portfolio aligned with your risk appetite and financial aspirations, all within an intuitive interface.",
  },
];

function FinanceLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`} aria-label="Finance">
      Finance<span className="brand-dots" aria-hidden="true" />
    </span>
  );
}

function SectionMosaic({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`grid shrink-0 grid-cols-2 grid-rows-2 ${compact ? "ml-0.5 size-4" : "ml-1 size-[22px]"}`} aria-hidden="true">
      <span className="bg-[#d9d9d9]" />
      <span className="bg-[#f09235]" />
      <span />
      <span className="bg-[#d66a47]" />
    </span>
  );
}

function DownloadButton({ label = "Download" }: { label?: string }) {
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

function Nav() {
  return (
    <header className="sticky top-0 z-40 flex h-[60px] items-center justify-between border-b border-black/[.06] bg-white/95 px-6 backdrop-blur-xl sm:px-10 lg:px-12">
      <a className="focus-ring rounded-md" href="#home"><FinanceLogo className="text-[17px]" /></a>
      <DesktopNav />
      <div className="hidden md:block"><DownloadButton /></div>
      <MobileNav />
    </header>
  );
}

function HeroWidgets() {
  return (
    <div className="relative mx-auto h-[250px] max-w-[1110px] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_60%,transparent)]">
      <div className="currency-widget absolute left-1 top-12 w-[34%] -rotate-[8deg] p-5 opacity-45">
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
      <div className="currency-widget absolute left-1/2 top-7 w-[34%] -translate-x-1/2 overflow-hidden opacity-55">
        <div className="relative grid grid-cols-2 text-sm">
          <span className="absolute bottom-0 left-1/2 top-0 border-l border-[#dedede]" aria-hidden="true" />
          <div className="p-5 pr-6">
            <span className="text-[#777]">From</span>
            <Image src="/images/logo-neobank.png" alt="Neobank logo" width={41} height={41} className="mt-2 h-8 w-auto object-contain" />
            <b className="mt-2 block text-lg">Neobank</b>
            <span className="text-[#777]">Anthony Jobiele</span>
          </div>
          <div className="p-5 pl-6">
            <span className="text-[#777]">To</span>
            <Image src="/images/logo-bank-america.png" alt="Bank of America logo" width={41} height={39} className="mt-2 h-8 w-auto object-contain" />
            <b className="mt-2 block whitespace-nowrap text-lg">Bank of America</b>
            <span className="text-[#777]">Lebron Rayden</span>
          </div>
          <span className="absolute left-1/2 top-[54%] grid size-8 -translate-x-1/2 place-items-center rounded-full border border-[#dedede] bg-white text-[#ee8a73]" aria-hidden="true"><ArrowsLeftRight size={15} /></span>
        </div>
        <div className="grid grid-cols-2 px-5 pb-5">
          <div className="border-t border-[#e7e7e7] pt-3"><span className="block text-sm text-[#b9b9b9]">Amount</span><strong className="mt-1 block text-3xl font-semibold text-[#f5afa0]">$ 1,000</strong></div>
          <div className="border-t border-[#e7e7e7] pl-6 pt-3"><span className="block text-sm text-[#b9b9b9]">Amount</span><strong className="mt-1 block text-3xl font-semibold text-[#f5afa0]">$ 1,000</strong></div>
        </div>
      </div>
      <div className="currency-widget absolute right-1 top-12 w-[34%] rotate-[8deg] p-5 opacity-55">
        <div className="flex justify-between"><div><b className="block text-lg">USD to IDR</b><span className="text-xs text-[#777]">United States Dollar to Rupiah</span></div><strong className="text-lg text-[#f09235]">$ 200</strong></div>
        <div className="mini-line mt-5 h-20" />
      </div>
    </div>
  );
}

function TrustLogos() {
  const logos = ["meta", "google", "canva", "adobe", "claude"];
  return (
    <section aria-label="Trusted companies" className="pb-2 pt-12 text-center">
      <p className="text-[15px] font-semibold text-[#4e4e4e]">Trusted by leading global companies</p>
      <div className="mx-auto mt-7 flex max-w-[560px] flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:flex-nowrap">
        {logos.map((logo) => (
          logo === "claude" ? (
            <div key={logo} className="flex h-8 w-[92px] items-center justify-center gap-1.5 opacity-25 grayscale">
              <Image src="/images/logo-claude.png" alt="" width={24} height={24} className="size-6 object-contain" />
              <span className="text-[15px] font-normal">Claude</span>
            </div>
          ) : (
            <div key={logo} className="relative h-8 w-[92px] opacity-25 grayscale">
              <Image src={`/images/logo-${logo}.png`} alt={`${logo} logo`} fill className="object-contain" sizes="92px" />
            </div>
          )
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="container-wide px-3 pb-14 pt-[60px]">
      <Reveal>
        <h2 className="mx-auto max-w-[470px] text-center text-[30px] font-bold leading-none tracking-[-.02em]">
          Finance is revolutionizing<br />money management<br />for high solutions
        </h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.045}>
            <article>
              <div className="relative aspect-[.832] overflow-hidden rounded-lg bg-[#ececec]">
                <Image src={feature.image} alt={feature.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 310px" />
              </div>
              <h3 className="mt-5 min-h-[46px] text-lg font-semibold leading-[23px] tracking-[-.02em]">{feature.title}</h3>
              <p className="mt-3 text-[15px] leading-[19.5px] text-[#858585]">{feature.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container-wide pb-[66px] pt-10">
      <Reveal className="reference-sans mx-auto max-w-[588px]">
        <div className="inline-flex items-start">
          <h2 className="text-2xl font-bold leading-8 tracking-[-.04em]">About</h2>
          <SectionMosaic compact />
        </div>
        <AboutReadingText />
      </Reveal>
    </section>
  );
}

const leftAtms = [
  ["Middle East", "12+", true], ["Caribbean", "7+", false], ["Central America", "9+", false], ["Nordics", "6+", false], ["Baltics", "SOON", false], ["Pacific Islands", "SOON", false],
];
const rightAtms = [
  ["Europe", "15+", false], ["Asia", "20+", false], ["Australia", "5+", false], ["Africa", "8+", true], ["South America", "SOON", false], ["Antarctica", "SOON", false],
];

function AtmGrid({ items }: { items: (string | boolean)[][] }) {
  return (
    <div className="grid grid-cols-2 overflow-hidden border border-[#dedede] bg-white">
      {items.map(([place, count, accent]) => (
        <div className={`atm-cell ${accent ? "accent" : ""}`} key={String(place)}>
          <h3 className="text-sm font-semibold sm:text-lg sm:leading-6">{place}</h3>
          <strong className={`${count === "SOON" ? "soon" : "mt-2 block text-4xl font-bold leading-none tracking-[-.06em] text-[#f09235] sm:text-[54px]"}`}>{count}</strong>
          <span className={`mt-3 block text-[10px] sm:text-xs ${accent ? "text-white" : "text-[#333]"}`}>ATM Machines</span>
        </div>
      ))}
    </div>
  );
}

function AtmFinder() {
  return (
    <section className="container-wide pb-[41px] pt-[76px]">
      <Reveal>
        <h2 className="text-center text-[30px] font-bold leading-none tracking-[-.02em]">Saving Cash for Safety.</h2>
        <p className="mt-3 text-center text-[15px] leading-5 text-[#444]">Find us 24 hours in your country to solve the cash crisis!</p>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_.9fr_1fr] lg:gap-12">
        <Reveal><AtmGrid items={leftAtms} /></Reveal>
        <Reveal delay={0.06} className="relative mx-auto aspect-[.76] w-full max-w-[380px] overflow-hidden rounded-lg">
          <Image src="/images/atm.webp" alt="Customer using a 24-hour ATM" fill className="object-cover" sizes="380px" />
        </Reveal>
        <Reveal delay={0.1}><AtmGrid items={rightAtms} /></Reveal>
      </div>
    </section>
  );
}

function Savings() {
  return (
    <section className="container-wide pb-10 pt-7">
      <Reveal>
        <div>
          <div className="inline-flex items-start">
            <h2 className="text-[30px] font-bold leading-none tracking-[-.02em]">Saving up to 3% AER Interest</h2>
            <SectionMosaic />
          </div>
          <p className="mt-2 max-w-[425px] text-[15px] leading-[19.5px]">Life, meet savings. Frow your money with 3% AER interest on Instant Access Savings, paid every day</p>
        </div>
      </Reveal>
      <Reveal className="relative mt-7">
        <div className="orange-corner left-0 top-8" aria-hidden="true" />
        <div className="relative aspect-[4.35] min-h-[240px] overflow-hidden rounded-lg">
          <Image src="/images/cash-card.webp" alt="Cash savings at a checkout" fill className="object-cover object-[center_20%]" sizes="(max-width: 768px) 100vw, 1344px" />
          <span className="absolute bottom-6 right-6 size-7 bg-[#f09235] sm:size-9" />
        </div>
      </Reveal>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="pricing" className="pt-10">
      <div className="container-wide text-center">
        <Reveal>
          <h2 className="text-[42px] font-bold leading-none tracking-[-.02em]">Join the 70+ million using Finance</h2>
          <div className="mt-8"><DownloadButton label="Download the app" /></div>
          <p className="mx-auto mt-9 max-w-[750px] text-[15px] leading-[19.5px] text-[#999]">
            Prices and fees displayed on this page are estimates based on our most common and standard cost structure, available to most account types in most regions where we provide our services. Different prices and fees may apply in different regions, for different account types. The prices and fees that apply to you are available for review during account registration and are also available at any time from the Fees link in your Finance App account. Log in to your account to review the latest fees. Please note that making payments with currency conversion is only available in permitted jurisdictions.
          </p>
        </Reveal>
      </div>
      <TestimonialCarousel />
    </section>
  );
}

const footerColumns = [
  { title: "Features", links: ["Mobile Application", "Dashboard", "Cash Management", "Sharing Community", "Exchange Rate"], sub: "Solutions", extra: ["24 hours ATM Machines", "Financial Tracking", "Economy Academy", "Cheapest Fee"] },
  { title: "Company", links: ["About Finance", "Careers", "Blogs", "Terms of Service", "Privacy policy", "Cookie policy"], sub: "Comparison", extra: ["Payoneer", "PayPal", "Revolut", "Wise"] },
  { title: "Community", links: ["Partner with Finance", "Certified Partner", "Become an Affiliate", "Become a Global Leader"], sub: "Get Help", extra: ["Support", "Community Homebase", "Pricing", "Contact", "Join Discord"] },
];

function Footer() {
  const socials = [YoutubeLogo, LinkedinLogo, GithubLogo, XLogo, DiscordLogo, InstagramLogo];
  return (
    <footer className="mt-5 border-t border-[#dedede]">
      <div className="container-wide grid gap-14 pb-[33px] pt-20 lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:gap-10 xl:grid-cols-[598px_180px_180px_180px] xl:gap-[60px]">
        <div className="flex min-h-[319px] flex-col">
          <FinanceLogo className="text-lg" />
          <p className="mt-5 text-xs leading-[15.75px] text-[#888]">For a Smarter Future.<br />Banking & Beyond</p>
          <div className="mt-[45px] flex flex-1 items-start"><span className="brand-dots footer-dots origin-top-left scale-[4.09]" aria-hidden="true" /></div>
          <div className="flex gap-2">
            {socials.map((Icon, index) => <a href="#home" key={index} aria-label="Finance social channel" className="focus-ring grid size-8 place-items-center rounded border border-[#dedede] text-[#555] hover:text-[#1b1b1b]"><Icon size={17} /></a>)}
          </div>
          <p className="mt-4 text-xs text-[#888]">© 2026 Finance, Inc. All rights reserved</p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title} className="text-xs">
            <h3 className="font-bold text-[#f09235]">{column.title}</h3>
            <ul className="mt-3 space-y-2 text-[#858585]">{column.links.map((link) => <li key={link}><a className="focus-ring rounded hover:text-[#1b1b1b]" href="#home">{link}</a></li>)}</ul>
            <h3 className="mt-8 font-bold text-[#f09235]">{column.sub}</h3>
            <ul className="mt-3 space-y-2 text-[#858585]">{column.extra.map((link) => <li key={link}><a className="focus-ring rounded hover:text-[#1b1b1b]" href="#home">{link}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="grid min-h-[153px] items-center gap-8 bg-[#1436e1] px-8 py-8 text-white sm:px-12 lg:grid-cols-[1fr_auto_auto]">
        <div className="flex items-center gap-10"><div className="text-lg font-bold leading-tight">Brand or<br />Product<br /><span className="font-normal">Landing Page</span></div><div className="rounded-xl bg-white px-10 py-5"><FinanceLogo className="text-lg text-[#1b1b1b]" /></div></div>
        <div className="text-lg font-bold leading-tight">Created by<br /><span className="font-normal">Built in<br />2026</span></div>
        <Image src="/images/kopirosoft-logo.png" alt="Kopirosoft Software" width={273} height={73} className="h-auto w-[205px]" />
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <a href="#main" className="focus-ring sr-only z-50 bg-white px-4 py-3 focus:not-sr-only focus:absolute focus:left-4 focus:top-4">Skip to main content</a>
      <Nav />
      <main id="main">
        <section id="home" className="px-4">
          <div className="relative min-h-[620px] overflow-hidden rounded-lg sm:min-h-[650px] lg:min-h-[675px]">
            <Image src="/images/hero.webp" alt="Customer reviewing receipts while managing daily finances" fill priority className="object-cover object-top" sizes="(max-width: 1920px) 100vw, 1888px" />
            <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/45 to-transparent" />
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
        <Features />
        <About />
        <Showcase />
        <AtmFinder />
        <Savings />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
