import { useState, useContext, useRef } from "react";
import { TasksDispatchContext } from "./TaskContext";
import { flushSync } from "react-dom";

export default function Task({ task }) {
  const dispatchTasks = useContext(TasksDispatchContext);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.text);
  const userInput = useRef();
  return (
    <div>
      <span>{task.id}</span>
      <input
        type="checkbox"
        onChange={(e) => {
          dispatchTasks({
            type: "changed",
            task: { ...task, done: e.target.checked.value }
          });
        }}
        checked={task.done}
      />

      {edit ? (
        <>
          <input
            ref={userInput}
            name="input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              dispatchTasks({ type: "changed", task: { ...task, text: text } });
              setEdit(false);
            }}
          >
            save
          </button>
          <button onClick={() => setEdit(false)}>close</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button
            onClick={() => {
              flushSync(() => {
                setEdit(true);
              });

              // setTimeout(() => {
              userInput.current.focus();
              // }, 100);
            }}
          >
            edit
          </button>
          <button
            onClick={() => dispatchTasks({ type: "deleted", task: task })}
          >
            remove
          </button>
        </>
      )}
    </div>
  );
}
