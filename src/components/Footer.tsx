import Link from "next/link";

const services = [
  "Interior Design",
  "Space Planning",
  "Furniture Selection",
  "Color Consultation",
  "Project Management",
];

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight">
            Three<span className="text-brand-red">&nbsp;Circles</span>
          </Link>
          <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
            Creating innovative and functional interior spaces that reflect your unique style and needs.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-sm text-muted hover:text-brand-red transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Contact</h3>
          <address className="not-italic space-y-2 text-sm text-muted">
            <p>info@threecircles.design</p>
            <p>+1 (555) 000-0000</p>
          </address>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-red/90 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Three Circles. All rights reserved.
      </div>
    </footer>
  );
}
