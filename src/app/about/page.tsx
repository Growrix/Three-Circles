import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Three Circles — our mission, values, and design process that transforms interior spaces for residential and commercial clients.",
};

const values = [
  {
    name: "Creativity",
    desc: "We push boundaries to deliver original, inspiring design solutions that surprise and delight.",
  },
  {
    name: "Quality",
    desc: "Every material, finish, and detail is chosen with care to ensure lasting beauty and durability.",
  },
  {
    name: "Client-Centric Approach",
    desc: "Your vision drives every decision. We listen first, design second, and refine until it feels right.",
  },
  {
    name: "Integrity",
    desc: "Transparent communication, honest timelines, and fair pricing — always.",
  },
  {
    name: "Collaboration",
    desc: "Great spaces emerge from great partnerships between clients, designers, and craftspeople.",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We learn about your goals, preferences, lifestyle, and budget." },
  { step: "02", title: "Concept", desc: "We develop mood boards, layouts, and material palettes for your review." },
  { step: "03", title: "Design", desc: "Detailed plans, 3D renderings, and specifications bring the vision to life." },
  { step: "04", title: "Delivery", desc: "We manage procurement, installation, and finishing so you enjoy the result." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-light py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            The Story Behind <span className="text-brand-red">Three Circles</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed">
            We are an interior design firm driven by creativity, professionalism, and a genuine
            commitment to client satisfaction — transforming spaces into inspiring environments
            that enhance the way people live and work.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              Our <span className="text-brand-red">Mission</span>
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              To create innovative and functional interior spaces that reflect our clients&apos;
              unique style and needs, while delivering exceptional service and quality
              craftsmanship.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">
              Our <span className="text-brand-red">Vision</span>
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              To be a leading interior design firm known for our creativity, professionalism, and
              commitment to client satisfaction, transforming spaces into inspiring environments
              that enhance the way people live and work.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">
            Core <span className="text-brand-red">Values</span>
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.name} className="rounded-xl bg-brand-white p-8">
                <h3 className="font-heading text-xl font-semibold">{v.name}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">
            Our <span className="text-brand-red">Process</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-text-secondary">
            A clear, collaborative workflow from first conversation to final reveal.
          </p>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <span className="font-heading text-4xl font-bold text-brand-red">{p.step}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold text-white">
            Let&apos;s Create Something <span className="text-brand-red">Extraordinary</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Whether you need a fresh perspective for your home or a complete redesign for your
            business, we&apos;re ready to collaborate.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-brand-red px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-red/90 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="rounded-md border-2 border-white px-8 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-brand-black transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
