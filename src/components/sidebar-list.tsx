import LibraryList from "./library-list";

const SidebarList = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col space-y-16">
        <LibraryList />
      </div>
    </div>
  );
};

export default SidebarList;
