# Finance — Banking & Beyond

Responsive Finance landing page built with the Next.js App Router. The interface follows `Kopirosoft_Portfolio.pdf` as its visual source of truth while adding production-safe accessibility, responsive behavior, SEO metadata, and automated regression checks.

Production: [kopirosoft.vercel.app](https://kopirosoft.vercel.app)

## Requirements

- Node.js 22
- npm 11

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run check
```

The full check runs:

1. ESLint and TypeScript-aware source validation.
2. An optimized Next.js production build.
3. Playwright browser tests against the production server.

The browser suite covers horizontal overflow from 320–2560 px, responsive navigation breakpoints, keyboard menu behavior, sticky anchor positioning, and repeated carousel navigation.

Individual commands are also available:

```bash
npm run lint
npm run build
npm run test:e2e
```

`npm run test:e2e` expects a completed production build. Use `npm run check` for a clean end-to-end verification.

## Project structure

```text
app/                  Routes, metadata, manifest, robots, and sitemap
components/home/      Static homepage sections
components/           Shared branding, navigation, motion, and carousels
lib/site-config.ts    Canonical site metadata and deployment URL
public/images/        Optimized visual assets used by the reference design
tests/                Playwright quality and responsive regression tests
```

`app/page.tsx` only composes the page sections. Section-specific content remains close to its markup, while shared site metadata is centralized in `lib/site-config.ts`.

## Configuration

No environment variable is required for the current Vercel deployment. A custom production domain can be configured without editing source files:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

The value is used for canonical metadata, Open Graph URLs, `robots.txt`, and `sitemap.xml`. Outbound download, social, and footer destinations currently follow the supplied reference behavior and should be updated when final destination URLs are available.

## Deployment

The repository is configured for Vercel with:

- Native Next.js framework detection
- `npm ci` for reproducible installs
- `npm run build` for production builds
- Node.js 22 through `package.json`

Pushes and pull requests run the same `npm run check` quality gate through GitHub Actions. Pushes to `main` trigger the connected Vercel production deployment.
