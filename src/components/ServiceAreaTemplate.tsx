import { CTAButton } from "@/components/CTAButton";
import { HeroStage } from "@/components/HeroStage";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { serviceAreas } from "@/lib/site-data";
import type { ServiceArea } from "@/lib/types";

export function ServiceAreaTemplate({ area }: { area: ServiceArea }) {
  const nearby = serviceAreas.filter((item) => item.slug !== area.slug).slice(0, 3);

  return (
    <>
      <HeroStage
        eyebrow="Service area"
        title={`Solar guidance for ${area.name}.`}
        copy={area.intro}
        image={area.image}
        primaryHref={`/contact?type=home&area=${area.slug}`}
        primaryLabel="Request Local Estimate"
        secondaryHref="/products"
        secondaryLabel="View Products"
      />
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Local plan"
              title="Local solar guidance starts with the right property context."
              copy={area.proof}
            />
          </Reveal>
          <div className="grid gap-4">
            {[
              "Residential, commercial, product, and PO requests each route to the right next step.",
              "Local contact details keep the conversation close to the property.",
              "Approved project proof and photography can make each area page stronger over time.",
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
      <section className="bg-[#fffdf8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader eyebrow="Nearby areas" title="Solar guidance for nearby Georgia communities." />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {nearby.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06}>
                <div className="rounded-[1.5rem] bg-[#fbf6ec] p-6 ring-1 ring-[#482366]/8 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
                  <h3 className="font-serif text-3xl font-semibold text-[#241034]">{item.name}</h3>
                  <p className="mt-3 text-[#665a69]">{item.intro}</p>
                  <div className="mt-6">
                    <CTAButton href={`/service-areas/${item.slug}`} variant="dark">View Area</CTAButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
