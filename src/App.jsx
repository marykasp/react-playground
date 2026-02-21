import React from "react";

import Counter from "./playground/useState/Counter";

const playgrounds = {
  "useState Counter": Counter,
};

export default function App() {
  const [active, setActive] = React.useState("useState Counter");
  const ActiveComponent = playgrounds[active];
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white p-6 shadow-sm">
        <h1 className="text-xl font-bold mb-6">React Playground</h1>

        <nav className="flex flex-col gap-2">
          {Object.keys(playgrounds).map((name) => (
            <button
              key={name}
              onClick={() => setActive(name)}
              className={`text-left px-3 py-2 rounded-lg transition 
                ${
                  active === name
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                }`}
            >
              {name}
            </button>
          ))}
        </nav>
      </aside>

      <main>
        <ActiveComponent />
      </main>
    </div>
  );
}
