import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { CaseStudyFeature } from "@/components/CaseStudyFeature";
import { CTAButton } from "@/components/CTAButton";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroStage } from "@/components/HeroStage";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies, heroImages } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Georgia Solar + Battery for Homes & Businesses",
  description: "Solar and battery systems for Georgia homes and businesses from a Madison-based team with field-tested power experience.",
});

const paths = [
  { title: "Home Solar", copy: "Lower the power you buy from the grid with a system designed around your roof, power bill, backup priorities, and the appearance of your home.", href: "/home-solar", label: "Explore Home Solar" },
  { title: "Commercial", copy: "Put project-specific numbers around solar, storage, and long-term energy costs for your facility.", href: "/commercial-solar", label: "Explore Commercial Solar" },
  { title: "Equipment", copy: "Shop panels, hybrid inverters, batteries, and project equipment with technical and volume-purchasing support.", href: "/products", label: "Shop Equipment" },
];

export default function Home() {
  return (
    <>
      <HeroStage
        eyebrow="Madison, Georgia • Solar + Battery"
        title="Solar designed for the way your property actually works."
        copy="Lower your dependence on grid power with solar and battery systems designed around how your home or business uses energy — with practical power experience shaped in demanding production environments and applied to permanent properties across Georgia."
        image={heroImages.home}
        primaryHref="/contact"
        primaryLabel="Get My Solar Estimate"
        secondaryHref="/commercial-solar"
        secondaryLabel="Commercial Solar"
        tertiaryHref="https://shop.adionsolar.com"
        tertiaryLabel="Shop Equipment"
        microcopy="Start with your address and a recent power bill."
      />
      <section className="site-section px-5 sm:px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeader eyebrow="Choose your path" title="What are you looking for?" /></Reveal>
          <div className="mt-12 divide-y divide-[#482366]/14 border-y border-[#482366]/14">
            {paths.map((path, index) => (
              <Reveal key={path.title} delay={index * 0.05}>
                <Link href={path.href} className="group grid gap-5 py-8 md:grid-cols-[0.55fr_1.2fr_auto] md:items-center">
                  <h2 className="font-serif text-4xl font-semibold text-[#241034] md:text-5xl">{path.title}</h2>
                  <p className="body-copy max-w-2xl text-[#665a69]">{path.copy}</p>
                  <span className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-[#482366]">{path.label}<ArrowIcon className="size-5 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#241034] px-5 py-12 text-white sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/14 border-y border-white/14 md:grid-cols-3 md:divide-x md:divide-y-0">
          {["560+ solar-powered production trailers", "North American field experience", "Madison, Georgia base"].map((item) => <p key={item} className="py-7 text-sm font-black uppercase tracking-[0.18em] md:px-7 md:text-center">{item}</p>)}
        </div>
      </section>
      <section className="site-section bg-[#fffdf8] px-5 sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal><div className="relative min-h-[360px] overflow-hidden rounded-[1.8rem] bg-[#241034] sm:min-h-[520px]"><Image src={heroImages.commercial.src} alt={heroImages.commercial.alt} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#241034]/70 via-transparent to-transparent" /><p className="absolute bottom-6 left-6 rounded-full bg-[#fffdf8]/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#482366]">Field-tested power</p></div></Reveal>
          <Reveal delay={0.08}><SectionHeader eyebrow="Our roots" title="Born on set. Built for permanent power." copy="Adion’s solar experience began behind the scenes in film and television, where dependable mobile power has to perform under changing loads, tight schedules, and demanding operating conditions. Today, that field experience supports permanent solar and battery projects for homes and businesses across Georgia." /><div className="mt-8"><CTAButton href="/about" variant="dark">Read Our Story</CTAButton></div></Reveal>
        </div>
      </section>
      <section className="site-section px-5 sm:px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeader eyebrow="Project breadth" title="From production sets to permanent properties." copy="See Adion work across mobile production, manufacturing, commercial, hospitality, and residential applications." /></Reveal>
          <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-3">
            {caseStudies.map((project, index) => <Link key={project.slug} href={`/case-studies/${project.slug}`} className={`group relative overflow-hidden rounded-[1.6rem] bg-[#241034] ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}><Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#241034]/80 via-transparent to-transparent" /><div className="absolute bottom-0 p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#fbad18]">{project.type}</p><h3 className="mt-2 font-serif text-3xl font-semibold">{project.title}</h3></div></Link>)}
          </div>
          <div className="mt-8"><CTAButton href="/projects" variant="dark">Explore Projects</CTAButton></div>
        </div>
      </section>
      <section className="site-section bg-[#fffdf8] px-5 sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><SectionHeader eyebrow="Featured project" title="Commercial solar, with the numbers behind it." copy="At B.I. Production Works in Madison, the current published project model shows a 73.4% solar offset and $413,945 in projected 25-year savings — a project-specific example of turning property and utility data into a business case." /><div className="mt-8"><CTAButton href="/case-studies/bi-production-works" variant="dark">View B.I. Production Works</CTAButton></div></Reveal>
          <Reveal delay={0.08}><CaseStudyFeature caseStudy={caseStudies[0]} /></Reveal>
        </div>
      </section>
      <section className="site-section px-5 sm:px-6 md:px-10">
        <div className="mx-auto max-w-7xl"><Reveal><SectionHeader eyebrow="Why Adion" title="Why Adion?" /></Reveal><div className="mt-12 grid divide-y divide-[#482366]/14 border-y border-[#482366]/14 md:grid-cols-3 md:divide-x md:divide-y-0">{[["Field-tested experience", "Power experience shaped in demanding operating environments."], ["Design that fits", "Solar, storage, and equipment selected around the property and the goal."], ["Local accountability", "A Madison-based team with a permanent local presence."]].map(([title, copy]) => <article key={title} className="py-8 md:px-8 md:first:pl-0"><h3 className="font-serif text-3xl font-semibold text-[#241034]">{title}</h3><p className="mt-4 leading-7 text-[#665a69]">{copy}</p></article>)}</div></div>
      </section>
      <ProcessSteps title="From power bill to solar plan." steps={[{ title: "Send your address + recent power bill", copy: "Start with the property and actual utility context." }, { title: "We evaluate the property, usage, and options", copy: "Adion reviews the site, goals, solar, storage, and equipment fit." }, { title: "Review the recommended system and projected economics", copy: "See the proposed system and project-specific numbers before deciding." }]} />
      <FinalCTA title="See what solar could look like for your property." copy="Start with your address and power bill. We’ll take it from there." href="/contact" label="Get My Solar Estimate" />
    </>
  );
}
