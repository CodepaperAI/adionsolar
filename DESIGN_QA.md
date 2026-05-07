# Adion Solar Design QA Notes

Use this as the visual acceptance checklist while building and reviewing.

## Direction
- The site must be image driven. Every top-level page uses a full-bleed photographic hero, not a hero card.
- Lower sections should feel editorial: bands, split image/text layouts, stat rails, and image-led rows.
- Cards are allowed only for genuinely repeated objects or forms: product rows, case previews, FAQ accordions, contact routing.
- Avoid generic equal-card templates for main storytelling sections.

## Typography
- Requirement source: `Adion_Solar_Redesign_Plan.docx`.
- Display/headlines: Fraunces.
- Body/UI: DM Sans.
- Tabular stats and numeric data: DM Mono with tabular numerals.
- Avoid Inter, Roboto, Arial, Outfit, or generic system font defaults in primary UI.
- Keep letter spacing at normal for large display text; reserve wider tracking for small uppercase labels only.

## Motion
- Hero content renders immediately for first paint and readability.
- Hero imagery uses slow transform-only atmosphere motion while keeping text readable on first paint.
- Below-the-fold content uses restrained reveal motion through `Reveal`.
- Navigation, CTA buttons, image hovers, accordions, final CTAs, proof metrics, and contact request switching use custom eased transitions.
- `prefers-reduced-motion` is respected globally in `src/app/globals.css`.
- Animations must use transform/opacity, not layout-affecting properties.

## Visual QA
- Check desktop at 1440px and mobile at 390px.
- Confirm hero text never clips horizontally.
- Confirm the mobile header shows both logo and menu button.
- Confirm image crops still show useful solar/product/project subject matter.
- Confirm no section reads as a generic template grid unless it is a repeated content list.

## Implementation Status
- Full-bleed hero system: implemented in `HeroStage`.
- Image-led homepage routing rows: implemented in `AudiencePathCards`.
- Stat rails: implemented in `HeroStage`, `ProofMetrics`, and `CaseStudyFeature`.
- Animated product guidance: implemented in `ProductGuidanceShowcase` with an equipment scan, floating category chips, a moving guidance rail, and staggered product/spec reveals.
- Sitewide motion pass: implemented across hero imagery, image panels, case features, product catalog, FAQs, contact form feedback, service-area lists, and final CTA energy lines.
- Requirement typography pass: implemented with Next font loading for Fraunces, DM Sans, and DM Mono.
- CMS schema and lead capture: implemented with Sanity schema files and `/api/contact`.
