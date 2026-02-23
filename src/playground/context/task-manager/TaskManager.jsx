import React from "react";
import TaskProvider from "./context/TaskProvider";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

const TaskManager = () => {
  return (
    <TaskProvider>
      <div className="bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Task Manager
          </h1>

          <TaskInput />
          <TaskFilter />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default TaskManager;
