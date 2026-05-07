import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroStage } from "@/components/HeroStage";
import { ImagePanel } from "@/components/ImagePanel";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { heroImages, homeFaqs } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Home Solar For Georgia Homes",
  description:
    "Residential solar estimates for Georgia homeowners, with roof-fit guidance, battery planning, curb appeal, and verified warranty messaging.",
  path: "/home-solar",
});

export default function HomeSolarPage() {
  return (
    <>
      <HeroStage
        eyebrow="Residential solar"
        title="Solar designed for Georgia homes."
        copy="Lower monthly energy costs with a system designed around your roof, home appearance, and long-term goals."
        image={heroImages.residential}
        primaryHref="/contact?type=home"
        primaryLabel="Request Home Solar Savings Estimate"
        secondaryHref="/case-studies/lake-oconee-residence"
        secondaryLabel="See Residential Proof"
      />
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Fit check"
              title="Solar may be a strong fit when the home, bill, and timing line up."
              copy="Start with the questions that matter most: current utility costs, roof exposure, battery interest, and how long you expect to own the home."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "High or rising power bills",
              "Clear roof exposure and useful sun",
              "Interest in battery backup",
              "Plan to stay in the home",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[1.6rem] bg-white/75 p-7 ring-1 ring-[#482366]/8">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#f78c2d]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 font-serif text-3xl font-semibold text-[#241034]">{item}</h3>
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
              eyebrow="Home benefits"
              title="A residential solar plan should make ownership feel clearer."
              copy="Adion keeps the conversation centered on energy costs, backup options, local guidance, and warranty expectations."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              ["Lower monthly energy costs", "Review usage and roof fit before estimating the opportunity."],
              ["Battery backup options", "Talk through storage interest before choosing inverter or battery paths."],
              ["Local Madison-area guidance", "Work with a Georgia-based team that understands nearby homes and utilities."],
              ["Long-term warranty protection", "Ask about panel output, product coverage, and support after installation."],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="h-full rounded-[1.6rem] bg-[#fbf6ec] p-7 ring-1 ring-[#482366]/8 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
                  <p className="font-mono text-sm font-medium tabular-nums text-[#f78c2d]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 font-serif text-3xl font-semibold leading-none text-[#241034]">{title}</h3>
                  <p className="mt-4 leading-7 text-[#665a69]">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#fffdf8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ImagePanel image={heroImages.residential} tall />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Curb appeal"
              title="Panel placement should respect the roofline, not fight it."
              copy="Roofline visibility, panel placement, electrical routing, and HOA questions can all shape the recommendation, especially for Lake Oconee and high-value homes."
            />
          </Reveal>
        </div>
      </section>
      <ProcessSteps
        title="A homeowner estimate should move in four clear steps."
        copy="The goal is a practical recommendation, not pressure before the roof and usage are understood."
        steps={[
          {
            title: "Share address and power bill",
            copy: "Start with the property location, utility context, and any battery interest.",
          },
          {
            title: "Evaluate roof and usage",
            copy: "Review roof exposure, shade, bill range, and where panels could sit.",
          },
          {
            title: "Review savings and battery options",
            copy: "Discuss system fit, backup goals, warranty expectations, and next steps.",
          },
          {
            title: "Decide when ready",
            copy: "Move forward only when the estimate and equipment path make sense.",
          },
        ]}
      />
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeader eyebrow="Home FAQ" title="Plain answers for practical homeowners." />
          </Reveal>
          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>
      <FinalCTA
        title="Request a Home Solar Savings Estimate."
        copy="Send the basics and Adion will review the property before recommending a next step."
        href="/contact?type=home"
        label="Request Home Solar Savings Estimate"
      />
    </>
  );
}
