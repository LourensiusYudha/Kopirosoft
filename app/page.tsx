import Image from "next/image";
import {
  DiscordLogo,
  DownloadSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { MobileNav } from "@/components/mobile-nav";
import { Reveal } from "@/components/reveal";
import { Showcase } from "@/components/showcase";

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
    role: "YouTuber, 2M subscribers",
  },
  {
    image: "/images/testimonial-andreas.webp",
    quote: "Finance has transformed our company's financial operations. The insights and efficiency gains are remarkable. A game-changer for Kopirosoft!",
    name: "Andreas Alexan",
    role: "CEO of Kopirosoft",
  },
];

function FinanceLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`} aria-label="Finance">
      Finance<span className="brand-dots" aria-hidden="true" />
    </span>
  );
}

function DownloadButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#pricing"
      className={`focus-ring group inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-lg bg-[#191919] font-semibold text-white transition-transform duration-200 active:scale-[.98] ${compact ? "gap-2 px-4 text-xs" : "gap-3 px-5 text-sm"}`}
    >
      <span className="grid size-7 place-items-center rounded-full bg-white text-[#ff8600]">
        <DownloadSimple size={15} weight="bold" />
      </span>
      Download the app
    </a>
  );
}

function Nav() {
  const links = ["Home", "Features", "Solutions", "Pricing", "About Us"];
  return (
    <header className="relative flex h-[72px] items-center justify-between px-6 sm:px-10 lg:px-12">
      <a className="focus-ring rounded-md" href="#home"><FinanceLogo className="text-[17px]" /></a>
      <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-lg border border-[#dedede] bg-white p-1 md:flex">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" us", "").replace(" ", "-")}`}
            className={`focus-ring rounded-md px-5 py-2 text-xs font-semibold transition-colors duration-200 hover:bg-[#f4f4f4] ${link === "Home" ? "text-[#ee6038]" : "text-[#343434]"}`}
          >
            {link}
          </a>
        ))}
      </nav>
      <div className="hidden md:block"><DownloadButton compact /></div>
      <MobileNav />
    </header>
  );
}

