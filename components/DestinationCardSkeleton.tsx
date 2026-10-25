import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function DestinationCardSkeleton() {
  return (
    <Card className="w-full gap-0 py-0">
      {/* Image */}
      <div className="aspect-[16/9] w-full">
        <Skeleton className="h-full w-full rounded-none" />
      </div>

      {/* Details — mirrors DestinationCard's layout for zero shift on load */}
      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <Skeleton className="h-4 w-24" />
        <div className="flex items-start justify-between gap-3">
          <Skeleton className="h-7 w-1/2 sm:h-8" />
          <Skeleton className="h-7 w-20 shrink-0 sm:h-8" />
        </div>
        <Skeleton className="h-4 w-28" />
      </div>

      {/* Book now */}
      <div className="border-t px-4 py-3 sm:px-5">
        <Skeleton className="h-5 w-16 rounded-xs" />
      </div>
    </Card>
  );
}

export function DestinationGridSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <DestinationCardSkeleton key={index} />
      ))}
    </div>
  );
}
