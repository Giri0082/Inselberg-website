# Inselberg Website v3

React/Vite rebuild of the Inselberg marketing site with shared layout components and centralized content.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## SEO & discoverability

| File | Purpose |
|------|---------|
| `/robots.txt` | Allows crawlers (including AI bots) and points to the sitemap |
| `/sitemap.xml` | All primary pages + white papers for Google / Bing |
| `/llms.txt` | Machine-readable site map for LLM assistants |
| `src/data/seo.js` | Per-route titles, descriptions, keywords |
| `src/hooks/useDocumentSeo.js` | Updates title, OG/Twitter tags, canonical, JSON-LD on navigation |

Default canonical host: `https://inselbergsolutions.com` (override with `VITE_SITE_URL`).

### Amplify SPA rewrites (required for deep links)

In **Amplify Console → Hosting → Rewrites and redirects**, replace the default 404 rule with the rules from `redirects.json` (or paste that JSON). This:

- Serves `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and whitepapers as static files
- Rewrites app routes (`/platform`, `/contact`, etc.) to `/index.html` with status **200** so they are crawlable

After deploy, verify:

- `https://YOUR_DOMAIN/robots.txt`
- `https://YOUR_DOMAIN/sitemap.xml`
- `https://YOUR_DOMAIN/llms.txt`
- `https://YOUR_DOMAIN/platform` (should load the app, not 404)

Then submit the sitemap in [Google Search Console](https://search.google.com/search-console).

## Contact form (Web3Forms)

The Contact page uses the same third-party service as v1: **[Web3Forms](https://web3forms.com)**. Submissions are emailed to the address tied to your access key — no backend server required.

### What the business needs to do (get the API key)

1. Open **https://web3forms.com** and create a free account (or sign in).
2. Create an **Access Key**.
3. When prompted, enter the **notification email** that should receive form submissions  
   (recommended: `marketing@inselbergsolutions.com`, or a shared inbox the team monitors).
4. Confirm the email if Web3Forms sends a verification message.
5. Copy the **Access Key** from the dashboard (or from the email Web3Forms sends).
6. Give that key to the web team / devops — **do not commit it to GitHub**.

### What the web team does with the key

**Local development**

1. Copy `.env.example` to `.env` in the project root (`website-v3`).
2. Set:

```env
VITE_WEB3FORMS_ACCESS_KEY=paste_the_access_key_here
```

3. Restart `npm run dev`.
4. Submit a test message on `/contact` and confirm the email arrives.

**Production hosting** (Amplify, Vercel, Netlify, etc.)

1. In the host’s project settings, add environment variables:
   - `VITE_WEB3FORMS_ACCESS_KEY` = your access key
   - Optional: `VITE_SITE_URL` = `https://inselbergsolutions.com` (or your Amplify domain until the custom domain is live)
2. Redeploy the site so the build picks up the variables.

Notes:

- The Vite `VITE_` prefix exposes the key to the browser. That is expected for Web3Forms (their docs treat access keys as usable in front-end forms). Protect the inbox and rotate the key if it is leaked or abused.
- Optional: in the Web3Forms dashboard, add domain restrictions / spam settings if available on your plan.
- Until the key is set, the form shows a fallback message asking visitors to email or call Inselberg directly.

## Notes

- Shared header and footer live in `src/components`.
- Approved page copy and solution data live in `src/data/content.js`.
- Core pages live in `src/pages`.
- Static images and whitepapers are served from `public/`.
