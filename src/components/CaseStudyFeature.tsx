import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import type { CaseStudy } from "@/lib/types";

export function CaseStudyFeature({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block">
      <article className="grid overflow-hidden border-y border-[#482366]/14 py-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-10">
        <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-[#241034]">
          <Image src={caseStudy.image.src} alt={caseStudy.image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 bezier-smooth group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241034]/68 to-transparent" />
          <div className="image-panel-scan" />
          <div className="absolute bottom-6 left-6 rounded-full bg-[#fbf6ec]/90 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#482366]">
            {caseStudy.type}
          </div>
        </div>
        <div className="py-7 md:py-10">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#f78c2d]">{caseStudy.location}</p>
          <h3 className="mt-5 font-serif text-5xl font-semibold leading-none text-[#241034]">{caseStudy.title}</h3>
          <p className="mt-6 text-lg leading-8 text-[#665a69]">{caseStudy.summary}</p>
          <div className="mt-8 grid divide-y divide-[#482366]/14 border-y border-[#482366]/14 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {caseStudy.stats.map((stat) => (
              <div key={`${stat.value}-${stat.label}`} className="metric-cell py-4 sm:px-4 sm:first:pl-0">
                <p className="font-mono text-2xl font-medium tabular-nums text-[#482366]">{stat.value}</p>
                <p className="mt-1 text-[0.66rem] font-black uppercase tracking-[0.16em] text-[#665a69]">{stat.label}</p>
              </div>
            ))}
          </div>
          <span className="mt-8 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-[#482366]">
            View case detail
            <span className="grid size-9 place-items-center rounded-full bg-[#f78c2d]/18 transition-transform duration-700 bezier-smooth group-hover:translate-x-1">
              <ArrowIcon className="size-4" />
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
}
