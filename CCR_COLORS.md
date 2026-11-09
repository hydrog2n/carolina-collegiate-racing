# Carolina Collegiate Racing — Color Reference

## Brand Color Palette

| Color | Hex | Role |
|---|---|---|
| Racing Red | `#CC2E40` | Primary visual identity color |
| Black | `#000000` | Primary background color |
| White | `#FFFFFF` | Primary typography and contrast |
| Garnet | `#73000A` | Secondary brand color / USC affiliation |

## Color Hierarchy

**1. Racing Red — `#CC2E40` (Primary)**

This is the dominant chromatic color throughout the website.

Use prominently for:
- Large headings and typographic accents
- Buttons and calls to action
- Navigation highlights and active states
- Section backgrounds and graphic elements
- Borders, lines, and motorsports-inspired details
- Interactive elements and hover effects

Racing Red should be immediately recognizable as the website's signature color.

**2. Black — `#000000` (Primary Background)**

The website should be predominantly dark, creating a dramatic, premium motorsports aesthetic.

Use black for:
- Main page backgrounds
- Navigation and footer
- Hero sections
- Dark content panels
- High-contrast compositions

Subtle charcoal variations may be introduced for visual depth.

**3. White — `#FFFFFF` (Primary Text)**

Use white for:
- Body text and primary headings on dark backgrounds
- Navigation labels
- High-contrast graphic elements
- Occasional light-background sections

White should maintain readability and balance the red and black palette.

**4. Garnet — `#73000A` (Secondary)**

The traditional USC garnet remains part of CCR's identity but should not dominate the website.

Use selectively for:
- Secondary branded elements
- Subtle background variations
- USC-related visual references
- Supporting graphic details

Do not substitute garnet for Racing Red in primary interface elements.

## Overall Visual Direction

- Predominantly black and dark charcoal backgrounds.
- Racing Red as the dominant accent and signature brand color.
- White typography for clarity and contrast.
- Traditional garnet used sparingly.
- Bold, high-contrast, energetic motorsports aesthetic.
- Avoid excessive gradients, glowing effects, or unrelated saturated colors.
- Favor strong color blocking, typography, and racing photography.

## Accessibility

- Maintain WCAG AA text contrast standards.
- Use white for normal-sized text on Racing Red backgrounds.
- Avoid Racing Red for small text directly on black backgrounds unless contrast requirements are verified.
- Do not rely on color alone to communicate important information.
- Preserve the original colors of official CCR, USC, and sponsor logos.

## CSS Variables

```css
:root {
  --ccr-primary: #CC2E40;
  --ccr-black: #000000;
  --ccr-white: #FFFFFF;
  --ccr-garnet: #73000A;

  --ccr-background: #000000;
  --ccr-foreground: #FFFFFF;
  --ccr-accent: #CC2E40;
}
```

## Instructions for AI Development Agents

Treat `#CC2E40` as the primary visual brand color throughout the website.

Do not interpret it as a minor accent to be used only for buttons or hover states.

The website should be predominantly dark, with Racing Red used confidently across major design elements.

Traditional garnet (`#73000A`) is a secondary supporting color.

Preserve the original colors and proportions of all supplied logos. Do not recolor brand assets to match the website palette.
