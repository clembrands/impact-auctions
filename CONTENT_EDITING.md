# Editing Website Text in Sanity

Every piece of text on the site — headings, paragraphs, buttons, lists, FAQs,
stats, form labels, the header menu, the footer — can be edited in Sanity
Studio without touching code.

## For editors

1. Go to **`https://<your-site>/studio`** and log in.
2. In the left sidebar:
   - **Site Settings (Header, Footer, Banners)** — menu labels, footer text,
     phone/email, the default "Ready to exceed your fundraising goals?" banner.
   - **Pages** — one entry per page (Home, About, each Service page, Contact…).
   - **Blog Posts** — unchanged.
3. Open a page. Every field is already filled in with the text that is live on
   the site today. Sections are collapsed — click a section name (e.g. *Hero*,
   *Services*, *FAQ*) to expand it.
4. Edit the text and click **Publish** (bottom right).
5. The live site updates within about a minute (instantly if the webhook below
   is set up).

Tips
- **Lists** (service cards, stats, FAQs, team members…) can be reordered by
  dragging, and items can be added or removed. Icons and photos are matched to
  items by position (1st, 2nd, 3rd…), so if you reorder items, their icons/photos
  stay in place.
- **Leaving a field blank** shows the original text instead of an empty space.
- Unpublished changes are saved as drafts and are **not** shown on the site
  until you click Publish.

## For developers

How it works:

- `src/content/pages/*.ts` and `src/content/site-settings.ts` hold the default
  text for each page as a plain object.
- `src/content/index.ts` registers each one. The Sanity schema for every page is
  **generated automatically** from that object
  (`sanity/lib/schema-from-defaults.ts`), with the defaults as initial values.
- Pages are server components that call `getContent("<id>")`
  (`src/lib/content.ts`), which merges published Sanity content over the
  defaults, and pass it to a client "view" component.

To make new text editable: add a key to the page's defaults object and render
`content.<key>` in the view. The Studio field appears automatically.

### Instant updates (optional)

By default pages re-fetch content every 60 seconds. For instant updates:

1. Add an env var `SANITY_REVALIDATE_SECRET` (any random string) in Vercel.
2. In sanity.io/manage → your project → API → Webhooks, create a webhook:
   - URL: `https://<your-domain>/api/revalidate`
   - Dataset: `production`, Trigger on: Create / Update / Delete
   - Projection: `{_id, _type}`
   - HTTP method: POST, Secret: the same random string
3. Make sure `https://<your-domain>` is listed under API → CORS origins
   (with credentials) so the `/studio` route can log in.
