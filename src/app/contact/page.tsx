import { ContactRouterForm } from "@/components/ContactRouterForm";
import { HeroStage } from "@/components/HeroStage";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { heroImages, site } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Adion Solar | Estimates, Commercial & Equipment",
  description:
    "Contact Adion Solar in Madison, Georgia for home solar estimates, commercial analysis, equipment, volume pricing, or product support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <HeroStage
        eyebrow="Contact Adion"
        title="Tell us what you’re working on."
        copy="Considering solar for a home or business? Buying equipment? Need technical support? Contact us and we’ll route your request to the right next step."
        image={heroImages.contact}
        primaryHref="#request"
        primaryLabel="Contact Adion"
      />
      <section id="request" className="site-section scroll-mt-28 px-5 sm:px-6 md:scroll-mt-32 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Contact Adion"
              title="One page, six clean request paths."
              copy="Each option keeps the form focused so Adion gets the details needed for the right follow-up."
            />
            <div className="mt-8 grid gap-3 rounded-[2rem] bg-[#241034] p-7 text-white">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.address}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactRouterForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
