const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kopirosoft.vercel.app").replace(/\/$/, "");

export const siteConfig = {
  name: "Finance",
  title: "Finance | Banking & Beyond",
  description:
    "Modern banking for daily money management, automated savings, and global financial freedom.",
  shortDescription: "Modern banking for daily money management and global financial freedom.",
  url: siteUrl,
} as const;
