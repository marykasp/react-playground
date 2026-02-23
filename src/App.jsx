import React from "react";

import Counter from "./playground/state/Counter";
import MultiStepForm from "./playground/state/MultiStepForm";
import TaskManager from "./playground/context/task-manager/TaskManager";
import { MultiStepForm as ReducerForm } from "./playground/reducer/MultiStepForm";

const playgrounds = {
  "State Hooks": {
    "useState Counter": Counter,
    "useState Multi-Step Form": MultiStepForm,
  },
  "Reducer Pattern": {
    "useReducer Multi-Step Form": ReducerForm,
  },
  "Context + Reducer": {
    "Task Manager": TaskManager,
  },
};

export default function App() {
  const [active, setActive] = React.useState("useState Counter");

  // Find active component
  let ActiveComponent = null;
  Object.values(playgrounds).forEach((group) => {
    if (group[active]) {
      ActiveComponent = group[active];
    }
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white px-8 py-4">
        <h1 className="text-xl font-semibold tracking-tight">
          React Playground
        </h1>
        <p className="text-sm text-slate-500">
          Experiments for mastering hooks and patterns
        </p>
      </header>

      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-200 bg-white p-6">
          <nav className="space-y-1">
            {Object.entries(playgrounds).map(([section, items]) => (
              <div key={section}>
                <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {section}
                </h2>

                <div className="space-y-1">
                  {Object.keys(items).map((name) => (
                    <button
                      key={name}
                      onClick={() => setActive(name)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition
                        ${
                          active === name
                            ? "bg-slate-100 font-medium border-l-4 border-slate-800 pl-2"
                            : "hover:bg-slate-100 text-slate-600"
                        }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <div className="max-w-3xl bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-2xl font-semibold mb-2">{active}</h2>
            <p className="text-sm text-slate-500 mb-6">
              Demonstration of this hook pattern in isolation.
            </p>

            {ActiveComponent && <ActiveComponent />}
          </div>
        </main>
      </div>
    </div>
  );
}
