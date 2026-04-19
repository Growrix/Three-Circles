# Migration And Versioning

## Versioning Principles

- Keep public content APIs additive where possible.
- Avoid renaming entity fields after frontend consumption begins.
- When a field must be replaced, introduce the new field before deprecating the old one.

## Schema Evolution Rules

- Add new optional fields before promoting them to required status.
- Preserve historical inquiry records even if form structure evolves.
- Maintain migration scripts for content and media metadata changes.

## Change Control

- Any contract change affecting routes, payloads, or lifecycle states must update Shared Contracts, Frontend, Backend, and QA docs before implementation proceeds.