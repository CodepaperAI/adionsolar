import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroStage } from "@/components/HeroStage";
import { ImagePanel } from "@/components/ImagePanel";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { heroImages, homeFaqs } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Home Solar & Battery Systems in Georgia",
  description: "Residential solar designed around your power bill, roofline, backup goals, and the appearance of your home.",
  path: "/home-solar",
});

const systemFactors = [
  ["Your power bill", "Your usage helps determine how much solar is worth considering and what the system needs to accomplish."],
  ["Your roofline", "Roof planes, shade, panel grouping, street visibility, conduit, and equipment placement affect both performance and appearance."],
  ["Your backup goals", "If battery backup matters, inverter selection, critical loads, storage capacity, and equipment location should be planned from the beginning."],
];

export default function HomeSolarPage() {
  return (
    <>
      <HeroStage eyebrow="Home Solar" title="Solar that works with your home — not against it." copy="A good solar system should reduce the power you need to buy from the grid without making the house feel like an afterthought. Adion designs around your electric use, roofline, backup goals, and the way the finished system will look on your property." image={heroImages.residential} primaryHref="/contact?type=home" primaryLabel="Get My Solar Estimate" />
      <section className="site-section px-5 sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><ImagePanel image={heroImages.residential} tall label="Designed around the property" /></Reveal>
          <div><Reveal><SectionHeader eyebrow="System fit" title="A better residential system starts with three things." /></Reveal><div className="mt-8 divide-y divide-[#482366]/14 border-y border-[#482366]/14">{systemFactors.map(([title, copy], index) => <Reveal key={title} delay={index * 0.05}><article className="grid gap-3 py-6 sm:grid-cols-[0.55fr_1fr]"><h2 className="font-serif text-3xl font-semibold text-[#241034]">{title}</h2><p className="leading-7 text-[#665a69]">{copy}</p></article></Reveal>)}</div></div>
        </div>
      </section>
      <section className="site-section bg-[#fffdf8] px-5 sm:px-6 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal><ImagePanel image={heroImages.residential} tall label="Roofline and curb appeal" /></Reveal>
          <Reveal delay={0.08}><SectionHeader eyebrow="Design + aesthetics" title="The best solar design is one you are comfortable looking at for decades." copy="On high-value homes — especially around Lake Oconee — aesthetics deserve the same attention as production. Panel grouping, roofline visibility, conduit, battery placement, and HOA context should be part of the design conversation before the system is sold." /></Reveal>
        </div>
      </section>
      <section className="site-section px-5 sm:px-6 md:px-10"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]"><Reveal><SectionHeader eyebrow="Home FAQ" title="Straight answers before you decide." /></Reveal><FAQAccordion faqs={homeFaqs} /></div></section>
      <FinalCTA title="Start with your roof and your power bill." copy="We’ll help you understand whether solar fits the home and what the right system could look like." href="/contact?type=home" label="Get My Solar Estimate" />
    </>
  );
}
