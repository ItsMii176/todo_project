import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  editInput: string;
  setEditInput: (v: string) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
  editingId: number | null;
};

export default function TodoItemEdit({
  editInput,
  setEditInput,
  saveEdit,
  cancelEdit,
  editingId
}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [editingId]);

  return (
    <>
      <input
        ref={inputRef}
        className="flex-1 px-2 py-1 border rounded"
        value={editInput}
        onChange={(e) => setEditInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") saveEdit();
        }}
      />
      <Button size="sm" onClick={saveEdit}>
        Enregistrer
      </Button>
      <Button size="sm" variant="outline" onClick={cancelEdit}>
        Annuler
      </Button>
    </>
  );
}