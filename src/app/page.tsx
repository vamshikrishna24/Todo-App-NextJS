import TodoItems from "@/components/TodoItems";
import prisma from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}
async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();
  //await prisma.todo.create({ data: { title: "test", complete: false } });
  //--> above line is used to create a sample todo in the db
  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItems key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
