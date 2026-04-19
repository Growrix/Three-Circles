# Three Circles Project Plan

## Purpose

This folder is the implementation-ready documentation system for the Three Circles website. It translates the business plan in `DOC/MASTER PLAN/Plan.md` into sequential, role-scoped execution guidance.

## Read Order

1. `ai-context.yaml`
2. `Shared Contracts/README.md`
3. `Frontend/README.md`
4. `Backend/README.md`
5. `API and Data/README.md`
6. `Security/README.md`
7. `DevOps/README.md`
8. `QA/README.md`

## Confirmed Scope

- Build a brand-aligned website for Three Circles, an interior design business serving residential and commercial clients.
- Public pages required by the source plan: Home, About Us, Services, Portfolio, Contact Us.
- The experience must reflect a modern, sophisticated, approachable, detail-oriented, and collaborative brand voice.

## Planning Rules

- Shared Contracts remains the first authority for routes, entities, lifecycle states, and cross-team boundaries.
- Later folders may refine implementation details, but they may not silently override upstream contracts.
- Any requirement that is not explicitly stated in `DOC/MASTER PLAN/Plan.md` must be preserved as an assumption until confirmed.

## Folder Map

- `Shared Contracts/`: product scope, route map, entities, lifecycle states, and implementation order.
- `Frontend/`: public experience, content structure, UX patterns, styling rules, and page-level expectations.
- `Backend/`: services, content management assumptions, storage, notifications, reliability, and operational rules.
- `API and Data/`: canonical entities, endpoint contracts, validation rules, state transitions, and versioning expectations.
- `Security/`: authentication, authorization, privacy, abuse prevention, retention, and incident handling.
- `DevOps/`: environments, release process, observability, resilience, and operational controls.
- `QA/`: coverage strategy, contract verification, end-to-end scenarios, and release gates.

## Assumption Boundary

The source plan does not define a CMS, admin console, analytics suite, or deployment stack. This documentation set includes those as implementation assumptions only where needed to make the website maintainable and operationally sound.