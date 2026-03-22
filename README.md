# Impact Auctions - Next.js 15 App Router Conversion

This is a complete Next.js 15 App Router conversion of the Impact Auctions website, originally built with React + Wouter + Tailwind CSS v4 + shadcn/ui + Framer Motion.

## Project Structure

```
impact-auctions-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts and metadata
│   │   ├── page.tsx                # Home page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx            # Services overview
│   │   │   ├── live-auctions/
│   │   │   │   └── page.tsx
│   │   │   ├── silent-auctions/
│   │   │   │   └── page.tsx
│   │   │   ├── fund-a-need/
│   │   │   │   └── page.tsx
│   │   │   ├── virtual-events/
│   │   │   │   └── page.tsx
│   │   │   └── event-planning-emcee/
│   │   │       └── page.tsx
│   │   ├── auction-packages/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── videos/
│   │   │   └── page.tsx
│   │   ├── not-found.tsx
│   │   └── globals.css             # Tailwind v4 with @theme inline
│   ├── components/
│   │   ├── site-header.tsx         # Client component with navigation
│   │   ├── site-footer.tsx
│   │   ├── cta-banner.tsx
│   │   └── ui/                     # 60+ shadcn/ui components
│   └── lib/
│       └── utils.ts                # cn() utility function
├── public/
│   ├── favicon.png
│   ├── opengraph.jpg
│   └── images/                     # All hero, headshot, and asset images
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── components.json

## Key Conversions from React Router (Wouter) to Next.js App Router

### Routing
- Flat file-based routing replaces Wouter's route definitions
- Nested folders create nested routes (e.g., `services/live-auctions/page.tsx` → `/services/live-auctions`)

### Navigation
- `import { Link } from "wouter"` → `import Link from "next/link"`
- Links work the same way: `<Link href="/path"><Content /></Link>`

### Current Route Detection
- `import { useLocation } from "wouter"` → `import { usePathname } from "next/navigation"`
- `const [location] = useLocation()` → `const pathname = usePathname()`
- `location === "/path"` → `pathname === "/path"`

### Client Components
- All components using `useState`, `useRef`, `usePathname`, event handlers, or Framer Motion have `"use client"` directive
- Server components (static content) don't need this

### Metadata
- Root layout includes Next.js `Metadata` export with title templates and OG image
- Dynamic metadata can be set per-page using `generateMetadata()`

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with `@theme inline` custom properties
- **Components**: shadcn/ui (60+ components)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion (preserved from original)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Montserrat) via `next/font/google`

## Installation & Usage

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Pages Included

| Route | Page | Type |
|-------|------|------|
| `/` | Home | Client |
| `/about` | About Us | Client |
| `/services` | Services Overview | Client |
| `/services/live-auctions` | Live Auctions | Client |
| `/services/silent-auctions` | Silent Auctions | Client |
| `/services/fund-a-need` | Fund-A-Need | Client |
| `/services/event-planning-emcee` | Event Planning & Emcee | Client |
| `/contact` | Contact Form | Client |
| `/videos` | Event Highlights | Client |
| `404` | Not Found | Static |

## Component Structure

### Layout Components
- **SiteHeader**: Sticky navigation with dropdown menus, mobile menu drawer
- **SiteFooter**: Footer with links and social media icons
- **CtaBanner**: Call-to-action section with customizable styling

### Page Sections
All pages follow a consistent pattern:
- PageHero (title + subtitle)
- Content sections (intro, features, testimonials, etc.)
- Related links or services
- CTA Banner
- Footer

### Forms
Contact and home pages include:
- React Hook Form for state management
- Zod for validation
- shadcn/ui form components (Input, Textarea, FormField, etc.)

## Styling Notes

- **Tailwind v4**: Uses `@theme inline` for custom CSS variables
- **Custom utilities**: `.section-pad`, `.container-tight`, `.display-font`
- **Color system**: Defined as CSS variables in `:root` and `.dark`
- **Dark mode**: Supported via `.dark` class (can be toggled with Tailwind's dark mode strategy)

## Notes for Development

1. All routing is file-based; create new routes by adding folders and `page.tsx` files
2. Use `"use client"` directive for interactivity; keep Server Components by default
3. Navigation uses `next/link` for optimal performance
4. Images in `public/` folder are accessed with absolute paths (e.g., `/images/hero-auction.jpg`)
5. Dynamic routes would use folder names with brackets (e.g., `[slug]`)

## Original Source

Converted from: `/sessions/epic-busy-maxwell/impact-auctions-clean/`

Original tech stack:
- React 19 with hooks
- Wouter for routing
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
