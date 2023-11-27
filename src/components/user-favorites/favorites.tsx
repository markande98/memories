import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Gallery from "../user-photo/gallery";
import VideoGallery from "../user-video/video-gallery";

const Favorites = () => {
  return (
    <ScrollArea>
      <div className="px-12 dark:bg-zinc-800">
        <Gallery isFav />
        <div className="mt-10">
          <Separator />
        </div>
        <VideoGallery isFav />
      </div>
    </ScrollArea>
  );
};

export default Favorites;
