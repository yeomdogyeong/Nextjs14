"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useTodoStore } from "@/app/store/useTodoStore";
import { deleteTodoList, getAllTodoList, putTodoList } from "@/app/api/todo";
import { todo } from "node:test";
import { postAddTodoList } from "@/app/api/todo";
import { PutType, TodoType } from "@/app/api/type";
// export const metadata = {
//   title: "About",
// };

interface Props {
  params: {
    id: string;
  };
  searchParams: {};
}

export default function RetouchTodo(props: Props) {
  const { todos, getTodoList, doneTodo, setTodos, setDeleteTodo } =
    useTodoStore();
  const [edit, setEdit] = useState<boolean>(false);
  const [openValue, setOpenValue] = useState<number>(-1);

  const handleEditClick = (idx: number) => {
    setEdit(!edit);
    setOpenValue(idx);
  };

  const handleDeleteClick = async (idx: number) => {
    setDeleteTodo(idx);
    await deleteTodoList(idx);
    console.log(idx);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    setTodos(idx, e);
  };
  console.log(todos);
  const handleEnterClick = async (idx: number) => {
    const updateTodo = {
      id: idx,
      text: todos[idx].text,
    };

    await putTodoList(idx, updateTodo);
    setEdit(!edit);
    setOpenValue(-1);
  };

  useEffect(() => {
    getTodoList();
  }, [getTodoList, setTodos]);

  return (
    <div>
      <h1>할 일 목록</h1>
      <h2>
        {todos.map((todo, idx) => (
          <div
            key={todo.id}
            className={doneTodo.includes(todo.text) ? "line-through" : ""}
          >
            {edit && idx === openValue ? (
              <input
                className="border-2"
                defaultValue={todo.text}
                onChange={(e) => handleChange(e, idx)}
              />
            ) : (
              <span>{todo.text}</span>
            )}

            {edit && idx === openValue ? (
              <button
                className="border-2"
                onClick={() => handleEnterClick(idx)}
              >
                확인
              </button>
            ) : (
              <>
                <button
                  className="border-2"
                  onClick={() => handleEditClick(idx)}
                >
                  수정
                </button>
                <button
                  className="border-2"
                  onClick={() => handleDeleteClick(idx)}
                >
                  삭제
                </button>
              </>
            )}
          </div>
        ))}
      </h2>
    </div>
  );
}
