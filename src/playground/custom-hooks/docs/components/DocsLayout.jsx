import Sidebar from "./Sidebar";
import HookPage from "./HookPage";

const DocsLayout = ({ hooks, selectedHook, onSelect, selectedId }) => {
  return (
    <div className="flex h-full bg-white text-gray-900">
      <Sidebar hooks={hooks} onSelect={onSelect} selectedId={selectedId} />
      <main className="flex-1 overflow-y-auto px-10 py-12">
        <div className="max-w-3xl mx-auto">
          <HookPage hook={selectedHook} />
        </div>
      </main>
    </div>
  );
};

export default DocsLayout;
