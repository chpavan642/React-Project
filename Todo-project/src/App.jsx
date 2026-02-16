import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Todo App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none" }}>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
