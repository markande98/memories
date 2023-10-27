import Avatar from "./avatar";
import Search from "./search";

const Navbar = () => {
  return (
    <div className="h-32 px-10 border-b text-2xl flex items-center justify-between">
      <Search />
      <Avatar />
    </div>
  );
};

export default Navbar;
