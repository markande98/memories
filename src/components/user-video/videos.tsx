import { ScrollArea } from "@/components/ui/scroll-area";
import VideoHeader from "./video-header";
import VideoGallery from "./video-gallery";

const Videos = () => {
  return (
    <ScrollArea>
      <div className="p-12">
        <VideoHeader />
        <VideoGallery />
      </div>
    </ScrollArea>
  );
};

export default Videos;
