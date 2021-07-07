import React, { useEffect, useState } from "react";

import TodoList from "./TodoList";

import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/todo')
      .then(res => res.json())
      .then(data => console.log(data.todo))
  }, []);

  console.log(todos)
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
