import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { HeroStage } from "@/components/HeroStage";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { heroImages } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Solar Service Areas in Madison & Georgia Lake Country", description: "Adion serves homes and businesses across Madison, Lake Oconee, Greensboro, Eatonton, and surrounding Georgia communities.", path: "/service-areas" });

const areas=[
  {name:"Madison",copy:"Adion’s home base, with local residential, commercial, equipment, and project support.",href:"/service-areas/madison-ga",label:"View Madison"},
  {name:"Lake Oconee",copy:"Residential solar and battery planning where roofline, aesthetics, backup, and property value deserve extra attention.",href:"/service-areas/lake-oconee",label:"View Lake Oconee"},
  {name:"Greensboro",copy:"Served from nearby Madison for residential and commercial projects.",href:"/home-solar",label:"Explore Home Solar"},
  {name:"Eatonton",copy:"Served from nearby Madison for residential and commercial projects.",href:"/commercial-solar",label:"Explore Commercial Solar"},
];

export default function ServiceAreasPage(){return <>
  <HeroStage eyebrow="Service Areas" title="Solar across Madison and Georgia’s Lake Country." copy="Adion is based in Madison and serves homes, businesses, and project buyers across the surrounding region. For most properties, the right starting point is the service — Home Solar or Commercial Solar — not a town-specific version of the same page." image={heroImages.about} primaryHref="/contact" primaryLabel="Get My Solar Estimate" />
  <section className="site-section px-5 sm:px-6 md:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]"><Reveal><SectionHeader eyebrow="Georgia Lake Country" title="Start with the property and the service you need." /></Reveal><div className="divide-y divide-[#482366]/14 border-y border-[#482366]/14">{areas.map((area,index)=><Reveal key={area.name} delay={index*.05}><Link href={area.href} className="group grid gap-3 py-7 sm:grid-cols-[0.55fr_1fr_auto] sm:items-center"><h2 className="font-serif text-3xl font-semibold text-[#241034]">{area.name}</h2><p className="leading-7 text-[#665a69]">{area.copy}</p><span className="text-sm font-black uppercase tracking-[0.15em] text-[#482366]">{area.label} →</span></Link></Reveal>)}</div></div><div className="mx-auto mt-12 flex max-w-7xl flex-wrap gap-3"><CTAButton href="/home-solar" variant="dark">Home Solar</CTAButton><CTAButton href="/commercial-solar" variant="dark">Commercial Solar</CTAButton></div></section>
  </>}
