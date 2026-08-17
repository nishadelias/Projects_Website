# Projects Website

A portfolio site showcasing software projects I've built, with detailed project pages and video walkthrough sections.

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

## Deploy to GitHub Pages

This site is configured for GitHub Pages at `https://<username>.github.io/Projects_Website/`.

1. Run `npm run build`
2. Deploy the `dist/` folder to the `gh-pages` branch (or configure GitHub Actions to do this on push)
3. In the repo settings, set GitHub Pages source to the `gh-pages` branch

The Vite `base` path and React Router `basename` are both set to `/Projects_Website/`. A `404.html` redirect is included for client-side routing on GitHub Pages.

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
