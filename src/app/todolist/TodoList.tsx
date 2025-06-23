"use client";
import TodoItem from "./TodoItem";

type Todo = { id: number; text: string; completed: boolean };

type Props = {
  todos: Todo[];
  editingId: number | null;
  editInput: string;
  setEditInput: (v: string) => void;
  setEditingId: (id: number | null) => void;
  startEdit: (todo: Todo) => void;
  saveEdit: (id: number) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

const TodoList = ({
  todos,
  editingId,
  editInput,
  setEditInput,
  setEditingId,
  startEdit,
  saveEdit,
  removeTodo,
  toggleTodo,
} : Props) => (
  <ul className="space-y-2">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        editingId={editingId}
        editInput={editInput}
        setEditInput={setEditInput}
        setEditingId={setEditingId}
        startEdit={startEdit}
        saveEdit={saveEdit}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    ))}
  </ul>
);

export default TodoList;