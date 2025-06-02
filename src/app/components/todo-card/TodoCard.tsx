"use client";
type TodoProps = {
  todo: {
    id: number;
    isComplete: boolean;
    title: string;
  };
};
import { updateTodoAction } from "@/actions/actions";

export default function TodoCard({ todo }: TodoProps) {
  const { id, title, isComplete } = todo;
  return (
    <>
      {/* in hover show */}
      <form action={updateTodoAction} className="flex flex-row gap-2 px-2 py-1 justify-center items-center">
        {/* checkbok */}
        <input type="hidden" name="id" id="id" value={id} />
        <input type="checkbox" className="w-[20px] h-[20px]" name="isComplete" id="isComplete" defaultChecked={isComplete} />

        <input type="text" className="w-full p-1 outline-0" name="title" id="title" defaultValue={title} onChange={() => {}} />
        {/* onhover show action buttons on the side */}
      </form>
    </>
  );
}
