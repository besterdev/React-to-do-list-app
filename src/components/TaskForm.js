import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";
export default function TaskForm() {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClearList = (e) => {
    e.preventDefault();
    clearList();
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <div>
      <form className="form">
        <input
          type="text"
          className="task-input"
          placeholder="Add Task.."
          value={title}
          onChange={handleChange}
        />
        <div className="buttons">
          <button
            type="submit"
            className="btn add-task-btn"
            onClick={handleSubmit}
          >
            {editItem ? "Edit Task" : "Add Task"}
          </button>
          <button
            type="submit"
            className="btn clear-btn"
            onClick={handleClearList}
          >
            Clear Task
          </button>
        </div>
      </form>
    </div>
  );
}
