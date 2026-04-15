# Design System Specification: Clinical Dark
 
## 1. Overview & Creative North Star
### The Creative North Star: "The Logical Monolith"
This design system is a digital manifestation of high-precision engineering. Designed for the Senior Software Architect, it moves away from the "approachable" softness of consumer web apps and leans into the brutalist, hyper-functional aesthetic of server infrastructure and terminal interfaces. 
 
We achieve **Functional Elegance** by rejecting the "template" look. We favor intentional asymmetry, extreme typographic scales, and a "tactile infrastructure" feel. The layout should feel less like a webpage and more like a high-end command deck—sharp, cold, and immensely powerful. We break the grid with overlapping technical data and "ghost" containers that suggest a depth of information without cluttering the visual field.
 
---
 
## 2. Colors & Surface Architecture
The palette is rooted in a "Clinical Dark" spectrum: deep, void-like foundations punctuated by high-energy neon signals.
 
### Tonal Hierarchy
- **Primary Logic (Cyan):** `primary` (#dbfcff) and `primary_container` (#00f0ff). Use these for active states and critical data paths.
- **Secondary Logic (Indigo):** `secondary` (#c0c1ff). Use for background processes and secondary architectural elements.
- **Background:** `background` (#111318). The absolute floor of the experience.
 
### The "No-Line" Rule
Sectioning must **never** be achieved via 1px solid borders. Boundaries are defined exclusively through:
1.  **Background Shifts:** Transitioning from `surface` to `surface_container_low`.
2.  **Tonal Transitions:** Using `surface_container_highest` to elevate a prioritized module above the background.
3.  **Negative Space:** Utilizing the spacing scale to create psychological boundaries.
 
### Surface Nesting
Treat the UI as a physical stack of machined components. 
- A dashboard base sits at `surface_dim`.
- A code editor or primary workspace sits at `surface_container`.
- Floating utility panels use `surface_bright` with a **Glassmorphism** treatment (0.4 opacity + 20px backdrop-blur) to maintain a sense of "ambient data" passing beneath the active layer.
 
### Signature Textures
Main CTAs and high-level headers should utilize a subtle linear gradient from `primary` to `primary_fixed_dim` at a 135-degree angle. This provides a "shimmer" effect reminiscent of fiber-optic cabling.
 
---
 
## 3. Typography
The typographic system creates a tension between the geometric brutalism of **Space Grotesk** and the invisible utility of **Inter**.
 
- **Display & Headlines (Space Grotesk):** These are your architectural markers. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create an authoritative, editorial feel. 
- **Body (Inter):** Used for documentation and long-form logs. It is neutral, legible, and disappears to let the content lead.
- **Code & Labels (Space Grotesk / Monospace):** All metadata, timestamps, and architectural labels (`label-md`) must use Space Grotesk. This reinforces the "high-tech" persona. 
 
**Editorial Tip:** Use "Data Overlays." Overlap a small `label-sm` in `primary` color over the edge of a `headline-lg` to simulate a technical readout or versioning tag.
 
---
 
## 4. Elevation & Depth
In this design system, depth is a product of light and layering, not shadows.
 
- **The Layering Principle:** To lift a card, move it from `surface_container_low` to `surface_container_high`. The "lift" is perceived through color value, not physical distance.
- **Ambient Glows:** Traditional drop shadows are prohibited. Instead, use "Ambient Glows." When an element is focused, apply a very large (40px-64px), low-opacity (4%-6%) outer glow using the `primary` color. This simulates the light emission of a neon display in a dark room.
- **The "Ghost Border" Fallback:** If containment is required for complex data grids, use a **Ghost Border**: `outline_variant` at 15% opacity. It should be felt, not seen.
- **Sharpness:** All corners are `0px`. Roundness is a soft human trait; this system is machined logic.
 
---
 
## 5. Components
 
### Buttons
- **Primary:** Solid `primary_container`. Text in `on_primary_container`. Sharp corners. On hover, a 1px `primary` "Ghost Border" appears 4px outside the button perimeter.
- **Tertiary:** No background. Text in `primary`. All caps `label-md`. Underlined with a 2px `primary` bar that spans only 50% of the width, aligned left.
 
### Inputs & Text Areas
- **State:** Background is `surface_container_lowest`. 
- **Focus:** The bottom edge animates a 2px line from `outline` to `primary`. No other borders.
- **Typography:** Placeholder text uses `on_surface_variant` at 40% opacity.
 
### Cards & Data Modules
- **Construction:** Use `surface_container_low`. 
- **Constraint:** No dividers. Separate the header from the body using a `surface_container_high` strip for the header background, or simply a 32px vertical gap.
- **Interactive:** On hover, the background shifts to `surface_container_highest`.
 
### Status Indicators (Chips)
- **Active:** `tertiary_container` text on a `surface_container_high` background.
- **Error:** `error` text with a subtle `error_container` (20% opacity) background. 
 
---
 
## 6. Do's and Don'ts
 
### Do:
- **Use Intentional Asymmetry:** Align the main header to the far left, but push the primary data visualization 15% off-center to the right.
- **Embrace High Contrast:** Pair `surface_container_lowest` against `primary_fixed` for high-impact callouts.
- **Respect the Monolith:** Keep layouts heavy and grounded. Avoid "airy" or "bouncy" animations; transitions should be fast (150ms) and linear.
 
### Don't:
- **No Rounded Corners:** Never use a border-radius. It breaks the "infrastructure" metaphor.
- **No Divider Lines:** If you feel the need to add a line, add 16px of space or change the background tone instead.
- **No Standard Shadows:** Do not use `box-shadow: 0 4px 6px...`. If it doesn't look like a glowing screen or a stacked plate, it doesn't belong.
- **No Generic Icons:** Use ultra-thin (1pt) stroke icons or character-based symbols (glyphs) to maintain the clinical feel.
 
---
 
## 7. Spacing Scale
The spacing system is strictly modular (8px base). Use larger gaps (64px, 128px) between major functional blocks to allow the "Clinical Dark" aesthetic to breathe, preventing the interface from feeling like a cramped legacy terminal. Space is a luxury; use it to denote importance.