import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.domain,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
