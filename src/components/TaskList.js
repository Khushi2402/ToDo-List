//to display all the tasks
import React from "react";

const TaskList = ({ tasks, setTasks, setEditTodo }) => {

    //to toggle the completion status of task
    const handleComplete = (todo) => {
        setTasks(
            tasks.map((item) => {
                if(item.id === todo.id) {
                    return { ...item, completed: !item.completed}
                }
                return item;
            })
        );
    };

    //to set editTodo state variable to task, when button is clicked
    const handleEdit = ({id}) => {
        const findTodo = tasks.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    //to remove task from tasks array
    const handleDelete = ({id}) => {
        setTasks(tasks.filter((todo) => todo.id !== id));
    };

  return (
    <div>
      <h1 className="sub-headings">Tasks</h1>
      {tasks.map((todo) => (
        <li className="list-item" key={todo.id}>
          <button
            className="complete-task task-button"
            onClick={() => handleComplete(todo)}
          >
            <i className="fa fa-check-circle"></i>
          </button>
          <input
            type="text"
            value={todo.title}
            className={`task ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="edit-task task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="delete-task task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TaskList;
