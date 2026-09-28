import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Stat } from "@/lib/types";

export function ProofMetrics({ stats }: { stats: Stat[] }) {
  return (
    <section className="site-section relative overflow-hidden bg-[#241034] px-5 text-white sm:px-6 md:px-10">
      <div className="sunburst-motion absolute -left-20 bottom-0 size-72 rounded-full opacity-16 sunburst-gradient" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeader
            light
            eyebrow="Verified proof"
            title="Specific numbers carry more trust than big promises."
            copy="Published project metrics stay tied to verified information, and savings language remains careful when property-specific data is not available."
          />
        </Reveal>
        <div className="grid border-y border-white/16 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <Reveal key={`${stat.value}-${stat.label}`} delay={index * 0.06}>
              <div
                className={`metric-cell min-h-44 border-white/16 py-8 sm:px-8 ${
                  index < stats.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""
                } ${index % 2 === 0 ? "sm:pl-0" : ""}`}
              >
                <p className="font-mono text-4xl font-medium tabular-nums text-[#fbad18] sm:text-5xl xl:text-6xl">{stat.value}</p>
                <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-white">{stat.label}</p>
                {stat.detail && <p className="mt-3 max-w-xs text-white/58">{stat.detail}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
