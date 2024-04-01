import React, { useEffect, useState, useeffect } from "react";
import "./App.css";
import Input from "./components/Input";
import Tasks from "./components/Tasks";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  // to keep track of what task the user enters
  const [input, setInput] = useState("");

  // to keep track of all the tasks
  const [tasks, setTasks] = useState(initialState);

  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="screen">
      <div className="card">
        <h1 className="heading">ToDo List</h1>
        <div className="main-card">
          <div className="form">
            <Input
              input={input}
              setInput={setInput}
              tasks={tasks}
              setTasks={setTasks}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div className="tasks">
            <Tasks
              tasks={tasks}
              setTasks={setTasks}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;