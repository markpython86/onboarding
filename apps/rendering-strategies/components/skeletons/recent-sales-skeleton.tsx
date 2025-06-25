import { Skeleton } from "@workspace/ui/components/skeleton";

function RecentSaleSkeletonItem() {
  return (
    <div className="flex items-center">
      <Skeleton className="h-9 w-9 rounded-full" />
      <div className="ml-4 space-y-1">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-3 w-[150px]" />
      </div>
      <Skeleton className="ml-auto h-5 w-12" />
    </div>
  );
}

export function RecentSalesSkeleton() {
  return (
    <div className="space-y-8">
      <RecentSaleSkeletonItem />
      <RecentSaleSkeletonItem />
      <RecentSaleSkeletonItem />
      <RecentSaleSkeletonItem />
      <RecentSaleSkeletonItem />
    </div>
  );
}
