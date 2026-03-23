# Design System Specification

## 1. Overview & Creative North Star: "The Kinetic Arena"
This design system moves beyond the static grid of traditional booking platforms to embrace **The Kinetic Arena**. Our Creative North Star is defined by high-performance energy, editorial precision, and a sense of "active air." We reject the cluttered, boxy layouts of legacy sports apps in favor of an expansive, premium experience that feels as fast as the athletes using it.

To achieve this, the system utilizes **Asymmetric Momentum**. We deliberately break the expected alignment of images and text—overlapping bold typography onto high-action imagery and using varying container heights—to create a visual rhythm that mimics the ebb and flow of a live match. This is not just a utility; it is a digital stadium.

---

## 2. Color Strategy & Tonal Architecture
The palette is built on high-contrast "Action" accents set against a sophisticated, multi-layered neutral foundation.

### Palette Highlights
* **Primary (Action Green):** `#0f6b00` (Main branding) / `#2ff801` (Vibrant interaction). This is our "Signal Color"—use it sparingly to guide the eye to the most critical actions.
* **Secondary (Stadium Blue):** `#445d80` / `#bad3fc`. These tones provide the "Atmospheric Depth," grounding the vibrancy of the green.
* **Neutral Foundation:** `surface` (`#f5f6f7`) through `surface-container-highest` (`#dadddf`).

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders for sectioning are strictly prohibited. The UI must never feel "fenced in."
* **Boundaries:** Define spatial shifts solely through background color changes. For example, a `surface-container-low` section should sit directly against a `surface` background to denote a change in context.
* **Surface Hierarchy:** Use nesting to create depth. A `surface-container-lowest` (#ffffff) card should live on a `surface-container-low` (#eff1f2) section. This creates a soft, natural lift that feels like physical paper.

### The "Glass & Gradient" Rule
To elevate the "Action Green," avoid flat blocks of color on hero elements.
* **Signature Gradients:** Use a subtle linear transition from `primary` (#0f6b00) to `primary-container` (#2ff801) at a 135-degree angle for primary CTAs and high-energy banners.
* **Glassmorphism:** For floating navigation or over-image overlays, use `surface-container-lowest` at 70% opacity with a `20px` backdrop-blur. This ensures the energy of the sports imagery bleeds through the UI.

---

## 3. Typography: Editorial Authority
We pair the geometric precision of **Lexend** for headers with the functional clarity of **Inter** for data-heavy booking flows.

* **Display (Lexend):** Used for "The Big Moment." Large, bold, and often overlapping imagery. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create a sense of professional impact.
* **Headline (Lexend):** Used for section titles. `headline-md` (1.75rem) provides an approachable yet authoritative tone.
* **Body & Labels (Inter):** All functional text uses Inter. `body-lg` (1rem) is the standard for player bios and descriptions to ensure maximum readability during quick scans.
* **The Contrast Rule:** Always pair a `display-lg` headline with `body-md` secondary text to create a dramatic typographic scale that feels "Editorial" rather than "Template."

---

## 4. Elevation & Depth: Tonal Layering
We move away from the "shadow-on-everything" approach. Depth in this system is a result of light and material density.

* **The Layering Principle:** Stack your surfaces.
* *Level 0:* `surface` (The Base)
* *Level 1:* `surface-container-low` (Content Sections)
* *Level 2:* `surface-container-lowest` (Interactive Cards)
* **Ambient Shadows:** If a card must "float" (e.g., a player match request), use a shadow with a blur of `24px`, an offset of `y: 8px`, and an opacity of `6%`. The shadow color must be a tinted version of `on-surface` (#2c2f30), never pure black.
* **The Ghost Border:** If accessibility requires a stroke (e.g., in high-glare outdoor use), use `outline-variant` (#abadae) at **15% opacity**. It should be felt, not seen.

---

## 5. Component Signature Styles

### Buttons
* **Primary:** High-energy `primary-container` (#2ff801) background with `on-primary-container` (#0b5800) text. Use `radius-full` (9999px) for an aerodynamic, sporty feel.
* **Secondary:** `surface-container-highest` background. No border.
* **Tertiary:** Text-only with a `primary` icon.

### Cards & Match Lists
* **No Dividers:** Forbid the use of 1px lines between list items. Use `spacing-4` (1.4rem) or a subtle shift between `surface-container-low` and `surface-container-high` to separate players or court bookings.
* **Imagery:** All cards must feature a "Cut-out" or "Bleed" image. For player profiles, allow the headshot to break the top boundary of the card slightly (asymmetric momentum).

### Input Fields
* **Structure:** Minimalist. Use `surface-container-low` as the field background.
* **States:** Upon focus, the field should transition to a `2px` `primary` "Ghost Border" (20% opacity) rather than a solid thick line.

### High-Context Components
* **Availability Heatmap:** Use a gradient scale from `secondary-container` (low activity) to `primary-container` (peak time) to show court availability.
* **Action Chips:** Use `radius-md` (0.75rem) for player skill tags (e.g., "Intermediate," "Competitive").

---

## 6. Do’s and Don'ts

### Do
* **DO** use whitespace as a functional tool. A `spacing-12` (4rem) gap between sections is not "wasted space"—it is "recovery breath" for the user.
* **DO** use high-action photography where athletes are in motion. Avoid static, posed shots.
* **DO** overlap text elements. A `headline-lg` can sit 20% over the edge of a `surface-container` to create depth.

### Don't
* **DON'T** use 1px solid black or grey dividers. It kills the "Kinetic" flow of the system.
* **DON'T** use sharp corners. The minimum radius is `DEFAULT` (0.5rem), but `xl` (1.5rem) is preferred for large layout containers.
* **DON'T** use the "Action Green" for body text. It is a signal color, not a reading color; use `on-surface` (#2c2f30) for all long-form content.
