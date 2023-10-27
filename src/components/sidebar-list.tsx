import CollectionList from "./collection-list";
import LibraryList from "./library-list";

const SidebarList = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col space-y-16">
        <LibraryList />
        <CollectionList />
      </div>
      <div className="flex items-center justify-center h-40">
        <div className="mt-auto">Hello</div>
      </div>
    </div>
  );
};

export default SidebarList;
