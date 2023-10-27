import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CollectionListItemProps {
  name: string;
  href?: string;
  icon: LucideIcon;
}

const CollectionListItem = ({
  name,
  href,
  icon: Icon,
}: CollectionListItemProps) => {
  return (
    <Link
      to={href || "/"}
      className="flex items-center justify-center text-muted-foreground hover:text-black dark:hover:text-white"
    >
      <Icon size={24} className="mr-2" />
      <p className="text-sm">{name}</p>
    </Link>
  );
};

export default CollectionListItem;
