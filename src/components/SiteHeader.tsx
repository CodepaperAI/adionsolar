"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { CTAButton } from "@/components/CTAButton";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-5 md:px-8">
      <div className="relative mx-auto flex w-fit max-w-[calc(100vw-2rem)] items-center gap-3 rounded-full bg-[#fffdf8]/88 p-2 pl-3 shadow-[0_20px_60px_-38px_rgba(36,16,52,0.8)] ring-1 ring-[#482366]/10 backdrop-blur-2xl lg:w-full lg:max-w-7xl lg:justify-between lg:gap-0 lg:pr-2">
        <div className="lg:hidden">
          <BrandMark compact />
        </div>
        <div className="hidden lg:block">
          <BrandMark />
        </div>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-3 text-[0.74rem] font-bold uppercase tracking-[0.14em] transition-colors duration-500 ${
                pathname === item.href
                  ? "bg-[#482366] text-white"
                  : "text-[#482366]/72 hover:bg-[#482366]/8 hover:text-[#482366]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <CTAButton href="/contact">Get My Solar Estimate</CTAButton>
        </div>
        <button
          type="button"
          className="grid size-11 shrink-0 place-items-center rounded-full shadow-[0_16px_34px_-22px_rgba(36,16,52,0.9)] lg:hidden"
          style={{
            backgroundColor: "#482366",
            color: "#ffffff",
          }}
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-700 bezier-smooth ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-700 bezier-smooth ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-4 bottom-4 top-24 z-30 overflow-y-auto rounded-[2rem] bg-[#241034]/98 p-5 text-white shadow-[0_30px_80px_-35px_rgba(36,16,52,0.9)] ring-1 ring-white/12 backdrop-blur-3xl transition-all duration-700 bezier-smooth sm:p-6 lg:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        <nav className="grid gap-3" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="rounded-[1.25rem] bg-white/8 px-5 py-3.5 text-lg font-semibold transition-transform duration-700 bezier-smooth hover:translate-x-1 sm:py-4 sm:text-xl"
              style={{ transitionDelay: `${index * 45}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          <CTAButton href="/contact" variant="primary" onClick={() => setOpen(false)}>Get My Solar Estimate</CTAButton>
          <CTAButton href="/resources" variant="ghost" onClick={() => setOpen(false)}>Resources</CTAButton>
          <CTAButton href="/service-areas" variant="ghost" onClick={() => setOpen(false)}>Service Areas</CTAButton>
        </div>
      </div>
    </header>
  );
}
