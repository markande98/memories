import { ScrollArea } from "@/components/ui/scroll-area";
import VideoHeader from "./video-header";

const Videos = () => {
  return (
    <ScrollArea>
      <div className="p-12">
        <VideoHeader />
      </div>
    </ScrollArea>
  );
};

export default Videos;
