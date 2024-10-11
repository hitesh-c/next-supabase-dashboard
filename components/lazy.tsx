import { Skeleton } from "@/components/ui/skeleton";

export default function LazyLoading({ color = "neutral-300" }: { color?: string }) {
  return (
    <div className="m-auto flex w-full flex-col space-y-2 px-4 py-8">
      <Skeleton className={`h-2 w-full`} />
      <Skeleton className={`h-2 w-3/4`} />
      <Skeleton className={`h-2 w-1/2`} />
    </div>
  );
}
