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
    //캐시 된 데이터를 먼저 보여주고 Fetching이 끝난다음 데이터를 업데이트
    keepPreviousData: true,
  });

  const dogData = data?.pages.flatMap((page) => page.data);
  console.log(data);
  console.log(data?.pages);
  console.log(dogData);
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
