# State Models

## Portfolio Project State

- `draft`: editable and private.
- `scheduled`: approved for timed publication.
- `published`: visible to public users.
- `archived`: no longer public but retained.

Allowed transitions:

- `draft -> scheduled`
- `draft -> published`
- `scheduled -> published`
- `published -> archived`
- `archived -> draft`

## Lead Inquiry State

- `submitted`: accepted by the system.
- `reviewed`: seen by staff.
- `qualified`: active follow-up opportunity.
- `closed`: resolved or declined.
- `spam`: invalid or abusive intake.

Allowed transitions:

- `submitted -> reviewed`
- `submitted -> spam`
- `reviewed -> qualified`
- `reviewed -> closed`
- `qualified -> closed`

## State Rules

- Public callers do not set lifecycle states directly.
- State changes require server-side authorization and audit attribution.