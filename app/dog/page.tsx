"use client";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { isQueryKey } from "react-query/types/core/utils";
export default function Dog() {
  const callData = async () => {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10"
    );
    const json = await res.json();
    console.log(json);
    return json;
  };

  const { isLoading, isError, data } = useQuery("getDog", callData);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {isError}</span>;
  }

  return <div>dog page</div>;
}
