import { useQuery } from "react-query";
import { DogData } from "@/app/api/type";

export const GetDogImg = () => {
  const callData = async (): Promise<DogData[]> => {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10"
    );
    const json = await res.json();
    console.log(json);
    return json;
  };

  const { isLoading, isError, data } = useQuery("getDog", callData, {
    select: (data) => data.map(({ id, url }) => ({ id, url })),
    refetchInterval: false,
    staleTime: Infinity,
  });

  return { isLoading, isError, data };
};
