import { notFound } from "next/navigation";
import { ServiceCityTemplate } from "@/components/ServiceCityTemplate";
import { serviceAreas } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";
import {
  adionServices,
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
  const service = getAdionService("home-solar");
  if (!area || !service) {
    return createMetadata({
      title: "Home Solar",
      description: "Home solar estimates from Adion Solar.",
    });
  }
  return createMetadata({
    title: `Home Solar in ${area.name}`,
    description: `Residential solar estimates and installation for ${area.name} homeowners. ${service.intro}`,
    path: `/home-solar/${area.slug}`,
  });
}

export default async function HomeSolarCityPage({ params }: PageProps) {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  const service = getAdionService("home-solar");
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
              { name: "Home Solar", url: "/home-solar" },
              { name: area.name },
            ]),
          ),
        }}
      />
      <ServiceCityTemplate service={service} area={area} />
    </>
  );
}

void adionServices;
