import { useState, useContext } from "react";
import { TasksDispatchContext } from "./TaskContext";
export default function AddTask() {
  const dispatchTask = useContext(TasksDispatchContext);
  const [newTask, setNewTask] = useState("");
  const [nextId, setNextId] = useState(5);
  return (
    <>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={() => {
          setNextId((v) => v + 1);
          dispatchTask({
            type: "added",
            text: newTask,
            id: nextId,
            done: false
          });
          setNewTask("");
        }}
      >
        Add
      </button>
    </>
  );
}
