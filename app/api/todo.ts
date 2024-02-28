import { GetTodoRs } from "./type";
import { Axios } from "./axios";

export const getTodoList = async () => {
  return await Axios.get<GetTodoRs>("/todos");
};
