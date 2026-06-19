import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.domain,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
