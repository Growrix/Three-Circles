# Queue Payments And Integrations

## Integration Inventory

- Confirmed minimum integration category: email or equivalent outbound notification for new inquiries.
- Assumption: analytics provider for page engagement and conversion tracking.

## Queue And Job Needs

- Notification delivery for new inquiries should be asynchronous when possible.
- Media processing may require background jobs for thumbnails or image variants.
- Retry behavior is required for transient notification failures.

## Payments

- No payment workflow is defined in the source plan.
- Any future paid consultation or deposit flow must be treated as out of scope until explicitly approved.

## Integration Rules

- Persist inquiry data before attempting notifications.
- Use idempotent job handling for retried notifications.
- Isolate third-party failures so the core contact workflow remains durable.