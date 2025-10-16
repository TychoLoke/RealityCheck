# Channel OS™ website

A production-ready, vendor-neutral marketing site for [ChannelOS.org](https://channelos.org) built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The site is fully static, accessible, and deployable on Vercel.

## Prerequisites

- Node.js LTS (v18 or newer recommended)
- npm (comes with Node) or pnpm if preferred

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Configure environment variables**

   ```bash
   cp env.example .env.local
   ```

   Edit `.env.local` to add your YouTube, Microsoft Forms / Tally, and Substack embeds. These are injected safely on the client using an allowlist sanitizer—no code changes required.

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to preview the site. Changes to files in `/app` or `/components` trigger automatic reloads.

4. **Build for production**

   ```bash
   npm run build
   npm run start
   ```

   The app uses static generation and is optimized for deployment to Vercel or any static-friendly environment.

## Editing content

All copy lives in the `/app` directory. Each route has its own `page.tsx` file:

| Page | File |
| --- | --- |
| Home | `app/page.tsx` |
| Community | `app/community/page.tsx` |
| Training | `app/training/page.tsx` |
| Talks | `app/talks/page.tsx` |
| What is the Channel? | `app/the-channel/page.tsx` |
| About | `app/about/page.tsx` |
| Subscribe | `app/subscribe/page.tsx` |
| Privacy | `app/privacy/page.tsx` |
| Terms | `app/terms/page.tsx` |
| Brand Use | `app/brand-use/page.tsx` |
| Contact | `app/contact/page.tsx` |
| Standard preview | `app/standard/page.tsx` |

Update the text within these files to change copy. Components such as `Card`, `Section`, and `CTAButton` live in `/components` and provide consistent styling.

### Updating embeds

Add or update embeds (YouTube, Microsoft Forms/Tally, Substack, Discord, etc.) by editing `.env.local`. No TypeScript changes are required. If an embed is missing, the site displays a friendly placeholder prompting you to populate `.env.local`.

## Quality checks

- `npm run lint` — run Next.js + ESLint checks
- `npm run format` — format files with Prettier
- `npm run build` — verify the static production build

## Deploying to Vercel

1. Push the repository to GitHub.
2. In Vercel, choose **New Project** → **Import Git Repository**.
3. When prompted, set the environment variables from `.env.example`.
4. Use the default build command (`npm run build`).
5. After the first deploy, set the production domain to `channelos.org`.

The `vercel.json` file in the repository pins the install and build commands to match local workflows.

## DNS with Cloudflare

1. Add a `CNAME` record for the root (`@`) pointing to `cname.vercel-dns.com` — set proxy to **DNS only**.
2. Add a `CNAME` record for `www` pointing to `cname.vercel-dns.com`, also **DNS only**.
3. Wait for DNS to propagate, then assign the domain inside Vercel.

## Email routing

Use [Cloudflare Email Routing](https://developers.cloudflare.com/email-routing/) to forward `hello@channelos.org` (or your preferred inbox) to the address of your choice. Update `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local` so the footer reflects the right contact email.

## Project structure

```
app/            # Route segments using the Next.js App Router
components/     # Reusable UI building blocks (Hero, Section, Card, etc.)
public/         # Static text assets (logo, sitemap, robots)
app/icon.tsx    # Generated favicon (no binary committed)
app/opengraph-image.tsx # Generated Open Graph preview image
```

Tailwind CSS is configured in `tailwind.config.ts` with brand colors, shadows, and spacing tokens. Global styles and focus states live in `app/globals.css`.

## Deploy checklist

- [ ] Update `.env.local` with production embeds, Discord link, and contact email
- [ ] Run `npm run build` locally to confirm a clean static build
- [ ] Verify Lighthouse scores (Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95)
- [ ] Ensure DNS and email routing are configured via Cloudflare
- [ ] Trigger a Vercel deployment from the main branch

## License

All rights reserved. Contact [hello@channelos.org](mailto:hello@channelos.org) for usage inquiries.
