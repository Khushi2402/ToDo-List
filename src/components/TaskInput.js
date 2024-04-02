//to add tasks to the list

import React, {useEffect} from "react";

// to give unique ids to each task
import {v4 as uuidV4} from "uuid";

//initializing input state variable using useState hook
const TaskInput = ({ input, setInput, tasks, setTasks, editTodo, setEditTodo }) => {

  //to update input state based on user input
    const updateTodo = (title, id, completed) => {
        const newTodo = tasks.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
        setTasks(newTodo);
        setEditTodo("");
    }

    //to update the input state variable based on user input
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

    //to handle form submission 
    const onFormSubmit = (event) => {
      event.preventDefault();
      //if no editable tasks then new task is added to the array with new id
      if (!editTodo) {
        setTasks([...tasks, { id: uuidV4(), title: input, completed: false }]);
        setInput("");
      }
      //if editable task is present, then update the task
      else {
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
        {/* Add task button */}
        <button className="add-task" type="submit">
          {editTodo ? "OK" : "Add Task" }
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
