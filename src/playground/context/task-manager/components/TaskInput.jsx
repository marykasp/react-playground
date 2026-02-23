import React from "react";
import { TaskContext } from "../context/TaskContext";

const TaskInput = () => {
  const [text, setText] = React.useState("");
  const { dispatch } = React.useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the action type and value required to add a new task to the task list
    dispatch({ type: "add", text });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
