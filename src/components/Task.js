import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
export default function Task({ task }) {
  const { removeTask, findItem  } = useContext(TaskListContext);
  const handleRemove = () => {
    removeTask(task.id);
  };
  const handleEdit = () => {
    findItem(task.id)
  }
  return (
    <li className="list-item">
    <span>{task.title} </span>
    <div>
      <button
        className="btn-delete task-btn"
        onClick={() => removeTask(task.id)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>{' '}
      <button className="btn-edit task-btn" onClick={handleEdit}>
        <i className="fas fa-pen"></i>
      </button>
    </div>
  </li>
  );
}
