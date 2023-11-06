import useVideos from "@/hooks/use-videos";
import { useUser } from "@clerk/clerk-react";
import { ClipLoader } from "react-spinners";
import VideosList from "./videos-list";

const VideoGallery = () => {
  const { user } = useUser();
  const { data: videos = [], isLoading } = useVideos(user?.id);
  return (
    <div className="flex items-center justify-center mt-10">
      {isLoading && <ClipLoader color="red" size={72} />}
      {!isLoading && <VideosList items={videos} />}
    </div>
  );
};

export default VideoGallery;
