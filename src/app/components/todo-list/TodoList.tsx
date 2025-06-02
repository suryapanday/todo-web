import { Suspense } from "react";
import TodoCard from "../todo-card/TodoCard";
export default async function TodoList({ todos }: any) {
  return (
    <div>
      {/* map todos */}

      {todos?.map((todo: any) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
