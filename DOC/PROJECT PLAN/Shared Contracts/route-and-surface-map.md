# Route And Surface Map

## Confirmed Public Routes

- `/`: Home page, brand overview, hero messaging, featured services, trust signals, and primary CTA to contact.
- `/about`: About Us page, studio story, values, process summary, and credibility content.
- `/services`: Services page, service categories, scope descriptions, engagement model, and CTA.
- `/portfolio`: Portfolio index page, project categories, highlights, filters, and CTA.
- `/contact`: Contact Us page, inquiry form, business contact details, and follow-up expectations.

## Assumed Public Detail Routes

- Assumption: `/portfolio/[slug]` for detailed project storytelling and image galleries.

## Assumed Internal Surfaces

- Assumption: `/admin` for authenticated content operations.
- Assumption: `/admin/portfolio` for project and asset management.
- Assumption: `/admin/inquiries` for lead review and status updates.

## Assumed Server Routes

- Assumption: `POST /api/contact` to receive inquiries.
- Assumption: `GET /api/public/services` to serve normalized service content.
- Assumption: `GET /api/public/portfolio` and `GET /api/public/portfolio/:slug` for project content.

## Surface Rules

- Public routes must be crawlable and content-first.
- Administrative routes must be authenticated and isolated from public rendering concerns.
- API routes must preserve canonical entity names and state transitions from shared contracts.