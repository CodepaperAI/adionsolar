import { Reveal } from "@/components/Reveal";

type CredibilityLineProps = {
  items: string[];
};

export function CredibilityLine({ items }: CredibilityLineProps) {
  return (
    <section className="bg-[#fffdf8] px-6 py-14 md:px-10">
      <div className="mx-auto max-w-7xl border-y border-[#482366]/12">
        <div className="grid divide-y divide-[#482366]/12 md:grid-cols-5 md:divide-x md:divide-y-0">
          {items.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="py-5 text-sm font-black uppercase tracking-[0.18em] text-[#482366]/72 md:px-5">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
