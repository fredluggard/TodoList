import React, { useState } from "react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";

function Display() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    if (todoInput.trim() !== "") {
      const newTodo = { text: todoInput, completed: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      // setTodos([todos.push(newTodo)]);
      setTodoInput("");
      console.log(todos);
    } else {
      alert("Please input your todo");
    }
  };
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <header>
        <h1>To-Do List</h1>
        <img className="img" src="note1.png" alt="Notepad" />
      </header>

      <form onSubmit={addTodo}>
        <div>
          <input
            type="text"
            className="todo-input"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <button type="submit" className="todo-button">
            <FaPlus className="fa-plus" />
          </button>
        </div>

        {/* Wanted to implement this below but no time to  */}

        {/* <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div> */}
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li
              id="listed-style"
              key={index}
              className={todo.completed ? "completed" : ""}
            >
              <div className="todo-item">{todo.text}</div>
              <div>
                <button
                  className="complete-btn"
                  onClick={() => toggleComplete(index)}
                >
                  <FaCheck />
                </button>
                <button className="trash-btn" onClick={() => deleteTodo(index)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Display;
