# Security And Operations

## Baseline Controls

- Enforce HTTPS everywhere.
- Protect secrets through environment-scoped secret storage.
- Rate-limit contact submission and admin authentication surfaces.
- Use CSRF protection or equivalent for authenticated mutations.

## Logging And Audit

- Record admin sign-in events, content publication events, inquiry status changes, and failed authorization attempts.
- Redact or minimize personally identifiable data in logs.

## Recovery Notes

- Security control failures that affect public submission should fail safely and visibly.
- Suspected admin compromise requires immediate session revocation and credential rotation.