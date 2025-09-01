# About Page Sections

This folder contains all the section components for the About Us page.

## Structure

```
src/components/sections/about/
├── Hero.tsx              # Main hero section
├── Story.tsx             # Company story section
├── Mission.tsx           # Mission and values section
├── Team.tsx              # Team members section
├── Timeline.tsx          # Company timeline/history
├── Stats.tsx             # Company statistics
├── Culture.tsx           # Company culture section
└── README.md             # This file
```

## Usage

Import and use these sections in `src/app/about/page.tsx`:

```tsx
import { Hero } from '@/components/sections/about/Hero'
import { Story } from '@/components/sections/about/Story'
import { Mission } from '@/components/sections/about/Mission'
// ... etc

export default function AboutPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Story />
      <Mission />
      <Team />
      <Timeline />
      <Stats />
      <Culture />
      <Footer />
    </main>
  )
}
```

## Component Guidelines

- Each section should be self-contained
- Use consistent spacing and typography
- Follow the design system colors and components
- Include proper TypeScript interfaces
- Add responsive design considerations 