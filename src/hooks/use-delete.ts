import { useCallback, useState } from "react";
import usePhotos from "./use-photos";
import toast from "react-hot-toast";
import axios from "axios";

const useDelete = (id: string, userId: string) => {
  const { mutate: mutateFetchedPhotos } = usePhotos(userId);
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.delete("http://localhost:3000/photos", { data: { id } });
      mutateFetchedPhotos();
      toast.success("deleted successfully");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, [id, mutateFetchedPhotos]);

  return {
    onDelete,
    isLoading,
  };
};

export default useDelete;
