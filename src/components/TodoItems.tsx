"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export default function TodoItems({
  id,
  title,
  complete,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      {/* what peer does is when ever the input is checked, for label :
      line-through property gets activated */}
      <input
        type="checkbox"
        id={id}
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
