import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { Reveal } from "@/components/Reveal";
import { audiencePaths } from "@/lib/site-data";

export function AudiencePathCards() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.68fr_1.32fr]">
        <Reveal>
          <div className="sticky top-32">
            <p className="mb-5 inline-flex rounded-full bg-[#482366]/8 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#482366]">
              Choose the path
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-none text-[#241034] md:text-6xl">
              Start with the path that matches your project.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#665a69]">
              Homeowners, business operators, and product buyers each get a
              focused route instead of sorting through the whole solar world at once.
            </p>
          </div>
        </Reveal>
        <div className="divide-y divide-[#482366]/14">
          {audiencePaths.map((path, index) => (
            <Reveal key={path.href} delay={index * 0.07}>
              <Link
                href={path.href}
                className="group grid gap-6 py-8 md:grid-cols-[0.72fr_1fr_auto] md:items-center"
              >
                <div className="relative min-h-[260px] overflow-hidden rounded-[1.4rem] bg-[#241034] md:min-h-[320px]">
                  <Image
                    src={path.image.src}
                    alt={path.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 34vw"
                    className="object-cover transition-transform duration-700 bezier-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241034]/52 to-transparent" />
                  <div className="image-panel-scan" />
                </div>
                <div>
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#f78c2d]">
                    {path.eyebrow}
                  </p>
                  <h3 className="mt-4 font-serif text-4xl font-semibold leading-none text-[#241034] md:text-5xl">
                    {path.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-[#665a69]">{path.copy}</p>
                </div>
                <span className="grid size-12 place-items-center rounded-full bg-[#482366] text-white transition-transform duration-700 bezier-smooth group-hover:translate-x-1">
                  <ArrowIcon className="size-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
