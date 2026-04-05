# Nandan Patel — Portfolio

Dark luxury editorial portfolio built with Next.js 14, Framer Motion, React Three Fiber, and Lenis smooth scroll.

## Design System

- **Display font**: Bebas Neue — razor-sharp, editorial, unforgettable
- **Body font**: DM Mono — technical, precise, developer-coded
- **Accent**: `#c8a96e` — warm gold, used sparingly for maximum impact
- **Base**: Pure `#000000` black with `#0d0c0a` for depth variation
- **Liquid crystal effects**: Canvas-based iridescent blobs throughout every section
- **Cards**: Perfectly uniform grid layout — same height discipline, same padding, same anatomy across all sections

## Stack

- Next.js 14 (App Router)
- TypeScript
- Framer Motion 11 — scroll animations, entrance sequences
- React Three Fiber + Three.js — 3D nerd robot character
- Lenis — momentum smooth scroll
- Tailwind CSS — utility base
- FormSubmit.co — contact form delivery

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy

```bash
npm run build
npm run start
```

Or push to GitHub and connect to Vercel — zero config needed.

## Before Going Live

1. Update `lib/metadata.ts` — replace `https://nandanpatel.dev` with your actual domain
2. Add `public/og-image.png` — 1200×630px Open Graph preview image
3. Add `public/favicon.ico` and `public/icon-192.png`, `public/icon-512.png`
4. Update `app/sitemap.ts` with your real domain
5. Confirm FormSubmit.co — first submission requires email confirmation

## Structure

```
app/
  layout.tsx        Root layout + SEO
  page.tsx          Page assembly
  globals.css       Full design system + liquid crystal animations
  sitemap.ts
  robots.ts

components/
  layout/
    Nav.tsx         Glass nav + mobile menu
    Cursor.tsx      Custom magnetic cursor
  effects/
    LiquidCanvas.tsx    Animated iridescent canvas blobs
    CrystalOrb.tsx      Static positioned glow orbs
    IridescentLine.tsx  Decorative liquid crystal divider lines
  robot/
    RobotModel.tsx  Three.js nerd robot (glasses, antenna, visor, gold accents)
    RobotScene.tsx  Canvas wrapper + mouse tracking
  sections/
    Hero.tsx
    Experience.tsx
    Hackathons.tsx
    Projects.tsx
    Freelance.tsx
    TechStack.tsx
    Achievements.tsx
    Education.tsx
    Contact.tsx
    Footer.tsx

lib/
  data.ts           All portfolio content — edit here
```
