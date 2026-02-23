import { useToggle } from "../../hooks/useToggle";

export function DemoPreview({ children }) {
  return <div>{children}</div>;
}

export function ToggleDemo() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <button onClick={toggle}>{isOpen ? "Open: true" : "Open: false"}</button>
  );
}
