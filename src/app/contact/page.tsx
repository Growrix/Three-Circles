"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const serviceOptions = [
  "Interior Design",
  "Space Planning",
  "Furniture Selection",
  "Color Consultation",
  "Project Management",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-light py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            Get In <span className="text-brand-red">Touch</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed">
            Ready to transform your space? Tell us about your project and we&apos;ll get back to
            you within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-10 text-center">
                <h2 className="font-heading text-2xl font-bold text-green-800">
                  Thank You!
                </h2>
                <p className="mt-3 text-green-700">
                  We&apos;ve received your message and will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1.5">
                      First Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full rounded-md border border-muted/40 px-4 py-3 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1.5">
                      Last Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full rounded-md border border-muted/40 px-4 py-3 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Email <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-muted/40 px-4 py-3 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-md border border-muted/40 px-4 py-3 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none"
                    />
                  </div>
                </div>

                {/* Service & Budget */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-md border border-muted/40 px-4 py-3 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full rounded-md border border-muted/40 px-4 py-3 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none bg-white"
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-1.5">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full rounded-md border border-muted/40 px-4 py-3 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none bg-white"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Tell Us About Your Project <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-md border border-muted/40 px-4 py-3 text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto rounded-md bg-brand-red px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-red/90 transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <aside className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold">Office</h3>
              <address className="mt-2 not-italic text-sm text-text-secondary leading-relaxed">
                123 Design Avenue, Suite 100
                <br />
                New York, NY 10001
              </address>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">Email</h3>
              <p className="mt-2 text-sm text-text-secondary">info@threecircles.design</p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">Phone</h3>
              <p className="mt-2 text-sm text-text-secondary">+1 (555) 000-0000</p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">Hours</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                Monday – Friday: 9 AM – 6 PM
                <br />
                Saturday: By Appointment
                <br />
                Sunday: Closed
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
