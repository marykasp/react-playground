import React from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = React.useContext(TaskContext);

  const handleToggleTask = (id) => {
    dispatch({ type: "toggle", id });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "delete", id });
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
      <span
        onClick={() => handleToggleTask(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : "text-gray-500"}`}
      >
        {task.name}
      </span>

      <button
        onClick={() => handleDeleteTask(task.id)}
        className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
