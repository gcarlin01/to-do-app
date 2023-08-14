"use client";

import Image from "next/image";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const TODO_STATUS = {
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
};

export default function Home() {
  const [todos, setTodos] = useState([]);

  const [inputTodoText, setInputTodoText] = useState("");

  const addNewTodo = () => {
    if (inputTodoText) {
      const newTodo = {
        id: uuid(),
        text: inputTodoText,
        status: TODO_STATUS.IN_PROGRESS,
      };

      setTodos((todoList) => [newTodo, ...todos]);
      setInputTodoText("");
    }
  };

  return (
    <main>
      <input
        value={inputTodoText}
        onChange={(event) => setInputTodoText(event.target.value)}
        placeholder="enter a task"
      />
      <button onClick={addNewTodo}>Add</button>

      <hr />

      <p>Tasks In Progress</p>
      <ul>
        {todos
          .filter((t) => t.status === TODO_STATUS.IN_PROGRESS)
          .map((todo) => {
            return (
              <li key={todo.id}>
                {todo.text}
                <button
                  onClick={() => {
                    const updatedTodos = todos.map((t) => {
                      if (t.id === todo.id) {
                        return { ...todo, status: TODO_STATUS.DONE };
                      }
                      return t;
                    });

                    setTodos(updatedTodos);
                  }}
                >
                  done
                </button>
              </li>
            );
          })}
      </ul>

      <p>Completed Tasks</p>
      <ul>
        {todos
          .filter((t) => t.status === TODO_STATUS.DONE)
          .map((todo) => {
            return <li key={todo.id}>{todo.text}</li>;
          })}
      </ul>
    </main>
  );
}
