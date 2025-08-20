import TodoCard from "../todo-card/TodoCard";
export default async function TodoList({ todos }: unknown) {
  return (
    <div>
      {/* map todos */}

      {todos?.map((todo: unknown) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
