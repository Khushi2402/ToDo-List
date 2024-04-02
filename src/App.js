import React, { useEffect, useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {

  //to get data from local storage
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  // to keep track of what task the user enters
  const [input, setInput] = useState("");

  // to keep track of all the tasks
  const [tasks, setTasks] = useState(initialState);

  // to keep track of editable tasks
  const [editTodo, setEditTodo] = useState(null);

  //to update local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="screen">
      <div className="card">
        <h1 className="heading">ToDo List</h1>
        <div className="main-card">
          <div className="form">
            <TaskInput
              input={input}
              setInput={setInput}
              tasks={tasks}
              setTasks={setTasks}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div className="tasks">
            <TaskList
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