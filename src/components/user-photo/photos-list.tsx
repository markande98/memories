import { useLocation } from "react-router-dom";
import PhotosListItem from "./photos-list-item";
import { useEffect, useState } from "react";
import { HeartIcon } from "lucide-react";

interface PhotosListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Record<string, any>[];
}

const PhotosList = ({ items }: PhotosListProps) => {
  const [isFavPage, setIsFavPage] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/favorites") {
      setIsFavPage(true);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col">
      {isFavPage && (
        <div className="p-4 flex space-x-2 text-muted-foreground">
          <HeartIcon />
          <span>Fav Photos - {items.length} pics.</span>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2">
        {items.map((item) => (
          <PhotosListItem
            key={item.id}
            imageUrl={item.imageUrl}
            id={item.id}
            isLiked={item.isLiked}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotosList;
