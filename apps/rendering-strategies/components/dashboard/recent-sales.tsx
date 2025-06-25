import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { getRecentSales } from "@/lib/data";

export async function RecentSales() {
  const sales = await getRecentSales();

  return (
    <div className="space-y-8">
      {sales.map((sale) => (
        <div className="flex items-center" key={sale.id}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.avatar} alt="Avatar" />
            <AvatarFallback>{sale.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">
            +${sale.amount.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
