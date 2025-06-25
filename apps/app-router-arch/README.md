# App Router Architecture - Archfolio

This is a [Next.js](https://nextjs.org) application that demonstrates advanced App Router architecture patterns through a portfolio platform called "Archfolio".

## 🎯 Learning Objectives

This app showcases advanced Next.js App Router concepts:
- **Route Groups** - Organizing routes with parentheses `(app)` and `(marketing)`
- **Parallel Routes** - Multiple page components in the same route with `@analytics` and `@projects`
- **Intercepting Routes** - Modal overlays with `(@modal)` and `(..)projects`
- **Dynamic Routes** - Parameterized routes like `[projectId]`
- **API Routes** - RESTful API endpoints for data operations
- **Error Boundaries** - Global and route-specific error handling

## 🚀 Getting Started

First, install dependencies from the workspace root:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
app/
├── (app)/                    # Route group for authenticated app
│   ├── dashboard/
│   │   ├── @analytics/       # Parallel route for analytics
│   │   ├── @projects/        # Parallel route for projects
│   │   └── page.tsx
│   └── layout.tsx
├── (marketing)/              # Route group for marketing pages
│   ├── login/
│   ├── projects/
│   │   ├── (@modal)/         # Intercepting route for modals
│   │   │   └── (..)projects/ # Go up two levels
│   │   │       └── [projectId]/
│   │   └── [projectId]/      # Dynamic route
│   └── page.tsx
├── api/                      # API routes
│   └── projects/
│       ├── [projectId]/
│       └── route.ts
├── error.tsx                 # Global error boundary
├── global-error.tsx          # Root error boundary
└── layout.tsx
```

## 🔧 Key Features

- **Portfolio Management** - Create and manage project portfolios
- **Modal Overlays** - Intercepting routes for seamless UX
- **Parallel Layouts** - Multiple content areas in the same route
- **Error Handling** - Comprehensive error boundaries
- **API Integration** - RESTful endpoints for data operations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with workspace UI components
- **Architecture**: Advanced routing patterns and layouts
- **TypeScript**: Full type safety
- **Port**: 3000 (default)

## 🏗️ Architecture Patterns

### Route Groups
- `(app)` - Contains authenticated application routes
- `(marketing)` - Contains public marketing pages

### Parallel Routes
- `@analytics` - Analytics dashboard component
- `@projects` - Projects list component

### Intercepting Routes
- `(@modal)` - Modal overlay for project details
- `(..)projects` - Navigate up two route levels

## 📚 Learn More

- [Next.js App Router](https://nextjs.org/docs/app)
- [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
