import { create } from "zustand";
import { TodoType } from "../api/type";
import { getAllTodoList } from "../api/todo";

type Store = {
  todos: TodoType[];
  doneTodo: string[];
  setTodos: (todo: TodoType) => void;
  getTodoList: (id?: number) => Promise<void>;
  setDoneTodo: (doneTodo: string[]) => void;
};

export const useTodoStore = create<Store>((set, get) => ({
  todos: [],
  doneTodo: [],
  setTodos: (todo: TodoType) => {
    const newTodos = [...get().todos, todo];
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
}));
