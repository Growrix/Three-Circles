import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Three Circles — our mission, values, and design process that transforms interior spaces for residential and commercial clients.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-space pt-10 md:pt-14">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionIntro
              eyebrow={siteData.about.eyebrow}
              title={siteData.about.title}
              accent="layered interiors."
              description={siteData.about.description}
            />
            <p className="mt-8 max-w-xl text-base leading-7 text-(--text-secondary)">
              {siteData.about.story}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="image-frame min-h-[26rem] md:min-h-[36rem]">
              <Image
                src={siteData.about.image}
                alt="Softly lit bedroom suite with tailored furniture and layered textiles."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="surface-card rounded-[var(--radius-lg)] p-8 md:p-9">
              <span className="tag">Mission</span>
              <h2 className="mt-5 text-3xl font-semibold">Design with character and practical intelligence.</h2>
              <p className="mt-5 text-base leading-7 text-(--text-secondary)">{siteData.about.mission}</p>
            </article>
          </Reveal>
          <Reveal delay={1}>
            <article className="surface-card rounded-[var(--radius-lg)] p-8 md:p-9">
              <span className="tag">Vision</span>
              <h2 className="mt-5 text-3xl font-semibold">Create spaces people remember because they feel resolved.</h2>
              <p className="mt-5 text-base leading-7 text-(--text-secondary)">{siteData.about.vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionIntro
            eyebrow="Core Values"
            title="The studio standards that shape each decision."
            accent="each decision."
            description="From first concept to final install, these principles keep the work aligned and the execution honest."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {siteData.values.map((value, index) => (
              <Reveal key={value.name} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <article className="service-card h-full">
                  <span className="tag">0{index + 1}</span>
                  <h3 className="mt-5 text-2xl font-semibold">{value.name}</h3>
                  <p className="mt-4 text-base leading-7 text-(--text-secondary)">{value.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionIntro
            eyebrow="Process"
            title="A delivery rhythm that protects the creative intent."
            accent="creative intent."
            description="Each stage has a clear purpose: reduce ambiguity, improve decision quality, and keep momentum without rushing the work."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {siteData.process.map((step, index) => (
              <Reveal key={step.step} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <article className="surface-card h-full rounded-[var(--radius-lg)] p-7">
                  <p className="text-4xl font-semibold text-brand-red">{step.step}</p>
                  <h3 className="mt-5 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-(--text-secondary)">{step.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="page-shell">
          <Reveal>
            <div className="surface-inverse rounded-[var(--radius-xl)] px-6 py-12 text-center md:px-10">
              <p className="section-kicker">Collaboration</p>
              <h2 className="section-title section-title--compact text-(--text-inverse)">
                Bring us in when the space needs more than decoration.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-(--text-inverse-soft)">
                We work best where aesthetics, flow, and delivery constraints all need to be solved together.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="button-primary">
                  Start a Conversation
                </Link>
                <Link href="/services" className="button-secondary">
                  Review Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
