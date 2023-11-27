import useSwr from "swr";

import fetcher from "@/lib/fetcher";

const useFavVideos = (userId?: string) => {
  const url = `http://localhost:3000/videos/favorites?userId=${userId}`;

  const { data, isLoading, error, mutate } = useSwr(url, fetcher);

  return { data, isLoading, error, mutate };
};

export default useFavVideos;
