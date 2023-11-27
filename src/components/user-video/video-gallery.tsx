import useVideos from "@/hooks/use-videos";
import { useUser } from "@clerk/clerk-react";
import { ClipLoader } from "react-spinners";
import VideosList from "./videos-list";
import useFavVideos from "@/hooks/use-fav-videos";

interface VideoGallery {
  isFav?: boolean;
}

const VideoGallery = ({ isFav }: VideoGallery) => {
  const { user } = useUser();
  const { data: videos = [], isLoading } = isFav
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useFavVideos(user?.id)
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useVideos(user?.id);
  return (
    <div className="flex items-center justify-center mt-10">
      {isLoading && <ClipLoader color="red" size={72} />}
      {!isLoading && <VideosList items={videos} />}
    </div>
  );
};

export default VideoGallery;
