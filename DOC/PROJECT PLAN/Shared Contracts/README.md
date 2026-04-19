# Shared Contracts

## Purpose

This folder is the authoritative contract layer for the Three Circles project. It defines what the website must do before specialized frontend, backend, and operational planning diverges.

## Read Order

1. `ai-context.yaml`
2. `product-requirements.md`
3. `system-architecture.md`
4. `module-boundaries.md`
5. `route-and-surface-map.md`
6. `domain-state-model.md`
7. `implementation-sequence.md`

## Locked Outcomes

- The mandatory public website includes Home, About Us, Services, Portfolio, and Contact Us.
- The primary business goal is lead generation and trust-building for interior design services.
- A maintainable operating model likely requires content administration for services, portfolio items, and contact details, but that remains an implementation assumption until confirmed.
- Any backend or API behavior introduced later must remain compatible with the contracts defined here.

## File Guide

- `product-requirements.md`: business goals, audience, public scope, non-goals, and assumptions.
- `system-architecture.md`: recommended solution architecture and major subsystems.
- `module-boundaries.md`: responsibilities and interaction rules for each module.
- `route-and-surface-map.md`: route inventory and per-surface responsibilities.
- `domain-state-model.md`: entities and lifecycle states that downstream docs must reuse.
- `implementation-sequence.md`: contract-led execution order for later implementation.