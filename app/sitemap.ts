import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Data ultimei modificări reale a fiecărei pagini; actualizați-o când se schimbă conținutul.
  const pages = [
    { path: "", priority: 1, updated: "2026-10-29" },
    { path: "/servicii/contabilitate", priority: 0.9, updated: "2026-10-29" },
    { path: "/servicii/consultanta-fiscala", priority: 0.9, updated: "2026-10-29" },
    { path: "/servicii/resurse-umane", priority: 0.9, updated: "2026-10-29" },
    { path: "/servicii/salarizare", priority: 0.9, updated: "2026-10-29" },
    { path: "/solicita-oferta", priority: 0.9, updated: "2026-10-28" },
    { path: "/politica-confidentialitate", priority: 0.3, updated: "2026-10-29" },
    { path: "/termeni-si-conditii", priority: 0.3, updated: "2026-10-29" },
  ];
  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: p.updated,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
