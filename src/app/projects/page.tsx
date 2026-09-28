import { CaseStudyFeature } from "@/components/CaseStudyFeature";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroStage } from "@/components/HeroStage";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies, heroImages } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Solar Projects | Commercial, Hospitality & More", description: "Explore Adion solar work across mobile production, manufacturing, commercial, hospitality, and residential applications.", path: "/projects" });

export default function ProjectsPage() {
  return <>
    <HeroStage eyebrow="Projects" title="From production sets to permanent properties." copy="Adion’s solar experience spans mobile production power, manufacturing, commercial facilities, hospitality, and residential applications. This is where that breadth belongs: in the work." image={heroImages.caseStudies} primaryHref="#portfolio" primaryLabel="Explore Projects" stats={[{value:"560+",label:"Solar-powered production trailers"},{value:"North America",label:"Field experience"}]} />
    <section className="site-section bg-[#241034] px-5 text-white sm:px-6 md:px-10"><div className="mx-auto max-w-7xl"><Reveal><SectionHeader light eyebrow="Film proving ground" title="560+ solar-powered production trailers. One demanding proving ground." copy="Adion’s roots are in mobile solar applications used across North America for film and television production — environments where equipment, loads, schedules, and reliability have to work together every day." /></Reveal></div></section>
    <section id="portfolio" className="site-section scroll-mt-28 px-5 sm:px-6 md:px-10"><div className="mx-auto max-w-7xl"><Reveal><SectionHeader eyebrow="Permanent portfolio" title="The experience moved off set." copy="Today, Adion’s permanent work includes manufacturing, commercial, hospitality, and residential applications across Georgia." /></Reveal><div className="mt-8 flex flex-wrap gap-3">{["Manufacturing","Commercial","Hospitality","Residential","Mobile production"].map(item=><span key={item} className="rounded-full bg-[#482366]/8 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#482366]">{item}</span>)}</div><div className="mt-12 grid gap-7">{caseStudies.map((item,index)=><Reveal key={item.slug} delay={index*.06}><CaseStudyFeature caseStudy={item}/></Reveal>)}</div></div></section>
    <section className="site-section bg-[#fffdf8] px-5 sm:px-6 md:px-10"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]"><Reveal><SectionHeader eyebrow="Featured project" title="B.I. Production Works — Madison, Georgia" copy="The current published project model shows a 73.4% solar offset and $413,945 in projected 25-year savings." /></Reveal><Reveal delay={.08}><CaseStudyFeature caseStudy={caseStudies[0]}/></Reveal></div></section>
    <FinalCTA title="Have a property that could be next?" copy="Start with a home estimate or request project-specific commercial analysis." href="/contact" label="Get My Solar Estimate" />
  </>;
}
