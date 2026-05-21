# Atomity Frontend Engineering Challenge

A modern animated cloud infrastructure dashboard inspired by Atomity's Kubernetes optimization platform.

Built with Next.js, Framer Motion, React Query, and Tailwind CSS.

---
# Preview

## Desktop View

<img width="1507" height="1137" alt="wi_pages-to-jpg-0001" src="https://github.com/user-attachments/assets/d8e117bf-b7f2-4971-a911-09d2efa16697" />
<img width="1527" height="840" alt="wi_pages-to-jpg-0002" src="https://github.com/user-attachments/assets/e6dca7ec-1469-45c0-8f52-21254654ecce" />

## Mobile View

<img width="1135" height="1510" alt="mo_pages-to-jpg-0001" src="https://github.com/user-attachments/assets/e00fd6d8-3ecc-4e55-82ab-d33ad5d7f537" />
<img width="1143" height="974" alt="mo_pages-to-jpg-0002" src="https://github.com/user-attachments/assets/a5bd14e5-92e7-4569-bc12-09283ad9713e" />

## Live Demo

https://atomity-dashboard.vercel.app/
---

## GitHub Repository

https://github.com/satyavardhankoyalkar/atomity-dashboard
---

# Feature Chosen

I chose to recreate and reinterpret the cloud infrastructure topology visualization inspired by the product video.

Instead of building a pixel-perfect clone, I focused on:

* Interactive provider switching
* Animated Kubernetes topology visualization
* Dynamic infrastructure analytics
* Real-time motion feedback
* Responsive dashboard behavior
* Accessibility-aware animation handling

The goal was to create a polished SaaS-style frontend experience with intentional motion and reusable architecture.

---

# Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* TanStack Query (React Query)
* Recharts

---

# Architecture & Component Structure

The project was structured using reusable composable components.

# Architecture & Component Structure

The project was structured using reusable composable components.

```text
src/
├── components/
│   ├── HeroSection.tsx
│   ├── PlatformNode.tsx
│   ├── LiveMonitor.tsx
│   ├── AnalyticsPanel.tsx
│   ├── AnimatedCounter.tsx
│   └── MetricCard.tsx
│
├── hooks/
│   └── useProducts.ts
│
├── providers/
│   └── QueryProvider.tsx
│
├── tokens/
│   └── colors.ts
│
└── data/
    ├── providerData.ts
    └── chartData.ts
```


# Animation Approach

Animations were designed to feel subtle and intentional rather than distracting.

Implemented interactions include:

* Scroll-triggered section reveal animations
* Floating infrastructure nodes
* Animated SVG network particles
* Rotating Kubernetes core visualization
* Animated metric counters
* Hover feedback interactions
* Smooth provider state transitions

Framer Motion was used throughout the project for consistent motion orchestration.

---

# Data Fetching & Caching

Dashboard metrics are dynamically fetched from the DummyJSON API.

Caching was implemented using TanStack Query to:

* Prevent redundant requests
* Improve perceived performance
* Provide instant cached data on revisit
* Simplify loading and async state handling

---

# Accessibility

Accessibility considerations included:

* Semantic section structure
* Responsive layouts across devices
* Reduced motion support using prefers-reduced-motion
* Keyboard-accessible interactive elements
* Readable contrast and typography hierarchy

Animations automatically simplify when reduced motion preferences are enabled at the operating system level.

---

# Responsive Design

The layout was optimized for:

* Desktop
* Tablet
* Mobile devices (375px+)

Responsive adjustments include:

* Adaptive topology spacing
* Scaled typography
* Flexible analytics layouts
* Mobile-safe positioning for floating UI elements

---

# Design Tokens

A lightweight token architecture was introduced to centralize reusable styling decisions such as:

* Background colors
* Border colors
* Text colors
* Glow/shadow styles

This improves maintainability and consistency across components.

---

# Tradeoffs & Decisions

Given the challenge scope and time constraints, I focused on:

* Interaction quality over feature quantity
* Reusable architecture over rapid prototyping
* Motion polish over building multiple sections

I intentionally avoided adding unnecessary complexity and instead prioritized responsiveness, accessibility, and maintainable structure.

---

# What I Would Improve With More Time

* Add theme switching (light/dark mode)
* Introduce container queries for deeper component responsiveness
* Add chart morphing transitions between providers
* Expand analytics data visualization
* Add automated tests
* Improve keyboard navigation interactions

---

# Running Locally

```bash
npm install
npm run dev
```

---

# Deployment

The project is deployed using Vercel.
