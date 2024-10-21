"use client";

import { Button } from "@/atoms/button";
import { useFormStatus } from "react-dom";

export function SubmitTodo() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? "Adding..." : "Add"}
    </Button>
  );
}
