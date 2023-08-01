import { createContext, useReducer } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TaskProvider({ children }) {
  const initialTasks = [
    { id: 1, text: "Philosopher’s Path", done: true },
    { id: 2, text: "Philosopher’s Path", done: true },
    { id: 3, text: "Philosopher’s Path", done: false },
    { id: 4, text: "Philosopher’s Path", done: false }
  ];
  function tasksReducer(tasks, action) {
    switch (action.type) {
      case "added": {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false
          }
        ];
      }
      case "changed": {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case "deleted": {
        return tasks.filter((t) => t.id !== action.task.id);
      }
      default: {
        throw Error("Unknown action:" + action.type);
      }
    }
  }
  const [tasks, dispatchTask] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatchTask}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
