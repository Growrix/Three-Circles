# Auth Authorization And RLS

## Confirmed Boundary

The public website does not require authenticated customer access.

## Assumed Internal Access Model

- Assumption: authenticated internal operators maintain content and review inquiries.
- Suggested roles: `admin`, `editor`.

## Authorization Rules

- Public endpoints expose only published marketing content and accepted contact submission workflows.
- Internal content operations require authenticated access.
- Inquiry records are internal-only and must never be exposed publicly.

## Row-Level Access Guidance

- Public-facing read models must be derived from publish-safe records only.
- Internal inquiry and content tables should default to no anonymous read access.
- Any operator mutation should be attributable through audit metadata.

## Security Notes

- Authorization must be enforced server-side.
- Client-side route hiding is not an access control mechanism.