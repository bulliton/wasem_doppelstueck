---
name: wasem-doppelstuck-design
description: Use this skill to generate well-branded interfaces and assets for Weingut Wasem Doppelstück — a family-owned winery, wine hotel, and hospitality brand in Ingelheim, Rheinhessen, Germany. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping or production work.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- `styles.css` — import this one file to get all tokens (colors, type, spacing, effects, fonts)
- `assets/` — logo SVGs, bottle photo, brand mark
- `tokens/` — individual CSS token files (colors, typography, spacing, effects, fonts)
- `components/core/` — Button
- `components/feedback/` — Badge, Tag
- `components/forms/` — Input
- `components/products/` — WineCard
- `ui_kits/website/` — full click-through website prototype (homepage, shop, product, hotel, events)
- `guidelines/` — specimen cards for colors, type, spacing, brand mark, essence, photography, icons
- `readme.md` — full brand guide (content fundamentals, visual foundations, iconography)

## Key brand rules

1. **The W is the core mark** — treat like Aesop or Loewe monogram. Central to every touchpoint.
2. **No rounded corners** except pill-shaped tags and circular badges. Everything else is sharp (border-radius: 0).
3. **No emoji** — this brand communicates through typography and imagery.
4. **No gradients** in UI — only as hero photo protection layers.
5. **Warm Ivory `#F6F1E8`** is the page background — never pure white.
6. **Bottle Black `#0E0E0D`** for nav, buttons, footers — not pure black.
7. **Cormorant Garamond** for all display headlines; **Inter** for UI, body, buttons.
8. **Button text is ALL CAPS** with wide letter-spacing (`0.09em`).
9. **Copy is bilingual** — German primary, English secondary.
10. **Generous whitespace** — section padding minimum 64px, prefer 96–128px.

## Component namespace

```js
const { Button, Badge, Tag, Input, WineCard } = window.WasemDoppelstCkDesignSystem_9fe068;
```

Load `_ds_bundle.js` before using components.
