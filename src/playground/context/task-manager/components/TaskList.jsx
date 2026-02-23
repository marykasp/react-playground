import React from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export const TaskList = () => {
  const { state } = React.useContext(TaskContext);
  const { tasks, filter } = state;

  // filter tasks based on the filter property of state
  const filteredTasks = tasks.filter((task) => {
    if (filter === "ACTIVE") return !task.completed;
    if (filter === "COMPLETED") return task.completed;
    // for all other cases the condition will always be true since want to show every task item
    return true;
  });

  // if no filtered tasks display a paragraph insted of list
  if (!filteredTasks.length) {
    return <p className="text-center text-gray-500">No tasks yet.</p>;
  }

  return (
    <div className="space-y-2">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
