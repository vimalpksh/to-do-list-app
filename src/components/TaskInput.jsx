import React from "react";
import { useState } from "react";

const TaskInput = ({ handleAddTask }) => {
  const [task, setTask] = useState(" ");
  const handleTaskInput = (e) => {
    setTask(e.target.value);
  };

  const handleNewTaskAdd = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    handleAddTask(task);
    setTask("");
  };

  console.log(task);
  return (
    <form className="inputField" onSubmit={handleNewTaskAdd}>
      <input
        type="text"
        placeholder="Add Task Here"
        value={task}
        onChange={handleTaskInput}
      />
      <button>+</button>
    </form>
  );
};

export default TaskInput;
