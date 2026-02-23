import React from "react";
import { DemoPreview } from "./DemoPreview";

const HookPage = ({ hook }) => {
  if (!hook) return null;

  const DemoComponent = hook.demo;

  return (
    <div>
      <h1>{hook.name}</h1>

      <p>{hook.description}</p>

      <h3>Parameters</h3>
      <ul>
        {hook.parameters.map((param) => (
          <li key={param.name}>
            <strong>
              {param.name} ({param.type})
            </strong>
            {param.description}
          </li>
        ))}
      </ul>

      <h3>Returns</h3>
      <ul>
        {hook.returns.map((ret) => (
          <li key={ret.name}>
            <strong>{ret.name}</strong> ({ret.type}) - {ret.description}
          </li>
        ))}
      </ul>

      <h3>Example</h3>
      <pre>
        <code>{hook.example}</code>
      </pre>

      <h3>Live Demo</h3>
      <DemoPreview>
        <DemoComponent />
      </DemoPreview>
    </div>
  );
};

export default HookPage;
