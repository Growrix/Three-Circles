import Link from "next/link";

const services = [
  {
    title: "Interior Design",
    summary: "Full-service residential and commercial interior design tailored to your lifestyle and brand.",
  },
  {
    title: "Space Planning",
    summary: "Optimized layouts that balance function, flow, and aesthetic appeal for any room or building.",
  },
  {
    title: "Furniture Selection",
    summary: "Curated furniture and décor sourced to match your vision, budget, and timeline.",
  },
  {
    title: "Color Consultation",
    summary: "Expert color palettes that set the right mood, enhance natural light, and unify your space.",
  },
  {
    title: "Project Management",
    summary: "End-to-end coordination of vendors, timelines, and budgets so you can focus on what matters.",
  },
];

const featuredWork = [
  {
    title: "Modern Loft Renovation",
    type: "Residential",
    image: "/images/portfolio-placeholder-1.jpg",
  },
  {
    title: "Corporate Headquarters",
    type: "Commercial",
    image: "/images/portfolio-placeholder-2.jpg",
  },
  {
    title: "Boutique Hotel Lobby",
    type: "Commercial",
    image: "/images/portfolio-placeholder-3.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface-light">
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-40 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Transforming Spaces Into
            <br />
            <span className="text-brand-red">Inspiring Environments</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed">
            We combine innovative design solutions with personalized service, ensuring every
            project is tailored to your specific needs and preferences.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-brand-red px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-red/90 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="rounded-md border-2 border-brand-black px-8 py-3.5 text-base font-semibold text-brand-black hover:bg-brand-black hover:text-white transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">
            What We <span className="text-brand-red">Offer</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-text-secondary">
            Comprehensive interior design services for residential and commercial spaces.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-muted/30 bg-brand-white p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{s.summary}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-red hover:underline"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Built on <span className="text-brand-red">Strong Values</span>
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {["Creativity", "Quality", "Integrity", "Collaboration"].map((v) => (
              <div key={v}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10">
                  <span className="font-heading text-xl font-bold text-brand-red">
                    {v.charAt(0)}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold">{v}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">
            Featured <span className="text-brand-red">Projects</span>
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredWork.map((p) => (
              <div
                key={p.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-light"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
                    {p.type}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-semibold">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-brand-red hover:underline"
            >
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-black py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Ready to Transform <span className="text-brand-red">Your Space</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Whether you&apos;re redesigning a room or planning a full commercial build-out, we&apos;re
            here to help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-md bg-brand-red px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-red/90 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
