# Repository Guidelines

## Project Structure & Module Organization
The app is a Vite-based React front end (`src/client.tsx`, `src/styles.css`) that talks to an `agents`-powered Cloudflare Worker (`src/server.ts`) plus custom tool definitions in `src/tools.ts`. Static assets live in `public/`, while `index.html` bootstraps the SPA shell. Type declarations are kept in `env.d.ts` and generated via Wrangler to keep bindings in sync (`npm run types`). Cloudflare deployment settings are managed through `wrangler.jsonc` and the `.wrangler/` directory; keep those files updated whenever bindings or durable objects change.

## Build, Test, and Development Commands
- `npm install`: installs all runtime (agents, ai, react) and Wrangler tooling dependencies.
- `npm start`: runs `vite dev` with hot module reload at `http://localhost:5173`, the fastest way to exercise UI + Worker locally.
- `npm run types`: regenerates Worker environment types (required whenever Env bindings change).
- `npm run deploy`: produces a production bundle (`vite build`) and publishes through `wrangler deploy`.
For manual Worker-only iteration, you can also run `npx wrangler dev --local` from this directory; point the React client to the printed Worker URL if you need to stub the UI.

## Coding Style & Naming Conventions
Code is TypeScript-first with ECMAScript modules. Use 2-space indentation, single quotes inside JSX when practical, and keep React components as stateless functions unless lifecycle hooks require state. Name exported components/classes in `PascalCase`, helper functions and hooks in `camelCase`, and environment bindings in `UPPER_SNAKE_CASE` to match Wrangler conventions. Rely on TypeScript’s strict mode plus Vite’s fast feedback instead of an additional linter; ensure types are narrow and avoid `any` unless third-party APIs force it (see the `toolPart` cast for reference).

## Testing Guidelines
There is no automated suite yet, so prioritize high-signal manual flows: run `npm start`, connect to your Worker, and exercise the MCP tooling paths, schedule tool, and Codemode proxy interactions before opening a PR. When adding automated coverage, colocate tests beside the modules they verify using the `*.test.ts` suffix so Vite’s test runner can be introduced without restructuring later. Document new mock servers or fixtures inside `src/__fixtures__/` to keep agent behaviors reproducible.

## Commit & Pull Request Guidelines
The existing history follows a Conventional Commits style (`feat: Initial commit`), so continue using the `<type>: <summary>` format (`feat`, `fix`, `docs`, etc.) and keep messages in the imperative mood. Each pull request should describe the user-facing impact, list the commands you ran (`npm start`, `npm run deploy --dry-run`, etc.), reference any related issues, and include screenshots or terminal captures if the change affects UI or tooling flows. Mention required env/config updates explicitly so reviewers can sync their `.env` before testing.

## Environment & Configuration Tips
Copy `.env.example` to `.env` and set `OPENAI_API_KEY` plus any Cloudflare tokens before running locally. Regenerate types after touching bindings so `env.d.ts` stays accurate. Avoid committing secrets; rely on Wrangler’s account-level secrets for deployed environments. When introducing new MCP servers or outbound rules, update both `src/server.ts` (for enforcement) and `globalOutbound` policies to keep the runtime hardened.
