"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useTodoStore } from "@/app/store/useTodoStore";
import { getAllTodoList } from "@/app/api/todo";
import { todo } from "node:test";
import { postAddTodoList } from "@/app/api/todo";
import { TodoType } from "@/app/api/type";
// export const metadata = {
//   title: "About",
// };

interface Props {
  params: {
    id: string;
  };
  searchParams: {};
}

export default function AddTodo(props: Props) {
  const { todos, getTodoList, doneTodo, setDoneTodo } = useTodoStore();
  const [inputValue, setInputValue] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const changeEvent = e.target.value;
    setInputValue(changeEvent);
  };
  console.log(inputValue);

  const handleAddTodo = async () => {
    const rq: TodoType = {
      id: todos[todos.length - 1].id + 1,
      text: inputValue,
      completed: false,
    };

    try {
      await postAddTodoList(rq);
    } catch (error) {
      console.error(error);
    }
    setInputValue("");
    getTodoList();
  };

  useEffect(() => {
    getTodoList();
    setDoneTodo([]);
  }, [getTodoList, setDoneTodo]);

  return (
    <div>
      <h1>할 일 목록</h1>
      <h2>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={doneTodo.includes(todo.text) ? "line-through" : ""}
          >
            {todo.text}
          </div>
        ))}
      </h2>
      <input
        className="w-full border-2 h-10 mt-6 text-center"
        placeholder="추가 할 일을 입력하세요"
        value={inputValue}
        onChange={handleOnChange}
      />
      <button onClick={handleAddTodo}>추가</button>{" "}
    </div>
  );
}
