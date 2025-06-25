import Link from "next/link";

export default function MarketingLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <header className="bg-white border-b border-stone-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-stone-800">
            Archfolio
          </Link>
          <div className="space-x-6">
            <Link
              href="/projects"
              className="text-stone-600 hover:text-stone-900"
            >
              Projects
            </Link>
            <Link
              href="/dashboard"
              className="text-stone-600 hover:text-stone-900"
            >
              Admin Login
            </Link>
          </div>
        </nav>
      </header>
      {/* Render the main page content and the modal slot */}
      <div className="flex-1 mx-auto h-full container py-12">{children}</div>
      {modal}
      <footer className="bg-white border-t border-stone-200">
        <div className="container mx-auto px-6 py-4 text-center text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Archfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
