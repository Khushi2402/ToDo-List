//to add tasks to the list

import React, {useEffect} from "react";

// to give unique ids to each task
import {v4 as uuidV4} from "uuid";

const Input = ({ input, setInput, tasks, setTasks, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = tasks.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
        setTasks(newTodo);
        setEditTodo("");
    }

    useEffect(() => {
        if(editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo) {
            setTasks([...tasks, { id: uuidV4(), title: input, completed: false }]);
        setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
        
    }
  return (
    <div>
      <h1 className="sub-headings">Add Tasks</h1>
      {/* Form to add the tasks into the list */}
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          className="input"
          value={input}
          required
          onChange={onInputChange}
        />
        <button className="add-task" type="submit">
          {editTodo ? "OK" : "Add Task" }
        </button>
      </form>
    </div>
  );
};

export default Input;
