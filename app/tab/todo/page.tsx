"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useTodoStore } from "@/app/store/useTodoStore";
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

export default function Todo(props: Props) {
  const { todos, getTodoList, doneTodo, setDoneTodo } = useTodoStore();
  const [inputValue, setInputValue] = useState<string>("");
  const [dropMenu, setDropMenu] = useState<string[]>([]);

  const { params } = props;

  // const todoInputFiltered = async (value: string) => {
  //   //input값에 받아온 값이 비어있지않으면
  //   if (value.trim() !== "") {
  //     //값을 받아서 todos의 text(할 일)가 value랑 같은 값을 찾는다 => 실제 서버에서 받아온다면 todo.text의 중복을 검수하는 함수가 필요함
  //     //json서버에서 받아온 쿼리값이 id로만 가능해서 어쩔수없는 선택..
  //     const todo = todos.find((todo) => todo.text.includes(value));
  //     //todo값이 true일 때 실행 === 해당 value의 값이 Todos의 text와 일치
  //     console.log(todo);
  //     if (todo) {
  //       const res = await getAllTodoList(todo.id);
  //       const nameMenu = res.data.map((item) => item.text);
  //       setDropMenu(nameMenu);
  //     } else {
  //       setDropMenu(todos.map((item) => item.text));
  //     }
  //   }
  // };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const changeValue = e.target.value;
  //   setInputValue(changeValue);
  //   todoInputFiltered(changeValue);
  // };

  const handleTodoClick = (todo: string) => {
    if (doneTodo.includes(todo)) {
      alert("중복입니다");
    } else {
      setDoneTodo([todo]);
    }
  };

  console.log(doneTodo);
  useEffect(() => {
    getTodoList();
    setDoneTodo([]);
  }, [getTodoList, setDoneTodo]);

  return (
    <div>
      <h1>Todo : {params.id}</h1>
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
      {/* <input
        className="w-full border-2 h-10 mt-6 text-center"
        placeholder="여기에 입력"
        onChange={handleChange}
        value={inputValue}
      /> */}
      {/* {dropMenu.length > 0 && (
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
      )} */}
    </div>
  );
}
