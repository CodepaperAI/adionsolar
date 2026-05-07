import { CaseStudyFeature } from "@/components/CaseStudyFeature";
import { CTAButton } from "@/components/CTAButton";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroStage } from "@/components/HeroStage";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies, heroImages, products, serviceAreas } from "@/lib/site-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Solar Resources For Estimates, Products, and Planning",
  description:
    "Adion Solar resources for home estimates, business solar planning, product datasheets, case studies, and Georgia service areas.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <HeroStage
        eyebrow="Resources"
        title="Solar resources for estimates, equipment, and project planning."
        copy="Find the right starting point for home solar, commercial solar, product guidance, case proof, and local Georgia service-area requests."
        image={heroImages.products}
        primaryHref="/contact"
        primaryLabel="Request Estimate"
        secondaryHref="/products"
        secondaryLabel="View Products"
      />
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Start here"
              title="A cleaner way to collect what you need before the first call."
              copy="Each resource points to the correct request path so Adion can respond with useful context."
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Home estimate checklist",
                copy: "Address, utility bill range, roof questions, battery interest, and timing.",
                href: "/contact?type=home",
                label: "Home Estimate",
              },
              {
                title: "Business solar planning",
                copy: "Utility usage, property type, timeline, uptime needs, incentives, and financing questions.",
                href: "/contact?type=business",
                label: "Business Estimate",
              },
              {
                title: "Product guidance",
                copy: "Panel, inverter, battery, datasheet, compatibility, and warranty questions.",
                href: "/contact?type=product",
                label: "Ask Product Question",
              },
              {
                title: "Purchase orders",
                copy: "Product, quantity, company, PO details, and bulk pricing requests.",
                href: "/contact?type=po",
                label: "Submit PO",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-[1.6rem] bg-white/75 p-7 ring-1 ring-[#482366]/8 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
                  <h2 className="font-serif text-4xl font-semibold leading-none text-[#241034]">{item.title}</h2>
                  <p className="mt-5 leading-7 text-[#665a69]">{item.copy}</p>
                  <div className="mt-auto pt-7">
                    <CTAButton href={item.href} variant="dark">
                      {item.label}
                    </CTAButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#fffdf8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Proof and products"
              title="Use verified case results and equipment details together."
              copy="Project proof helps shape expectations, while product resources help buyers understand panels, inverters, batteries, and support paths."
            />
          </Reveal>
          <div className="mt-12 grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <CaseStudyFeature caseStudy={caseStudies[0]} />
            </Reveal>
            <div className="grid gap-4">
              {products.slice(0, 3).map((product, index) => (
                <Reveal key={product.name} delay={index * 0.05}>
                  <article className="rounded-[1.5rem] bg-[#fbf6ec] p-6 ring-1 ring-[#482366]/8">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#f78c2d]">
                      {product.category}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl font-semibold leading-none text-[#241034]">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#665a69]">{product.description}</p>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={0.18}>
                <CTAButton href="/products" variant="dark">
                  View Product Resources
                </CTAButton>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Local areas"
              title="Georgia service-area pages keep local requests close to the property."
              copy="Madison, Lake Oconee, Greensboro, and Eatonton routes are ready for local proof and photography as Adion approves them."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceAreas.map((area, index) => (
              <Reveal key={area.slug} delay={index * 0.05}>
                <article className="rounded-[1.5rem] bg-white/75 p-6 ring-1 ring-[#482366]/8 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
                  <h3 className="font-serif text-3xl font-semibold leading-none text-[#241034]">{area.name}</h3>
                  <p className="mt-4 leading-7 text-[#665a69]">{area.intro}</p>
                  <div className="mt-6">
                    <CTAButton href={`/service-areas/${area.slug}`} variant="dark">
                      View Area
                    </CTAButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA
        title="Not sure which resource fits?"
        copy="Start with the main contact path and Adion will route the request to the right next step."
        href="/contact"
        label="Contact Adion"
      />
    </>
  );
}
