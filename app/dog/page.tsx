"use client";
import { useEffect } from "react";
export default function Dog() {
  const callData = async () => {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10"
    );
    const json = await res.json();
    console.log(json);
    return json;
  };

  useEffect(() => {
    callData();
  }, []);
  return <div>dog page</div>;
}
