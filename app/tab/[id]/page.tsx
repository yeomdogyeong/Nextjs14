"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useTodoStore } from "@/app/store/useTodoStore";
import { TodoType } from "@/app/api/type";
import { Axios } from "@/app/api/axios";
import { getAllTodoList } from "@/app/api/todo";
import { todo } from "node:test";
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
  const { todos, getTodoList, doneTodo, setDoneTodo } = useTodoStore();
  const [inputValue, setInputValue] = useState<string>("");
  const [dropMenu, setDropMenu] = useState<string[]>([]);

  const { params } = props;

  const todoInputFiltered = async (value: string) => {
    if (inputValue.trim() !== "") {
      const res = await getAllTodoList(value);
      const nameMenu = res.data.map((item) => item.text);
      const newFiltered = nameMenu.filter((item) => item.includes(value));

      setDropMenu(newFiltered);
    } else {
      setDropMenu([]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const changeEvent = e.target.value;
    setInputValue(changeEvent);
    todoInputFiltered(changeEvent);
  };

  const handleTodoClick = (todo: string) => {
    setDoneTodo([todo]);
  };

  useEffect(() => {
    getTodoList();
  }, [getTodoList, doneTodo]);

  return (
    <div>
      <h1>Tab : {params.id}</h1>
      <h2>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </h2>
      <input
        className="w-full border-2 h-10 mt-6 text-center"
        placeholder="여기에 입력"
        onChange={handleChange}
        value={inputValue}
      />
      {dropMenu.length > 0 && (
        <div>
          {dropMenu.map((todo, index) => (
            <div
              key={index}
              className="w-full h-10 mt-2 text-center"
              onClick={() => handleTodoClick(todo)}
            >
              {todo}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
