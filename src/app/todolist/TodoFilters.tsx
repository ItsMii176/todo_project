"use client";
import { Button } from "@/components/ui/button";
import { Filter } from "../page";

type Props = {
  filter: Filter;
  setFilter: (f: Filter) => void;
};

export default function TodoFilters({ filter, setFilter }: Props) {
  return (
    <div className="flex gap-2 mb-4">
      <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter(Filter.All)}>
        Toutes
      </Button>
      <Button variant={filter === "todo" ? "default" : "outline"} onClick={() => setFilter(Filter.Todo)}>
        À faire
      </Button>
      <Button variant={filter === "done" ? "default" : "outline"} onClick={() => setFilter(Filter.Done)}>
        Terminées
      </Button>
    </div>
  );
}