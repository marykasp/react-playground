import React from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskList = () => {
  const { state, dispatch } = React.useContext(TaskContext);

  return <div>TaskList</div>;
};

export default TaskList;
