"use client";
import React from "react";
import { BeatLoader } from "react-spinners";
export const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <BeatLoader color="hsla(168, 7%, 22%, 0.86)" speedMultiplier={1} />
    </div>
  );
};
