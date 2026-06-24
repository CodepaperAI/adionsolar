import { notFound } from "next/navigation";
import { ServiceCityTemplate } from "@/components/ServiceCityTemplate";
import { serviceAreas } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";
import {
  getAdionService,
  localServiceSchema,
  localBreadcrumbSchema,
} from "@/lib/seo-service-helpers";

type PageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  const service = getAdionService("commercial-solar");
  if (!area || !service) {
    return createMetadata({
      title: "Commercial Solar",
      description: "Commercial solar estimates from Adion Solar.",
    });
  }
  return createMetadata({
    title: `Commercial Solar in ${area.name}`,
    description: `Commercial solar estimates and installation for ${area.name} businesses. ${service.intro}`,
    path: `/commercial-solar/${area.slug}`,
  });
}

export default async function CommercialSolarCityPage({ params }: PageProps) {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  const service = getAdionService("commercial-solar");
  if (!area || !service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localServiceSchema(service, area)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Commercial Solar", url: "/commercial-solar" },
              { name: area.name },
            ]),
          ),
        }}
      />
      <ServiceCityTemplate service={service} area={area} />
    </>
  );
}
