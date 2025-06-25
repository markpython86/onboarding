# Rendering Strategies - Sales Dashboard

This is a [Next.js](https://nextjs.org) application that demonstrates different rendering strategies through a comprehensive sales dashboard.

## 🎯 Learning Objectives

This app showcases Next.js rendering strategies and performance optimization:
- **Static Generation (SSG)** - Pre-rendered pages at build time
- **Dynamic Rendering** - Server-side rendering on each request
- **Streaming** - Progressive loading with Suspense boundaries
- **Loading States** - Skeleton components and loading UI
- **Data Fetching Patterns** - Different strategies for data loading
- **Performance Optimization** - Caching and revalidation strategies

## 🚀 Getting Started

First, install dependencies from the workspace root:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

The app will be available at [http://localhost:3002](http://localhost:3002).

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with theme provider
├── page.tsx                # Dashboard with streaming components
└── products/
    ├── page.tsx            # Products list (static generation)
    └── [id]/
        └── page.tsx        # Product detail (dynamic rendering)

components/
├── dashboard/
│   ├── overview-stats.tsx  # Stats with streaming
│   ├── recent-sales.tsx    # Sales list with streaming
│   └── sales-chart.tsx     # Chart component
├── skeletons/              # Loading state components
│   ├── chart-skeleton.tsx
│   ├── recent-sales-skeleton.tsx
│   └── stats-card-skeleton.tsx
└── theme-provider.tsx      # Dark/light mode support
```

## 🔧 Key Features

- **Sales Dashboard** - Comprehensive analytics and metrics
- **Streaming Components** - Progressive loading with Suspense
- **Theme Support** - Dark and light mode toggle
- **Loading States** - Skeleton components for better UX
- **Product Catalog** - Static and dynamic product pages
- **Real-time Charts** - Interactive sales data visualization

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with workspace UI components
- **Charts**: Recharts for data visualization
- **Theming**: next-themes for dark/light mode
- **TypeScript**: Full type safety
- **Port**: 3002 (configured in package.json)

## 🎨 Rendering Strategies Demonstrated

### Static Generation (SSG)
- Product listing pages pre-rendered at build time
- Fast initial page loads
- SEO optimized content

### Dynamic Rendering
- Product detail pages rendered on each request
- Real-time data updates
- Personalized content

### Streaming with Suspense
- Dashboard components load progressively
- Better perceived performance
- Non-blocking user experience

### Loading States
- Skeleton components during data fetching
- Smooth loading transitions
- Better user experience

## 📊 Dashboard Features

- **Overview Stats** - Key metrics and KPIs
- **Sales Chart** - Interactive data visualization
- **Recent Sales** - Latest transaction data
- **Theme Toggle** - Dark/light mode switching
- **Responsive Design** - Mobile-first approach

## 📚 Learn More

- [Next.js Rendering](https://nextjs.org/docs/app/building-your-application/rendering)
- [Static Generation](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic)
- [Streaming](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
- [Suspense](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#suspense)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
