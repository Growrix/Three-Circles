# Authorization And Data Isolation

## Inquiry Data

- Inquiry data is visible only to authorized internal operators.
- Public APIs must never expose stored inquiry records.

## Content Operations

- Draft and scheduled content is internal-only.
- Published content is the only content eligible for anonymous public reads.

## Authorization Rules

- Editors may manage content and inquiry states if approved by the final implementation decision.
- Admins manage higher-risk actions such as user access, deletion, and configuration changes.

## Isolation Guidance

- Separate public read models from internal mutation paths.
- Protect admin sessions with short-lived tokens or equivalent secure session controls.