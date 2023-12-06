import React from "react";
import { MdDeleteSweep } from "react-icons/md";

const TaskItem = ({ item, key, handleDeleteTask, toggleCheck }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => toggleCheck(item.taskName)}
        />
        <p className={item.checked ? "isChecked" : ""}>{item.taskName}</p>
      </div>
      <MdDeleteSweep
        className="delete-icon"
        onClick={() => handleDeleteTask(item.taskName)}
      />
    </li>
  );
};

export default TaskItem;
