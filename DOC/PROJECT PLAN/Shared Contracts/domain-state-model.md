# Domain State Model

## Core Entities

### Service Offering

- Purpose: describes a client-facing service sold by Three Circles.
- Confirmed examples: Interior Design, Space Planning, Furniture Selection, Color Consultation, Project Management.
- Suggested fields: `name`, `slug`, `summary`, `detail`, `audience_tags`, `display_order`, `active`.

### Portfolio Project

- Purpose: showcases completed or featured work.
- Assumed fields: `title`, `slug`, `project_type`, `client_segment`, `location`, `summary`, `body`, `cover_image`, `gallery`, `service_tags`, `published_at`, `active`.

### Lead Inquiry

- Purpose: stores contact and consultation requests from the Contact Us page.
- Assumed fields: `name`, `email`, `phone`, `organization`, `project_type`, `service_interest`, `timeline`, `budget_range`, `message`, `preferred_contact_method`, `created_at`, `status`.

### Site Content Block

- Purpose: manages editable marketing copy for reusable page sections.
- Assumed fields: `surface`, `section_key`, `title`, `body`, `media_refs`, `active`.

## Lifecycle States

### Portfolio Project State

- `draft`: not publicly visible.
- `scheduled`: approved for future publication.
- `published`: visible on public routes.
- `archived`: retained for history but not publicly shown.

### Lead Inquiry State

- `submitted`: accepted and stored.
- `reviewed`: acknowledged by internal staff.
- `qualified`: considered an active sales opportunity.
- `closed`: no further action required.
- `spam`: flagged as invalid or abusive.

## State Ownership Rules

- Public UI may display derived status messaging but may not authoritatively create new states.
- Backend and API/data docs must preserve these canonical state names unless a change is explicitly coordinated.