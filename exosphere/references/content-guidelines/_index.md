# Content guidelines — index

Boomi's voice, tone, content patterns, and inclusive language for UI copy. The "how should I phrase this button label, this error, this empty state" layer.

**Phase B pending** (will land with the Storybook snapshot):

- `voice-and-tone.md` — Boomi's product voice.
- `inclusive-language.md` — gender-neutral phrasing, preferred terminology.
- `content-patterns.md` — overview of microcopy patterns.
- Per-pattern files: field labels, CTAs, error messages, empty states, toast/banner choice, tabs, tooltips, numbers/dates/times, micro-copy, naming elements, notifications.
- `dont-be-a-robot.md` — don't sound like a robot.
- `accessible-content.md` — content accessibility rules.

Until these are bundled, fetch them live:

```bash
node scripts/fetch-storybook-doc.mjs content-voice-and-tone--overview
node scripts/fetch-storybook-doc.mjs content-inclusive-language-overview--overview
node scripts/fetch-storybook-doc.mjs content-content-patterns-overview--overview
# to see all:
node scripts/fetch-storybook-doc.mjs --list | grep ^content-
```

Or browse at https://exosphere.boomi.com/?path=/docs/content-voice-and-tone--overview
