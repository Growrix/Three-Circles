# CI CD And Release Strategy

## Pipeline Expectations

- Lint, type-check, test, and build on every change.
- Preview deployments for frontend-facing review.
- Promote to staging before production.

## Release Rules

- Production release requires QA gate approval.
- Schema or contract changes require coordinated deployment notes.
- Rollback instructions must exist for code, content, and migration-related failures.

## Suggested Controls

- Branch protection.
- Required status checks.
- Manual approval before production if the stack or team model requires it.