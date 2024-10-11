import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">SALES</p>
          <p className="text-sm text-muted-foreground">
            SALES
          </p>
        </div>
        <div className="ml-auto font-medium">99</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">SALES</p>
          <p className="text-sm text-muted-foreground">
            SALES
          </p>
        </div>
        <div className="ml-auto font-medium">39</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">SALES</p>
          <p className="text-sm text-muted-foreground">
            SALES
          </p>
        </div>
        <div className="ml-auto font-medium">299</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">SALES</p>
          <p className="text-sm text-muted-foreground">
            SALES
          </p>
        </div>
        <div className="ml-auto font-medium">99</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">SALES</p>
          <p className="text-sm text-muted-foreground">
            SALES
          </p>
        </div>
        <div className="ml-auto font-medium">39</div>
      </div>
    </div>
  );
}
