# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:4321
npm run start        # Alias for dev

# Build & Deploy
npm run build        # Type check + build for production (outputs to dist/)
npm run preview      # Preview production build locally

# Type Checking
npm run astro check  # Run Astro type checking
```

## Project Architecture

This is an Astro 5 portfolio site with React 19 islands and Tailwind CSS 4. The architecture is data-driven, with all content sourced from `cv.json`.

### Data-Driven Content

**All portfolio data lives in `cv.json`** at the root. This includes:
- `basics`: Personal info, contact, social profiles, avatar image
- `projects`: Project cards with name, description, highlights (tech stack), URLs, and images
- `skills`: Categorized skills (frontend, backend, databases, versionControl, testing, deployment)
- `education`: Educational background with institution logos
- `certificates`: Course certificates with images
- `work`: Work experience

When adding/editing content, **always update `cv.json`** rather than hardcoding in components.

### Dark Mode System

Dark mode is managed via nanostores (`src/stores/theme.js`):
- State persisted to `localStorage` with key `'theme'`
- Respects `prefers-color-scheme` if no saved preference
- **Critical**: `Layout.astro` contains an inline `<script is:inline>` in the `<head>` that runs before render to prevent theme flash
- Toggle button in `DarkModeToggle.astro` uses vanilla JS (not React) for simplicity
- Theme classes applied to `<html>` element: `.dark` class added/removed

### Animation System

Scroll animations use Intersection Observer API (`src/utils/animations.ts`):
- Elements with `data-animate` attribute fade in when entering viewport
- `data-animate-delay` can specify stagger timing in ms
- Respects `prefers-reduced-motion` - animations skipped for accessibility
- Initialized in `Layout.astro` via client script
- Two component wrappers available:
  - `Section.astro`: Standard section with optional title and auto-animation
  - `AnimatedSection.astro`: More flexible wrapper with direction control

### Component Structure

**Section-based layout** - Main page (`src/pages/index.astro`) imports section components:
- `Hero.astro`: Hero section with gradient background and animated shapes
- `About.astro`: About me section
- `Education.astro`: Education timeline
- `Projects.astro`: Project cards with tech badges, links, images
- `Certificate.astro`: Certificate gallery
- `Skill.astro`: Skills organized by category

Each section component:
1. Imports data from `cv.json`
2. Wraps content in `Section.astro` for consistent styling and animations
3. Uses Tailwind utilities for styling
4. Supports dark mode via CSS variables

### Styling & Design System

Tailwind CSS 4 with custom design system in `src/styles/global.css`:
- **CSS Variables**: All colors, spacing, shadows, transitions defined as Tailwind `@theme` variables
- **Color palette**: `--color-primary-*`, `--color-accent-*`, `--color-neutral-*` for light/dark modes
- **Responsive breakpoints**: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- **Mobile-first approach**: All components designed for mobile, enhanced for desktop

### Tech Badge Colors

Projects display tech stack badges with specific brand colors (in `Projects.astro`):
- React: `#61dafb`
- Node.js: `#68a063`
- PostgreSQL: `#336791`
- Tailwind: `#06b6d4`
- And more defined in the component

When adding new tech badges, use official brand colors for consistency.

### Image Handling

- **Project images**: Stored in `src/assets/projects/`, referenced in `cv.json` by filename
- **Avatar/logos**: Stored in `src/assets/img/`
- Images imported via Astro's image optimization
- Use `Image` component from `astro:assets` for automatic optimization

## File Organization

```
src/
├── assets/              # Static assets (images)
│   ├── img/            # General images (avatar, logos)
│   └── projects/       # Project screenshots
├── components/
│   ├── icons/          # SVG icon components
│   ├── sections/       # Page sections (Hero, Projects, etc.)
│   ├── AnimatedSection.astro  # Animated wrapper with direction control
│   ├── DarkModeToggle.astro   # Theme toggle button
│   └── Section.astro          # Standard section wrapper
├── layouts/
│   └── Layout.astro    # Main layout (includes inline theme script)
├── pages/
│   └── index.astro     # Single-page portfolio
├── stores/
│   └── theme.js        # Nanostores dark mode state
├── styles/
│   └── global.css      # Design system variables & global styles
└── utils/
    └── animations.ts   # Animation utilities & types
```

## Key Technical Decisions

1. **Single Page Application**: All sections on one page for portfolio simplicity
2. **Nanostores over React Context**: Lightweight state management for theme (only ~300 bytes)
3. **Vanilla JS for Theme Toggle**: Avoids React hydration overhead for simple interactivity
4. **Inline Theme Script**: Prevents flash of unstyled content on page load
5. **Intersection Observer**: Native API for performant scroll animations
6. **Type Safety**: TypeScript for utilities/animations, but Astro components use JSDoc when needed
7. **Astro Islands**: React only used where interactivity needed (currently minimal)

## Common Modifications

### Adding a New Project

1. Add project data to `cv.json` → `projects` array:
   ```json
   {
     "name": "Project Name",
     "description": "Description...",
     "highlights": ["react", "nodejs", "postgresql"],
     "url": "https://live-url.com",
     "repository-url": "https://github.com/user/repo",
     "image": "project-screenshot.png"
   }
   ```
2. Add screenshot to `src/assets/projects/project-screenshot.png`
3. If using new tech, add color to tech badge map in `Projects.astro`

### Changing Color Scheme

Edit `src/styles/global.css` → `@theme` section:
```css
@theme {
  --color-primary-500: #8b5cf6;  /* Purple - change to desired color */
  --color-accent-500: #06b6d4;   /* Cyan - change to desired accent */
  /* Update other shades as needed */
}
```

### Adding a New Section

1. Create `src/components/sections/NewSection.astro`
2. Import data from `cv.json` if needed
3. Use `Section` component wrapper for consistency:
   ```astro
   <Section title="Section Title" id="section-id">
     <!-- Content here -->
   </Section>
   ```
4. Import and add to `src/pages/index.astro`

## Important Notes

- **SEO/Meta tags**: Configured in `Layout.astro` with Open Graph and Twitter cards
- **Accessibility**: Skip-to-content link, ARIA labels, focus states, and motion preferences respected
- **Font**: Uses system font stack (no custom fonts loaded currently)
- **Deployment**: Static site ready for Vercel, Netlify, GitHub Pages, or Cloudflare Pages
- **Branch**: Main development on `develop` branch, merge to `main` for production
