import { Input } from "@/atoms/input";

import { SubmitTodo } from "@/components/submit-todo";
import { createTodo } from "@/actions/createTodo";

const TodoForm = () => {
  return (
    <form action={createTodo} className="flex items-center space-x-2">
      <Input placeholder="Add new todo" type="text" name="title" required />
      <SubmitTodo />
    </form>
  );
};

export default TodoForm;
