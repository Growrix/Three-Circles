# System Architecture

## Intent

This architecture supports a content-led marketing website with an operationally reliable inquiry flow. It remains intentionally light because the source plan defines a public website, not a complex application platform.

## Primary Surfaces

- Public website: brand storytelling, service discovery, portfolio browsing, and lead capture.
- Content operations surface: assumed internal workflow for maintaining marketing content and portfolio assets.
- Delivery and operations layer: hosting, media optimization, notifications, analytics, observability, and backups.

## Recommended High-Level Architecture

1. Frontend web application for all public routes.
2. Backend/API layer for content retrieval, contact submission processing, and operational integrations.
3. Persistent data store for structured content and leads.
4. Object storage plus image optimization pipeline for portfolio assets.
5. Notification integration for new inquiry delivery.

## Contract Boundaries

- Public content rendering should work even if no authenticated user session exists.
- Contact submission is the only server-write workflow confirmed by the source plan.
- Content administration is a maintainability assumption and must remain isolated from public routes.
- Portfolio media delivery must protect performance and preserve image quality.

## Reliability Baseline

- The public site must degrade gracefully if analytics or notification integrations fail.
- Contact submissions require server-side validation, durable persistence, and retry-aware notification handling.
- Media delivery requires caching and responsive image variants.

## Open Architecture Assumptions

- Assumption: a headless content model or admin-managed database is preferred over hardcoded portfolio content.
- Assumption: a modern SSR-capable frontend stack is appropriate for SEO and performance.
- Assumption: basic analytics are needed to measure page engagement and contact conversion.