import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex justify-between items-center border w-[440px] bg-slate-100 px-4 rounded-xl">
      <Input
        className="border-none focus-visible:ring-0 bg-transparent focus-visible:ring-offset-0"
        placeholder="search"
      />
      <SearchIcon className="cursor-pointer" />
    </div>
  );
};

export default Search;
