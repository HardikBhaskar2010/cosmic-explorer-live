# COSMOS - AI-Powered 3D Space Learning Platform

## Overview

COSMOS is an immersive space education web application that combines 3D visualization, interactive quizzes, and live streaming features to make astronomy learning engaging. The platform is built as a single-page React application with a cosmic/space-themed design system featuring deep space colors, glowing effects, and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled with Vite
- **Routing**: React Router DOM for client-side navigation with a catch-all 404 route
- **State Management**: TanStack React Query for server state, React's built-in useState for local component state
- **3D Graphics**: React Three Fiber with Three.js for WebGL rendering, Drei helper library for common 3D components

### Component Structure
- **UI Components**: shadcn/ui component library built on Radix UI primitives, located in `src/components/ui/`
- **Feature Components**: Custom page sections (HeroSection, FeaturesSection, QuizSection, LiveEventsSection) in `src/components/`
- **Pages**: Route-level components in `src/pages/` (Index, NotFound)

### Styling System
- **CSS Framework**: Tailwind CSS with custom configuration
- **Design Tokens**: CSS variables defined in `src/index.css` for theming (cosmic colors, gradients, glow effects)
- **Custom Fonts**: Orbitron (display) and Inter (body) from Google Fonts
- **Animations**: Framer Motion for page transitions and micro-interactions

### Path Aliases
- `@/*` maps to `./src/*` for clean imports throughout the codebase

### Build Configuration
- Vite dev server runs on port 5000 with host `0.0.0.0`
- TypeScript configured with relaxed strictness (no strict mode, allows implicit any)
- ESLint with React Hooks and React Refresh plugins

## External Dependencies

### 3D Rendering
- `@react-three/fiber`: React renderer for Three.js
- `@react-three/drei`: Helper components for React Three Fiber
- `three`: Core 3D graphics library

### UI Components
- `@radix-ui/*`: Unstyled accessible UI primitives (dialogs, menus, tooltips, etc.)
- `cmdk`: Command menu component
- `vaul`: Drawer component
- `embla-carousel-react`: Carousel functionality
- `react-day-picker`: Calendar/date picker
- `recharts`: Charting library (via chart component)
- `react-resizable-panels`: Resizable panel layouts

### Utilities
- `class-variance-authority`: Component variant management
- `clsx` + `tailwind-merge`: Conditional class name handling
- `date-fns`: Date formatting and manipulation
- `zod`: Schema validation (via @hookform/resolvers)
- `react-hook-form`: Form state management

### Notifications
- `sonner`: Toast notifications
- Custom toast system via Radix UI toast primitives

### Theming
- `next-themes`: Theme management (dark mode support)