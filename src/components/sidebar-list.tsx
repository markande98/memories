import CollectionList from "./collection-list";
import LibraryList from "./library-list";
import { ModeToggle } from "./mode-toggle";
import { ThemeProvider } from "./theme-provider";

const SidebarList = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col space-y-16">
        <LibraryList />
        <CollectionList />
      </div>
      <div className="flex items-center justify-center h-40">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default SidebarList;
