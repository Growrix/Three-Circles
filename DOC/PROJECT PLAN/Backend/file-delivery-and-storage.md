# File Delivery And Storage

## Asset Types

- Portfolio cover images.
- Portfolio gallery images.
- Optional team or studio photography.

## Storage Rules

- Media files live in object storage.
- The application database stores metadata, editorial text, and delivery references.
- Original files and optimized variants should be traceable through stable asset identifiers.

## Delivery Rules

- Generate responsive image variants for major breakpoints.
- Preserve descriptive alt text or captions as part of editorial workflow.
- Use cache-friendly URLs and CDN delivery where available.

## Retention Rules

- Deleted assets should be recoverable for an operational grace period when feasible.
- Asset replacement must not silently orphan published portfolio records.