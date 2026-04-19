"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-white/95 backdrop-blur border-b border-muted/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-brand-black">
          Three<span className="text-brand-red">&nbsp;Circles</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-black/80 hover:text-brand-red transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-red/90 transition-colors"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-muted/30 bg-brand-white px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-brand-black/80 hover:text-brand-red transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block w-full rounded-md bg-brand-red px-5 py-3 text-center text-sm font-semibold text-white hover:bg-brand-red/90 transition-colors"
          >
            Get In Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
