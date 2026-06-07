# GRANDX — Official Website

> Ultra-sleek design agency website built with Next.js 14, Framer Motion, Lenis smooth scroll, and Tailwind CSS.

## 🎨 Brand

- **Primary Red:** `#E40101`
- **Black:** `#000000`
- **Dark Grey:** `#272727`
- **White:** `#FFFFFF`
- **Display Font:** Syne (Bold 700–800)
- **Body Font:** Open Sans
- **Mono Font:** Space Mono

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
grandx-website/
├── app/
│   ├── globals.css        ← Custom CSS, animations, noise texture
│   ├── layout.tsx         ← Root layout with Google Fonts
│   └── page.tsx           ← Main page (assembles all sections)
├── components/
│   ├── CustomCursor.tsx   ← Red cursor + trailing ring
│   ├── Navbar.tsx         ← Scroll-aware sticky nav + mobile menu
│   ├── Hero.tsx           ← Cinematic split-text reveal hero
│   ├── Marquee.tsx        ← Infinite scrolling ticker
│   ├── Services.tsx       ← 4 services with hover states
│   ├── Work.tsx           ← Horizontal-scroll project cards
│   ├── Stats.tsx          ← Animated counter stats
│   ├── Process.tsx        ← 5-step process timeline
│   ├── Contact.tsx        ← Service selector + contact form
│   └── Footer.tsx         ← Footer with giant GRANDX watermark
└── public/
```

## ✨ Features

- **Custom Cursor** — Red dot + lagging ring, expands on hover
- **Lenis Smooth Scroll** — Buttery smooth scrolling experience
- **Framer Motion** — Character-by-character text reveals, staggered entrances
- **Noise Texture** — Subtle grain overlay for premium feel
- **Horizontal Scroll** — Project cards scroll sideways
- **Auto-hiding Navbar** — Hides on scroll down, reveals on scroll up
- **Mobile Menu** — Full-screen animated menu
- **Animated Counters** — Stats count up on scroll into view
- **Service Selector** — Toggle chips in the contact form
- **Grid Background** — Subtle grid lines on hero and process sections

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion 11**
- **Lenis** (smooth scroll)
- **Google Fonts** (Syne + Open Sans + Space Mono)

## 📞 Services

1. Web Design & Development
2. Ecommerce Web Design
3. SEO (Search Engine Optimization)
4. Mobile App Design & Development
5. Social Media Management
6. AI Automation

---

*Built with precision by GRANDX.*
