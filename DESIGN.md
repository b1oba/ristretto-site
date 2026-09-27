---
name: Ristretto
description: Specialty coffee on Pokrovka, set down as a roaster's log on graph paper.
colors:
  roast: "#9A4A2A"
  roast-deep: "#7B3920"
  on-roast: "#FBF6EE"
  ink: "#22262B"
  pencil: "#555E5B"
  paper: "#EEF0E6"
  paper-deep: "#E3E7D9"
  rule: "#9DB5A0"
  grid-minor: "rgba(122, 156, 124, 0.16)"
  grid-major: "rgba(122, 156, 124, 0.32)"
  open-signal: "#3F7A4A"
typography:
  display:
    fontFamily: "Exo 2, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 6.2vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Exo 2, Segoe UI, sans-serif"
    fontSize: "clamp(2.125rem, 4.4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Exo 2, Segoe UI, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Golos Text, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Exo 2, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  figure:
    fontFamily: "Exo 2, Segoe UI, sans-serif"
    fontWeight: 700
    fontFeature: "\"tnum\" 1"
  hand:
    fontFamily: "Bad Script, cursive"
    fontSize: "1.75rem"
    fontWeight: 400
rounded:
  none: "0"
  focus: "2px"
  button: "4px"
spacing:
  grid-minor: "8px"
  grid-major: "40px"
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(48px, 6vw, 80px)"
  container: "1200px"
components:
  button-book:
    backgroundColor: "{colors.roast}"
    textColor: "{colors.on-roast}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 30px"
    height: "60px"
  button-book-hover:
    backgroundColor: "{colors.roast-deep}"
    textColor: "{colors.on-roast}"
  button-book-small:
    backgroundColor: "{colors.roast}"
    textColor: "{colors.on-roast}"
    rounded: "{rounded.button}"
    padding: "0 16px"
    height: "40px"
  button-book-dock:
    backgroundColor: "{colors.roast}"
    textColor: "{colors.on-roast}"
    rounded: "{rounded.button}"
    width: "100%"
    height: "54px"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  menu-tab:
    textColor: "{colors.pencil}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 20px 12px"
  menu-tab-selected:
    textColor: "{colors.ink}"
  log-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px 0"
  photo:
    rounded: "{rounded.none}"
---

# Design System: Ristretto

## Overview

**Creative North Star: "The Roaster's Log Sheet"**

Every surface is a sheet of pale green-grey graph paper, and everything on it is written down as a recorded fact: origin, tasting notes, volume, hours, entrance. Headings and figures are lettered in a drafting-form face; running text is plain and legible; a roaster's hand occasionally annotates in script. Structure comes from ruled rows, heavy ink rules that open a table, dotted price leaders and form-field labels, not from boxes or cards.

The sheet is calm and dense in the way a well-kept log is dense: generous vertical rhythm, square edges, one warm roasted-bean colour held back for the two things that matter, the roast curve and the booking action. The page refuses the cream-and-latte-art coffee site with a hero photo. No photographs exist, so none are faked; missing images are drafted as marked slots with crop marks.

**Key Characteristics:**
- Graph-paper ground (8px minor, 40px major grid) on every page
- Graphite ink and pencil grey do almost all the work
- Terracotta reserved for the roast curve and the booking buttons
- Exo 2 for headings, labels and every number; Golos Text for reading; Bad Script only for sparing roaster notes
- Ruled log rows and dotted leaders instead of cards
- Square corners everywhere except the booking button (4px)
- Self-hosted fonts; the site opens from file:// by double-click

## Colors

A cool, papery green-grey field with graphite ink and a single roasted-bean terracotta.

### Primary
- **Roasted-Bean Terracotta** (roast): the booking buttons (hero, header, contacts, mobile dock) and the stroke of the roast curve with its event points. Never a bright red.
- **Deep Roast** (roast-deep): hover state of the booking button and the tint of its soft shadow.
- **Crema White** (on-roast): text and icon on terracotta; also the selection text colour.

