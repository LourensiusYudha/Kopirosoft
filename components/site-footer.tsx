import Image from "next/image";
import {
  DiscordLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { FinanceLogo } from "@/components/brand";

const footerColumns = [
  {
    title: "Features",
    links: ["Mobile Application", "Dashboard", "Cash Management", "Sharing Community", "Exchange Rate"],
    sub: "Solutions",
    extra: ["24 hours ATM Machines", "Financial Tracking", "Economy Academy", "Cheapest Fee"],
  },
  {
    title: "Company",
    links: ["About Finance", "Careers", "Blogs", "Terms of Service", "Privacy policy", "Cookie policy"],
    sub: "Comparison",
    extra: ["Payoneer", "PayPal", "Revolut", "Wise"],
  },
  {
    title: "Community",
    links: ["Partner with Finance", "Certified Partner", "Become an Affiliate", "Become a Global Leader"],
    sub: "Get Help",
    extra: ["Support", "Community Homebase", "Pricing", "Contact", "Join Discord"],
  },
];

const socials = [
  { Icon: YoutubeLogo, label: "Finance on YouTube" },
  { Icon: LinkedinLogo, label: "Finance on LinkedIn" },
  { Icon: GithubLogo, label: "Finance on GitHub" },
  { Icon: XLogo, label: "Finance on X" },
  { Icon: DiscordLogo, label: "Finance on Discord" },
  { Icon: InstagramLogo, label: "Finance on Instagram" },
];

export function SiteFooter() {
  return (
    <footer className="mt-5 border-t border-[#dedede]">
      <div className="container-wide grid gap-14 pb-[33px] pt-20 lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:gap-10 xl:grid-cols-[598px_180px_180px_180px] xl:gap-[60px]">
        <div className="flex min-h-[319px] flex-col">
          <FinanceLogo className="text-lg" />
          <p className="mt-5 text-xs leading-[15.75px] text-[#888]">For a Smarter Future.<br />Banking & Beyond</p>
          <div className="mt-[45px] flex flex-1 items-start"><span className="brand-dots footer-dots origin-top-left scale-[4.09]" aria-hidden="true" /></div>
          <div className="flex gap-2">
            {socials.map(({ Icon, label }) => <a href="#home" key={label} aria-label={label} className="focus-ring grid size-8 place-items-center rounded border border-[#dedede] text-[#555] hover:text-[#1b1b1b]"><Icon size={17} /></a>)}
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
