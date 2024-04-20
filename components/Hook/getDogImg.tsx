import { useQuery } from "react-query";
import { getDogImg } from "@/app/api/todo";

export const useGetDogImgQuery = () => {
  const { isLoading, isError, data, ...rest } = useQuery("getDog", getDogImg, {
    select: (data) => data.map(({ id, url }) => ({ id, url })),
    refetchInterval: false,
    staleTime: Infinity,
  });

  return { isLoading, isError, data, ...rest };
};
