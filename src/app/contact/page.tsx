import { ContactRouterForm } from "@/components/ContactRouterForm";
import { HeroStage } from "@/components/HeroStage";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { heroImages, site } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Adion Solar",
  description:
    "Route your Adion Solar request for home estimates, business solar, product guidance, purchase orders, support, or general questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <HeroStage
        eyebrow="Request routing"
        title="What do you need help with?"
        copy="Home, business, product, PO, support, and general requests each get a smaller form with the fields Adion actually needs."
        image={heroImages.contact}
        primaryHref="#request"
        primaryLabel="Start Request"
      />
      <section id="request" className="scroll-mt-28 px-6 py-24 md:scroll-mt-32 md:px-10 md:py-32">
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
