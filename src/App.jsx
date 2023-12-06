import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

function App() {
  const [list, setList] = useState([]);

  const handleAddTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setList([...list, newTask]);
  };

  const handleDeleteTask = (deleteName) => {
    setList(list.filter((task) => task.taskName !== deleteName));
  };

  const toggleCheck = (taskName) => {
    setList(
      list.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <>
      <div className="container">
        <h1>TASK MANAGER</h1>
        <TaskInput handleAddTask={handleAddTask} />
        <div className="toDoList">
          <span>TO DO</span>
          <ul className="list-items">
            {list.map((item, key) => (
              <TaskItem
                item={item}
                key={key}
                handleDeleteTask={handleDeleteTask}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
          <p className="notify">{list.length === 0 ? "You are done!" : null}</p>
        </div>
      </div>
      <div className="stats">
        <p className="notify">
          {list.length === 0
            ? "You are ready to go! 👍"
            : list.length === 1
            ? `You have ${list.length} item to be done`
            : `You have ${list.length} items to be done`}
        </p>
      </div>
    </>
  );
}

export default App;
