import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...services.map((s) => `/services/${s.slug}`), "/realisations", "/a-propos", "/contact"];
  return paths.map((p) => ({ url: `${site.url}${p === "/" ? "" : p}`, priority: p === "/" ? 1 : p.startsWith("/services") ? 0.9 : 0.7 }));
}
