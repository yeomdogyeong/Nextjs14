"use client";
import { GetDogImg } from "@/components/Hook/getDogImg";
export default function Dog() {
  const { data } = GetDogImg();
  return <div>{data}</div>;
}
