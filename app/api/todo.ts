import {
  DogData,
  GetTodoRs,
  PostIdType,
  PostTodoRs,
  PutTodoRs,
  PutType,
  TodoType,
} from "./type";
import { Axios } from "./axios";

export const getAllTodoList = async (id?: number) => {
  return await Axios.get<GetTodoRs>("/todos", { params: { id } });
};

export const postAddTodoList = async (rq: PostIdType) => {
  return await Axios.post<PostTodoRs>("/todos", rq);
};

export const putTodoList = async (id: number, updatedTodo: PutType) => {
  return await Axios.put<PutTodoRs>(`/todos/${id}`, updatedTodo);
};

export const deleteTodoList = async (id: number) => {
  return await Axios.delete(`/todos/${id}`);
};

export const getDogImg = async (): Promise<DogData[]> => {
  const res = await fetch(
    "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10"
  );
  const json = await res.json();
  console.log(json);
  return json;
};
