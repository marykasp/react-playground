import React from "react";

const Sidebar = ({ hooks, onSelect }) => {
  return (
    <div>
      <h3>Custom Hooks</h3>
      {hooks.map((hook) => (
        <div key={hook.id} onClick={() => onSelect(hook.id)}>
          {hook.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
