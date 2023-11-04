import { Folder, ImagePlus, Video } from "lucide-react";
import LibraryListItem from "./library-list-item";
import { useLocation } from "react-router-dom";

const items = [
  {
    name: "Photos",
    href: "/",
    icon: ImagePlus,
  },
  {
    name: "Videos",
    href: "/videos",
    icon: Video,
  },
  {
    name: "Folders",
    href: "/folders",
    icon: Folder,
  },
];

const LibraryList = () => {
  const { pathname } = useLocation();
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-6">Library</h1>
      <div className="space-y-6">
        {items.map((item) => (
          <LibraryListItem
            key={item.href}
            name={item.name}
            href={item.href}
            icon={item.icon}
            isActive={pathname === item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default LibraryList;
