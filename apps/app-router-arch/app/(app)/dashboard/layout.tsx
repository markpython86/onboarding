export default function DashboardLayout({
  children, // will be the content of page.tsx
  projects, // will be the content of @projects/page.tsx
  analytics, // will be the content of @analytics/page.tsx
}: {
  children: React.ReactNode;
  projects: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects}
        {analytics}
      </div>
    </div>
  );
}
