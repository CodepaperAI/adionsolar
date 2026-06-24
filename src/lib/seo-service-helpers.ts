import type { ServiceArea } from "@/lib/types";
import { site } from "@/lib/site-data";

export const adionServices = [
  {
    slug: "home-solar",
    title: "Home Solar",
    eyebrow: "Residential solar",
    intro:
      "Clear estimates for Georgia homes, roof fit, batteries, aesthetics, and practical next steps.",
    description:
      "Adion Solar provides residential solar estimates and installation for Georgia homeowners. The process starts with property review, utility usage, and roof fit before any system size is recommended.",
    image: {
      src: "https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Close view of residential solar panels on a clean roof plane",
      label: "Home installation",
    },
    contactType: "home" as const,
  },
  {
    slug: "commercial-solar",
    title: "Commercial Solar",
    eyebrow: "Business solar",
    intro:
      "Utility analysis, incentive guidance, and operational planning for business properties.",
    description:
      "Adion Solar designs commercial solar systems for Georgia businesses. Planning starts with utility analysis, roof or land availability, operational constraints, and verified case studies before any commitment.",
    image: {
      src: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Large commercial solar panel array under direct sun",
      label: "Commercial array",
    },
    contactType: "business" as const,
  },
];

export function getAdionService(slug: string) {
  return adionServices.find((s) => s.slug === slug) ?? null;
}

export function localServiceSchema(
  service: (typeof adionServices)[number],
  area: ServiceArea,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} in ${area.name}`,
    description: service.intro,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      url: site.url,
      telephone: site.phone,
    },
    areaServed: { "@type": "City", name: area.name },
    url: `${site.url}/${service.slug}/${area.slug}`,
  };
}

export function localBreadcrumbSchema(
  items: { name: string; url?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      ...(item.url ? { item: `${site.url}${item.url}` } : {}),
    })),
  };
}
