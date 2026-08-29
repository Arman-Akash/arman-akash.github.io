# Personal site — Arman Hossain

Static portfolio site. React + Vite + TypeScript + Tailwind CSS v4, built to plain
HTML/CSS/JS and served free from GitHub Pages. No server, no database, nothing to maintain.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typechecks, then writes dist/
npm run preview  # serves the real build - check here before pushing
```

### Node version

Requires **Node 22.12 or newer** — please upgrade if you are on an older 22.x.

Vite 8 and oxlint both declare `node ^20.19.0 || >=22.12.0`. On Node 22.11 npm silently skips their
platform-specific native binaries (npm drops optional dependencies that fail an engine check), and
`vite build` then dies with `Cannot find module './rolldown-binding.win32-x64-msvc.node'`.

The two Windows bindings pinned in `optionalDependencies` are a stopgap for that, and they are
listed as optional so `npm ci` on the Linux CI runner skips them on the `os` check rather than
failing. **They do not survive a clean install on Node < 22.12** — npm will skip them for the same
engine reason. If a fresh `npm install` leaves you unable to build, upgrade Node; that is the actual
fix, and it lets you drop the `optionalDependencies` block entirely.

CI is unaffected either way: the workflow pins Node 22.x, which resolves the correct Linux bindings
on its own.

## Editing the content

**All content lives in `src/data/`.** Components only render it — you should not need to touch
JSX to keep the site current.

| File | Holds |
| --- | --- |
| `src/data/profile.ts` | Name, role, tagline, About paragraphs, headline stats, contact links, Formspree ID |
| `src/data/experience.ts` | Job history. Newest company first, newest role first inside each company |
| `src/data/skills.ts` | Skill groups |
| `src/data/projects.ts` | Project cards |
| `src/data/education.ts` | Education, training, awards |

`src/types.ts` defines the shapes, so a typo becomes a build error rather than a broken page.

### Adding a promotion

Give the company a second entry in `roles` — newest first. Two roles under one company render as
a promotion track, which is the point:

```ts
roles: [
  { title: 'Senior Programmer', start: 'Jan 2025', end: 'Present' },
  { title: 'Programmer', start: 'Sep 2022', end: 'Dec 2024' },
],
```

### Replacing the CV PDF

Drop the new file at `public/Arman_Hossain.pdf`, keeping the same filename. If you rename it,
update `cvPath` in `src/data/profile.ts` to match.

## Turning on the contact form

Until a Formspree ID is set, the contact section shows a direct email button instead of a form —
it never shows a form that quietly goes nowhere.

1. Sign up at [formspree.io](https://formspree.io) (free tier: 50 submissions/month).
2. Create a form; copy its ID from the endpoint `https://formspree.io/f/<ID>`.
3. Set `formspreeId` in `src/data/profile.ts`.

That ID is public by design — it ships in the client bundle either way, so it does not belong in a
GitHub secret.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub
Pages. One-time setup in the repo: **Settings → Pages → Source = GitHub Actions**.

The site assumes it is served from the domain root, which is what the `arman-akash.github.io` repo
name gives you. If you host it from a normal project repo instead, set `base: '/<repo-name>/'` in
`vite.config.ts` and update the absolute URLs in `index.html`, `public/robots.txt`, and
`public/sitemap.xml`.

## Notes on a couple of decisions

- **The entrance animation is CSS-only** (`animation-timeline: view()`), not JavaScript. Content is
  visible by default and the fade is layered on only where supported, so no browser quirk or script
  failure can leave a section stuck invisible. On a CV site that is the one failure that matters.
- **The theme is applied by an inline script in `index.html`** before first paint, so dark-mode
  visitors never see a white flash. It mirrors `src/hooks/useTheme.ts` — change both together.
- **Skills are tags, not percentage bars.** A "C# 85%" bar communicates nothing and reads junior.
