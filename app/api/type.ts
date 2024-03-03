export interface PutType {
  id: number;
  text: string;
}
export interface TodoType extends PutType {
  completed: boolean;
}

export type GetTodoRs = TodoType[];
export type PostTodoRs = TodoType[];
export type PutTodoRs = PutType[];
