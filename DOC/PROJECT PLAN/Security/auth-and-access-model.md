# Auth And Access Model

## Public Access

- Anonymous users may browse public pages and submit contact inquiries.
- Anonymous users may not access internal content operations or inquiry records.

## Internal Access Assumption

- Assumption: internal operators authenticate through a secure admin surface.
- Suggested roles: `admin`, `editor`.

## Access Rules

- All operator actions must be server-authorized.
- Passwordless, SSO, or managed identity are all acceptable implementation paths if they preserve auditability and MFA readiness.
- Hidden routes are not access control.