# Daniel Gilbert Jenewari: portfolio

Personal site for a web and app developer in Port Harcourt, Nigeria. One page:
selected work, stack, about and contact, written for both hiring teams and
clients.

**Stack:** React 19, Vite, Tailwind CSS 4, Framer Motion.

## Run it

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # production build into dist/
```

## Adding a project

All work lives in [`src/data/projects.js`](src/data/projects.js). Set
`featured: true` for the large showcase, and `platform` to `"web"`, `"app"` or
`"game"` to pick the frame. Apps take an array of phone `screens` instead of a
single `image`. Fields left `null` are hidden, so leave `result` empty rather
than guess at an outcome.
