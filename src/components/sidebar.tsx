import Logo from "./logo";
import SidebarList from "./sidebar-list";

const SideBar = () => {
  return (
    <div className="hidden md:block h-full w-80 border-dashed border-r-4 dark:border-r-zinc-400 absolute inset-0">
      <Logo />
      <SidebarList />
    </div>
  );
};

export default SideBar;
