# Service Design And Domain Rules

## Content Domain Rules

- Only `published` portfolio projects appear on public portfolio routes.
- Service offering records must remain ordered and may be toggled active or inactive without deletion.
- Shared brand copy sections should be editable without changing route structure.

## Lead Inquiry Rules

- Contact submissions require server-side validation even if client-side validation already ran.
- New inquiries begin in `submitted` state.
- Duplicate submissions from the same user in a short window should be rate-limited or flagged for review.
- Internal staff actions, not public users, move inquiries to `reviewed`, `qualified`, `closed`, or `spam`.

## Editorial Rules

- Draft content must not leak to public routes.
- Portfolio media requires alt text or editorial description to support accessibility workflows.
- Deleting assets should prefer soft-delete or reference checks to avoid broken historical content.

## Operational Assumptions

- Assumption: staff need lightweight status management for inquiries.
- Assumption: staff need publish controls for portfolio visibility.