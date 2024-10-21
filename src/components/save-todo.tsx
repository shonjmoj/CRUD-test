"use client";

import { Button } from "@/atoms/button";
import { useFormStatus } from "react-dom";

export function SaveTodo() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
