# Quote form

The form (`src/components/sections/QuoteForm.astro`) posts to `/api/quote`,
handled by `worker/index.ts` on Cloudflare.

**Current state: NOT WORKING YET.** No email service is configured, so every
submission goes to `/enquiry-error`, which shows the phone number and email.
Nothing is silently lost, but no enquiries are delivered by the form.

## Fields

Full name*, telephone*, email*, location*, service required*, description of
work*, up to 3 photographs (optional, 5 MB each). Spam protection: hidden
honeypot field and a minimum fill time.

## To make it work

1. Create a Resend account (resend.com) and verify the sending domain.
2. In Cloudflare → Workers & Pages → this project → Settings:
   - Secret `RESEND_API_KEY`
   - Variable `ENQUIRY_TO` = the inbox for enquiries (e.g. pcandson84@outlook.ie)
   - Variable `ENQUIRY_FROM` = e.g. `Pat Premier Website <quotes@yourdomain.ie>`
3. Deploy, then **test on the live site**: submit with and without photos and
   confirm both emails arrive with the attachments and a working reply-to.
4. Only then describe the form as working.
