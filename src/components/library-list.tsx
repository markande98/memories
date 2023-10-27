import { Album, Folder, ImagePlus } from "lucide-react";
import LibraryListItem from "./library-list-item";

const items = [
  {
    name: "Photos",
    href: "/photos",
    icon: ImagePlus,
  },
  {
    name: "Albums",
    href: "/albums",
    icon: Album,
  },
  {
    name: "Folders",
    href: "/folders",
    icon: Folder,
  },
];

const LibraryList = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-6">Library</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <LibraryListItem
            key={item.href}
            name={item.name}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default LibraryList;
