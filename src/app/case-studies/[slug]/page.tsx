import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroStage } from "@/components/HeroStage";
import { ImagePanel } from "@/components/ImagePanel";
import { ProofMetrics } from "@/components/ProofMetrics";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return createMetadata({
      title: "Case Study",
      description: "Adion Solar case study.",
    });
  }

  return createMetadata({
    title: `${caseStudy.title} Case Study`,
    description: caseStudy.summary,
    path: `/case-studies/${caseStudy.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <HeroStage
        eyebrow={caseStudy.slug === "bi-production-works" ? "Commercial Project • Madison, Georgia" : `${caseStudy.type} project`}
        title={caseStudy.title}
        copy={caseStudy.summary}
        image={caseStudy.image}
        primaryHref="/contact"
        primaryLabel={caseStudy.slug === "bi-production-works" ? "Request Commercial Analysis" : "Get My Solar Estimate"}
        secondaryHref="/projects"
        secondaryLabel="All Projects"
        stats={caseStudy.stats}
      />
      <ProofMetrics stats={caseStudy.stats} />
      <section className="site-section px-5 sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionHeader
              eyebrow={caseStudy.location}
              title={caseStudy.slug === "bi-production-works" ? "A project built around an active commercial property." : "Property context, system fit, and measured results."}
              copy={caseStudy.slug === "bi-production-works" ? "The facility, available installation area, electrical requirements, and operating context shaped the recommendation." : "Each project keeps the focus on the property, the system, and the approved results."}
            />
          </Reveal>
          <div className="grid gap-4">
            {caseStudy.sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.06}>
                <article className="rounded-[1.6rem] bg-white/75 p-7 ring-1 ring-[#482366]/8 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
                  <h2 className="font-serif text-3xl font-semibold text-[#241034]">{section.heading}</h2>
                  <p className="mt-4 leading-8 text-[#665a69]">{section.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="site-section bg-[#fffdf8] px-5 sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <ImagePanel image={caseStudy.image} tall label={`${caseStudy.type} proof`} />
          </Reveal>
          <div className="grid gap-4">
            <Reveal delay={0.05}>
              <article className="rounded-[1.6rem] bg-[#fbf6ec] p-7 ring-1 ring-[#482366]/8">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#f78c2d]">
                  System details
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {caseStudy.stats.map((stat) => (
                    <div key={`${stat.value}-${stat.label}`} className="border-l border-[#482366]/14 pl-5">
                      <p className="font-mono text-3xl font-medium tabular-nums text-[#482366]">{stat.value}</p>
                      <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-[#665a69]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="rounded-[1.6rem] bg-[#fbf6ec] p-7 ring-1 ring-[#482366]/8">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#f78c2d]">Photos</p>
                <h2 className="mt-5 font-serif text-3xl font-semibold leading-none text-[#241034]">
                  {caseStudy.slug === "bi-production-works" ? "B.I. Production Works — Madison, Georgia" : `${caseStudy.title} project gallery`}
                </h2>
                <p className="mt-4 leading-8 text-[#665a69]">
                  A full-width gallery will show the aerial, roof array, electrical equipment, inverter or battery equipment, exterior, and installation details.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.15}>
              <article className="rounded-[1.6rem] bg-[#241034] p-7 text-white ring-1 ring-white/10">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#fbad18]">Project proof</p>
                <h2 className="mt-5 font-serif text-3xl font-semibold leading-none">
                  Published results stay tied to approved project data.
                </h2>
                <p className="mt-4 leading-8 text-white/66">
                  The current published model shows a 73.4% solar offset and $413,945 in projected 25-year savings.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
      <FinalCTA
        title={caseStudy.slug === "bi-production-works" ? "Put project-specific numbers around your facility." : "Have a property that could be next?"}
        copy="Send the property and utility context so Adion can evaluate the right next step."
        href="/contact"
        label={caseStudy.slug === "bi-production-works" ? "Request Commercial Analysis" : "Get My Solar Estimate"}
      />
    </>
  );
}
