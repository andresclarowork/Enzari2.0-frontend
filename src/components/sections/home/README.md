# Home Page Sections

This folder contains all the section components specifically for the Home page.

## Structure

```
src/components/sections/home/
├── Hero.tsx              # Main hero section + Trusted by section
├── Services.tsx          # Services showcase with mobile mockups
├── Projects.tsx          # Featured projects grid
├── Ethos.tsx             # Company ethos/values
├── Team.tsx              # Team members showcase
├── Testimonials.tsx      # Customer testimonials
├── FAQ.tsx               # Frequently asked questions
├── CTA.tsx               # Call to action section
└── README.md             # This file
```

## Usage

Import and use these sections in `src/app/page.tsx` (Home page):

```tsx
import { Hero } from '@/components/sections/home/Hero'
import { Services } from '@/components/sections/home/Services'
import { Projects } from '@/components/sections/home/Projects'
import { Ethos } from '@/components/sections/home/Ethos'
import { Team } from '@/components/sections/home/Team'
import { Testimonials } from '@/components/sections/home/Testimonials'
import { FAQ } from '@/components/sections/home/FAQ'
import { CTA } from '@/components/sections/home/CTA'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Ethos />
      <Team />
      <Testimonials />
      <FAQ />
      <CTA />
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

## Note

These sections are **ONLY for the Home page**. Other pages will have their own section components in separate folders. 