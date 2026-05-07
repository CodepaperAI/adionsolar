import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import type { HeroVisual, Stat } from "@/lib/types";

type HeroStageProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: HeroVisual;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  stats?: Stat[];
};

export function HeroStage({
  eyebrow,
  title,
  copy,
  image,
  primaryHref = "/contact",
  primaryLabel = "Request Estimate",
  secondaryHref,
  secondaryLabel,
  stats = [],
}: HeroStageProps) {
  return (
    <section className="relative isolate flex min-h-[96dvh] max-w-full overflow-hidden bg-[#241034] px-6 pb-10 pt-32 text-white md:px-10 md:pt-40">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="hero-image-motion object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,16,52,0.94)_0%,rgba(36,16,52,0.76)_38%,rgba(36,16,52,0.2)_72%,rgba(36,16,52,0.44)_100%)]" />
      <div className="solar-glow-motion absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(247,140,45,0.34),transparent_28%),linear-gradient(180deg,rgba(36,16,52,0.18),rgba(36,16,52,0.72))]" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#fbf6ec] to-transparent" />
      <div className="relative z-[2] mx-auto flex w-full max-w-7xl flex-col justify-center md:justify-end">
        <div className="w-full max-w-[21rem] pb-10 sm:max-w-[680px] md:max-w-5xl md:pb-16">
          <p className="mb-6 inline-flex rounded-full bg-white/12 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#fbad18] ring-1 ring-white/16">
            {eyebrow}
          </p>
          <h1 className="max-w-full whitespace-normal font-serif text-[2.35rem] font-semibold leading-[0.94] text-white sm:text-5xl md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-full text-base leading-7 text-white/76 sm:text-lg md:max-w-2xl md:text-xl md:leading-9">{copy}</p>
          <div className="mt-9 flex max-w-[340px] flex-col gap-3 sm:max-w-none sm:flex-row">
            <CTAButton href={primaryHref}>{primaryLabel}</CTAButton>
            {secondaryHref && secondaryLabel && (
              <CTAButton href={secondaryHref} variant="ghost">
                {secondaryLabel}
              </CTAButton>
            )}
          </div>
          {stats.length > 0 && (
            <div className="mt-10 hidden max-w-4xl grid-cols-2 border-y border-white/16 sm:grid md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="metric-cell border-white/16 py-5 pr-4 odd:border-r md:border-r md:last:border-r-0"
                >
                  <p className="font-mono text-4xl font-medium tabular-nums text-[#fbad18]">{stat.value}</p>
                  <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="float-slow mb-2 ml-auto hidden rounded-full bg-white/12 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-white/75 ring-1 ring-white/16 md:block">
          {image.label}
        </div>
      </div>
    </section>
  );
}
