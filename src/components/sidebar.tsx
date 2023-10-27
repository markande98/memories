import Logo from "./logo";
import SidebarList from "./sidebar-list";

const SideBar = () => {
  return (
    <div className="h-full w-80 border-b absolute inset-0">
      <Logo />
      <SidebarList />
    </div>
  );
};

export default SideBar;
