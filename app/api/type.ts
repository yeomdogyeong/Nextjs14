export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

export type GetTodoRs = TodoType[];
