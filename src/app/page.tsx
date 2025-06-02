import TodoList from "./components/todo-list/TodoList";
import Wrapper from "./components/ui/Wrapper";
import NewTodo from "./components/new-todo-form/NewTodo";

import { getTodosAction, createTodoAction } from "@/actions/actions";
import { Suspense } from "react";

export default async function Home() {
  const todos = await getTodosAction();

  return (
    <>
      <Wrapper>
        <h2>Fullstack Todo App | Surya Panday</h2>
        <NewTodo action={createTodoAction} />
        <Suspense fallback={"loading..."}>
          <TodoList todos={todos} />
        </Suspense>
      </Wrapper>
    </>
  );
}
