import { FinalCTA } from "@/components/FinalCTA";
import { HeroStage } from "@/components/HeroStage";
import { ImagePanel } from "@/components/ImagePanel";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { heroImages, site } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Adion Solar",
  description:
    "Adion Solar is a Madison, Georgia solar company and A B.I. Company, serving homeowners, businesses, and project buyers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <HeroStage
        eyebrow="About Adion"
        title="A local solar team helping Georgia homes and businesses make smarter energy decisions."
        copy="Adion Solar is Madison-based and equipment-grounded, with roots in B.I. Production Works and a practical view of solar guidance."
        image={heroImages.about}
        primaryHref="/contact"
        primaryLabel="Contact Adion"
      />
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeader
              eyebrow="B.I. heritage"
              title="Built from practical equipment experience, not abstract solar hype."
              copy="Adion keeps the B.I. Company identity visible because practical equipment experience is part of the story."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ImagePanel image={heroImages.about} />
          </Reveal>
        </div>
      </section>
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Who we help"
              title="Homes, businesses, and project buyers get distinct guidance."
              copy="Solar decisions look different depending on the property, budget, equipment need, and purchase path."
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Homeowners", "Savings estimates, roof fit, battery backup, appearance, and warranty questions."],
              ["Businesses", "Utility costs, incentive considerations, operating needs, and measurable project proof."],
              ["Product and project buyers", "Panels, inverters, batteries, datasheets, bulk pricing, and PO routing."],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="h-full rounded-[1.6rem] bg-[#fbf6ec] p-7 ring-1 ring-[#482366]/8 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
                  <p className="font-mono text-sm font-medium tabular-nums text-[#f78c2d]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-5 font-serif text-3xl font-semibold leading-none text-[#241034]">{title}</h2>
                  <p className="mt-4 leading-7 text-[#665a69]">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#fffdf8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="How we work"
              title="Clear estimates, practical guidance, reliable equipment, local follow-through."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              "Homeowners get a simple fit conversation before technical detail.",
              "Businesses get utility and operational context before a proposal.",
              "Product buyers get guidance, datasheets, compatibility, and PO routing.",
              "Every public claim stays tied to verified information or careful language.",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="h-full rounded-[1.6rem] bg-[#fbf6ec] p-7 ring-1 ring-[#482366]/8 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-12 rounded-[2rem] bg-[#241034] p-8 text-white md:p-10">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#fbad18]">Local contact</p>
              <div className="mt-5 grid gap-3 text-lg text-white/76 md:grid-cols-3">
                <a href={site.phoneHref}>{site.phone}</a>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <span>{site.address}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCTA
        title="Request a solar savings estimate or contact Adion Solar."
        copy="Share the request type, property or product context, and the best way for Adion to follow up."
        href="/contact"
      />
    </>
  );
}
