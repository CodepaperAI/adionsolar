"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { trackEvent } from "@/lib/analytics";
import type { Product } from "@/lib/types";

export function ProductGrid({
  products,
  animated = false,
}: {
  products: Product[];
  animated?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="divide-y divide-[#482366]/14">
      {products.map((product, index) => (
        <motion.article
          key={product.name}
          className="group grid gap-7 py-10 md:grid-cols-[0.9fr_1.1fr] md:items-center"
          initial={animated && !reduceMotion ? { opacity: 0.9, y: 34 } : false}
          whileInView={animated && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.68, delay: index * 0.12, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className={`relative min-h-[320px] overflow-hidden rounded-[1.5rem] bg-[#241034] ${index % 2 === 1 ? "md:order-2" : ""}`}>
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 44vw"
              className="object-cover transition-transform duration-700 bezier-smooth group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241034]/64 via-transparent to-transparent" />
            <div className="image-panel-scan" />
            <div className="absolute left-5 top-5 rounded-full bg-[#fbf6ec]/90 px-4 py-2 text-[0.66rem] font-black uppercase tracking-[0.22em] text-[#482366]">
              {product.category}
            </div>
            {animated && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#f78c2d]"
                initial={reduceMotion ? false : { scaleX: 0, transformOrigin: "left" }}
                whileInView={reduceMotion ? undefined : { scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.12, ease: [0.32, 0.72, 0, 1] }}
                style={{ width: "100%" }}
              />
            )}
          </div>
          <div className={index % 2 === 1 ? "md:order-1" : ""}>
            <div className="flex flex-wrap items-center gap-3">
              <p className="rounded-full bg-[#f78c2d]/14 px-4 py-2 font-mono text-sm font-medium tabular-nums text-[#482366]">{product.price}</p>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#482366]/65">
                {product.warranty}
              </p>
            </div>
            <h3 className="mt-5 font-serif text-4xl font-semibold leading-none text-[#241034] md:text-5xl">
              {product.name}
            </h3>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#665a69]">{product.description}</p>
            <ul className="mt-7 grid gap-3 text-[#665a69]">
              {product.specs.map((spec) => (
                <motion.li
                  key={spec}
                  className="flex items-center gap-3"
                  initial={animated && !reduceMotion ? { opacity: 0.9, x: -14 } : false}
                  whileInView={animated && !reduceMotion ? { opacity: 1, x: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: 0.2 + index * 0.1, ease: [0.32, 0.72, 0, 1] }}
                >
                  <span className="size-1.5 rounded-full bg-[#f78c2d]" />
                  {spec}
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href={product.shopHref}
                external
                onClick={() => trackEvent("outbound_shop_click", { product: product.name })}
              >
                View Shop
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
