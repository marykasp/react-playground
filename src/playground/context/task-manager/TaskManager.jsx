import React from "react";
import TaskProvider from "./context/TaskProvider";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const TaskManager = () => {
  return (
    <TaskProvider>
      <h1>Task Manager</h1>

      <TaskInput />
      <TaskList />
    </TaskProvider>
  );
};

export default TaskManager;
