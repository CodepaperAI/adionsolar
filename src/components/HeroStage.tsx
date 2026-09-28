import Image from "next/image";
import Link from "next/link";
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
  tertiaryHref?: string;
  tertiaryLabel?: string;
  microcopy?: string;
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
  tertiaryHref,
  tertiaryLabel,
  microcopy,
  stats = [],
}: HeroStageProps) {
  return (
    <section className="relative isolate flex min-h-[min(900px,100svh)] max-w-full overflow-hidden bg-[#241034] px-5 pb-8 pt-28 text-white sm:px-6 md:min-h-[min(960px,96svh)] md:px-10 md:pb-10 md:pt-40">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="hero-image-motion object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,16,52,0.94)_0%,rgba(36,16,52,0.76)_38%,rgba(36,16,52,0.2)_72%,rgba(36,16,52,0.44)_100%)]" />
      <div className="solar-glow-motion absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(247,140,45,0.34),transparent_28%),linear-gradient(180deg,rgba(36,16,52,0.18),rgba(36,16,52,0.72))]" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#fbf6ec] to-transparent" />
      <div className="relative z-[2] mx-auto flex w-full max-w-7xl flex-col justify-center md:justify-end">
        <div className="w-full max-w-[680px] pb-8 md:max-w-5xl md:pb-16">
          <p className="mb-6 inline-flex rounded-full bg-white/12 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#fbad18] ring-1 ring-white/16">
            {eyebrow}
          </p>
          <h1 className="display-title max-w-[17ch] whitespace-normal font-serif font-semibold text-white">
            {title}
          </h1>
          <p className="body-copy mt-5 max-w-2xl text-white/80 md:mt-6">{copy}</p>
          <div className="mt-7 flex w-full flex-col gap-3 min-[430px]:w-auto min-[430px]:flex-row md:mt-9">
            <CTAButton href={primaryHref}>{primaryLabel}</CTAButton>
            {secondaryHref && secondaryLabel && (
              <CTAButton href={secondaryHref} variant="ghost">
                {secondaryLabel}
              </CTAButton>
            )}
          </div>
          {(tertiaryHref && tertiaryLabel) || microcopy ? (
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/72">
              {tertiaryHref && tertiaryLabel ? <Link href={tertiaryHref} className="font-bold underline decoration-white/30 underline-offset-4 transition hover:text-white">{tertiaryLabel}</Link> : null}
              {microcopy ? <span>{microcopy}</span> : null}
            </div>
          ) : null}
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