### Neutral
- **Graphite Ink** (ink): all primary text, headings, figures, heavy table-opening rules (2px), the map frame, crop marks, check marks, selected-tab underline.
- **Pencil** (pencil): secondary text, field labels (dt), captions, menu descriptions, volumes, unselected tabs, the closed-state status dot.
- **Graph Paper** (paper): the page ground.
- **Deep Paper** (paper-deep): footer band and the map's loading ground; the one tonal step below the sheet.
- **Rule Green** (rule): 1px row dividers, dashed and dotted leaders, section top rules, the resting underline of text links.
- **Grid Green, minor/major** (grid-minor, grid-major): the translucent 8px and 40px graph lines painted on the body background. Nothing else uses them.

### Tertiary
- **Open Signal Green** (open-signal): only the 8px dot beside the live "open now" status. It is a state signal, not a brand colour.

### Named Rules
**The Roast Reservation Rule.** At rest, terracotta appears on exactly two things: the roast curve and the «Забронировать столик» buttons. No terracotta headings, backgrounds, borders, icons or badges. Transient input states may borrow it: the focus ring, hover underlines on links and nav, text selection and the caret.

**The Booking Prominence Rule.** On every screen the terracotta booking button is the largest and most saturated filled element. Nothing else gets a filled terracotta or ink background at that scale; a new CTA that competes with it is a regression.

**The Pencil-and-Ink Rule.** Hierarchy comes from ink versus pencil and from Exo 2 versus Golos, not from new colours. Add a colour only as a state signal with a single job, like the open dot.

## Typography

**Display Font:** Exo 2 (with Segoe UI, sans-serif)
**Body Font:** Golos Text (with Segoe UI, system-ui, sans-serif)
**Hand Font:** Bad Script (with cursive)

**Character:** Exo 2 keeps the drafting-template geometry with a true Cyrillic (у, э, д drawn properly, unlike the earlier Jura), so headings, labels and numbers look entered on a form; Golos Text is a quiet Cyrillic-first reading face; Bad Script is the roaster's pen in the margin.

All three are self-hosted from `fonts/` (Exo 2 variable, 500–700, Golos Text 400/500, Bad Script 400, Cyrillic and Latin subsets). Never link a font CDN.

### Hierarchy
- **Display** (Exo 2 700, clamp(2.75rem, 6.2vw, 5.25rem), 0.98, -0.03em): the single hero headline.
- **Headline** (Exo 2 700, clamp(2.125rem, 4.4vw, 3.5rem), 1.02, -0.025em): section titles.
- **Title** (Exo 2 700, 1.3125rem, 1.2): dish names and prices; advantage headings at clamp(1.25rem, 2vw, 1.5rem). Drops to 1.1875rem under 720px.
- **Body** (Golos Text 400, 1.0625rem, 1.55; 1rem under 720px): running text. Lead 34ch, descriptions 44–46ch.
- **Label** (Exo 2 600, 0.9375rem, pencil): field labels in log and contact rows, placeholder labels, roast-chart axis labels. Sentence case, no tracking, no uppercase.
- **Figure** (Exo 2 700, tabular numerals): every number that is a fact: prices, volumes, hours, shot size, tab counts.
- **Hand** (Bad Script 400, 1.75rem, rotated -2deg; 22px in the chart, 26px on mobile): roaster annotations on the roast curve and the one signature note under the log.

### Named Rules
**The Figures-in-Exo Rule.** A number that states a fact is set in Exo 2 with tabular numerals, even inside Golos text.

**The Margin-Note Rule.** Bad Script annotates; it never carries navigation, prices, headings or anything the visitor must read to act. At most one hand note per section.

## Layout

A centered sheet, max 1200px, with a fluid gutter (clamp(16px, 4vw, 48px)). Sections stack full-width, each opened by a 1px rule-green top border and padded clamp(48px, 6vw, 80px) top and bottom. The header is a 72px row (64px on mobile) closed by a 1px rule.

