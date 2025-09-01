# Projects Page Sections

This folder contains all the section components for the Projects/Portfolio page.

## Structure

```
src/components/sections/projects/
├── Hero.tsx              # Main hero section
├── Filter.tsx            # Project filtering/categories
├── Grid.tsx              # Project grid display
├── Featured.tsx          # Featured projects showcase
├── CaseStudy.tsx         # Individual case study
├── Process.tsx           # Our project process
├── Testimonials.tsx      # Client testimonials
└── README.md             # This file
```

## Usage

Import and use these sections in `src/app/projects/page.tsx`:

```tsx
import { Hero } from '@/components/sections/projects/Hero'
import { Filter } from '@/components/sections/projects/Filter'
import { Grid } from '@/components/sections/projects/Grid'
// ... etc

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Filter />
      <Grid />
      <Featured />
      <Process />
      <Testimonials />
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