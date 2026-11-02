# Nguyễn Hoàng Anh (Ryan) — Portfolio

Personal portfolio of **Nguyễn Hoàng Anh (Ryan)**, Software Engineer.

🔗 **Live:** https://hanhdev.vercel.app

![Preview](public/og-image.png)

## Features

- **Sidebar + scrolling layout:** sticky profile card on the left; About, Resume, Projects and Contact sections scroll on the right
- **Sticky topbar** with scroll-spy highlighting; every section has a shareable link (`/#projects`)
- **English / Vietnamese:** EN/VI switch in the topbar; defaults to the browser language and remembers the choice
- **Light / dark theme:** the toggle reveals the new theme as a growing circle; follows the OS setting on first visit and remembers the choice
- **Projects:** status badges, filter by language, case-study modal (Problem → Solution → Architecture → Highlights → Next steps) with animated, theme-aware architecture diagrams
- **Motion:** staggered reveals, cursor-following spotlight on cards, scroll progress bar. Everything respects `prefers-reduced-motion`
- **Responsive:** on mobile the profile card collapses and the layout stacks
- **SEO / sharing:** Open Graph + Twitter card image, canonical URL, `robots.txt`, `sitemap.xml`

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS 4 · Framer Motion · react-icons · Google Analytics · Vercel

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run lint
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

Pushing to `main` deploys to Vercel automatically.

## Editing content

Almost all content lives in [`src/constants/data.ts`](src/constants/data.ts). Text that visitors read is written in both languages:

```ts
title: { en: 'Badminton', vi: 'Cầu lông' },
```

Names, tech labels and URLs are plain strings. Interface labels (buttons, headings) are in [`src/i18n/ui.ts`](src/i18n/ui.ts).

| What | Where in `data.ts` |
|---|---|
| Name, role, email, location, social links, CV | `personalInfo` |
| About text | `about.intro`, `about.bio` |
| "What I'm doing" cards | `services` |
| Work experience timeline (hidden while empty) | `experience` |
| Education | `education` |
| Projects (+ filter via `stack`, `status`, `roadmap`) | `projects` |
| Architecture diagrams | `src/constants/diagrams.ts` |
| Tech stack (grouped, `primary` = highlighted) | `techStack`, `techGroups` |
| Interests | `interests` |

Images and the CV PDF are in `src/assets/`. Replace a file with one of the same name, or update its import at the top of `data.ts`.

### Adding an experience entry

```ts
export const experience: ExperienceItem[] = [
  {
    company: 'Company name',
    role: { en: 'Software Engineer Intern', vi: 'Thực tập sinh Kỹ sư phần mềm' },
    period: { en: 'Sep 2026 – Present', vi: 'Tháng 9/2026 – Hiện tại' },
    location: { en: 'Ho Chi Minh City', vi: 'TP. Hồ Chí Minh' },
    highlights: [
      { en: 'What you built or improved', vi: 'Bạn đã xây dựng / cải thiện gì' },
    ],
    tech: ['Java', 'Spring Boot'],
  },
];
```

### Icons

Brand and technology icons are self-hosted SVGs in `public/icons/`, from [coloured-icons](https://github.com/dheereshag/coloured-icons) (MIT). They are used as `<i className="ci ci-java ci-xl" />`. To add one, copy its logo into `public/icons/` and add a rule to [`src/styles/icons.css`](src/styles/icons.css).

## Project structure

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md).
