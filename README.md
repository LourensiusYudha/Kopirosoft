# Finance Landing Page

Next.js App Router implementation of the Finance design in `Kopirosoft_Portfolio.pdf`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

No required environment variables.

1. Push this directory to a Git repository.
2. Import the repository in Vercel.
3. Keep Framework Preset as `Next.js`.
4. Keep Output Directory empty so Vercel uses the native Next.js output.
5. Deploy.

Repository configuration already defines:

- Node.js `22.x`
- Install command `npm ci`
- Build command `npm run build`
- Next.js framework preset

CLI alternative:

```bash
npx vercel
```
