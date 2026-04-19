import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Three Circles' portfolio of residential and commercial interior design projects.",
};

export default function PortfolioPage() {
  const projectCount = siteData.projects.length;
  const categoryCount = siteData.portfolio.categories.length - 1;

  return (
    <>
      <section className="section-space pt-10 md:pt-14">
        <div className="page-shell">
          <Reveal>
            <SectionIntro
              eyebrow={siteData.portfolio.eyebrow}
              title={siteData.portfolio.title}
              accent="feel cinematic."
              description={siteData.portfolio.description}
              align="center"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="metric-card text-center">
                <p className="text-3xl font-semibold">{projectCount}</p>
                <p className="mt-2 text-sm text-secondary-theme">Featured projects</p>
              </div>
              <div className="metric-card text-center">
                <p className="text-3xl font-semibold">{categoryCount}</p>
                <p className="mt-2 text-sm text-secondary-theme">Program types</p>
              </div>
              <div className="metric-card text-center">
                <p className="text-3xl font-semibold">Coast-to-coast</p>
                <p className="mt-2 text-sm text-secondary-theme">Residential and commercial work</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <PortfolioGallery categories={siteData.portfolio.categories} projects={siteData.projects} />
        </div>
      </section>
    </>
  );
}
