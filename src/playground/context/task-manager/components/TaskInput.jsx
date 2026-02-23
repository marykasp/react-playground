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
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="enter a task"
        value={text}
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
