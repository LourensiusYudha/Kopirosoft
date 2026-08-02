import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Finance - Banking & Beyond",
    short_name: "Finance",
    description: "Modern banking for daily money management and global financial freedom.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1b1b1b",
  };
}
