import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { siteData } from "@/lib/site-data";

export default function HomePage() {
  const featuredServices = siteData.services.slice(0, 4);
  const featuredProjects = siteData.projects.slice(0, 3);

  return (
    <>
      <section className="section-space pt-10 md:pt-14">
        <div className="page-shell">
          <div className="hero-stage">
            <div className="hero-orb hero-orb--one" />
            <div className="hero-orb hero-orb--two" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <Reveal>
                <p className="section-kicker">{siteData.home.eyebrow}</p>
                <h1 className="section-title">
                  Designing spaces with <span className="accent-text">warmth, drama, and precision.</span>
                </h1>
                <p className="section-copy max-w-xl">{siteData.home.description}</p>

                <ul className="mt-8 space-y-3">
                  {siteData.home.trustPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-secondary-theme">
                      <span className="tag mt-0.5 px-2 py-0.5">+</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact" className="button-primary">
                    Start Your Project
                  </Link>
                  <Link href="/portfolio" className="button-secondary">
                    Explore the Portfolio
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {siteData.home.stats.map((stat, index) => (
                    <Reveal key={stat.label} delay={(index + 1) as 1 | 2 | 3} className="metric-card">
                      <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
                      <p className="mt-2 text-sm leading-6 text-secondary-theme">{stat.label}</p>
                    </Reveal>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div className="hero-image-grid">
                  <div className="image-frame min-h-[26rem] md:min-h-[34rem]">
                    <Image
                      src={siteData.home.heroImages[0].src}
                      alt={siteData.home.heroImages[0].alt}
                      fill
                      className="object-cover"
                      priority
                      sizes="(min-width: 1024px) 34vw, 100vw"
                    />
                  </div>

                  <div className="grid gap-4">
                    <div className="image-frame min-h-[13rem]">
                      <Image
                        src={siteData.home.heroImages[1].src}
                        alt={siteData.home.heroImages[1].alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 20vw, 100vw"
                      />
                    </div>

                    <div className="surface-panel radius-lg p-6">
                      <span className="tag">Client Perspective</span>
                      <p className="mt-4 text-lg leading-8 text-primary-theme">
                        {siteData.home.testimonial.quote}
                      </p>
                      <p className="mt-5 text-sm font-semibold text-primary-theme">
                        {siteData.home.testimonial.author}
                      </p>
                      <p className="text-sm text-secondary-theme">{siteData.home.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionIntro
            eyebrow="Services"
            title="Creative direction backed by delivery discipline."
            accent="delivery discipline."
            description="Our process is hands-on enough to protect the design intent and structured enough to keep implementation moving cleanly."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredServices.map((service, index) => (
              <Reveal key={service.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <article className="service-card h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="tag">{service.segments[0]}</span>
                      <h3 className="mt-4 font-heading text-2xl font-semibold">{service.title}</h3>
                    </div>
                    <span className="text-sm font-semibold text-secondary-theme">0{index + 1}</span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-secondary-theme">{service.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {service.details.slice(0, 2).map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm leading-6 text-secondary-theme">
                        <span className="mt-2 h-2 w-2 rounded-full bg-brand-red" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/services" className="button-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="image-frame min-h-[28rem] md:min-h-[38rem]">
              <Image
                src={siteData.projects[1].image}
                alt={siteData.projects[1].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={1}>
            <SectionIntro
              eyebrow="Featured Project"
              title={siteData.projects[1].title}
              description={siteData.projects[1].summary}
            />
            <div className="surface-card radius-lg mt-8 p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="tag">{siteData.projects[1].category}</span>
                <span className="text-sm text-secondary-theme">{siteData.projects[1].location}</span>
              </div>
              <p className="mt-5 text-base leading-7 text-secondary-theme">
                We treated the workplace like a hospitality environment: softer zones for conversation, stronger zoning for focused work, and a visual rhythm that keeps the brand present without turning the office into a billboard.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/portfolio" className="button-primary">
                  See More Work
                </Link>
                <Link href="/contact" className="button-secondary">
                  Discuss a Similar Brief
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionIntro
            eyebrow="Selected Portfolio"
            title="A mix of residential calm and commercial edge."
            accent="commercial edge."
            description="Different programs, same design standard: thoughtful movement, tactile materials, and a point of view strong enough to be memorable."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.title} delay={(index + 1) as 1 | 2 | 3}>
                <article className="project-card group">
                  <div className="project-card__media image-frame">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 30vw, 100vw"
                    />
                    <div className="project-card__overlay" />
                    <div className="project-card__content">
                      <span className="tag">{project.category}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="mt-2 text-sm text-inverse-soft-theme">{project.location}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/portfolio" className="button-secondary">
              Browse the Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <Reveal>
            <div className="surface-inverse radius-xl overflow-hidden px-6 py-12 md:px-10 md:py-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="section-kicker">Ready to Begin</p>
                  <h2 className="section-title section-title--compact text-inverse-theme">
                    Bring sharper vision, stronger flow, and more atmosphere into the next iteration of your space.
                  </h2>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link href="/contact" className="button-primary">
                    Schedule a Consultation
                  </Link>
                  <Link href="/services" className="button-secondary">
                    Review Services
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
