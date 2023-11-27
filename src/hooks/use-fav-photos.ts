import useSwr from "swr";

import fetcher from "@/lib/fetcher";

const useFavPhotos = (userId?: string) => {
  const url = `http://localhost:3000/photos/favorites?userId=${userId}`;

  const { data, error, isLoading, mutate } = useSwr(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useFavPhotos;
