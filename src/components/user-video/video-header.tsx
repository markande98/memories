import { format } from "date-fns";
import VideoUpload from "./video-upload";

const VideoHeader = () => {
  const currentDate = new Date();
  return (
    <div className="flex justify-between items-center gap-4">
      <div>
        <h1 className="text-xl md:text-3xl font-semibold text-muted-foreground">
          Videos
        </h1>
        <p className="text-sm text-muted-foreground">
          {format(currentDate, "MMMM dd, yyyy")} - 5 videos.
        </p>
      </div>
      <div className="flex items-center">
        <VideoUpload />
      </div>
    </div>
  );
};

export default VideoHeader;
