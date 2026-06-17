# NayePankh Foundation

A world-class NGO website built with Next.js 15, featuring award-winning design aesthetics inspired by Charity: water storytelling, Apple minimalism, and Framer-level interactions.

## Tech Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Shadcn UI** — Button primitives
- **Framer Motion** — Animations
- **Lucide Icons**
- **Lenis** — Smooth scrolling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  globals.css          # Theme, glassmorphism, gradients
  layout.tsx           # Root layout + Lenis provider
  page.tsx             # Home page composition

components/
  Navbar.tsx
  Hero.tsx
  Impact.tsx
  Story.tsx
  Programs.tsx
  Gallery.tsx
  Certificates.tsx
  MediaCoverage.tsx
  Volunteer.tsx
  Donate.tsx
  VideoCTA.tsx
  Footer.tsx

  ui/                  # Reusable UI primitives
    animated-heading.tsx
    button.tsx
    counter.tsx
    glow.tsx
    gradient-background.tsx
    section.tsx

  providers/
    SmoothScrollProvider.tsx

lib/
  constants.ts         # Site content & data
  motion.ts            # Framer Motion helpers
  utils.ts             # cn() utility
```

## Design System

| Token     | Value                      |
|-----------|----------------------------|
| Background| `#0B1220`                  |
| Card      | `rgba(255,255,255,0.05)`   |
| Primary   | `#4F46E5`                  |
| Secondary | `#22D3EE`                  |
| Text      | `#FFFFFF`                  |
| Muted     | `#94A3B8`                  |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Clean cache + start dev server (recommended) |
| `npm run dev:fast` | Start dev without cleaning (faster, use if stable) |
| `npm run clean` | Manually clear `.next` and webpack cache |
| `npm run build` | Production build |
| `npm run start` | Start production server |

## Troubleshooting

**Unstyled white page / broken layout**

This usually means a stale `.next` cache. Run:

```bash
npm run clean
npm run dev
```

Always use `npm run dev` (not `next dev` directly) — it auto-cleans caches before starting.
