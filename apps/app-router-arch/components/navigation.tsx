import Link from "next/link";
import { Button } from "@workspace/ui/components/button";

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6 mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-semibold">Archfolio</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/projects">
            <Button variant="ghost">Projects</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
