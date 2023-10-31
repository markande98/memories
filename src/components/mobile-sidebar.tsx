import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./logo";
import SidebarList from "./sidebar-list";

const MobileSidebar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent
          className="p-0 bg-white dark:bg-zinc-600 w-80"
          side="left"
        >
          <div className="h-full w-80 border-r dark:border-r-zinc-400 absolute inset-0">
            <Logo />
            <SidebarList />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