function HeroWidgets() {
  return (
    <div className="relative mx-auto h-[250px] max-w-[1110px] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_60%,transparent)]">
      <div className="currency-widget absolute left-1 top-12 w-[34%] -rotate-[8deg] p-5 opacity-45">
        <span className="text-sm font-semibold">Exchange</span>
        <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-[#777]"><span>USD United States Dollar</span><span>EUR Euro</span></div>
        <div className="mt-3 grid grid-cols-2 text-2xl font-semibold text-[#ff9b44]"><span>$ 1,000</span><span>€ 0,0</span></div>
        <div className="mt-4 h-7 bg-[#eef5ff]" />
      </div>
      <div className="currency-widget absolute left-1/2 top-7 w-[34%] -translate-x-1/2 p-5 opacity-55">
        <div className="grid grid-cols-2 gap-5 text-sm">
          <div><span className="text-[#777]">From</span><b className="mt-2 block text-lg">Neobank</b><span className="text-[#777]">Anthony Jobiele</span></div>
          <div><span className="text-[#777]">To</span><b className="mt-2 block text-lg">Bank of America</b><span className="text-[#777]">Lebron Rayden</span></div>
        </div>
        <div className="mt-5 grid grid-cols-2 text-3xl font-semibold text-[#f5afa0]"><span>$ 1,000</span><span>$ 1,000</span></div>
      </div>
      <div className="currency-widget absolute right-1 top-12 w-[34%] rotate-[8deg] p-5 opacity-55">
        <div className="flex justify-between"><div><b className="block text-lg">USD to IDR</b><span className="text-xs text-[#777]">United States Dollar to Rupiah</span></div><strong className="text-lg text-[#ff8600]">$ 200</strong></div>
        <div className="mini-line mt-5 h-20" />
      </div>
    </div>
  );
}

function TrustLogos() {
  const logos = ["meta", "google", "canva", "adobe", "claude"];
  return (
    <section aria-label="Trusted companies" className="py-12 text-center">
      <p className="text-sm font-semibold text-[#4e4e4e]">Trusted by leading global companies</p>
      <div className="mx-auto mt-7 flex max-w-[560px] flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:flex-nowrap">
        {logos.map((logo) => (
          <div key={logo} className="relative h-8 w-[92px] opacity-25 grayscale">
            <Image src={`/images/logo-${logo}.png`} alt={`${logo} logo`} fill className="object-contain" sizes="92px" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="container-wide pb-24 pt-8">
      <Reveal>
        <h2 className="mx-auto max-w-[470px] text-center text-3xl font-bold leading-[1.04] tracking-[-.055em] sm:text-[38px]">
          Finance is revolutionizing<br />money management<br />for high solutions
        </h2>
      </Reveal>
      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.045}>
            <article>
              <div className="relative aspect-[.82] overflow-hidden rounded-lg bg-[#ececec]">
                <Image src={feature.image} alt={feature.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 310px" />
              </div>
              <h3 className="mt-5 text-base font-semibold leading-snug tracking-[-.035em]">{feature.title}</h3>
              <p className="mt-4 text-sm leading-[1.55] text-[#858585]">{feature.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container-wide pb-28 pt-8">
      <Reveal className="mx-auto max-w-[680px]">
        <div className="relative inline-flex items-center">
          <h2 className="text-2xl font-bold tracking-[-.05em]">About</h2>
          <span className="ml-2 block size-3 bg-[#ee6038]" /><span className="absolute -right-3 -top-2 block size-3 bg-[#ff8600]" />
        </div>
        <p className="mt-7 text-[clamp(25px,2.5vw,38px)] font-semibold leading-[1.26] tracking-[-.05em]">
          We are here to redefine how you interact with money through a modern, transparent, and adaptive banking ecosystem.
          <span className="text-[#dedede]"> From daily expense logging to long-term wealth planning, we empower you to take full control of your financial freedom.</span>
        </p>
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
          <h3 className="text-sm font-semibold sm:text-base">{place}</h3>
          <strong className={`${count === "SOON" ? "soon" : "mt-2 block text-4xl font-bold tracking-[-.06em] text-[#ff8600] sm:text-5xl"}`}>{count}</strong>
          <span className={`mt-3 block text-[10px] ${accent ? "text-white" : "text-[#333]"}`}>ATM Machines</span>
        </div>
      ))}
    </div>
  );
}

function AtmFinder() {
  return (
    <section className="container-wide section-space">
      <Reveal>
        <h2 className="text-center text-3xl font-bold tracking-[-.055em] sm:text-[38px]">Saving Cash for Safety.</h2>
        <p className="mt-3 text-center text-sm text-[#444]">Find us 24 hours in your country to solve the cash crisis.</p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_.9fr_1fr] lg:gap-12">
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
    <section className="container-wide pb-24 pt-10">
      <Reveal>
        <div className="relative inline-flex items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-[-.055em] sm:text-[38px]">Saving up to 3% AER Interest</h2>
            <p className="mt-3 max-w-[530px] text-sm leading-relaxed">Life, meet savings. Grow your money with 3% AER interest on Instant Access Savings, paid every day.</p>
          </div>
          <span className="ml-2 mt-1 block size-3 bg-[#ee6038]" /><span className="absolute -right-3 -top-2 block size-3 bg-[#ff8600]" />
        </div>
      </Reveal>
      <Reveal className="relative mt-11">
        <div className="orange-corner left-0 top-8" aria-hidden="true" />
        <div className="relative ml-9 aspect-[4.3] min-h-[240px] overflow-hidden rounded-lg sm:ml-16">
          <Image src="/images/cash-card.webp" alt="Cash savings at a checkout" fill className="object-cover object-[center_36%]" sizes="(max-width: 768px) 100vw, 1240px" />
          <span className="absolute bottom-6 right-6 size-7 bg-[#ff8600] sm:size-9" />
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
          <h2 className="text-3xl font-bold tracking-[-.055em] sm:text-5xl">Join the 70+ million using Finance</h2>
          <div className="mt-8"><DownloadButton /></div>
          <p className="mx-auto mt-9 max-w-[850px] text-[11px] leading-relaxed text-[#999]">
            Prices and fees displayed on this page are estimates based on our most common and standard cost structure, available to most account types in most regions where we provide our services. Different prices and fees may apply in different regions, for different account types. The prices and fees that apply to you are available for review during account registration and are also available at any time from the Fees link in your Finance App account. Log in to your account to review the latest fees. Please note that making payments with currency conversion is only available in permitted jurisdictions.
          </p>
        </Reveal>
      </div>
      <div className="ml-[18%] mt-12 grid grid-flow-col auto-cols-[78%] gap-4 overflow-x-auto pr-4 [scrollbar-width:none] sm:auto-cols-[44%] lg:auto-cols-[31%]">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.05}>
            <article className="testimonial-card relative aspect-[.76] overflow-hidden rounded-lg text-white">
              <Image src={testimonial.image} alt={`${testimonial.name} sharing a Finance testimonial`} fill className="object-cover" sizes="(max-width: 768px) 78vw, 410px" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <blockquote className="text-[15px] font-medium leading-[1.38] sm:text-base">“{testimonial.quote}”</blockquote>
                <p className="mt-6 text-sm font-bold">{testimonial.name}</p>
                <p className="mt-1 text-xs text-white/80">{testimonial.role}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
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
    <footer className="mt-24 border-t border-[#dedede]">
      <div className="container-wide grid gap-14 py-20 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
        <div className="flex min-h-[410px] flex-col">
          <FinanceLogo className="text-xl" />
          <p className="mt-5 text-sm leading-relaxed text-[#888]">For a Smarter Future.<br />Banking & Beyond</p>
          <div className="mt-16 flex flex-1 items-start"><span className="brand-dots scale-[2.5] origin-top-left" aria-hidden="true" /></div>
          <div className="flex gap-2">
            {socials.map((Icon, index) => <a href="#home" key={index} aria-label="Finance social channel" className="focus-ring grid size-8 place-items-center rounded border border-[#dedede] text-[#555] hover:text-[#191919]"><Icon size={17} /></a>)}
          </div>
          <p className="mt-4 text-xs text-[#888]">© 2026 Finance, Inc. All rights reserved</p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title} className="text-sm">
            <h3 className="font-bold text-[#ff8600]">{column.title}</h3>
            <ul className="mt-5 space-y-3 text-[#858585]">{column.links.map((link) => <li key={link}><a className="focus-ring rounded hover:text-[#191919]" href="#home">{link}</a></li>)}</ul>
            <h3 className="mt-8 font-bold text-[#ff8600]">{column.sub}</h3>
            <ul className="mt-5 space-y-3 text-[#858585]">{column.extra.map((link) => <li key={link}><a className="focus-ring rounded hover:text-[#191919]" href="#home">{link}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="grid min-h-[142px] items-center gap-8 bg-[#073fea] px-8 py-8 text-white sm:px-12 lg:grid-cols-[1fr_auto_auto]">
        <div className="flex items-center gap-10"><div className="text-lg font-bold leading-tight">Brand or<br />Product<br /><span className="font-normal">Landing Page</span></div><div className="rounded-xl bg-white px-10 py-5"><FinanceLogo className="text-lg text-[#191919]" /></div></div>
        <div className="text-lg font-bold leading-tight">Created by<br /><span className="font-normal">Built in<br />2026</span></div>
        <Image src="/images/kopirosoft-logo.png" alt="Kopirosoft Software" width={273} height={73} className="h-auto w-[230px]" />
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
          <div className="relative min-h-[620px] overflow-hidden rounded-lg sm:min-h-[665px] lg:min-h-[690px]">
            <Image src="/images/hero.webp" alt="Customer reviewing receipts while managing daily finances" fill priority className="object-cover" sizes="(max-width: 1440px) 100vw, 1408px" />
            <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/45 to-transparent" />
            <div className="absolute left-7 top-12 max-w-[670px] sm:left-9 sm:top-14">
              <h1 className="text-[clamp(40px,5vw,67px)] font-bold leading-[.98] tracking-[-.065em]">for a Smarter Future.<br />Banking & Beyond</h1>
              <p className="mt-9 max-w-[510px] rounded-lg border border-white/70 bg-white/35 px-5 py-4 text-sm font-medium leading-relaxed shadow-[inset_0_1px_0_rgba(255,255,255,.6)] backdrop-blur-md sm:text-base">
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
