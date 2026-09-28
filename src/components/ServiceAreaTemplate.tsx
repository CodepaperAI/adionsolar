import { CTAButton } from "@/components/CTAButton";
import { HeroStage } from "@/components/HeroStage";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { serviceAreas } from "@/lib/site-data";
import type { ServiceArea } from "@/lib/types";

export function ServiceAreaTemplate({ area }: { area: ServiceArea }) {
  const nearby = serviceAreas.filter((item) => item.slug !== area.slug).slice(0, 3);
  const isMadison = area.slug === "madison-ga";
  const isLakeOconee = area.slug === "lake-oconee";
  const heroTitle = isMadison
    ? "Solar from a team based right here in Madison."
    : isLakeOconee
      ? "Solar designed for the property — including how the property looks."
      : `Solar guidance for ${area.name}.`;
  const heroCopy = isMadison
    ? "Adion Solar is based on Lions Club Road in Madison, serving local homes, businesses, and project buyers with residential solar, commercial analysis, equipment support, and permanent project experience."
    : isLakeOconee
      ? "For Lake Oconee homes, the solar decision is not only about production. Roofline, panel visibility, battery backup, equipment placement, HOA context, and long-term ownership all matter."
      : area.intro;

  return (
    <>
      <HeroStage
        eyebrow="Service area"
        title={heroTitle}
        copy={heroCopy}
        image={area.image}
        primaryHref={`/contact?type=home&area=${area.slug}`}
        primaryLabel="Get My Solar Estimate"
        secondaryHref={isMadison ? "/contact?type=business" : "/home-solar"}
        secondaryLabel={isMadison ? "Request Commercial Analysis" : "Explore Home Solar"}
      />
      <section className="site-section px-5 sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow={isMadison ? "Local proof" : isLakeOconee ? "Design emphasis" : "Local plan"}
              title={isMadison ? "Commercial proof close to home." : isLakeOconee ? "A premium home deserves a deliberate solar plan." : "Local solar guidance starts with the right property context."}
              copy={isMadison ? "B.I. Production Works is a Madison example of Adion’s permanent commercial work, with a current published model showing a 73.4% solar offset and $413,945 in projected 25-year savings." : isLakeOconee ? "Panel grouping, street and lake visibility, conduit, battery location, shade, and backup priorities should be considered before the system is sold — not after." : area.proof}
            />
          </Reveal>
          <div className="grid gap-4">
            {(isMadison ? [
              "Residential and commercial guidance from a team based on Lions Club Road.",
              "Equipment and project support connected to Adion’s permanent local presence.",
              "B.I. Production Works provides documented commercial proof close to home.",
            ] : isLakeOconee ? [
              "Panel grouping and roofline visibility shape the finished design.",
              "Battery location, shade, and backup priorities should be planned early.",
              "HOA context and long-term ownership belong in the first design conversation.",
            ] : [
              "Residential and commercial requests route to the right service path.",
              "Local contact details keep the conversation close to the property.",
              "Adion serves the area from its permanent Madison base.",
            ]).map((item, index) => (
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
