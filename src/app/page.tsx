import { AudiencePathCards } from "@/components/AudiencePathCards";
import { CaseStudyFeature } from "@/components/CaseStudyFeature";
import { CredibilityLine } from "@/components/CredibilityLine";
import { CTAButton } from "@/components/CTAButton";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroStage } from "@/components/HeroStage";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies, heroImages } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Georgia Solar Designed for Homes, Businesses, and Project Buyers",
  description:
    "Adion Solar routes homeowners, businesses, and product buyers into practical solar guidance from Madison, Georgia.",
});

export default function Home() {
  return (
    <>
      <HeroStage
        eyebrow="Madison, Georgia solar"
        title="Lower energy costs with solar designed for your home, business, or project."
        copy="Adion helps Georgia homeowners, businesses, and project buyers understand solar options, estimate savings, and choose reliable panels, batteries, and inverters with local guidance."
        image={heroImages.home}
        primaryHref="/contact"
        primaryLabel="Request Estimate"
      />
      <AudiencePathCards />
      <CredibilityLine
        items={[
          "30-year output warranty",
          "12-year product warranty",
          "Local Madison, GA team",
          "Financing guidance",
          "PO support",
        ]}
      />
      <section className="bg-[#fffdf8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Featured case"
              title="A verified commercial project gives the numbers real weight."
              copy="B.I. Production Works anchors the proof story with an 84.2 kW system, 73.4% solar offset, and $413,945 in projected 25-year savings."
            />
            <div className="mt-8">
              <CTAButton href="/case-studies/bi-production-works" variant="dark">
                Read The Case
              </CTAButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <CaseStudyFeature caseStudy={caseStudies[0]} />
          </Reveal>
        </div>
      </section>
      <ProcessSteps
        title="How solar moves from first details to a clear next step."
        copy="The path stays simple whether the request is a home estimate, business estimate, product question, or PO."
        steps={[
          {
            title: "Share details",
            copy: "Send the address, utility context, product need, or purchase-order request.",
          },
          {
            title: "Receive estimate or quote",
            copy: "Adion reviews the request type and responds with the right next step.",
          },
          {
            title: "Review options",
            copy: "Compare system fit, battery interest, product specs, warranty, and timing.",
          },
          {
            title: "Move forward when ready",
            copy: "Continue with the estimate, product guidance, PO support, or technical follow-up.",
          },
        ]}
      />
      <FinalCTA
        title="Start with a simple solar savings estimate."
        copy="Share the basics and Adion will route your request to the right home, business, product, PO, support, or general path."
        href="/contact"
        label="Request a Solar Savings Estimate"
      />
    </>
  );
}
