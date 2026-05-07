import { CTAButton } from "@/components/CTAButton";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroStage } from "@/components/HeroStage";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { heroImages, products } from "@/lib/site-data";
import { createMetadata, JsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Solar Panels, Inverters, Batteries, and PO Support",
  description:
    "Adion Solar product guidance for panels, Sol-Ark inverters, batteries, datasheets, technical support, and purchase-order routing.",
  path: "/products",
});

export default function ProductsPage() {
  const categoryBlocks = [
    {
      title: "Solar Panels",
      copy: "High-output modules for residential, commercial, and project buyers who need dependable production.",
      href: "#products",
    },
    {
      title: "Inverters",
      copy: "Hybrid inverter options for battery-ready homes, business systems, generators, and monitoring needs.",
      href: "#products",
    },
    {
      title: "Batteries",
      copy: "Storage options for backup power, self-consumption, and resilience planning with compatible equipment.",
      href: "#products",
    },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "Product",
      position: index + 1,
      name: product.name,
      category: product.category,
      description: product.description,
      offers: {
        "@type": "Offer",
        price: product.price.replace("$", ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: product.shopHref,
      },
    })),
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <HeroStage
        eyebrow="Product guidance"
        title="Solar panels, inverters, and batteries for homes, businesses, and project buyers."
        copy="Compare core equipment, request product guidance, download support details, or route purchase-order needs without guessing what fits."
        image={heroImages.products}
        primaryHref="#products"
        primaryLabel="View Products"
        secondaryHref="/contact?type=product"
        secondaryLabel="Request Product Guidance"
      />
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Categories"
              title="Start with the equipment family, then narrow the fit."
              copy="Panels, inverters, and batteries each affect the system differently, so the product path keeps the choices separated."
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {categoryBlocks.map((category, index) => (
              <Reveal key={category.title} delay={index * 0.05}>
                <article className="group flex h-full flex-col rounded-[1.6rem] bg-white/75 p-7 ring-1 ring-[#482366]/8 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
                  <p className="font-mono text-sm font-medium tabular-nums text-[#f78c2d]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-5 font-serif text-4xl font-semibold leading-none text-[#241034]">{category.title}</h2>
                  <p className="mt-5 leading-7 text-[#665a69]">{category.copy}</p>
                  <div className="mt-auto pt-7">
                    <CTAButton href={category.href} variant="dark">
                      View Products
                    </CTAButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#241034] px-6 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <SectionHeader
              light
              eyebrow="Guidance before buying"
              title="Not sure what you need? Ask Adion before buying."
              copy="Product, quantity, compatibility, warranty, datasheet, and bulk-pricing questions can route to a real support path before purchase."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <CTAButton href="/contact?type=product" variant="primary">
              Request Product Guidance
            </CTAButton>
          </Reveal>
        </div>
      </section>
      <section id="products" className="relative scroll-mt-28 overflow-hidden bg-[#fbf6ec] px-6 py-20 md:scroll-mt-32 md:px-10 md:py-24">
        <div className="absolute -right-48 top-10 size-[34rem] rounded-full opacity-[0.08] sunburst-gradient" />
        <div className="relative mx-auto max-w-[1500px]">
          <div className="grid gap-10 border-b border-[#482366]/12 pb-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <Reveal>
              <SectionHeader
                eyebrow="Catalog"
                title="Clean product cards with only the details buyers need first."
                copy="Each item keeps essentials visible: name, image, short description, key specs, warranty, specs path, and a direct question route."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Published details", "Show clear numbers only where confirmed."],
                  ["Compatibility", "Route questions before the wrong purchase."],
                  ["PO support", "Keep bulk and business buyers moving."],
                ].map(([title, copy]) => (
                  <div key={title} className="border-l border-[#482366]/16 pl-5">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#482366]/58">
                      {title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#665a69]">{copy}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-8">
            <ProductCatalog products={products} />
          </div>
        </div>
      </section>
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Datasheets"
              title="Request the product details that help the decision hold up."
              copy="Datasheet, warranty, compatibility, and support questions can be requested per product while final PDF assets are confirmed."
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {products.map((product, index) => (
              <Reveal key={product.name} delay={index * 0.05}>
                <article className="rounded-[1.5rem] bg-white/75 p-6 ring-1 ring-[#482366]/8 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#f78c2d]">
                    {product.category}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl font-semibold leading-none text-[#241034]">{product.name}</h3>
                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-[#665a69]">
                    <li>Datasheet request</li>
                    <li>Warranty information</li>
                    <li>Compatibility notes</li>
                    <li>Support path</li>
                  </ul>
                  <div className="mt-6">
                    <CTAButton href={`/contact?type=product&product=${encodeURIComponent(product.name)}`} variant="dark">
                      Request Datasheet
                    </CTAButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#fffdf8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {[
            {
              eyebrow: "PO and bulk",
              title: "Need bulk pricing or purchase-order support?",
              copy: "Route quantity, company, product, and PO details to Adion so procurement can keep moving.",
              href: "/contact?type=po",
              label: "Submit PO",
            },
            {
              eyebrow: "Technical support",
              title: "Need help with an existing product?",
              copy: "Send model, issue, serial details if relevant, and the support context needed for follow-up.",
              href: "/contact?type=support",
              label: "Request Support",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-[2rem] bg-[#241034] p-8 text-white ring-1 ring-white/10 md:p-10">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#fbad18]">{item.eyebrow}</p>
                <h2 className="mt-5 font-serif text-4xl font-semibold leading-none md:text-5xl">{item.title}</h2>
                <p className="mt-5 text-lg leading-8 text-white/68">{item.copy}</p>
                <div className="mt-8">
                  <CTAButton href={item.href} variant="primary">
                    {item.label}
                  </CTAButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCTA
        title="Need bulk pricing or purchase-order support?"
        copy="Submit a PO, request pricing, or ask product questions before ordering equipment."
        href="/contact?type=po"
        label="Submit PO"
      />
    </>
  );
}
