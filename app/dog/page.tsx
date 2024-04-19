"use client";

import { GetDogImg } from "@/components/Hook/getDogImg";
import Image from "next/image";
export default function Dog() {
  const { data } = GetDogImg();
  return (
    <div>
      {data &&
        data.map((el) => (
          <div key={el.id}>
            <Image src={el.url} alt="dog" width={500} height={500} />
          </div>
        ))}
    </div>
  );
}
