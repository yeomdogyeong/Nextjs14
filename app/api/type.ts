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

export type GetTodoRs = TodoType[];
export type PostTodoRs = PostIdType[];
export type PutTodoRs = PutType[];
