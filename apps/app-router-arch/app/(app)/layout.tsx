import Link from "next/link";
import { logout } from "@/app/actions";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-stone-100">
      <aside className="w-64 bg-white border-r border-stone-200 p-6 flex flex-col">
        <div>
          <h1 className="text-xl font-bold text-stone-800 mb-8">
            <Link href="/dashboard">Admin Panel</Link>
          </h1>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/dashboard"
              className="text-stone-700 hover:text-stone-900"
            >
              Dashboard
            </Link>
            <Link
              href="/projects"
              className="text-stone-700 hover:text-stone-900"
            >
              View Public Site
            </Link>
          </nav>
        </div>
        <div className="mt-auto">
          <form action={logout}>
            <button
              type="submit"
              className="w-full text-left text-stone-500 hover:text-stone-800"
            >
              Log Out
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 p-12">{children}</main>
    </div>
  );
}