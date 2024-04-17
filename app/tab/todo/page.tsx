"use client";
import React, { useEffect } from "react";
import { useTodoStore } from "@/app/store/useTodoStore";
import { getAllTodoList } from "@/app/api/todo";
import { todo } from "node:test";
import TodoList from "@/components/todo/todoList";
import TodoDrop from "@/components/todo/todoDrop";
// export const metadata = {
//   title: "About",
// };

interface Props {
  params: {
    id: string;
  };
  searchParams: {};
}

export default function Todo(props: Props) {
  const { getTodoList, setDoneTodo } = useTodoStore();

  const { params } = props;

  useEffect(() => {
    getTodoList();
    setDoneTodo([]);
  }, [getTodoList, setDoneTodo]);

  return (
    <div>
      <TodoDrop />
      <h1>Todo : {params.id}</h1>
      <TodoList />
    </div>
  );
}
