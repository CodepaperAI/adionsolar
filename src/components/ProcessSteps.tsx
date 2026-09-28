import { Reveal } from "@/components/Reveal";

type ProcessStepsProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  steps: {
    title: string;
    copy: string;
  }[];
  dark?: boolean;
};

export function ProcessSteps({ eyebrow = "Process", title, copy, steps, dark = false }: ProcessStepsProps) {
  return (
    <section className={`site-section ${dark ? "bg-[#241034] text-white" : "bg-[#fffdf8] text-[#241034]"} px-5 sm:px-6 md:px-10`}>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p
              className={`mb-5 inline-flex rounded-full px-4 py-2 text-[0.67rem] font-black uppercase tracking-[0.24em] ${
                dark ? "bg-white/10 text-[#fbad18]" : "bg-[#482366]/8 text-[#482366]"
              }`}
            >
              {eyebrow}
            </p>
            <h2 className="section-title font-serif font-semibold">{title}</h2>
            {copy && <p className={`mt-6 max-w-2xl text-lg leading-8 ${dark ? "text-white/68" : "text-[#665a69]"}`}>{copy}</p>}
          </div>
        </Reveal>
        <div className={`relative mt-12 grid gap-4 ${steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          <div className={`absolute left-0 right-0 top-10 hidden h-px lg:block ${dark ? "bg-white/14" : "bg-[#482366]/14"}`} />
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <article className={`relative h-full rounded-[1.6rem] p-7 ring-1 transition-transform duration-700 bezier-smooth hover:-translate-y-1 ${
                dark
                  ? "bg-white/8 ring-white/10"
                  : "bg-[#fbf6ec] ring-[#482366]/8"
              }`}>
                <div className={`grid size-12 place-items-center rounded-full font-mono text-sm font-medium tabular-nums ${
                  dark ? "bg-[#f78c2d] text-[#241034]" : "bg-[#482366] text-white"
                }`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-7 font-serif text-3xl font-semibold leading-none">{step.title}</h3>
                <p className={`mt-4 leading-7 ${dark ? "text-white/66" : "text-[#665a69]"}`}>{step.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
