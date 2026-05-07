"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { trackEvent } from "@/lib/analytics";
import type { Product } from "@/lib/types";

export function ProductCatalog({ products }: { products: Product[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {products.map((product, index) => (
        <motion.article
          key={product.name}
          className="group grid min-h-full overflow-hidden rounded-[1.5rem] bg-[#fffdf8] ring-1 ring-[#482366]/12 transition-transform duration-700 bezier-smooth hover:-translate-y-1 hover:ring-[#f78c2d]/35 md:grid-cols-[0.92fr_1.08fr]"
          initial={reduceMotion ? false : { opacity: 0.9, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="relative min-h-[260px] overflow-hidden bg-[#241034] md:min-h-full">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 36vw"
              className="object-cover transition-transform duration-700 bezier-smooth group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,16,52,0.02),rgba(36,16,52,0.62))]" />
            <div className="image-panel-scan" />
            <div className="absolute left-5 top-5 rounded-full bg-[#fbf6ec]/92 px-4 py-2 text-[0.64rem] font-black uppercase tracking-[0.22em] text-[#482366]">
              {product.category}
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full origin-left bg-[#f78c2d] transition-transform duration-700 bezier-smooth group-hover:scale-x-90" />
          </div>

          <div className="flex min-h-[360px] flex-col p-6 md:p-7">
            <div className="flex flex-wrap items-center gap-3">
              <p className="rounded-full bg-[#f78c2d]/14 px-4 py-2 font-mono text-sm font-medium tabular-nums text-[#482366]">
                {product.price}
              </p>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#482366]/62">
                {product.warranty}
              </p>
            </div>

            <h3 className="mt-5 font-serif text-[2.45rem] font-semibold leading-[0.92] text-[#241034] md:text-[2.8rem]">
              {product.name}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#665a69]">{product.description}</p>

            <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#665a69]">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#f78c2d]" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
              <CTAButton
                href={product.shopHref}
                external
                onClick={() => trackEvent("outbound_shop_click", { product: product.name })}
              >
                View Specs
              </CTAButton>
              <CTAButton href={`/contact?type=product&product=${encodeURIComponent(product.name)}`} variant="dark">
                Ask Adion
              </CTAButton>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
