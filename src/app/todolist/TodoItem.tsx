"use client";
import { Checkbox } from "@/components/ui/checkbox";
import TodoItemEdit from "./TodoItemEdit";
import TodoItemDisplay from "./TodoItemDisplay";

type Todo = { id: number; text: string; completed: boolean };

type Props = {
  todo: Todo;
  editingId: number | null;
  editInput: string;
  setEditInput: (v: string) => void;
  setEditingId: (id: number | null) => void;
  startEdit: (todo: Todo) => void;
  saveEdit: (id: number) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export default function TodoItem({
  todo,
  editingId,
  editInput,
  setEditInput,
  setEditingId,
  startEdit,
  saveEdit,
  removeTodo,
  toggleTodo,
}: Props) {

  return (
    
    <li className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => toggleTodo(todo.id)}
      />
      {editingId === todo.id ? (
        <TodoItemEdit
          editInput={editInput}
          setEditInput={setEditInput}
          saveEdit={() => saveEdit(todo.id)}
          cancelEdit={() => setEditingId(null)}
          editingId={editingId}
        />
      ) : (
        <TodoItemDisplay
          text={todo.text}
          completed={todo.completed}
          onEdit={() => startEdit(todo)}
          onRemove={() => removeTodo(todo.id)}
        />
      )}
    </li>
  );
}