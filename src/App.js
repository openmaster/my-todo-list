import "./styles.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

import TaskProvider from "./TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <h1>Your Tasks</h1>
      <TaskList />
      <AddTask />
    </TaskProvider>
  );
}
