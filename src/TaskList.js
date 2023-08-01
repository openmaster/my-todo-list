import Task from "./Task";
import { useContext } from "react";
import { TasksContext } from "./TaskContext";

export default function TaskList() {
  const tasks = useContext(TasksContext);

  console.log(tasks);
  return (
    <ul>
      {tasks.map((d) => (
        <li key={d.id}>
          <Task task={d} />
        </li>
      ))}
    </ul>
  );
}
