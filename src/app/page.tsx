"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import TodoList from "./todolist/TodoList"; 

type Todo = { id: number; text: string; completed: boolean };

export enum Filter {
  All = "all",
  Done = "done",
  Todo = "todo",
}

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editInput, setEditInput] = useState("");
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([{ id: Date.now(), text: input, completed: false }, ...todos]);
      setInput("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditInput(todo.text);
  };

  const saveEdit = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editInput } : todo
      )
    );
    setEditingId(null);
    setEditInput("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === Filter.Done) return todo.completed;
    if (filter === Filter.Todo) return !todo.completed;
    return true;
  });

  return (
    <div className="space-y-6 bg-white shadow mx-auto mt-10 p-6 rounded-lg max-w-xl">
      <h2 className="mb-4 font-bold text-2xl">Ma Todo List</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 px-2 py-1 border rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nouvelle tâche"
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
        />
        <Button onClick={addTodo}>Ajouter</Button>
      </div>
      <div className="flex gap-2 mb-4">
        <Button
          variant={filter === Filter.All ? "default" : "outline"}
          onClick={() => setFilter(Filter.All)}
        >
          Toutes
        </Button>
        <Button
          variant={filter === Filter.Todo ? "default" : "outline"}
          onClick={() => setFilter(Filter.Todo)}
        >
          À faire
        </Button>
        <Button
          variant={filter === Filter.Done ? "default" : "outline"}
          onClick={() => setFilter(Filter.Done)}
        >
          Terminées
        </Button>
      </div>
      <TodoList
        todos={filteredTodos}
        editingId={editingId}
        editInput={editInput}
        setEditInput={setEditInput}
        setEditingId={setEditingId}
        startEdit={startEdit}
        saveEdit={saveEdit}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}