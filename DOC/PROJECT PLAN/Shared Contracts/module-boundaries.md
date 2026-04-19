# Module Boundaries

## Public Experience Module

- Owns page composition, navigation, presentation, and non-authoritative client-side form behavior.
- Must not define canonical entity schemas, permission rules, or server-owned statuses.

## Content Domain Module

- Owns services, portfolio projects, brand copy, contact metadata, and supporting taxonomies.
- Exposes read models to the public site and write models to internal operators.

## Lead Capture Module

- Owns contact form intake, validation, persistence, notification, and operational follow-up states.
- Must remain auditable and resilient against duplicate submission or spam conditions.

## Asset Management Module

- Owns portfolio images, thumbnails, alt text, storage paths, and delivery optimization.
- Must preserve public performance and editorial maintainability.

## Operations Module

- Owns deployment configuration, monitoring, backups, retention, and incident response.
- Must not redefine business requirements or page scope.

## Boundary Rules

- Shared contracts define entity names and core lifecycle states once.
- Specialized folders may add operational detail but not rename confirmed concepts.
- Unknown requirements remain assumptions until explicitly approved.