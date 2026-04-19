# Observability And Reliability

## Key Signals

- Public page availability and response latency.
- Contact submission success rate.
- Notification delivery outcomes.
- Portfolio media load errors.
- Admin authentication and authorization failures.

## Alert Priorities

- P0: contact submission unavailable.
- P1: public site outage or severe latency.
- P2: degraded media, notification, or admin-only workflows.

## Reliability Guidance

- Cache public content aggressively where safe.
- Keep contact persistence durable before downstream side effects.
- Distinguish public-read failures from internal-edit failures in alerts.