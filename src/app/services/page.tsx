import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Three Circles' interior design services — from full design to space planning, furniture selection, color consultation, and project management.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-space pt-10 md:pt-14">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionIntro
              eyebrow="Services"
              title="Design support scaled to the complexity of the project."
              accent="complexity of the project."
              description="Whether you need full-scope transformation or targeted consulting, our services are structured to keep the creative direction clear and the implementation realistic."
            />
          </Reveal>
          <Reveal delay={1}>
            <div className="image-frame min-h-[24rem] md:min-h-[34rem]">
              <Image
                src={siteData.services[0].image}
                alt={siteData.services[0].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell space-y-8">
          {siteData.services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
              <article className="grid gap-6 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-soft)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)] md:p-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                  <div className="image-frame min-h-[20rem] md:min-h-[26rem]">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 38vw, 100vw"
                    />
                  </div>
                </div>

                <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                  <span className="tag">{service.segments.join(" / ")}</span>
                  <h2 className="mt-5 text-3xl font-semibold md:text-4xl">{service.title}</h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-secondary-theme">{service.summary}</p>

                  <ul className="mt-6 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm leading-6 text-secondary-theme">
                        <span className="mt-2 h-2 w-2 rounded-full bg-brand-red" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="page-shell">
          <Reveal>
            <div className="surface-inverse radius-xl px-6 py-12 text-center md:px-10">
              <p className="section-kicker">Engagement Model</p>
              <h2 className="section-title section-title--compact text-inverse-theme">
                We start with a real brief, not a generic package menu.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-inverse-soft-theme">
                Tell us what needs to change in the space, what constraints matter, and how quickly it needs to move. We will recommend the right engagement path from there.
              </p>
              <Link href="/contact" className="button-primary mt-8">
                Discuss Your Project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
