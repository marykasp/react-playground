import { useReducer } from "react";
import { TaskContext } from "./TaskContext";

const initialState = {
  filter: "ALL",
  tasks: [],
};

function reducer(state, action) {
  // where all state updates will occur based on the action type received from the dispatcher
  if (action.type === "add") {
    // add a task to the tasks list
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          name: action.text,
          completed: false,
        },
      ],
    };
  } else if (action.type === "toggle") {
    // toggle the completed status of specified task
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task,
      ),
    };
  } else if (action.type === "delete") {
    // remove task from the list
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.id),
    };
  } else if (action.type === "filter") {
    // update the filter property
    return {
      ...state,
      filter: action.filter,
    };
  } else {
    throw new Error("This action type does not exist.");
  }
}

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
