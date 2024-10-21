import { Button } from "@/atoms/button";
import type { Todo } from "@prisma/client";

import { updateTodo } from "@/actions/updateTodo";

import { deleteTodo } from "../actions/deleteTodo";

const TodoItem = ({
  id,
  content,
  title,
  done,
}: Pick<Todo, "id" | "title" | "done" | "content">) => {
  const updateTodoWithId = updateTodo.bind(null, { id, done });
  const deleteTodoWithId = deleteTodo.bind(null, id);

  return (
    <li
      className={`flex flex-col space-y-2 rounded bg-white p-4 shadow border border-gray-500
      ${done && "opacity-40"}
    `}
    >
      <div className="flex items-center justify-between">
        <h3>{title}</h3>
        <div className="flex space-x-2">
          <form action={updateTodoWithId}>
            <Button type="submit">{done ? "To do" : "Done"}</Button>
          </form>

          <form action={deleteTodoWithId}>
            <Button type="submit">Delete</Button>
          </form>
        </div>
      </div>
      <p className="text-sm text-gray-600">{content}</p>
    </li>
  );
};

export default TodoItem;
