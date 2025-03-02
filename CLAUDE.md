# CLAUDE.md - Development Guide

## Build & Development Commands
- `npm run dev` - Start development server with turbopack
- `npm run build` - Generate Prisma client and build the Next.js application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

## Code Style Guidelines
- **TypeScript**: Use strict type checking with proper interfaces/types in `/types` directory
- **Imports**: Use absolute imports with `@/` prefix (e.g., `import { Feature } from "@/types/feature"`)
- **Components**: Use functional components with explicit type annotations
- **State Management**: Use React hooks for local state, Context API for global state
- **Styling**: Use Tailwind CSS with dark mode support using `dark:` prefix
- **File Structure**: 
  - Component files should export a default component
  - Data files should be separated (e.g., `featuresData.tsx`)
- **Error Handling**: Use proper error handling with try/catch blocks and toast notifications
- **Naming Conventions**:
  - Components: PascalCase (e.g., `SingleFeature.tsx`)
  - Directories: PascalCase (e.g., `Features/`)
  - Variables/functions: camelCase
  - Types/interfaces: PascalCase