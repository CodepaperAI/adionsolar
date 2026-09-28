import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { navItems, serviceAreas, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#241034] px-6 py-16 text-white md:px-10">
      <div className="absolute -right-24 -top-24 size-80 rounded-full opacity-18 sunburst-gradient" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_1fr_1fr]">
        <div>
          <BrandMark light />
          <p className="mt-6 max-w-md text-lg leading-8 text-white/64">
            Field-tested solar. Designed for Georgia homes and businesses.
          </p>
          <div className="mt-8 grid gap-2 text-sm text-white/68">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.address}</span>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-white/42">Pages</p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/72 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/resources" className="text-white/72 transition-colors hover:text-white">
              Resources
            </Link>
            <Link href="/service-areas" className="text-white/72 transition-colors hover:text-white">
              Service Areas
            </Link>
            <Link href="/contact" className="text-white/72 transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-white/42">Service Areas</p>
          <div className="mt-5 grid gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="text-white/72 transition-colors hover:text-white"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-7 text-xs uppercase tracking-[0.2em] text-white/38 md:flex-row md:items-center md:justify-between">
        <span>Adion Solar. A B.I. Company.</span>
        <span>Field-tested solar for Georgia properties.</span>
      </div>
    </footer>
  );
}
