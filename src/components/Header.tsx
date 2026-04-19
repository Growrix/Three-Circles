"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/cn";
import { siteData } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[color:var(--surface)]/90 backdrop-blur-2xl">
      <div className="page-shell flex items-center justify-between py-4">
        <Link href="/" className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="font-heading text-2xl font-semibold tracking-tight">
            Three <span className="accent-text">Circles</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteData.navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              data-active={pathname === link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link href="/contact" className="button-primary">
            Book a Design Call
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="button-ghost"
            onClick={() => setOpen((current) => !current)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border-soft)] lg:hidden">
          <nav className="page-shell py-5">
            <div className="surface-panel rounded-[var(--radius-lg)] p-4">
              <div className="space-y-2">
                {siteData.navigation.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block rounded-[var(--radius-sm)] px-4 py-3 text-sm font-medium",
                      pathname === link.href ? "bg-[color:rgba(249,0,0,0.08)] text-[color:var(--text-primary)]" : "text-[color:var(--text-secondary)]",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link href="/contact" className="button-primary mt-4 flex w-full">
                Book a Design Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
