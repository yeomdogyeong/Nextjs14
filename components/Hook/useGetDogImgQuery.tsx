import { useInfiniteQuery } from "react-query";
import { getDogImg } from "@/app/api/api";

export const useGetDogImgQuery = () => {
  const {
    isLoading,
    isError,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...rest
  } = useInfiniteQuery("getDog", getDogImg, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
    refetchInterval: false,
    staleTime: Infinity,
    keepPreviousData: true,
  });

  const dogData = data?.pages.flatMap((page) => page.data);

  return {
    isLoading,
    isError,
    data: dogData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...rest,
  };
};
