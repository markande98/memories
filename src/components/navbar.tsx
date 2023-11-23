import Avatar from "./avatar";
import MobileSidebar from "./mobile-sidebar";
import { ModeToggle } from "./mode-toggle";
import { ThemeProvider } from "./theme-provider";

const Navbar = () => {
  return (
    <div className="h-32 px-10 border-b-4 border-dashed dark:border-b-zinc-400 text-2xl flex items-center justify-between gap-x-4">
      <MobileSidebar />
      <div className="flex justify-between items-center gap-x-2 w-full">
        <div className="flex items-end justify-center">
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
          </ThemeProvider>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
