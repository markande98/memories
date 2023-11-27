import { useEffect, useState } from "react";
import VideoListItem from "./video-list-item";
import { useLocation } from "react-router-dom";
import { HeartIcon } from "lucide-react";

interface VideoListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Record<string, any>[];
}

const VideosList = ({ items }: VideoListProps) => {
  const [isFavPage, setIsFavPage] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/favorites") {
      setIsFavPage(true);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col w-full">
      {isFavPage && (
        <div className="p-4 flex space-x-2 text-muted-foreground">
          <HeartIcon />
          <span>Fav Videos - {items.length} videos.</span>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2">
        {items.map((item) => (
          <VideoListItem
            key={item.id}
            id={item.id}
            videoUrl={item.videoUrl}
            isLiked={item.isLiked}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosList;
