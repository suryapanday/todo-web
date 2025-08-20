

import TodoCard from "../todo-card/TodoCard";
interface Todo {
  id: number;
  title: string; 
  isComplete?: boolean;
}


interface TodoListProps {
  todos: Todo[];
}

export default async function TodoList({ todos }: TodoListProps) {
  return (
    <div>
      {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}


