type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, copy, light = false }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-5 inline-flex rounded-full px-4 py-2 text-[0.67rem] font-black uppercase tracking-[0.24em] ${
          light ? "bg-white/10 text-white/70" : "bg-[#482366]/8 text-[#482366]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-4xl font-semibold leading-[0.96] md:text-6xl ${
          light ? "text-white" : "text-[#241034]"
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p className={`mt-6 max-w-2xl text-lg leading-8 ${light ? "text-white/68" : "text-[#665a69]"}`}>
          {copy}
        </p>
      )}
    </div>
  );
}
