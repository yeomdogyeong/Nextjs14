"use client";

import { GetDogImg } from "@/components/Hook/getDogImg";
import Image from "next/image";
export default function Dog() {
  const { data } = GetDogImg();
  return (
    <div>
      {data &&
        data.map((el) => (
          <div
            key={el.id}
            className="p-4 m-2 border-2 rounded-2xl bg-gray-200 text-center shadow-xl"
          >
            <Image src={el.url} alt="dog" width={500} height={300} />
            <span>{`Hello! my id is ${el.id}`}</span>
          </div>
        ))}
    </div>
  );
}
