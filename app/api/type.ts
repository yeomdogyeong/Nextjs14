export interface PutType {
  id: number;
  text: string;
}
export interface TodoType extends PutType {
  completed: boolean;
}

export interface PostIdType {
  id: string;
  text: string;
  completed: boolean;
}

export interface DogData {
  id: string;
  url: string;
}

export type PostTodoRs = PostIdType[];
export type GetTodoRs = TodoType[];
export type PutTodoRs = PutType[];
