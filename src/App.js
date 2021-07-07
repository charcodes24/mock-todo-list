import React, { useEffect, useState } from "react";

import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/todo')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, []);

  return (
    <div className="App">
      <NewTodo />
      <TodoList 
        todos={todos}
      />
    </div>
  );
}

export default App;
