# Threat Model

## Primary Threats

- Spam or bot abuse of the contact form.
- Unauthorized access to inquiry records.
- Unauthorized publication or deletion of portfolio content.
- Credential theft against assumed admin users.
- Malicious file upload or image asset misuse.

## Mitigations

- CAPTCHA or equivalent bot defense if abuse emerges.
- Rate limiting and anomaly detection on public write routes.
- Server-side authorization checks on every internal mutation.
- Content-type validation and storage isolation for uploaded assets.
- MFA-ready operator authentication.