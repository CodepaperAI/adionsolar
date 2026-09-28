import { notFound } from "next/navigation";
import { ServiceAreaTemplate } from "@/components/ServiceAreaTemplate";
import { serviceAreas } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

type ServiceAreaPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: ServiceAreaPageProps) {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);

  if (!area) {
    return createMetadata({
      title: "Service Area",
      description: "Adion Solar service area.",
    });
  }

  return createMetadata({
    title: area.slug === "madison-ga" ? "Solar Company in Madison, GA" : area.slug === "lake-oconee" ? "Lake Oconee Solar & Battery Systems" : `${area.name} Solar Estimates`,
    description: area.slug === "madison-ga"
      ? "Madison-based residential and commercial solar, battery, equipment, and project support from Adion Solar."
      : area.slug === "lake-oconee"
        ? "Solar designed around Lake Oconee homes, including roofline, aesthetics, battery backup, and long-term energy goals."
        : area.intro,
    path: `/service-areas/${area.slug}`,
  });
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  return <ServiceAreaTemplate area={area} />;
}
