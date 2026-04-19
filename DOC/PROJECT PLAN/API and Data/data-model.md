# Data Model

## Service Offering

- Primary key: `id`
- Public identifier: `slug`
- Core fields: `name`, `summary`, `detail`, `audience_tags`, `display_order`, `active`, `created_at`, `updated_at`

## Portfolio Project

- Primary key: `id`
- Public identifier: `slug`
- Core fields: `title`, `project_type`, `client_segment`, `location`, `summary`, `body`, `cover_asset_id`, `state`, `published_at`, `created_at`, `updated_at`

## Portfolio Asset

- Primary key: `id`
- Core fields: `project_id`, `storage_key`, `alt_text`, `caption`, `width`, `height`, `sort_order`, `active`, `created_at`

## Lead Inquiry

- Primary key: `id`
- Core fields: `name`, `email`, `phone`, `organization`, `project_type`, `service_interest`, `timeline`, `budget_range`, `message`, `preferred_contact_method`, `status`, `source_page`, `created_at`, `updated_at`

## Site Content Block

- Primary key: `id`
- Core fields: `surface`, `section_key`, `title`, `body`, `media_refs`, `active`, `created_at`, `updated_at`

## Modeling Rules

- Slugs must be unique per public entity type.
- Public-facing content should prefer soft archive or inactive flags over destructive deletion.
- Lead inquiries must preserve submission timestamps for operational reporting.