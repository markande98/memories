import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex justify-between items-center border w-[440px] bg-slate-100 px-4 rounded-xl dark:bg-zinc-400">
      <Input
        className="border-none focus-visible:ring-0 bg-transparent focus-visible:ring-offset-0 dark:placeholder:text-zinc-800"
        placeholder="search"
      />
      <SearchIcon className="cursor-pointer dark:bg-zinc-400" />
    </div>
  );
};

export default Search;
