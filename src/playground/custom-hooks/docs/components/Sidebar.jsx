import React from "react";

const Sidebar = ({ hooks, onSelect, selectedId }) => {
  return (
    <aside className="w-64 border-r border-gray-200 bg-gray-50 px-6 py-8">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Custom Hooks
      </h3>
      <nav className="space-y-1">
        {hooks.map((hook) => {
          const isActive = hook.id === selectedId;

          return (
            <button
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition ${isActive ? "bg-gray-200 font-medium text-gray-900" : "text-gray-600 hover:bg-gray-100"}`}
              key={hook.id}
              onClick={() => onSelect(hook.id)}
            >
              {hook.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
