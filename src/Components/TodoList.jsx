import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [updatedTask, setUpdatedTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setUpdatedTask(tasks[index]);
  };

  const handleUpdateTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = updatedTask;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setUpdatedTask("");
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">ToDo List</h1>

      <div className="todo-input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="todo-input"
        />
        <button onClick={handleAddTask} className="todo-add-button">
          Add
        </button>
      </div>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={updatedTask}
                  onChange={(e) => setUpdatedTask(e.target.value)}
                  className="todo-edit-input"
                />
                <button onClick={handleUpdateTask} className="todo-save-button">
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <div className="todo-actions">
                  <button onClick={() => handleEditTask(index)} className="todo-edit-button">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteTask(index)} className="todo-delete-button">
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
