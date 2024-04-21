"use client";

import { useGetDogImgQuery } from "@/components/Hook/useGetDogImgQuery";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { Spinner } from "@/components/spinner";

export default function Dog() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetDogImgQuery();
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "100px" }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div>
      {data &&
        data.map((el) => (
          <div
            key={el.id}
            className="p-4 border-1 rounded-2xl text-center shadow-inner"
          >
            <Image src={el.url} alt="dog" width={500} height={300} />
            <span>{`Hello! my id is ${el.id}`}</span>
          </div>
        ))}
      {isLoading && <Spinner />}
      <div ref={observerRef} />
    </div>
  );
}
