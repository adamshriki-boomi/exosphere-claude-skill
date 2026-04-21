# Patterns — index

Exosphere documents cross-component UX patterns — the "how do components compose for common UI shapes" layer.

**Phase B pending** (will land with the Storybook snapshot):

- `links-vs-buttons.md` — when to use `ExLink` vs. `ExButton` (one of the most-cited decisions).
- `dialogs.md` — dialog vs. drawer vs. inline; confirmation dialogs; destructive confirmations.
- `tables.md` — `ExTable` vs. `ExStructuredList`; row actions; empty states; filters.
- `authentication.md` — login / signup / SSO flows.
- `page-headers.md` — title + breadcrumbs + action pattern.
- Additional patterns (forms, error handling, loading states, permissions) as they're documented.

Until these are bundled, fetch them live:

```bash
node scripts/fetch-storybook-doc.mjs patterns-links-vs-buttons-1-overview--docs
node scripts/fetch-storybook-doc.mjs patterns-dialogs-1-overview--docs
# or to see all Pattern stories:
node scripts/fetch-storybook-doc.mjs --list | grep ^patterns-
```

Or browse at https://exosphere.boomi.com/?path=/docs/patterns-links-vs-buttons-1-overview--docs
