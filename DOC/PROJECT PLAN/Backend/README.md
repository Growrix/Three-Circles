# Backend

## Purpose

This folder defines the backend services and operational behaviors required to support public content delivery, portfolio asset management, and contact lead capture for Three Circles.

## Read Order

1. `ai-context.yaml`
2. `backend-architecture.md`
3. `service-design-and-domain-rules.md`
4. `auth-authorization-and-rls.md`
5. `queue-payments-and-integrations.md`
6. `file-delivery-and-storage.md`
7. `backend-observability-and-reliability.md`

## Scope Notes

- The source plan only confirms a public website, so backend scope is intentionally narrow.
- Public content reads and contact form writes are the core required capabilities.
- Internal content operations and notification flows are included as maintainability assumptions, not business facts.