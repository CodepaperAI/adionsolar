import type { Metadata } from "next";
import { site } from "@/lib/site-data";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
  image = "/opengraph-image",
}: SeoInput): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    title: path ? title : fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      images: [{ url: image }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1331 Lions Club Road",
      addressLocality: "Madison",
      addressRegion: "GA",
      postalCode: "30650",
      addressCountry: "US",
    },
    areaServed: ["Madison GA", "Lake Oconee", "Greensboro GA", "Eatonton GA"],
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
