# Project Guidelines

## Code Style
- Tech stack is Astro + TypeScript + Tailwind v4. Keep Astro frontmatter/import patterns consistent with [src/pages/index.astro](src/pages/index.astro) and [src/pages/projects/[slug].astro](src/pages/projects/[slug].astro).
- Reuse typed interfaces/services for remote data (see `Repository` in [src/services/github.ts](src/services/github.ts)).
- Preserve the local formatting style of each file (some files use tabs, others spaces); avoid repo-wide reformatting.
- Prefer existing theme tokens and utility patterns in [src/styles/global.css](src/styles/global.css) instead of introducing new ad-hoc styles.

## Architecture
- File-based routing under [src/pages](src/pages): landing page at [src/pages/index.astro](src/pages/index.astro), project detail route at [src/pages/projects/[slug].astro](src/pages/projects/[slug].astro).
- Shared document shell + transitions live in [src/layouts/Layout.astro](src/layouts/Layout.astro).
- Homepage is composed from section components in [src/components](src/components) (Header/Hero/Projects/Timeline/Reviews/Services/Contact/Footer).
- Project-detail-specific UI lives under [src/components/project](src/components/project).
- External data access is centralized in [src/services/github.ts](src/services/github.ts); pages/components should consume service functions.

## Build and Test
- Install dependencies: `pnpm install`
- Development: `pnpm dev`
- Production build: `pnpm build`
- Local preview: `pnpm preview`
- Astro CLI passthrough: `pnpm astro`
- No test/lint scripts are currently defined in [package.json](package.json); do not assume `pnpm test` or `pnpm lint` exists.

## Project Conventions
- Dynamic project pages are statically generated via `getStaticPaths` in [src/pages/projects/[slug].astro](src/pages/projects/[slug].astro), using GitHub repo names as slugs.
- Keep GitHub username/repository sourcing behavior consistent with [src/components/Projects.astro](src/components/Projects.astro) and [src/pages/projects/[slug].astro](src/pages/projects/[slug].astro).
- Keep homepage anchor targets stable (for example `id="projects"` in [src/components/Projects.astro](src/components/Projects.astro)) when editing linked sections.
- Prefer editing existing components over adding new top-level architecture or directories.

## Integration Points
- Primary integration is GitHub REST API via `fetch` in [src/services/github.ts](src/services/github.ts).
- `fetchGitHubRepos` currently filters out forks, sorts by stars DESC, and limits to 6; preserve behavior unless explicitly requested otherwise.
- Local project imagery is mapped in component helpers (for example `getProjectImage` in [src/components/Projects.astro](src/components/Projects.astro) and [src/pages/projects/[slug].astro](src/pages/projects/[slug].astro)).
- Additional project context exists in [docs/projects.md](docs/projects.md).

## Security
- No secrets/env vars are currently required for GitHub calls; keep it that way unless a task explicitly introduces authenticated APIs.
- For external links opened with `target="_blank"`, include `rel="noopener noreferrer"`.
- Handle external API failures gracefully (service functions currently catch and return fallback values).
