import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";

type FinalCTAProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  href?: string;
  label?: string;
};

export function FinalCTA({
  eyebrow = "Next step",
  title,
  copy,
  href = "/contact",
  label = "Request Estimate",
}: FinalCTAProps) {
  return (
    <section className="site-section px-5 sm:px-6 md:px-10">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#241034] p-2 text-white ring-1 ring-white/10 sm:rounded-[2.4rem]">
          <div className="sunburst-motion absolute -right-20 -top-20 size-80 rounded-full opacity-24 sunburst-gradient" />
          <div className="absolute -left-24 bottom-0 size-64 rounded-full bg-[#911a4b]/22 blur-3xl" />
          <div className="relative rounded-[1.35rem] bg-white/[0.045] px-5 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:rounded-[1.9rem] sm:px-7 sm:py-14 md:px-12 md:py-20">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#fbad18]">{eyebrow}</p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="section-title max-w-4xl font-serif font-semibold">{title}</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">{copy}</p>
              </div>
              <CTAButton href={href} variant="primary">{label}</CTAButton>
            </div>
            <div className="cta-energy-line" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
