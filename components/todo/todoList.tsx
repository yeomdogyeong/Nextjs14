import { useTodoStore } from "@/app/store/useTodoStore";

export default function TodoList() {
  const { todos, doneTodo } = useTodoStore();
  return (
    <h2>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`${
            doneTodo.includes(todo.text) ? "line-through" : ""
          } p-2 m-2 border-2`}
        >
          {todo.text}
        </div>
      ))}
    </h2>
  );
}
