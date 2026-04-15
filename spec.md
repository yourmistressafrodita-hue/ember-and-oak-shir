# EMBER & OAK — Restaurant Website Spec

## Brand Identity
- **Name**: EMBER & OAK
- **Tagline**: "Where Fire Meets Flavor"
- **Concept**: Upscale Mediterranean restaurant & bar, emphasis on wood-fire cooking, seasonal ingredients, intimate atmosphere
- **Location**: 47 Old Town Square, Prague, Czech Republic

## Art Direction
- **Mood**: Dark, warm, moody, intimate — like candlelight
- **Style**: Photography-forward, minimal UI chrome, generous whitespace on dark backgrounds
- **Inspiration**: Noma, Pujol, award-winning fine dining websites

## Color Palette
```
--color-bg:          #0C0A09        /* Near-black warm */
--color-surface:     #1C1917        /* Dark surface */
--color-surface-2:   #292524        /* Elevated surface */
--color-divider:     #3D3835        /* Subtle divider */
--color-border:      #44403C        /* Border */
--color-text:        #F5F0EB        /* Warm white */
--color-text-muted:  #A8A29E        /* Muted */
--color-text-faint:  #78716C        /* Faint */
--color-primary:     #D4A574        /* Warm gold/amber */
--color-primary-hover: #C4956A      /* Gold hover */
--color-accent:      #8B7355        /* Warm bronze */
--color-cream:       #FAF7F2        /* Cream for light sections */
```

## Typography
- **Display**: Cormorant Garamond (Google Fonts) — elegant serif, weight 300-700
- **Body**: DM Sans (Google Fonts) — clean modern sans, weight 300-500
- Keep sizes moderate/compact — no oversized hero text

## Assets (already generated in assets/)
- `hero-interior.png` — Full interior shot with diners, warm ambient lighting (16:9)
- `food-hero.png` — Fine dining plate, beautifully plated (4:3)
- `chef.png` — Chef cooking at wood-fire grill (3:4)
- `bar.png` — Cocktail bar with bartender (16:9)
- `food-spread.png` — Overhead spread of Mediterranean dishes (16:9)

## SPA Pages

### 1. HOME
- **Hero**: Full-viewport image (hero-interior.png) with dark overlay, centered title "EMBER & OAK" in elegant serif, tagline below, "Reserve a Table" CTA button
- **Intro section**: Short 2-line philosophy text, centered
- **Featured dishes**: 3-column grid showing signature dishes with food-hero.png split or reused artistically  
- **Atmosphere section**: Side-by-side image (bar.png) + text about the bar & cocktails
- **Reservation CTA**: Full-width dark section with "Join Us Tonight" + reservation button
- **Hours/Location**: Compact footer section with hours, address, phone

### 2. MENU
- **Hero**: Smaller hero with food-spread.png, title "The Menu"
- **Menu categories** with tabbed navigation: Starters, Mains, Desserts, Cocktails & Wine
- **Menu items**: Name (serif), description (sans, muted), price — elegant layout
- **Note**: "Menu changes seasonally. Please inform staff of any dietary requirements."

#### Sample Menu Items:
**Starters** (€12-18):
- Burrata & Heirloom Tomato — Aged balsamic, basil oil, pine nuts
- Wood-Fired Octopus — Charred lemon, capers, fingerling potatoes
- Beef Tartare — Quail egg, truffle aioli, crispy shallots
- Seasonal Soup — Chef's daily creation, sourdough crostini

**Mains** (€28-45):
- Whole Grilled Branzino — Herb butter, roasted vegetables, citrus
- 28-Day Aged Ribeye — Bone marrow butter, hand-cut frites
- Handmade Pappardelle — Wild mushroom ragù, pecorino, truffle oil
- Duck Breast — Cherry gastrique, roasted parsnips, kale

**Desserts** (€12-16):
- Tiramisu — House-made ladyfingers, espresso, mascarpone
- Chocolate Fondant — Salted caramel, vanilla gelato
- Panna Cotta — Seasonal fruit compote, almond biscotti
- Cheese Selection — Artisan cheeses, honeycomb, fig preserve

**Cocktails** (€14-18):
- Ember Old Fashioned — Smoked bourbon, maple, angostura
- Mediterranean Mule — Limoncello, ginger, fresh basil
- Oak Negroni — Barrel-aged gin, Campari, sweet vermouth
- Lavender Martini — Vodka, elderflower, lavender syrup

### 3. ABOUT / STORY
- **Hero**: Chef image (chef.png) with overlay
- **Story**: "Our Story" — Founded in 2019 by Chef Marco Bellini, a tale of Mediterranean passion meeting Czech craft
- **Chef section**: Image + bio paragraph
- **Philosophy**: Wood-fire cooking, seasonal & local, sustainability
- **Values**: 3 elegant cards (Seasonal, Local, Crafted)

### 4. RESERVATIONS
- **Design**: Centered, elegant form on dark background
- **Fields**: Date, Time (dropdown), Number of Guests (1-12), Name, Email, Phone, Special Requests (textarea)
- **Note**: "For parties larger than 8, please call directly"
- **Contact info**: Phone, email alongside form
- **Form is decorative** — submit shows a styled confirmation message (no backend)

### 5. CONTACT (integrated in footer/nav)
- Address: 47 Old Town Square, Prague 1, Czech Republic
- Phone: +420 234 567 890
- Email: hello@emberandoak.cz
- Hours: Mon–Thu 17:00–23:00 | Fri–Sat 17:00–00:00 | Sun 12:00–22:00

## Technical Requirements
- Single HTML file + CSS file + JS file + base.css (from shared skill)
- SPA with hash routing (#home, #menu, #about, #reservations)
- Smooth scroll, elegant page transitions
- Dark theme by default (restaurant mood) — NO light mode toggle needed
- Mobile responsive (hamburger menu)
- Images loaded from `./assets/` folder
- Footer: "Designed by Shir Alhanati" + "Created with Perplexity Computer" link
- Perplexity attribution in `<head>` (see pplx_attribution.html content below)
- SVG logo: stylized flame/ember mark, simple geometric

## Attribution (must be first child of <head>):
```html
<!--
   ______                            __
  / ____/___  ____ ___  ____  __  __/ /____  _____
 / /   / __ \/ __ `__ \/ __ \/ / / / __/ _ \/ ___/
/ /___/ /_/ / / / / / / /_/ / /_/ / /_/  __/ /
\____/\____/_/ /_/ /_/ .___/\__,_/\__/\___/_/
                    /_/
        Created with Perplexity Computer
        https://www.perplexity.ai/computer
-->

<!-- Perplexity Computer Attribution — SEO Meta Tags -->
<meta name="generator" content="Perplexity Computer">
<meta name="author" content="Perplexity Computer">
<meta property="og:see_also" content="https://www.perplexity.ai/computer">
<link rel="author" href="https://www.perplexity.ai/computer">
```
