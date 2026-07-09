import Section from "@/components/ui/Section";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <Section>
      <div className="pt-24 pb-32">
        <p className="text-l font-bold uppercase tracking-[0.3em] text-(--primary)">
          Meet {siteConfig.ownerName}
        </p>
        <h1 className="mt-4 max-w-4xl font-heading text-5xl font-black uppercase leading-tight text-white md:text-7xl">
          Family-Owned. Community Trusted.
        </h1>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-112 overflow-hidden rounded-lg border border-white/10 bg-(--surface)">
            <Image
              src={siteConfig.aboutImage}
              alt={`${siteConfig.name} owner in the repair shop`}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="rounded-xl object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
          </div>

          <div className="max-w-xl">
            <p className="text-lg leading-8 text-white/72">
              {siteConfig.name} is built around straightforward service, careful
              diagnostics, and repairs customers can feel confident about. From
              routine maintenance to bigger drivetrain and electrical issues,
              the goal is simple: explain what is happening, recommend what your
              vehicle actually needs, and do the work right.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Our owner Pilav stays close to the day-to-day work in the shop,
              making sure every customer gets clear communication, fair
              recommendations, and dependable repairs before the keys are handed
              back.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-(--surface) p-5">
                <p className="font-heading text-3xl font-black text-white">
                  45+
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
                  Years serving drivers
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-(--surface) p-5">
                <p className="font-heading text-3xl font-black text-white">
                  ASE
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
                  Certified technicians
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-(--surface) p-5">
                <p className="font-heading text-3xl font-black text-white">
                  Local
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
                  Family owned shop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
