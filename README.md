# Next.js Onboarding Monorepo

This monorepo contains three Next.js applications designed to help developers learn and understand different aspects of Next.js development. Each app demonstrates specific concepts and patterns.

## 🚀 What's Included

### Apps

1. **app-router-arch** (`apps/app-router-arch`)
   - **Port**: 3000
   - **Focus**: App Router architecture and advanced routing patterns
   - **Features**: 
     - Parallel routes with `@analytics` and `@projects` slots
     - Intercepting routes with modal dialogs
     - Route groups for organization
     - Server and client error boundaries
     - API routes with dynamic segments

2. **next-fundamentals** (`apps/next-fundamentals`)
   - **Port**: 3001
   - **Focus**: Core Next.js fundamentals and data fetching
   - **Features**:
     - Server Actions for form handling
     - Dynamic data fetching with caching strategies
     - Poll creation and voting system
     - Suspense boundaries for loading states
     - Database integration patterns

3. **rendering-strategies** (`apps/rendering-strategies`)
   - **Port**: 3002
   - **Focus**: Different rendering strategies and performance optimization
   - **Features**:
     - Dashboard with real-time data visualization
     - Skeleton loading states
     - Theme switching with dark/light mode
     - Chart components with Recharts
     - Responsive design patterns

### Shared Packages

- **`packages/ui`**: Shared shadcn/ui components
- **`packages/eslint-config`**: Shared ESLint configuration
- **`packages/typescript-config`**: Shared TypeScript configuration

## 🛠️ Setup

### Prerequisites

- Node.js >= 20
- pnpm >= 10.4.1

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd onboarding
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development servers**
   ```bash
   # Start all apps
   pnpm dev
   
   # Or start individual apps
   pnpm --filter app-router-arch dev
   pnpm --filter next-fundamentals dev
   pnpm --filter rendering-strategies dev
   ```

4. **Open the applications**
   - App Router Architecture: [http://localhost:3000](http://localhost:3000)
   - Next.js Fundamentals: [http://localhost:3001](http://localhost:3001)
   - Rendering Strategies: [http://localhost:3002](http://localhost:3002)

## 📚 Learning Path

### 1. Start with Fundamentals
Begin with the `next-fundamentals` app to understand:
- Basic Next.js App Router structure
- Server Actions for form handling
- Data fetching patterns
- Suspense and loading states

### 2. Explore Rendering Strategies
Move to `rendering-strategies` to learn about:
- Performance optimization techniques
- Loading state management
- Theme implementation
- Data visualization

### 3. Master Advanced Patterns
Finally, dive into `app-router-arch` to explore:
- Complex routing patterns
- Parallel routes
- Intercepting routes
- Error handling strategies

## 🎨 Adding Components

To add new shadcn/ui components to the shared UI package:

```bash
pnpm dlx shadcn@latest add button -c packages/ui
```

To use components in your apps:

```tsx
import { Button } from "@workspace/ui/components/button"
```

## 🏗️ Available Scripts

- `pnpm dev` - Start all development servers
- `pnpm build` - Build all applications
- `pnpm lint` - Lint all packages
- `pnpm format` - Format code with Prettier

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm
- **Build Tool**: Turbo
- **Charts**: Recharts
- **Icons**: Lucide React

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Turbo Documentation](https://turbo.build/repo/docs)

## 🤝 Contributing

This is a learning-focused monorepo. Feel free to explore, experiment, and modify the code to better understand Next.js concepts!
