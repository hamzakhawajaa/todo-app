import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useCallback } from "react";
const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const onNewTodoChange = useCallback((event) => {
    console.log(event.target.value);
    setNewTodo(event.target.value);
  }, []);

  function formSubmitted(event) {
    event.preventDefault();
    console.log("Form submitted!");
  }

  return (
    <div>
      <form onSubmit={formSubmitted}>
        <label htmlFor="newTodo"> Enter a Todo </label>
        <input
          id="newTodo"
          name="newTodo"
          value={newTodo}
          onChange={onNewTodoChange}
        />
        <button> Add Todo </button>
      </form>
    </div>
  );
};

export default App;
