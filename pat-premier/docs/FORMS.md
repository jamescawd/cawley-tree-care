# Quote form

The quote form appears on **/quote** (the main “Request a Quote” page, linked
from every button), on /contact and at the bottom of the homepage. It is
`src/components/sections/QuoteForm.astro`; the list of services it offers is
`src/data/quoteOptions.ts` (edit that file to add or rename work).

**Current state: NOT CONNECTED TO EMAIL YET.** Submissions go to
`/enquiry-error`, which shows the phone number and email address, so nothing is
silently lost, but no enquiries are delivered by the form.

## Fields

Full name*, telephone*, email*, location*, service required* (every roofing,
building and interior service, grouped), property type (optional: home /
business / other), timescale (optional), description of work*, up to 3
photographs (optional, 5 MB each). Service pages link to `/quote?service=…`
so the right service is already selected. Spam protection: hidden honeypot
field and a minimum fill time.

## To connect it to email

The handler is `worker/index.ts` (Cloudflare Worker, sends through Resend).

1. Create a Resend account (resend.com) and verify the sending domain.
2. In Cloudflare → Workers & Pages → this project → Settings:
   - Secret `RESEND_API_KEY`
   - Variable `ENQUIRY_TO` = the inbox for enquiries (e.g. pcandson84@outlook.ie)
   - Variable `ENQUIRY_FROM` = e.g. `Pat Premier Website <quotes@yourdomain.ie>`
3. Deploy, then **test on the live site**: submit with and without photos and
   confirm the emails arrive with attachments and a working reply-to.
4. Only then describe the form as working.

(Another provider, such as Formspree or Web3Forms, can be used instead by changing the
form's `action`; ask before switching.)
