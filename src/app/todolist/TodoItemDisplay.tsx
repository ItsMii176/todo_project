"use client";
import { Button } from "@/components/ui/button";

type Props = {
  text: string;
  completed: boolean;
  onEdit: () => void;
  onRemove: () => void;
};

export default function TodoItemDisplay({
  text,
  completed,
  onEdit,
  onRemove,
}: Props) {
  return (
    <>
      <span className={`flex-1 ${completed ? "line-through text-gray-400" : ""}`}>
        {text}
      </span>
      <Button size="sm" variant="outline" onClick={onEdit}>
        Éditer
      </Button>
      <Button size="sm" variant="destructive" onClick={onRemove}>
        Supprimer
      </Button>
    </>
  );
}