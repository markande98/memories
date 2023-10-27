import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface LibraryListItemProps {
  name: string;
  href: string;
  icon: LucideIcon;
}

const LibraryListItem = ({ name, href, icon: Icon }: LibraryListItemProps) => {
  return (
    <Link
      to={href}
      className="flex items-center justify-center text-muted-foreground hover:text-black"
    >
      <Icon size={24} className="mr-2" />
      <p className="text-sm">{name}</p>
    </Link>
  );
};

export default LibraryListItem;
