"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { FAQ } from "@/lib/types";

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-3">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.question}
          className="rounded-[1.4rem] bg-white/72 p-2 ring-1 ring-[#482366]/8 transition-shadow duration-700 bezier-smooth hover:shadow-[0_24px_60px_-45px_rgba(72,35,102,0.55)]"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: index * 0.05, ease: [0.32, 0.72, 0, 1] }}
        >
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-6 rounded-[1rem] px-5 py-4 text-left font-semibold text-[#241034]"
            aria-expanded={open === index}
          >
            <span>{faq.question}</span>
            <span
              className={`grid size-8 shrink-0 place-items-center rounded-full bg-[#482366]/8 text-[#482366] transition-transform duration-500 bezier-smooth ${
                open === index ? "rotate-45 bg-[#f78c2d]/18" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`grid transition-all duration-700 bezier-smooth ${
              open === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-5 pb-5 leading-7 text-[#665a69]">{faq.answer}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
