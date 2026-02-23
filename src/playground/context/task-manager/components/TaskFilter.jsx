import React from "react";
import { TaskContext } from "../context/TaskContext";

const TaskFilter = () => {
  const { state, dispatch } = React.useContext(TaskContext);
  console.log("current state:", state);
  // extract the current filter property from state
  const { filter } = state;

  const filters = ["ALL", "ACTIVE", "COMPLETED"];
  return (
    <div>
      {filters.map((f) => (
        <button
          onClick={() => dispatch({ type: "filter", filter: f })}
          key={f}
          className={`px-3 py-1 rounded-full text-sm ${filter === f ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
