import { GetTodoRs } from "./type";
import { Axios } from "./axios";

export const getAllTodoList = async (q?: string) => {
  return await Axios.get<GetTodoRs>("/todos", { params: { q } });
};
