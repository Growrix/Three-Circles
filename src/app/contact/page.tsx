"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { siteData } from "@/lib/site-data";

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
      <section className="section-space pt-10 md:pt-14">
        <div className="page-shell">
          <Reveal>
            <SectionIntro
              eyebrow={siteData.contact.eyebrow}
              title={siteData.contact.title}
              accent="make people feel."
              description={siteData.contact.description}
              align="center"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="page-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div className="surface-card radius-xl p-6 md:p-8">
              {status === "success" ? (
                <div className="status-card radius-lg">
                  <h2 className="text-3xl font-semibold">Thank you.</h2>
                  <p className="mt-4 text-base leading-7 text-secondary-theme">
                    We&apos;ve received your message and will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                        First Name <span className="accent-text">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="form-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                        Last Name <span className="accent-text">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="form-field"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email <span className="accent-text">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="form-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone
                      </label>
                      <input id="phone" name="phone" type="tel" className="form-field" />
                    </div>
                  </div>

                  <div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="service" className="mb-2 block text-sm font-medium">
                          Service Interested In
                        </label>
                        <select id="service" name="service" className="form-field">
                          <option value="">Select a service</option>
                          {siteData.contact.serviceOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="mb-2 block text-sm font-medium">
                          Estimated Budget
                        </label>
                        <select id="budget" name="budget" className="form-field">
                          <option value="">Select a range</option>
                          {siteData.contact.budgetRanges.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="mb-2 block text-sm font-medium">
                      Project Type
                    </label>
                    <select id="projectType" name="projectType" className="form-field">
                      <option value="">Select project type</option>
                      {siteData.contact.projectTypes.map((projectType) => (
                        <option key={projectType} value={projectType.toLowerCase()}>
                          {projectType}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Tell Us About Your Project <span className="accent-text">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="form-field resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="button-primary w-full disabled:opacity-60 sm:w-auto"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={1} className="space-y-6">
            <div className="image-frame min-h-80 md:min-h-96">
              <Image
                src={siteData.contact.image}
                alt="Creative studio workspace with meeting table and pinned materials."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>

            <aside className="surface-card radius-xl p-6 md:p-8">
              <span className="tag">What to expect</span>
              <ul className="mt-5 space-y-3">
                {siteData.contact.assurances.map((assurance) => (
                  <li key={assurance} className="flex items-start gap-3 text-sm leading-6 text-secondary-theme">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-red" />
                    <span>{assurance}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Office</h3>
                  <address className="mt-2 not-italic text-sm leading-7 text-secondary-theme">
                    {siteData.brand.address[0]}
                    <br />
                    {siteData.brand.address[1]}
                  </address>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="mt-2 text-sm text-secondary-theme">{siteData.brand.email}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="mt-2 text-sm text-secondary-theme">{siteData.brand.phone}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Hours</h3>
                  <div className="mt-2 space-y-1 text-sm text-secondary-theme">
                    {siteData.brand.hours.map((hours) => (
                      <p key={hours}>{hours}</p>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
