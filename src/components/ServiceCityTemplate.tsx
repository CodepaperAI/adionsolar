import { CTAButton } from "@/components/CTAButton";
import { HeroStage } from "@/components/HeroStage";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { serviceAreas } from "@/lib/site-data";
import { adionServices } from "@/lib/seo-service-helpers";
import type { ServiceArea } from "@/lib/types";

type Props = {
  service: (typeof adionServices)[number];
  area: ServiceArea;
};

export function ServiceCityTemplate({ service, area }: Props) {
  const nearbyAreas = serviceAreas
    .filter((a) => a.slug !== area.slug)
    .slice(0, 3);
  const otherServices = adionServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <HeroStage
        eyebrow={`${area.name} / ${service.eyebrow}`}
        title={`${service.title} in ${area.name}.`}
        copy={service.description}
        image={service.image}
        primaryHref={`/contact?type=${service.contactType}&area=${area.slug}`}
        primaryLabel={`Request ${area.name} estimate`}
        secondaryHref={`/service-areas/${area.slug}`}
        secondaryLabel={`More about ${area.name}`}
      />

      <section className="site-section px-5 sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow={`About ${area.name}`}
              title={`${service.title} for ${area.name} property owners.`}
              copy={area.proof}
            />
          </Reveal>
          <div className="grid gap-4">
            {[
              `${service.title} starts with property context, utility usage, and a real review of what fits.`,
              `${area.name}-area customers get a clear estimate request path and local follow-through.`,
              service.contactType === "home"
                ? "Roof fit, aesthetics, battery interest, and HOA considerations are part of every home review."
                : "Utility analysis, operational fit, and incentive context are part of every commercial review.",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[1.5rem] bg-white/75 p-6 ring-1 ring-[#482366]/8 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-[#fffdf8] px-5 sm:px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow={`Other services in ${area.name}`}
              title={`Working with a trusted solar installer in ${area.name}.`}
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/${area.slug}`}
                className="block rounded-[1.5rem] bg-white p-6 ring-1 ring-[#482366]/8 transition hover:-translate-y-1 hover:ring-[#482366]/24"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#947334]">
                  {s.eyebrow}
                </p>
                <h3 className="mt-2 font-serif text-2xl">
                  {s.title} in {area.name}
                </h3>
                <p className="mt-2 text-sm text-[#1f1a2c]/70">{s.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section px-5 sm:px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Nearby areas"
              title={`${service.title} for nearby Georgia communities.`}
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {nearbyAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/${service.slug}/${a.slug}`}
                className="block rounded-[1.5rem] bg-white/75 p-6 ring-1 ring-[#482366]/8 transition hover:-translate-y-1 hover:ring-[#482366]/24"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#947334]">
                  Service area
                </p>
                <h3 className="mt-2 font-serif text-2xl">
                  {service.title} in {a.name}
                </h3>
                <p className="mt-2 text-sm text-[#1f1a2c]/70">{a.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-[#fffdf8] px-5 sm:px-6 md:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <SectionHeader
              eyebrow="Ready when you are"
              title={`Hire a ${service.title.toLowerCase()} company in ${area.name}.`}
              copy={`Request a ${area.name} estimate to get started.`}
            />
          </Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href={`/contact?type=${service.contactType}&area=${area.slug}`}>
              Request {area.name} estimate
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
