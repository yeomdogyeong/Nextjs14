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
    //observer : Dom에 대한 참조를 보유하는 참조
    //IntersectionObserver : 뷰포트와 관찰 대상 요소 간의 교차를 확인하는 API
    const observer = new IntersectionObserver(
      ([entry]) => {
        //관찰 대상 요소가 뷰포트와 교차하는지 여부
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "100px" }
    );
    console.log(observerRef);
    if (observerRef.current) {
      //이 부분은 intersectionobserver를 만듬
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
