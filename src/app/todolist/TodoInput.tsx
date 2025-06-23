"use client";
import { Button } from "@/components/ui/button";

type Props = {
  input: string;
  setInput: (v: string) => void;
  addTodo: () => void;
};

export default function TodoInput({ input, setInput, addTodo }: Props) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 px-2 py-1 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <Button onClick={addTodo}>Ajouter</Button>
    </div>
  );
}