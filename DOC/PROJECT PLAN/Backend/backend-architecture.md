# Backend Architecture

## Backend Goals

- Serve normalized content to the public website.
- Accept, validate, persist, and route contact inquiries.
- Manage portfolio media and editorial content without depending on code deployments.

## Recommended Services

### Public Content Service

- Returns services, portfolio listings, and optional portfolio detail content.
- Optimized for read-heavy traffic and cache-friendly delivery.

### Inquiry Intake Service

- Owns `POST /api/contact` validation, persistence, deduplication checks, notification triggering, and spam handling.

### Content Operations Service

- Assumed internal capability for updating service descriptions, portfolio projects, and contact metadata.

### Media Service

- Owns image metadata, storage keys, variant generation, and delivery URLs for portfolio assets.

## Persistence Model

- Structured relational storage for services, portfolio projects, content blocks, and lead inquiries.
- Object storage for media assets with metadata references stored in the primary database.

## Failure Boundaries

- Public page rendering should continue if inquiry notifications are delayed.
- Inquiry acceptance must not depend on downstream email success.
- Media delivery failures should degrade individual assets, not break page templates.