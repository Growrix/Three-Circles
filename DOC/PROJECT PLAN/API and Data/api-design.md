# API Design

## Public Content APIs

### `GET /api/public/services`

- Purpose: return active service offerings in display order.
- Response fields: normalized `Service Offering` records safe for public rendering.

### `GET /api/public/portfolio`

- Purpose: return published portfolio projects with cover assets and optional filter parameters.
- Query assumptions: `project_type`, `client_segment`, `limit`, `cursor`.

### `GET /api/public/portfolio/:slug`

- Purpose: return one published portfolio project and associated assets.
- Assumption: enabled only if portfolio detail pages are approved.

## Public Write API

### `POST /api/contact`

- Purpose: accept contact and consultation requests.
- Request body:
  - `name`
  - `email`
  - `phone` optional
  - `organization` optional
  - `project_type` optional
  - `service_interest` optional
  - `timeline` optional
  - `budget_range` optional
  - `message`
  - `preferred_contact_method` optional
- Response contract:
  - success: acknowledgement payload with durable receipt indicator
  - validation failure: field-level error model
  - rate-limit or abuse block: non-destructive rejection response

## Assumed Internal APIs

- Assumption: CRUD endpoints for service offerings, portfolio projects, assets, and inquiry status management.

## Error Model

- Use stable error codes for validation, unauthenticated access, unauthorized access, not found, rate limit, and server failure.
- Do not leak internal stack details to public callers.