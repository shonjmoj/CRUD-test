import { prisma } from "@/lib/prisma";

import TodoForm from "@/components/todo-form";
import TodoItem from "@/components/todo";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-center bg-gray-500 py-5 text-white drop-shadow">
        <h1 className="text-3xl font-bold">CRUD Test</h1>
      </header>
      <main className="px-4 py-8">
        <div className="mx-auto max-w-xl">
          <TodoForm />
          {todos?.length > 0 ? (
            <ul className="mt-6 space-y-4">
              {todos.map(({ id, title, done }) => (
                <TodoItem key={id} id={id} done={done} title={title} />
              ))}
            </ul>
          ) : null}
        </div>
      </main>
    </div>
  );
}
