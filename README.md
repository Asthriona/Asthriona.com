# Asthriona.com

A personal site and blog built with Nuxt 4, Tailwind CSS, and @nuxt/content. Includes a small server API for fetching AniList data and GitHub contributors, plus image configuration for Netlify.

## Features

- Content-driven blog stored in `content/blog/*.md` using `@nuxt/content`.
- Nuxt 4 application with Tailwind CSS and icons.
- Server endpoints:
  - `/api/anilist` — proxy to AniList GraphQL for the `asthriona` user.
  - `/api/contributors` — fetches GitHub contributors for the repository and filters bots.
- Image configuration using Netlify provider and remote images configured in `netlify.toml`.

## Tech stack

- Nuxt 4
- Vue 3
- Tailwind CSS
- @nuxt/content
- Netlify for deployment (image provider)

## Getting started

Prerequisites:

- Node.js (compatible with Nuxt 4)
- Yarn (project uses Yarn by `packageManager`) or npm/pnpm

Install dependencies:

```bash
# yarn
yarn install

# or npm
npm install
```

Development server:

```bash
# start dev server
yarn dev
# or
npm run dev
```

Build for production:

```bash
yarn build
# or
npm run build
```

Generate a static site:

```bash
yarn generate
# or
npm run generate
```

Preview a production build locally:

```bash
yarn preview
# or
npm run preview
```

## Project structure (high level)

- `app.vue` — root layout
- `pages/` — application pages (index, about, blog)
- `components/` — Vue components (`TheNavBars.vue`, `TheFooter.vue`, `ThePost.vue`)
- `content/blog/` — markdown posts
- `server/api/` — server endpoints (`anilist.js`, `contributors.js`)
- `assets/css/` — Tailwind and global CSS
- `public/` — static files (robots.txt, humans.txt, etc.)

## Config & deployment notes

- Image provider is set to Netlify in `nuxt.config.ts` and `netlify.toml` includes `remote_images` domains (e.g. `cdn.asthriona.com`, GitHub avatars, raw GitHub content, AniList images).
- The site is configured to run on Netlify; ensure the build command is `yarn build` and publish directory is set by your Netlify configuration (Nuxt output directory if using static generation).

## API endpoints

- `/api/anilist` — returns AniList GraphQL response for the configured user. See `server/api/anilist.js`.
- `/api/contributors` — returns filtered GitHub contributors list. See `server/api/contributors.js`.

## Contributing

- Create issues or PRs against the repository.
- Posts live in `content/blog/` as Markdown files; follow frontmatter schema in `content.config.ts` (fields: `date`, `published`).

## License

No license specified. Add a `LICENSE` file to indicate project license.

---

If you'd like, I can:
- run the dev server locally,
- add badges (build/deploy),
- add a `LICENSE` file, or
- update the README with more screenshots or examples.
