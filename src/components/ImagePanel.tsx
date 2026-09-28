import Image from "next/image";
import type { HeroVisual } from "@/lib/types";

type ImagePanelProps = {
  image: HeroVisual;
  priority?: boolean;
  tall?: boolean;
  label?: string;
};

export function ImagePanel({ image, priority = false, tall = false, label }: ImagePanelProps) {
  return (
    <div className="group rounded-[2rem] bg-[#482366]/8 p-2 ring-1 ring-[#482366]/8 transition-transform duration-700 bezier-smooth hover:-translate-y-1">
      <div
        className={`relative overflow-hidden rounded-[1.55rem] bg-[#241034] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] ${
          tall ? "min-h-[360px] sm:min-h-[440px] lg:min-h-[520px]" : "min-h-[300px] sm:min-h-[360px]"
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 bezier-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241034]/68 via-[#241034]/10 to-transparent" />
        <div className="image-panel-scan" />
        <div className="absolute bottom-5 left-5 rounded-full bg-[#fbf6ec]/90 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#482366]">
          {label || image.label}
        </div>
      </div>
    </div>
  );
}
