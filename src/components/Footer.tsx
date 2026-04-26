import Link from "next/link";
import { siteData } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell grid gap-10 py-16 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <Link href="/" className="brand-lockup">
            <span className="brand-mark" aria-hidden="true">
              <span />
            </span>
            <span className="font-heading text-2xl font-semibold tracking-tight">
              Three <span className="accent-text">Circles</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-inverse-soft-theme">
            {siteData.footer.blurb}
          </p>
          <p className="mt-5 text-sm font-medium text-inverse-theme">
            {siteData.brand.responseTime}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {siteData.navigation.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-inverse-soft-theme hover:text-inverse-theme"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold">Contact</h3>
          <address className="mt-4 not-italic space-y-3 text-sm leading-7 text-inverse-soft-theme">
            <p>{siteData.brand.address[0]}</p>
            <p>{siteData.brand.address[1]}</p>
            <p>
              <a href={`mailto:${siteData.brand.email}`}>{siteData.brand.email}</a>
            </p>
            <p>
              <a href={`tel:${siteData.brand.phone.replace(/[^+\d]/g, "")}`}>{siteData.brand.phone}</a>
            </p>
          </address>
          <Link href="/contact" className="button-primary mt-6">
            Start Your Project
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-inverse-soft-theme">
        &copy; {new Date().getFullYear()} Three Circles. All rights reserved. Built & Maintaing by{" "}
        <a
          href="https://www.growrixos.com"
          target="_blank"
          rel="noreferrer"
          className="text-inverse-theme hover:text-brand-red"
        >
          Growrix OS
        </a>
        .
      </div>
    </footer>
  );
}