Two-column sections use asymmetric fractional grids: 5fr/6fr for hero and contacts, 4fr/6fr for about, with clamp gaps of 32–88px. Menu panels and the advantages list run two equal columns with a clamp(32px, 5vw, 72px) column gap. Log and contact rows are label/value grids (11rem and 7rem label columns).

Breakpoints: at 900px every two-column grid collapses to one column. At 720px the nav hides, label/value rows stack, booking buttons go full width, menu tabs become a 2-column grid of underlined cells, and a sticky booking dock slides up from the bottom once the hero button leaves view (the footer gains 104px bottom padding to clear it).

## Elevation & Depth

The sheet is flat. Depth is carried by rules: a 2px ink rule opens each table or list, 1px rule-green lines divide rows, dashed and dotted lines lead the eye. Only two things lift off the paper, both with soft, tinted, negative-spread shadows.

### Shadow Vocabulary
- **Booking lift** (`box-shadow: 0 10px 24px -12px rgba(123, 57, 32, 0.7)`): under every terracotta booking button; compresses to `0 4px 12px -8px` on press.
- **Map sheet** (`box-shadow: 0 18px 40px -24px rgba(34, 38, 43, 0.45)`): under the ink-framed map, as if a printed map were laid on the log.

### Named Rules
**The Ruled-Not-Boxed Rule.** Group content with rules and rows, never with filled cards or bordered panels. The only framed objects are the map and the photos.

## Shapes

Square by default. Rows, tabs, frames, the map and the photos all have 0 radius; the only rounded forms are the booking button (4px), the focus ring (2px), the status dot and the curve's event points (circles). Recurring geometry comes from drafting: corner crop marks on photos, a hand-drawn check mark as the list bullet, dotted price leaders, and the roast curve's round-capped 4px stroke.

## Components

### Buttons
Solid, warm, and the loudest thing on the sheet.
- **Shape:** gently squared (4px).
- **Primary (booking):** terracotta fill, crema text, Exo 2 700, inline Telegram paper-plane icon (22px, stroked SVG) with a 12px gap. Main size 60px tall, 30px side padding, 1.1875rem text.
- **Small:** 40px tall, 16px padding, 0.9375rem, text only; lives in the header.
- **Dock:** full width, 54px, inside a 96%-opaque paper bar with a rule-green top border; mobile only, revealed by script after the hero button scrolls out.
- **Hover / Focus / Active:** hover deepens to roast-deep; press moves down 2px and tightens the shadow; focus is a 2px terracotta outline, 3px offset. Transitions 0.2s on the ease-out curve.
- There is no secondary filled button. The alternative action is a text link.

### Text Link
Exo 2 700 ink with a 2px rule-green underline at 0.35em offset. Hover shifts the underline to terracotta, a transient input state the Roast Reservation Rule allows.

### Navigation
Wordmark left ("Ristretto" in Exo 2 700 1.625rem over a pencil "specialty coffee" descriptor), three Exo 2 600 anchors right, then the small booking button. Anchors carry a transparent 2px bottom border that turns terracotta on hover. Nav hides under 720px; the wordmark and booking button remain.

### Menu Tabs
A row of Exo 2 700 tabs on a 2px ink base rule. Unselected tabs are pencil; the selected tab turns ink with a 4px ink underline. Each tab carries its item count in tabular pencil figures. Emoji from the bot's category titles are stripped. Under 720px, tabs become a two-column grid with rule-green underlines. Panels stagger in (0.45s rise, 40ms steps) when motion is allowed.

### Log Rows (signature)
A definition list opened by a 2px ink rule. Each row is a pencil Exo 2 label column and an ink value, 18px vertical padding, divided by 1px rule green. Key values go in Exo 2 700 at 1.375rem. The contacts table uses the same pattern with a 7rem label column. Stacks under 720px.

