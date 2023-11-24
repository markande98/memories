import { useCallback, useState } from "react";
import usePhotos from "./use-photos";
import toast from "react-hot-toast";
import axios from "axios";
import useVideos from "./use-videos";

export const useChange = (id?: string, userId?: string, isVideo?: boolean) => {
  const { mutate: mutateFetchedPhotos } = usePhotos(userId);
  const { mutate: mutateFetchedVideos } = useVideos(userId);
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = useCallback(async () => {
    try {
      setIsLoading(true);
      if (!isVideo) {
        await axios.delete("http://localhost:3000/photos", {
          data: { id, userId },
        });
        mutateFetchedPhotos();
      } else {
        await axios.delete("http://localhost:3000/videos", {
          data: { id, userId },
        });
        mutateFetchedVideos();
      }
      toast.success("deleted successfully");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, [id, mutateFetchedPhotos, mutateFetchedVideos, isVideo, userId]);

  const onToggle = useCallback(
    async (isLiked: boolean) => {
      try {
        if (!isVideo) {
          await axios.patch("http://localhost:3000/photos", {
            isLiked: !isLiked,
            id,
            userId,
          });

          mutateFetchedPhotos();
        } else {
          await axios.patch("http://localhost:3000/videos", {
            isLiked: !isLiked,
            id,
            userId,
          });
          mutateFetchedVideos();
        }
      } catch (error) {
        toast.error("Something went wrong!");
      }
    },
    [id, isVideo, mutateFetchedPhotos, userId, mutateFetchedVideos]
  );

  return {
    onDelete,
    isLoading,
    onToggle,
  };
};
