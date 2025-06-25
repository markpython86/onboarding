import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { OverviewStats } from "@/components/dashboard/overview-stats";
import { RecentSales } from "@/components/dashboard/recent-sales";
import { StatsCardSkeleton } from "@/components/skeletons/stats-card-skeleton";
import { RecentSalesSkeleton } from "@/components/skeletons/recent-sales-skeleton";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { getSalesData } from "@/lib/data";
import WelcomeBanner from "@/components/welcome-banner";

export default async function Dashboard() {
  const salesData = await getSalesData();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <WelcomeBanner />

      <Suspense fallback={<StatsCardSkeleton />}>
        <OverviewStats />
      </Suspense>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <SalesChart data={salesData} />
          </CardContent>
        </Card>
        <Card className="col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<RecentSalesSkeleton />}>
              <RecentSales />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
