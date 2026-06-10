# Wasem Doppelstück Design System

**Version:** 1.0  
**Brand:** Weingut Wasem Doppelstück  
**Location:** Ingelheim, Rheinhessen, Germany  
**Updated:** June 2025

---

## About the Brand

Weingut Wasem Doppelstück is a family-owned winery, wine hotel, event destination and hospitality brand in Ingelheim, Rheinhessen, Germany. Run by the Wasem family, the business combines modern organic viticulture with deep regional roots. Offerings include wine production, direct-to-consumer e-commerce, wine tastings, vineyard experiences, a wine hotel, event spaces, and seasonal gastronomy.

**Brand essence:** *"Guter Wein entsteht nicht im Keller, sondern im Weinberg."*  
("Good wine is not made in the cellar, but in the vineyard.")

The brand should feel like a place where people are **welcomed**, not impressed.

### Products & Services
- Wine production and direct sales (online + cellar door)
- Wine hotel with rooms and suites
- Vineyard events, tastings, corporate events
- Wedding destination
- Seasonal gastronomy
- Journal / editorial content

### Target Audiences
- Wine enthusiasts and collectors
- Direct-to-consumer wine buyers
- Wine tourists visiting Rheinhessen
- Hotel guests
- Event and wedding customers
- Corporate event clients
- Premium but approachable lifestyle consumers

---

## Sources

This design system was developed from the following materials:

- `uploads/Literwein_Weiss_bio-1-600x600.png` — Bottle product photo (Weiss liter)
- `uploads/66fda140-8ae9-4af9-b3a0-da69919034c0.png` — Brand inspiration reference sheet (Doppelstück Weingut, Austria — related brand)
- `uploads/58950ee3-cef4-4e1c-9c81-3ccc26ec0d41.png` — Wasem Doppelstück brand strategy + UI concept sheet (primary reference)
- `uploads/Cormorant_Garamond,Inter.zip` — Font files (Google Fonts used as substitute — see note below)

---

## CONTENT FUNDAMENTALS

### Language
- **Primary:** German (DE). Secondary: English (EN).
- The UI switches between languages; all nav, labels, and CTAs should be available in both.

### Tone of Voice
- Warm, knowledgeable, personal — not corporate or authoritative
- Speaks *with* the customer, not *at* them
- Uses first person: *"Wir"* (we) in German, *"We"* in English — the family is present
- Understated confidence: no hyperbole, no marketing-speak
- Descriptive but grounded: wine described by place, technique, and character — not abstractions

### Copywriting Rules
- **Headlines:** All-caps short phrases OR title-case single words; never sentence case for hero text
  - ✅ `CHARAKTER. HERKUNFT. HANDWERK.`
  - ✅ `Weine mit Charakter.`
  - ❌ `Discover our amazing selection of wines`
- **Subheads:** Sentence case, brief (8–15 words max)
- **Body copy:** Conversational, warmly informative. Avoid jargon, avoid clichés ("perfect for any occasion")
- **CTAs:** Short imperatives — `ENTDECKEN →`, `IN DEN WARENKORB`, `MEHR ERFAHREN →`
- **Product names:** All-caps — `WASEM WEISS`, `WASEM ROT`, `DOPPELSTÜCK ROSÉ`
- **Labels / tags:** All-caps — `BIO`, `VEGAN`, `LEHM`, `KALK`
- **Navigation:** All-caps or small-caps — `WEINE`, `WEINGUT`, `HERKUNFT`, `JOURNAL`, `KONTAKT`

### Emoji
**Never used** — this brand communicates through typography and imagery, not emoji.

### Numbers & Currency
- Prices: `€ 16,00` (space after €, comma decimal — German convention)
- Alcohol: `13,5 % vol` (space before %)
- Vintages: just the year — `2022`

---

## VISUAL FOUNDATIONS

### Color
- **Page background:** Warm Ivory `#F6F1E8` — never pure white
- **Primary text:** Bottle Black `#0E0E0D` — not pure #000
- **Card surfaces:** White `#FFFFFF` or Label Cream `#EFE4D1`
- **Dark surfaces:** Bottle Black `#0E0E0D` — used for navigation, dark sections, overlays
- **Accents:** Vineyard Soil `#9A7655` (warm brown) — hover states, highlighted prices, active indicators
- **Borders:** Rheinhessen Sand `#D6C0A0` — subtle, warm, never cold grey
- Use of color is restrained. Backgrounds are either dark or warm ivory; there are no bright accent colors, no blues, no purples.

