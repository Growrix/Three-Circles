"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/site-data";

type PortfolioGalleryProps = {
  categories: string[];
  projects: Project[];
};

export function PortfolioGallery({ categories, projects }: PortfolioGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const visibleProjects =
    selectedCategory === categories[0]
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => {
          const active = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              className="filter-chip"
              data-active={active}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      {visibleProjects.length === 0 ? (
        <div className="surface-card radius-lg p-10 text-center">
          <p className="section-copy mx-auto max-w-xl">
            No projects match this filter yet. Reach out and we can walk you through similar work privately.
          </p>
          <Link href="/contact" className="button-primary mt-6 inline-flex">
            Request Private Case Studies
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
              <article className={cn("project-card", "group")}>
                <div className="project-card__media image-frame">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
                  />
                  <div className="project-card__overlay" />
                  <div className="project-card__content">
                    <span className="tag">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="text-sm text-inverse-soft-theme">{project.location}</p>
                    <p className="mt-3 max-w-[32ch] text-sm leading-6 text-inverse-soft-theme">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}