export default function NewTodo({ action }: { action: any }) {
  return (
    // on click
    <form action={action} className="w-full flex flex-row gap-2  ">
      <input className="w-full border-[0.25px] p-2 " type="text" name="title" id="title" placeholder="add todo" />
      <button type="submit" className="border-[0.5px] border-amber-300 px-5 hover:bg-amber-300 cursor-pointer ">
        Add
      </button>
    </form>
  );
}
