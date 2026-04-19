import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Three Circles' interior design services — from full design to space planning, furniture selection, color consultation, and project management.",
};

const services = [
  {
    title: "Interior Design",
    summary:
      "Comprehensive design for residential and commercial spaces — concept through completion.",
    details: [
      "Full-room and whole-home transformations",
      "Commercial office, retail, and hospitality interiors",
      "Custom millwork, lighting, and material specification",
    ],
    segments: ["Residential", "Commercial"],
  },
  {
    title: "Space Planning",
    summary:
      "Strategic layout design that maximizes function, flow, and visual harmony.",
    details: [
      "Floor plan optimization and furniture placement",
      "Circulation and accessibility analysis",
      "Open-concept and adaptive reuse planning",
    ],
    segments: ["Residential", "Commercial"],
  },
  {
    title: "Furniture Selection",
    summary:
      "Curated sourcing of furniture, textiles, and accessories that match your vision and budget.",
    details: [
      "Custom and trade-exclusive furniture sourcing",
      "Budget-aligned procurement strategies",
      "Delivery and white-glove installation coordination",
    ],
    segments: ["Residential", "Commercial"],
  },
  {
    title: "Color Consultation",
    summary:
      "Expert palettes that set the right mood, enhance natural light, and create visual cohesion.",
    details: [
      "Whole-home or single-room color strategies",
      "Material and finish pairing guidance",
      "Light-responsive color testing",
    ],
    segments: ["Residential", "Commercial"],
  },
  {
    title: "Project Management",
    summary:
      "End-to-end coordination so your project stays on time, on budget, and stress-free.",
    details: [
      "Vendor and contractor coordination",
      "Timeline and milestone tracking",
      "Budget management and progress reporting",
    ],
    segments: ["Residential", "Commercial"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-light py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            Our <span className="text-brand-red">Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed">
            We offer a full spectrum of interior design services for homeowners, business owners,
            developers, and architects — from initial concept to final installation.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 space-y-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col gap-10 md:flex-row md:items-start ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Visual placeholder */}
              <div className="flex-shrink-0 md:w-2/5">
                <div className="aspect-[4/3] rounded-xl bg-surface-light" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="font-heading text-2xl md:text-3xl font-bold">{s.title}</h2>
                <p className="mt-4 text-text-secondary leading-relaxed">{s.summary}</p>

                <ul className="mt-6 space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.segments.map((seg) => (
                    <span
                      key={seg}
                      className="rounded-full border border-muted/40 px-3 py-1 text-xs font-medium text-text-secondary"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Model */}
      <section className="bg-surface-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            How We <span className="text-brand-red">Work Together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Every engagement starts with a conversation. We learn about your space, your goals,
            and your timeline, then propose a scope and plan that fits.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-md bg-brand-red px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-red/90 transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
