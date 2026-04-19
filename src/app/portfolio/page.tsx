import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Three Circles' portfolio of residential and commercial interior design projects.",
};

const categories = ["All", "Residential", "Commercial", "Hospitality"];

const projects = [
  {
    title: "Modern Loft Renovation",
    category: "Residential",
    location: "Brooklyn, NY",
    image: "/images/portfolio-placeholder-1.jpg",
  },
  {
    title: "Corporate Headquarters",
    category: "Commercial",
    location: "Manhattan, NY",
    image: "/images/portfolio-placeholder-2.jpg",
  },
  {
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    location: "Miami, FL",
    image: "/images/portfolio-placeholder-3.jpg",
  },
  {
    title: "Penthouse Suite",
    category: "Residential",
    location: "Los Angeles, CA",
    image: "/images/portfolio-placeholder-4.jpg",
  },
  {
    title: "Tech Startup Office",
    category: "Commercial",
    location: "San Francisco, CA",
    image: "/images/portfolio-placeholder-5.jpg",
  },
  {
    title: "Restaurant Interior",
    category: "Hospitality",
    location: "Chicago, IL",
    image: "/images/portfolio-placeholder-6.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-light py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            Our <span className="text-brand-red">Portfolio</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed">
            A curated selection of residential, commercial, and hospitality projects that
            showcase our design philosophy and attention to detail.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Category filters (static for now) */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {categories.map((c, i) => (
              <button
                key={c}
                type="button"
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-brand-red text-white"
                    : "border border-muted/40 text-text-secondary hover:border-brand-red hover:text-brand-red"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-light"
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted">{p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold text-white">
            Inspired? Let&apos;s Start <span className="text-brand-red">Your Project</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Bring your space to life with a design tailored to your style, needs, and budget.
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
