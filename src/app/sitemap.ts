import type { MetadataRoute } from "next";
import { caseStudies, serviceAreas, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/home-solar",
    "/commercial-solar",
    "/products",
    "/case-studies",
    "/resources",
    "/about",
    "/contact",
    ...caseStudies.map((item) => `/case-studies/${item.slug}`),
    ...serviceAreas.map((item) => `/service-areas/${item.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.75,
  }));
}
