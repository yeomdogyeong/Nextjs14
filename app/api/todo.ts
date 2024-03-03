import { GetTodoRs, PostTodoRs, PutTodoRs, PutType, TodoType } from "./type";
import { Axios } from "./axios";

export const getAllTodoList = async (id?: number) => {
  return await Axios.get<GetTodoRs>("/todos", { params: { id } });
};

export const postAddTodoList = async (rq: TodoType) => {
  return await Axios.post<PostTodoRs>("/todos", rq);
};

export const putTodoList = async (id: number, updatedTodo: PutType) => {
  return await Axios.put<PutTodoRs>(`/todos/${id}`, updatedTodo);
};

export const deleteTodoList = async (id: number) => {
  return await Axios.delete(`/todos/${id}`);
};
