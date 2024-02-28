import React from "react";

export const metadata = {
  title: "About",
};

interface Props {
  params: {
    id: string;
  };
  searchParams: {};
}

export default function Tab(props: Props) {
  console.log(props);
  return <div>Tab</div>;
}

interface Btype {
  a: {
    c: string[];
  };
}

const b: Btype = { a: { c: ["안녕"] } };