### Typography
- **Display headlines:** Cormorant Garamond (sub for Canela) — used for all major editorial headings, the W mark, section intros. Weight 500–600. Often italic for elegance.
- **Body + UI:** Inter (sub for Söhne) — used for navigation, buttons, labels, body copy, prices. Weight 300–500.
- **Mixing:** Display type for mood; sans for clarity. A hero headline in Cormorant Garamond, followed by a CTA in Inter, is the canonical pairing.
- **Scale:** Headlines go very large (60px+). Body is comfortable 16–18px.
- **Letter-spacing:** Wide tracking on all-caps UI elements (`0.06–0.18em`). Tight or zero tracking on large display text.

### Backgrounds
- No gradients in UI — avoided completely. Gradients only as protection layers (linear to transparent) on top of hero photos.
- Hero sections: full-bleed photography with a subtle dark overlay (`rgba(14,14,13,0.3–0.5)`) 
- Sections alternate between Warm Ivory `#F6F1E8` and white `#FFFFFF`
- Dark sections use Bottle Black `#0E0E0D` — for navigation, CTAs, footers, closing sections
- No textured or patterned backgrounds — only the W watermark as a decorative mark

### The W Mark
- **Central visual identity** — treated like a luxury monogram (Aesop / Toteme / Loewe)
- Appears as: navigation logo, bottle label dominant element, hero watermark, section divider, favicon, packaging mark
- Never used as a category or classification system
- As watermark: very large, low opacity (`opacity: 0.04–0.08`), positioned behind imagery or section backgrounds
- As logo: scaled to appropriate context, always in Cormorant Garamond 500 or the SVG asset

### Animation & Motion
- Motion is **minimal and restrained** — transitions communicate elegance, not energy
- Default transition: `220ms cubic-bezier(0.4,0,0.2,1)`
- Hover states: opacity shifts (`0.85`) or subtle color changes — no scale transforms on text
- Bottle images: subtle lift on hover — `translateY(-4px)` with shadow increase
- Page transitions: clean fades at `380ms`
- No bounces, no springs, no decorative loops
- Reduced motion: always respected via `prefers-reduced-motion`

### Hover & Press States
- **Buttons (primary):** Background shifts from `#0E0E0D` to `#2A2A28` — subtle lightening
- **Buttons (secondary):** Background fills with `rgba(14,14,13,0.05)` on hover
- **Cards:** Very subtle shadow increase + bottle image lift `translateY(-4px)`
- **Links:** Color shifts to `--color-vineyard-soil` on hover
- **Navigation items:** Opacity drop to `0.65` on hover

### Borders
- Very thin — always `1px` 
- Color: Rheinhessen Sand `#D6C0A0` (warm, never cold grey)
- Used sparingly — cards may have no border (shadow instead), or a subtle border without shadow

### Corner Radii
- **Everything sharp by default (`border-radius: 0`)** — this is fundamental to the aesthetic
- **Exception 1:** Terroir chips / info tags — `border-radius: 9999px` (pill)
- **Exception 2:** BIO/VEGAN circle badges — `border-radius: 50%`
- **No** rounded cards, buttons, inputs, modals, or overlays

### Card Style
- Cards are clean rectangles — no border radius
- Background: white or Label Cream, depending on context
- Shadow: `--shadow-sm` (`0 2px 8px rgba(14,14,13,0.07)`) — very subtle
- Or: thin `1px` border in Rheinhessen Sand, no shadow
- Content: generous internal padding (`--space-6` to `--space-8`)

### Imagery
- **Natural light only** — warm, golden hour tones preferred
- **Subjects:** vineyards, vines close-up, barrels, hands working, wine pouring, family, guests at events, hotel interiors, food pairings, Rheinhessen landscape
- **Color grade:** Warm, slightly amber — avoid cool/bluish tones
- **Not:** stock imagery, artificial studio lighting, overly posed, generic wine marketing tropes
- **Usage:** Full-bleed in heroes; contained in cards; background behind dark overlays
- Bottle product photography: clean white/ivory background, centered

### Spacing
- **Generous** — the brand breathes. Section padding minimum 64px, often 96–128px
- Use the spacing scale tokens; avoid ad-hoc values
- Content max-width: `1240px` (container-lg)

