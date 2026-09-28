import { CaseStudyFeature } from "@/components/CaseStudyFeature";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroStage } from "@/components/HeroStage";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies, heroImages } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Real Solar Results From Georgia Projects",
  description:
    "Adion Solar case studies featuring verified project proof, including B.I. Production Works and future Georgia installations.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <HeroStage
        eyebrow="Case studies"
        title="Real solar results from Georgia projects."
        copy="Case studies turn system details into proof while avoiding unverified claims. The B.I. Production Works numbers lead the experience."
        image={heroImages.caseStudies}
        primaryHref="/case-studies/bi-production-works"
        primaryLabel="View Featured Case"
      />
      <section className="site-section px-5 sm:px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Proof library"
              title="Project proof that stays specific, visual, and measured."
              copy="Each case follows situation, solution, system details, results, photos, testimonial, and CTA."
            />
          </Reveal>
          <div className="mt-12 grid gap-7">
            {caseStudies.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.07}>
                <CaseStudyFeature caseStudy={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA
        title="Estimate results for your property."
        copy="Share your property context so Adion can route the next step to a home, business, product, PO, support, or general request."
        href="/contact"
        label="Estimate Results for My Property"
      />
    </>
  );
}
