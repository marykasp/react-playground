import Sidebar from "./Sidebar";
import HookPage from "./HookPage";

const DocsLayout = ({ hooks, selectedHook, onSelect }) => {
  return (
    <div>
      <Sidebar hooks={hooks} onSelect={onSelect} />
      <HookPage hook={selectedHook} />
    </div>
  );
};

export default DocsLayout;