### Icons
- **Style:** Thin outline, single stroke weight (~1–1.5px at 24px size)
- Corresponds to Lucide Icons (CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`)
- Wine-specific icon concepts from brand sheet: grape cluster, leaf, barrel/cask, wine bottle, sunrise/sunset, family/people silhouette, award ribbon, handshake, eye/clarity, chain link
- Icons used sparingly — decorative brand icons in brand materials, functional icons (cart, menu, arrow) in UI
- Arrow icons: always thin `→` style — used in buttons and links

---

## ICONOGRAPHY

The brand uses a **thin outline icon system** throughout the UI and brand materials.

### Functional UI Icons (Lucide)
Load via CDN:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```
Key icons used:
- `shopping-cart` — cart
- `menu` — hamburger nav
- `x` — close
- `arrow-right` — CTA arrows
- `chevron-down` — dropdowns, accordions
- `search` — search
- `user` — account
- `globe` — language switcher
- `minus` / `plus` — quantity selector
- `check` — confirmation

### Brand Concept Icons (thin outline SVG)
Shown in the brand sheet (section 14) — represent brand pillars:
- Herkunft (Origin) — location/map pin
- Handwerk (Craft) — hand
- Nachhaltigkeit (Sustainability) — leaf
- Familie (Family) — people group
- Lagenwein (Single Vineyard) — grape cluster
- Qualität (Quality) — award ribbon
- Vertrauen (Trust) — handshake
- Beständigkeit (Consistency) — shield
- Klarheit (Clarity) — eye / diamond
- Verbundenheit (Connection) — link / vine

These icons are decorative/brand-use only — not for functional UI navigation.

### Assets Available
- `assets/logo-w.svg` — W mark (inline SVG, requires font loaded)
- `assets/logo-wordmark.svg` — Full wordmark with W + WASEM DOPPELSTÜCK
- `assets/badge-mark.svg` — Circular secondary mark "HANDGEMACHT AUS RHEINHESSEN"
- `assets/bottle-sample.png` — Bottle product photo (Weiss liter)

---

## VISUAL FOUNDATIONS — Quick Reference

| Token | Value | Use |
|-------|-------|-----|
| `--color-bottle-black` | `#0E0E0D` | Text, nav, buttons |
| `--color-warm-ivory` | `#F6F1E8` | Page background |
| `--color-label-cream` | `#EFE4D1` | Cards, surfaces |
| `--color-vineyard-soil` | `#9A7655` | Accents, hover |
| `--font-display` | Cormorant Garamond | Headlines |
| `--font-body` | Inter | UI, body, labels |
| `--radius-none` | `0` | All rectangular elements |
| `--radius-pill` | `9999px` | Tags, chips |
| `--shadow-sm` | subtle warm | Cards |

---

## File Index

```
styles.css                    ← global entry point (import this)
tokens/
  fonts.css                   ← @font-face / Google Fonts import
  colors.css                  ← color primitives + semantic aliases
  typography.css              ← type scale, weights, line heights
  spacing.css                 ← spacing scale, radii, containers
  effects.css                 ← shadows, transitions, blur
assets/
  logo-w.svg                  ← W monogram mark (SVG text)
  logo-wordmark.svg           ← Full wordmark: W + WASEM DOPPELSTÜCK
  badge-mark.svg              ← Circular secondary mark
  bottle-sample.png           ← Wine bottle product photo
guidelines/
  colors-primary.card.html    ← Core color palette specimens
  colors-earth.card.html      ← Earth tones + accent colors
  colors-semantic.card.html   ← Semantic token reference
  type-display.card.html      ← Cormorant Garamond specimens
  type-body.card.html         ← Inter specimens
  type-scale.card.html        ← Full type scale overview
  spacing.card.html           ← Spacing scale
  effects.card.html           ← Shadows, radii, transitions
  brand-mark.card.html        ← W mark system
  brand-essence.card.html     ← Brand values + essence
  brand-icons.card.html       ← Icon system overview
components/
  core/
    Button.jsx / .d.ts        ← Primary, secondary, ghost buttons
    core.card.html            ← Component showcase
  forms/
    Input.jsx / .d.ts         ← Text input, select
    forms.card.html           ← Form component showcase
  products/
    WineCard.jsx / .d.ts      ← Wine product card (grid + list)
    products.card.html        ← Product component showcase
  feedback/
    Badge.jsx / .d.ts         ← Circular badges (BIO/VEGAN)
    Tag.jsx / .d.ts           ← Terroir chips (LEHM, KALK)
    feedback.card.html        ← Badge + tag showcase
ui_kits/
  website/
    index.html                ← Full website prototype (click-thru)
    App.jsx                   ← Router + shell
    Navigation.jsx            ← Dark header with W logo
    Hero.jsx                  ← Homepage hero
    WineShop.jsx              ← Wine grid + filters
    ProductDetail.jsx         ← Single wine detail page
    HotelPage.jsx             ← Hotel rooms + booking
    EventsPage.jsx            ← Events listing
    Footer.jsx                ← Footer
readme.md                     ← This file
```

---

## Font Note

⚠️ **Font substitution in effect.** The brand specifies:
- **Canela** (display) → substituted with **Cormorant Garamond** (Google Fonts)
- **Söhne** (body) → substituted with **Inter** (Google Fonts)

Cormorant Garamond shares Canela's high-contrast serif character and calligraphic quality at large sizes. Inter shares Söhne's clean, legible grotesque personality.

To upgrade: place licensed `.woff2` files in `assets/fonts/` and update `tokens/fonts.css` with `@font-face` declarations. No other files need changing.
