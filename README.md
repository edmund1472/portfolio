# portfolio

My personal portfolio — React + TypeScript + Vite.

## Run locally

```bash
npm install
npm run dev
```

## Editing content

Everything (name, about, links, projects, experience) is in `src/data.ts`.

**Project images:** drop a screenshot into `public/projects/` and set `image: "/projects/<file>.png"`
on that project. Until you do, the site shows a striped placeholder with the filename it expects.
16:10 screenshots fit best.

**Résumé:** put `resume.pdf` in `public/`.

## Deploy

`npm run build` outputs a static site to `dist/`.

- **Vercel / Netlify:** import the GitHub repo; build command `npm run build`, output directory `dist`.
- **GitHub Pages:** set `base: "/portfolio/"` in `vite.config.ts` (unless using a custom domain) and publish `dist/`.
