import { GetTodoRs, TodoType } from "./type";
import { Axios } from "./axios";

export const getAllTodoList = async (id?: number) => {
  return await Axios.get<GetTodoRs>("/todos", { params: { id } });
};

export const postAddTodoList = async (rq: TodoType) => {
  return await Axios.post("/todos", rq);
};
