import { UserNav } from "./user-nav";
import { ModeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <div className="w-full flex-1">
        {/* Mobile nav and search will go here later */}
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  );
}
