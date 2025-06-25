# Next.js Fundamentals - ActionEcho Polls

This is a [Next.js](https://nextjs.org) application that demonstrates core Next.js fundamentals through a polling system called "ActionEcho Polls".

## 🎯 Learning Objectives

This app covers essential Next.js concepts:
- **Server Components** - Understanding the default rendering model
- **Data Fetching** - Working with databases and APIs
- **Caching Strategies** - Next.js 15's uncached-by-default behavior
- **Route Groups** - Organizing routes with parentheses
- **Server Actions** - Form handling and data mutations
- **Suspense Boundaries** - Loading states and streaming

## 🚀 Getting Started

First, install dependencies from the workspace root:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

The app will be available at [http://localhost:3001](http://localhost:3001).

## 📁 Project Structure

```
app/
├── actions.ts          # Server actions for form handling
├── layout.tsx          # Root layout
├── page.tsx            # Home page with polls list
└── polls/
    └── [id]/
        └── page.tsx    # Individual poll voting page
```

## 🔧 Key Features

- **Create Polls** - Add new polls with multiple options
- **Vote on Polls** - Cast votes and see real-time results
- **Dynamic Rendering** - Demonstrates Next.js 15's uncached behavior
- **Loading States** - Suspense boundaries with skeleton components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with workspace UI components
- **Database**: In-memory data store (for demonstration)
- **TypeScript**: Full type safety
- **Port**: 3001 (configured in package.json)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
