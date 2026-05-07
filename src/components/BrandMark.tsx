import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  light?: boolean;
};

export function BrandMark({ compact = false, light = false }: BrandMarkProps) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Adion Solar home">
      <span className="relative grid size-11 place-items-center rounded-full bg-white/85 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_16px_32px_-22px_rgba(36,16,52,0.75)] ring-1 ring-[#482366]/10">
        <span className="sunburst-gradient block size-full rounded-full transition-transform duration-700 bezier-smooth group-hover:rotate-45" />
        <span className="absolute size-3 rounded-full bg-[#fbf6ec]" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span
            className={`block text-[1.05rem] font-black uppercase tracking-[0.14em] ${
              light ? "text-white" : "text-[#482366]"
            }`}
          >
            Adion Solar
          </span>
          <span
            className={`mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.31em] ${
              light ? "text-white/62" : "text-[#482366]/62"
            }`}
          >
            A B.I. Company
          </span>
        </span>
      )}
    </Link>
  );
}
