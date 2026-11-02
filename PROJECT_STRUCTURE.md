# Project Structure

```
portfolio/
├── index.html                    # Meta / Open Graph tags, theme bootstrap (no flash), Google Analytics
├── public/
│   ├── favicon.svg, apple-touch-icon.png
│   ├── og-image.png              # 1200×630 link-preview image
│   ├── robots.txt, sitemap.xml
│   └── icons/                    # Self-hosted brand/tech icons (coloured-icons, MIT)
└── src/
    ├── main.tsx                  # Entry point, global CSS imports
    ├── App.tsx                   # Page layout: sidebar + (topbar, sections, footer)
    ├── index.css                 # Tailwind, design tokens (light/dark), motion helpers
    ├── styles/icons.css          # .ci icon classes
    ├── constants/
    │   ├── data.ts               # ALL site content, in English + Vietnamese (edit here)
    │   └── diagrams.ts           # Architecture diagram layouts per project
    ├── i18n/                     # Language context/provider, UI strings (ui.ts), types
    ├── assets/                   # Avatar, project screenshots, CV PDF
    ├── components/
    │   ├── layout/
    │   │   ├── Sidebar.tsx       # Profile card (sticky on desktop, collapsible on mobile)
    │   │   ├── Topbar.tsx        # Sticky section nav with scroll-spy
    │   │   ├── ThemeToggle.tsx   # Sun / moon button
    │   │   ├── LanguageToggle.tsx # EN / VI switch
    │   │   ├── ScrollProgress.tsx
    │   │   ├── Background.tsx    # Drifting glow + dot grid
    │   │   └── Footer.tsx
    │   ├── sections/
    │   │   ├── About.tsx         # Bio, "What I'm doing", interests
    │   │   ├── Resume.tsx        # Experience & education timelines, grouped tech stack
    │   │   ├── Projects.tsx      # Filterable cards + case-study modal
    │   │   └── Contact.tsx       # Copy-email CTA + social channels
    │   └── ui/
    │       ├── Section.tsx       # Section panel with animated heading
    │       ├── ArchitectureDiagram.tsx # SVG diagram renderer (animated data flow)
    │       └── card.ts           # Shared card / chip class names
    ├── hooks/
    │   ├── useTheme.ts           # Theme state + circular reveal (View Transitions API)
    │   └── useActiveSection.ts   # Scroll-spy
    └── lib/
        ├── motion.ts             # Shared Framer Motion variants
        ├── scroll.ts             # Smooth scroll + URL hash
        └── spotlight.ts          # Cursor position for the card spotlight
```

## Design tokens

Colours are CSS variables in `src/index.css` with one set per theme (`:root[data-theme="dark"]` / `[data-theme="light"]`). They are exposed to Tailwind as `bg-bg`, `bg-surface`, `bg-surface-2`, `border-line`, `text-fg`, `text-muted`, `text-subtle`, `text-accent`, `bg-accent-soft`, and so on. To change the accent colour, edit `--accent` (and `--accent-hover`, `--accent-soft`, `--glow`) in both themes.

## Fonts

Inter for body text, JetBrains Mono for labels and code (Google Fonts, loaded in `index.html`).
