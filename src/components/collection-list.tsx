import { Camera, Cpu, MapPin, Users } from "lucide-react";
import CollectionListItem from "./collection-list-item";

const items = [
  {
    name: "Memories",
    href: "/memories",
    icon: Cpu,
  },
  {
    name: "Location",
    href: "/location",
    icon: MapPin,
  },
  {
    name: "People",
    href: "/people",
    icon: Users,
  },
  {
    name: "Add new",
    icon: Camera,
  },
];

const CollectionList = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-6">Collections</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <CollectionListItem
            key={item.name}
            name={item.name}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
