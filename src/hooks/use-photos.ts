import useSwr from "swr";

import fetcher from "@/lib/fetcher";

const usePhotos = (userId?: string) => {
  const url = `http://localhost:3000/photos?userId=${userId}`;

  const { data, error, isLoading, mutate } = useSwr(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePhotos;
