import { CaseStudyFeature } from "@/components/CaseStudyFeature";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroStage } from "@/components/HeroStage";
import { ImagePanel } from "@/components/ImagePanel";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies, commercialFaqs, heroImages } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Commercial Solar For Georgia Businesses",
  description:
    "Commercial solar guidance for Georgia offices, hotels, warehouses, and operators evaluating utility cost predictability.",
  path: "/commercial-solar",
});

export default function CommercialSolarPage() {
  return (
    <>
      <HeroStage
        eyebrow="Commercial solar"
        title="Commercial solar systems designed to lower operating costs."
        copy="Evaluate solar, battery storage, incentives, and equipment options based on actual usage, facility needs, and financial goals."
        image={heroImages.commercial}
        primaryHref="/contact?type=business"
        primaryLabel="Request Business Estimate"
        secondaryHref="/case-studies/bi-production-works"
        secondaryLabel="View Commercial Proof"
      />
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Business case"
              title="Utility costs, predictability, and visible sustainability in one page."
              copy="Operators need a solar conversation that accounts for bills, uptime, property access, and the financial questions behind the project."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            {[
              ["Lower utility costs", "Review usage and property context before sizing the opportunity."],
              ["Improve energy predictability", "Understand how solar and storage can fit long-term operating plans."],
              ["Support sustainability goals", "Show visible progress without relying on unsupported savings claims."],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="h-full rounded-[2rem] bg-white/75 p-2 ring-1 ring-[#482366]/8">
                  <div className="h-full rounded-[1.5rem] bg-[#fffdf8] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#f78c2d]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-5 font-serif text-3xl font-semibold text-[#241034]">{title}</h3>
                    <p className="mt-4 text-[#665a69]">{copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#fffdf8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Project proof"
              title="Commercial decisions get easier when the results are specific."
              copy="B.I. Production Works leads with verified system size, solar offset, and projected long-term savings. Relax Inn stays framed around hospitality context until approved metrics are available."
            />
          </Reveal>
          <div className="mt-12 grid gap-7">
            {caseStudies.slice(0, 2).map((caseStudy, index) => (
              <Reveal key={caseStudy.slug} delay={index * 0.07}>
                <CaseStudyFeature caseStudy={caseStudy} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <ImagePanel image={heroImages.commercial} tall label="Commercial planning" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Applications"
              title="Built for the properties where energy costs are always in view."
              copy="Offices, hotels, warehouses, industrial facilities, campuses, and local businesses can each start with utility context and operational needs."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {["Offices", "Hotels", "Warehouses", "Industrial facilities", "Campuses", "Local businesses"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#482366]/8 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#482366]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-[#241034] px-6 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              light
              eyebrow="Financing and incentives"
              title="Review the available options without turning guidance into a guarantee."
              copy="Adion can help buyers understand financing and incentive considerations while keeping final savings, tax, and ROI claims tied to project-specific review."
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Usage first", "Start with utility data so the opportunity is grounded in the property."],
              ["Incentive review", "Discuss available options in plain language before final decisions."],
              ["Decision support", "Compare timing, equipment, storage, and purchase paths with the business goal in mind."],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="h-full rounded-[1.5rem] bg-white/8 p-6 ring-1 ring-white/10 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
                  <h3 className="font-serif text-3xl font-semibold leading-none">{title}</h3>
                  <p className="mt-4 leading-7 text-white/66">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ProcessSteps
        title="Commercial solar planning follows the business case."
        copy="The sequence keeps utility information, property constraints, incentive questions, and installation planning connected."
        steps={[
          {
            title: "Utility bill and property details",
            copy: "Share usage, property type, facility needs, and any operational constraints.",
          },
          {
            title: "System estimate",
            copy: "Review a system path based on the real site and energy context.",
          },
          {
            title: "Incentive and finance review",
            copy: "Discuss available financing and incentive considerations without unsupported promises.",
          },
          {
            title: "Installation or product plan",
            copy: "Move toward installation coordination, equipment guidance, or PO support.",
          },
        ]}
      />
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeader eyebrow="Business FAQ" title="Built for operators, not solar hobbyists." />
          </Reveal>
          <FAQAccordion faqs={commercialFaqs} />
        </div>
      </section>
      <FinalCTA
        title="Request a business solar estimate."
        copy="Share utility context, property type, and timeline so Adion can route the next step correctly."
        href="/contact?type=business"
        label="Request Business Estimate"
      />
    </>
  );
}
