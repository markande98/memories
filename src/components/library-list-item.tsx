import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface LibraryListItemProps {
  name: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
}

const LibraryListItem = ({
  name,
  href,
  icon: Icon,
  isActive,
}: LibraryListItemProps) => {
  return (
    <Link
      to={href}
      className={`flex items-center rounded-sm justify-center text-muted-foreground hover:text-zinc-600 dark:hover:text-white ${
        isActive
          ? "dark:text-red-600 p-2 bg-red-400 dark:bg-white text-white dark:hover:text-red-800"
          : ""
      }`}
    >
      <Icon size={24} className="mr-2" />
      <p className="text-sm">{name}</p>
    </Link>
  );
};

export default LibraryListItem;
