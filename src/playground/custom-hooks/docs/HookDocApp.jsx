import React from "react";
import { hooksData } from "./hooksData";
import DocsLayout from "./components/DocsLayout";

const HookDocApp = () => {
  const [selectedId, setSelectedId] = React.useState(hooksData[0].id);

  const selectedHook = hooksData.find((hook) => hook.id === selectedId);
  return (
    <DocsLayout
      hooks={hooksData}
      selectedHook={selectedHook}
      onSelect={setSelectedId}
      selectedId={selectedId}
    />
  );
};

export default HookDocApp;
