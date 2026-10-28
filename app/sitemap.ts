import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/solicita-oferta", priority: 0.9 },
    { path: "/politica-confidentialitate", priority: 0.3 },
    { path: "/termeni-si-conditii", priority: 0.3 },
  ];
  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
