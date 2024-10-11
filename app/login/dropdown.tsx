import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default async function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="text-md flex w-full items-center md:text-sm">
          Select
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel className="w-full">Select trigger</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full" key={"center"} onClick={() => {}}>Trigger 1</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
