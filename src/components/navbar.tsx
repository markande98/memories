import Avatar from "./avatar";
import MobileSidebar from "./mobile-sidebar";
import Search from "./search";

const Navbar = () => {
  return (
    <div className="h-32 px-10 border-b-4 border-dashed dark:border-b-zinc-400 text-2xl flex items-center justify-between gap-x-4">
      <MobileSidebar />
      <div className="flex justify-between items-center gap-x-2 w-full">
        <Search />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
