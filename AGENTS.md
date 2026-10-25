<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

easy-traveler: Next.js 16.4.3 App Router app (React 19.3), single package, no `src/` — `app/` (routes), `components/`, `lib/` at repo root. `@/*` maps to the repo root.

## Commands

- `npm run dev` / `npm run build` / `npm run start` — Turbopack is the default bundler (`--webpack` to opt out).
- `npm run lint` — flat-config ESLint (`eslint.config.mjs`), just the `eslint` CLI (no `next lint` in 16).
- No test or typecheck scripts. Typecheck manually: `npx tsc --noEmit`. `next build` also typechecks.
- README.md is untouched create-next-app boilerplate — don't rely on it.

## Cache Components model (next.config.ts)

`cacheComponents: true` + `partialPrefetching: true` are set, so this project uses the Next 16 Cache Components / PPR model, which changes defaults:

- Route segment configs `dynamic`, `dynamicParams`, `revalidate`, and `fetchCache` are removed/incompatible — use `use cache` / `cacheLife` / `cacheTag` instead.
- Uncached or request-time data (e.g. `cookies()`, fresh `fetch`) must sit inside `<Suspense>` or the build fails. Temporary opt-out: `export const instant = false` on a page/layout.
- `page`/`layout` `params` and `searchParams` props are `Promise`s — `await` them.
- Prefer the bundled docs in `node_modules/next/dist/docs/` over web results; snippets targeted at Next ≤15 often don't compile here.

## Styling & UI conventions

- Tailwind v4, CSS-first: theme tokens live in `app/globals.css` (`@theme inline`). There is no `tailwind.config` file — don't create one.
- shadcn/ui uses the `base-nova` style (`components.json`): generated components under `@/components/ui` mount primitives from `@base-ui/react/*` (Base UI, **not Radix**). Follow `components/ui/button.tsx` and add new components via the shadcn CLI, not by hand-copied code from shadcn docs.
- `dark` is a class-based custom variant (`@custom-variant` in `globals.css`), not `prefers-color-scheme`.
- `cn` comes from the `cn` npm package (re-exported via `lib/utils`), not a local clsx + tailwind-merge helper.
