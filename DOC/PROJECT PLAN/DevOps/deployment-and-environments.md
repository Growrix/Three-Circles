# Deployment And Environments

## Recommended Environments

- Local development.
- Preview or review environment per change where feasible.
- Staging for integrated validation.
- Production.

## Environment Rules

- Staging should reflect production routing, data model, and notification configuration as closely as practical.
- Production secrets must never be shared with lower environments.
- Public media storage paths and CDN configuration require environment isolation.

## Deployment Model

- Deploy the frontend and backend as coordinated but independently recoverable components where the stack supports it.
- Keep database migrations explicit and reversible.