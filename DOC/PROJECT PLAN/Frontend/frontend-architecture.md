# Frontend Architecture

## Experience Goals

- Signal premium design expertise quickly.
- Keep navigation shallow and obvious.
- Prioritize strong visual storytelling on Home and Portfolio.
- Make Contact Us the dominant conversion path across the site.

## Route Model

- `/`: hero-led landing page with featured services, trust content, selected work, and CTA.
- `/about`: studio story, principles, and process explanation.
- `/services`: structured service breakdown with residential and commercial positioning.
- `/portfolio`: browsable project catalog with optional category filtering.
- `/contact`: structured inquiry form and business contact information.

## Layout System

- Global header with primary navigation and prominent contact CTA.
- Page-specific hero region with concise title, context, and CTA where relevant.
- Section rhythm should alternate text-heavy and image-led blocks to avoid a flat brochure feel.
- Global footer includes contact details, service overview, and secondary navigation.

## Responsive Rules

- Mobile navigation uses an off-canvas or full-screen menu with a direct Contact Us action.
- Portfolio cards collapse from multi-column grid on desktop to stacked cards on mobile.
- Contact form must preserve clear labels, error text, and tap-friendly controls.

## State Handling

- Content-loading placeholders are required for portfolio and service content if data is server-fetched.
- Empty state on portfolio should explain that new projects will be published soon instead of showing a blank grid.
- Contact form needs visible success, recoverable error, and spam/validation feedback patterns.

## SEO And Discovery

- Each page needs unique title, description, and structured heading order.
- Portfolio detail assumptions should support indexable project stories with image alt text and semantic metadata.