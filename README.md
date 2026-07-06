# JSO Industries

Marketing site for JSO Industries — owner's representation for telecom and fiber infrastructure.

Plain HTML, CSS, and vanilla JS. No build step. Deploy anywhere that serves static files.

## Deploy

**Vercel** — `npx vercel --prod` from this folder (or import the repo at [vercel.com/new](https://vercel.com/new); framework: "Other", no build command, output directory: `./`).

**Netlify** — `npx netlify deploy --prod --dir=.` (or drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop)).

**Cloudflare Pages** — connect the repo at [pages.cloudflare.com](https://pages.cloudflare.com); framework preset: "None"; build command: blank; output directory: `/`.

## Local preview

```
python3 -m http.server 8000
```

Open http://localhost:8000.

## Contact form

The form posts to Formspree. Replace `YOUR_FORM_ID` in `index.html` with your Formspree endpoint ID. Until then, submissions fall back to a `mailto:office@jsoindustries.com` link.
