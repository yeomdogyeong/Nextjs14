"use client";
import React, { useEffect } from "react";
import { useTodoStore } from "@/app/store/useTodoStore";
import axios from "axios";
// export const metadata = {
//   title: "About",
// };

interface Props {
  params: {
    id: string;
  };
  searchParams: {};
}

export default function Tab(props: Props) {
  const { todos, getTodoList } = useTodoStore();

  const { params } = props;

  console.log(params.id);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return (
    <div>
      <h1>Tab : {params.id}</h1>
      <h2>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </h2>
    </div>
  );
}

interface Btype {
  a: {
    c: string[];
  };
}

const b: Btype = { a: { c: ["안녕"] } };
