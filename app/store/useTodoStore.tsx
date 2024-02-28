import { create } from "zustand";
import { TodoType } from "../api/type";
import { getTodoList } from "../api/todo";

type Store = {
  todos: TodoType[];
  getTodoList: () => Promise<void>;
};

export const useTodoStore = create<Store>((set) => ({
  todos: [],
  getTodoList: async () => {
    const res = await getTodoList();
    console.log(res);
    set({ todos: res.data });
  },
}));
