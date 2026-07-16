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

**Production hosting** (Vercel, Netlify, Cloudflare Pages, etc.)

1. In the host’s project settings, add an environment variable:
   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: the same access key
2. Redeploy the site so the build picks up the variable.

Notes:

- The Vite `VITE_` prefix exposes the key to the browser. That is expected for Web3Forms (their docs treat access keys as usable in front-end forms). Protect the inbox and rotate the key if it is leaked or abused.
- Optional: in the Web3Forms dashboard, add domain restrictions / spam settings if available on your plan.
- Until the key is set, the form shows a fallback message asking visitors to email or call Inselberg directly.

## Notes

- Shared header and footer live in `src/components`.
- Approved page copy and solution data live in `src/data/content.js`.
- Core pages live in `src/pages`.
- Static images and whitepapers are served from `public/`.