### Menu Entry with Leaders (signature)
Dish name in Exo 2, a 2px dotted rule-green leader filling the gap, pencil volume (parsed from the description), then the price in tabular Exo 2. The description sits beneath in pencil Golos, 46ch max. Rows divided by 1px rule. Data comes only from `menu.js`, which mirrors the bot's `menu.json`.

### Roast Curve (signature)
An SVG chart with ink axes, a terracotta 4px curve with paper-filled terracotta event points, pencil Exo 2 labels (загрузка, поворотная точка, первый крэк, выгрузка) and Bad Script notes for blend and tasting notes. It records once like a chart recorder: a linear 2.4s draw, each event point marked (scale-in) the moment the pen reaches it (path fractions 0, 0.295, 0.803, 1), then the Bad Script notes are written in left to right with a clip-path wipe. With reduced motion it renders complete.

### Photo
A photo pinned to the sheet: `object-fit: cover`, slightly desaturated (saturate 0.85) so it sits on the paper, with four 18px ink corner crop marks set 6px outside the frame; no border, no radius, no shadow. Two sizes: the hall photo (4:5, max 360px, 280px on mobile) under the About lead, and a wide shot (2:1, 4:3 under 720px) between the "Почему к нам заходят" heading and its list, with an optional Bad Script note hanging below its right corner that states a menu fact. WebP with `srcset`, `loading="lazy"`, a descriptive Russian alt. Source: Unsplash, credited in the footer.

### Status Line
Exo 2 700 ink text preceded by an 8px dot: pencil when closed, open-signal green when open, computed live by script. In the hero it sits under a dashed rule-green divider next to the address.

### Check-Mark List
Two-column list opened by a 2px ink rule; each item has a hand-drawn ink check mark (SVG mask) as its bullet, a Exo 2 title and a pencil Golos line. Rows divided by 1px rule.

## Do's and Don'ts

### Do:
- **Do** paint the graph-paper ground (grid-minor at 8px, grid-major at 40px on paper) on every page.
- **Do** keep terracotta on the roast curve and the booking buttons only, and keep «Забронировать столик» the largest filled element on every screen.
- **Do** open every table or list with a 2px ink rule and divide rows with 1px rule green.
- **Do** set every factual number in Exo 2 with tabular numerals.
- **Do** frame every photo with the crop marks and credit its source in the footer.
- **Do** self-host every font and asset so the page works from file://.
- **Do** pull menu content from `menu.js` (mirroring the bot's `menu.json`); never retype or invent items.
- **Do** give every animation a reduced-motion path that shows the finished state.

### Don't:
- **Don't** use bright red, or any second accent colour, for emphasis.
- **Don't** put terracotta on headings, section backgrounds, borders, badges or icons.
- **Don't** wrap content in cards, filled panels or rounded boxes; use ruled rows.
- **Don't** add uncredited stock or generated imagery, or caption stock photos as the real venue.
- **Don't** load fonts or scripts from a CDN, or fetch data at runtime; the page must open by double-click.
- **Don't** set navigation, prices or headings in Bad Script.
- **Don't** add a second filled button style that competes with booking.

## Motion

Motion records, it never performs. Durations sit in the 0.3–1s range on the ease-out curve; nothing bounces, loops or parallaxes.
- **Roast curve** (focal): see Roast Curve above; the only load choreography, and it never delays the headline or booking button.
- **Scroll entries** (script adds `.rv*` classes only when IntersectionObserver exists; content is visible by default): headings and paragraphs rise 12px and fade in; log tables draw their 2px ink rule from the left, then rows are entered 70ms apart (max six steps); hand notes are written in with a clip-path wipe; photos develop from desaturated as their crop marks close in on the corners; menu entries stagger in when the menu reaches the screen.
- **Hover** (hover-capable devices): booking buttons lift 1px and the paper plane moves 3px up-right; nav underlines are ruled in terracotta from the left; unselected tabs preview a rule-green underline; a menu row's dotted leader inks in from name to price.
- **Reduced motion:** no reveals, no curve draw, no lifts; colour and state changes stay, smooth scroll is off, and the mobile dock fades instead of sliding.
