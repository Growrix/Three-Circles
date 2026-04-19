# Backend Observability And Reliability

## Reliability Priorities

- Contact intake reliability is the highest-value server workflow.
- Public content delivery should remain fast and resilient under read-heavy traffic.
- Admin and editorial errors should be diagnosable without exposing internal details publicly.

## Monitoring Expectations

- Track contact submission success rate, validation failures, and notification retry counts.
- Track portfolio content fetch latency and media delivery failures.
- Track authentication failures on assumed admin routes.

## Logging Rules

- Log server failures with request correlation identifiers.
- Do not log full inquiry messages or personally identifiable data without redaction rules.

## Recovery Rules

- Failed notifications must be retryable.
- Invalid content publication should be reversible through draft or archive states.
- Operational alerts should distinguish public-page degradation from internal workflow failures.