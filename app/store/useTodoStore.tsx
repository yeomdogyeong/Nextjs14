import { create } from "zustand";
import { TodoType } from "../api/type";
import { getAllTodoList } from "../api/todo";
import { ChangeEvent } from "react";

type Store = {
  todos: TodoType[];
  doneTodo: string[];
  setTodos: (index: number, e: ChangeEvent<HTMLInputElement>) => void;
  getTodoList: (id?: number) => Promise<void>;
  setDoneTodo: (doneTodo: string[]) => void;
  setDeleteTodo: (index: number) => void;
};

export const useTodoStore = create<Store>((set, get) => ({
  todos: [],
  doneTodo: [],
  setTodos: (index: number, e: ChangeEvent<HTMLInputElement>) => {
    //해당 인덱스를 받아와서 그 내용을 다른 내용으로 교체
    const newTodos = [...get().todos];
    newTodos[index].text = e.target.value;
    set({ todos: newTodos });
  },
  getTodoList: async (id?: number) => {
    const res = await getAllTodoList();
    set({ todos: res.data });
  },
  setDoneTodo: (value: string[]) => {
    const newTodo = [...get().doneTodo, ...value];
    set({ doneTodo: newTodo });
  },
  setDeleteTodo: (idx: number) => {
    const deleteTodo = get().todos.filter((_, index) => index !== idx);
    set({ todos: deleteTodo });
  },
}));
