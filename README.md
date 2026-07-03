# Portfolio

**Live:** [https://codespanda.github.io/portfolio/](https://codespanda.github.io/portfolio/)

A production-ready, one-page developer portfolio. Fast, accessible, responsive, and fully driven by a **single configuration file** — no backend required.

Built with **React + Vite + TypeScript + Tailwind CSS + shadcn/ui**.

---

## ✨ Features

- **Single-file configuration** — edit [`src/data/portfolio.ts`](src/data/portfolio.ts) to change all content.
- **Dark mode by default** with a light-mode toggle and `localStorage` persistence.
- **Sections:** Hero, About, Skills, Experience (timeline), Projects, Certifications, Testimonials, Contact.
- **Sticky navbar** with smooth scrolling, active-section highlighting, and a mobile hamburger menu.
- **Scroll progress bar** and **scroll-to-top** button.
- **Contact form** with client-side validation (React Hook Form + Zod) and toast feedback — no backend calls.
- **SEO** — title/description, Open Graph, Twitter cards, canonical URL, and JSON-LD `Person` structured data.
- **Accessible** — semantic landmarks, keyboard navigation, visible focus rings, skip link, ARIA labels, and `prefers-reduced-motion` support.
- **Performance** — code-split 404 route, lazy-loaded images with skeletons, vendor chunk splitting, non-blocking fonts.
- **Polished UX** — subtle Framer Motion reveals, glassmorphism, gradient accents, empty states, and a custom 404 page.

---

## 🧱 Tech Stack

| Layer      | Technology                              |
| ---------- | --------------------------------------- |
| Framework  | React 18 + Vite                         |
| Language   | TypeScript (strict)                     |
| Styling    | Tailwind CSS + shadcn/ui-style tokens   |
| Icons      | lucide-react                            |
| Animation  | Framer Motion                           |
| Forms      | React Hook Form + Zod                   |
| SEO        | react-helmet-async                      |
| Routing    | react-router-dom                        |
| Toasts     | sonner                                  |

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to ./dist
npm run preview  # preview the production build locally
```

Other scripts:

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript, no emit
npm run format     # Prettier
```

---

## ⚙️ Customization

Everything is configured in **one place**: [`src/data/portfolio.ts`](src/data/portfolio.ts).

It contains your personal info, navigation, social links, skills, experience, education, projects, certifications, testimonials, and SEO settings. The UI renders automatically from this data — you rarely need to touch a component.

### Common tweaks

- **Profile photo / project images:** drop files in [`public/`](public/) and reference them as `/my-image.jpg`, or use any hosted URL.
- **Resume:** add `public/resume.pdf` and set `personal.resumeUrl` to `/resume.pdf`. (A placeholder note lives at `public/resume.pdf.txt`.)
- **Favicon:** replace [`public/favicon.svg`](public/favicon.svg).
- **Social card:** replace [`public/og-image.svg`](public/og-image.svg) and update `seo.ogImage`.
- **Theme colors:** adjust the HSL design tokens in [`src/index.css`](src/index.css) (`:root` and `.dark`).
- **Optional sections:** the Testimonials section hides itself automatically when its array is empty; empty Skills/Projects/etc. show a friendly empty state.

---

## 🌐 Deployment

The site is fully static — deploy the `dist/` folder anywhere. SPA fallback configs are included.

### Vercel

Import the repo; framework preset **Vite**. Build command `npm run build`, output `dist`. SPA rewrites are handled by [`vercel.json`](vercel.json).

### Netlify

Build command `npm run build`, publish directory `dist`. SPA redirects are handled by [`public/_redirects`](public/_redirects).

### GitHub Pages

1. If deploying to a **project page** (`https://<user>.github.io/<repo>/`), set the base path:
   - In `vite.config.ts` add `base: '/<repo>/'`.
   - In [`public/404.html`](public/404.html), set `segmentsToKeep = 1`.
2. Build and publish the `dist/` folder (e.g. via GitHub Actions or the `gh-pages` package).

`public/404.html` provides SPA deep-link fallback for static hosts.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui-style primitives (button, card, badge, input, …)
│   ├── common/      # Container, SectionTitle, ThemeToggle, ScrollProgress, …
│   ├── layout/      # Navbar, Footer
│   └── sections/    # Hero, About, Skills, Experience, Projects, …
├── data/
│   └── portfolio.ts # ⭐ single source of truth for all content
├── hooks/           # useTheme, useActiveSection, useScrollProgress
├── lib/             # utils (cn), seo, animation variants
├── pages/           # Home, NotFound
├── types/           # shared TypeScript types
├── App.tsx          # routes
├── main.tsx         # providers + mount
└── index.css        # Tailwind + design tokens
```

---

## 📄 License

MIT — use it, fork it, make it yours.
