# Nishad's Projects

Nishad's Projects — a portfolio site showcasing hardware and software work, with detailed project pages and video walkthroughs.

## Development

```bash
npm install
npm run dev
```

Open the local dev server URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

This is a static Vite + React app. On [Vercel](https://vercel.com), import the GitHub repo and keep the defaults:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

Name the Vercel project `nishads-projects` (this matches `package.json`). Client-side routes are handled by `vercel.json`.

## Adding Projects

Edit `src/data/projects.ts` to add new entries. Each project needs a slug, short description, image, and optional video/photo sections.

To embed a YouTube video later, set `videoUrl` on a video section (e.g. `https://www.youtube.com/watch?v=...`).

## Watches Collection

The `watches` project uses a gallery layout. Edit the `watches` array in `src/data/projects.ts` to rename watches, update one-line and long descriptions, and set media paths:

- Gallery image: `images/watches/watch-N/thumbnail.jpg`
- Detail photos: `images/watches/watch-N/photo-1.jpg` and `photo-2.jpg`
- Video: set `videoUrl` on each watch item

Missing images and videos show placeholders until files/URLs are added under `public/images/watches/`.

## Adding Videos

Video sections use placeholder slots by default. When a video is published, add its YouTube URL to the corresponding `videoUrl` field in `src/data/projects.ts` — no component changes needed.
