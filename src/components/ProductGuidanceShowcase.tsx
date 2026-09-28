"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { heroImages, products } from "@/lib/site-data";

const chips = ["Panels", "Inverters", "Batteries", "Datasheets", "PO support"];
const rail = [
  "Choose equipment",
  "Check compatibility",
  "Request datasheet",
  "Route PO",
  "Confirm support",
];

export function ProductGuidanceShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="product-guidance"
      className="relative scroll-mt-28 overflow-hidden bg-[#241034] text-white"
    >
      <div className="absolute -right-40 top-24 size-[36rem] rounded-full opacity-[0.08] sunburst-gradient" />
      <div className="absolute -left-52 bottom-24 size-[30rem] rounded-full bg-[#911a4b]/18 blur-3xl" />
      <div className="site-section relative mx-auto grid max-w-[1500px] gap-10 px-5 sm:px-6 md:px-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-end xl:gap-16">
        <div className="max-w-[34rem] xl:pb-10">
          <SectionHeader
            light
            eyebrow="Product guidance"
            title="Equipment guidance should feel active, not like a static catalog."
            copy="The home page shows Adion's product path as a guided sequence: panels, inverters, batteries, datasheets, and PO support all moving toward the right request."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/products">View Products</CTAButton>
            <CTAButton href="/contact?type=product" variant="ghost">
              Ask Adion
            </CTAButton>
          </div>
        </div>

        <motion.div
          className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-[#160b20] ring-1 ring-white/12 shadow-[0_34px_90px_-58px_rgba(0,0,0,0.95)] sm:min-h-[520px] sm:rounded-[2rem] md:min-h-[600px]"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          <Image
            src={heroImages.products.src}
            alt={heroImages.products.alt}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,11,32,0.04),rgba(22,11,32,0.78)),radial-gradient(circle_at_76%_16%,rgba(247,140,45,0.34),transparent_32%)]" />

          <motion.div
            className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-transparent via-white/18 to-transparent"
            animate={reduceMotion ? undefined : { x: ["-120%", "900%"] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }}
          />

          <div className="absolute left-4 right-4 top-5 flex flex-wrap gap-2 sm:left-5 sm:right-5 sm:gap-3">
            {chips.map((chip, index) => (
              <motion.span
                key={chip}
                className="rounded-full bg-white/12 px-3 py-2 text-[0.6rem] font-black uppercase tracking-[0.2em] text-white ring-1 ring-white/16 backdrop-blur-md sm:px-4 sm:text-[0.66rem] sm:tracking-[0.22em]"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, index % 2 === 0 ? -8 : 8, 0],
                        opacity: [0.78, 1, 0.78],
                      }
                }
                transition={{
                  duration: 3.2 + index * 0.35,
                  repeat: Infinity,
                  ease: [0.32, 0.72, 0, 1],
                }}
              >
                {chip}
              </motion.span>
            ))}
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="mb-5 hidden max-w-lg grid-cols-3 overflow-hidden rounded-[1.25rem] bg-[#160b20]/48 text-white/78 ring-1 ring-white/12 backdrop-blur-md md:grid">
              {["Spec match", "PO ready", "Adion support"].map((item, index) => (
                <motion.div
                  key={item}
                  className="border-r border-white/10 px-5 py-4 last:border-r-0"
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.2 + index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                >
                  <span className="block text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/52">
                    Step {index + 1}
                  </span>
                  <span className="mt-2 block text-sm font-bold">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="overflow-hidden rounded-full bg-white/12 py-3 ring-1 ring-white/14 backdrop-blur-md [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex w-max gap-5 px-5 text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/76 sm:gap-8 sm:text-[0.68rem] sm:tracking-[0.22em]"
                animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                {[...rail, ...rail].map((item, index) => (
                  <span key={`${item}-${index}`} className="flex items-center gap-5 sm:gap-8">
                    {item}
                    <span className="size-1.5 rounded-full bg-[#f78c2d]" />
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 bg-[#fbf6ec] px-6 py-6 text-[#241034] md:px-10 md:py-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-2 flex flex-col justify-between gap-3 border-b border-[#482366]/12 pb-6 md:flex-row md:items-end">
            <p className="max-w-2xl text-sm font-black uppercase tracking-[0.2em] text-[#482366]/62">
              Featured equipment paths
            </p>
            <p className="max-w-xl text-sm leading-6 text-[#665a69]">
              Compare panels, inverters, batteries, datasheets, and PO support without losing the path to a real Adion request.
            </p>
          </div>
          <ProductGrid products={products.slice(0, 2)} animated />
        </div>
      </div>
    </section>
  );
}
