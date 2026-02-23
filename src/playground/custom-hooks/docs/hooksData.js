import { ToggleDemo } from "./components/DemoPreview";

export const hooksData = [
  {
    id: "useToggle",
    name: "useToggle",
    description:
      "A simple boolean state hook that provides a toggle function to switch between true and false",
    parameters: [
      {
        name: "initialValue",
        type: "boolean",
        required: false,
        description: "initial voolean value. defaults to false",
      },
    ],
    returns: [
      {
        name: "value",
        type: "boolean",
        description: "the current boolean state",
      },
      {
        name: "toggle",
        type: "() => void",
        description: "Function that toggles the state.",
      },
      {
        name: "setValue",
        type: "React.Dispatch<boolean>",
        description: "Manual setter for the value.",
      },
    ],
    example: `
    const [isOpen, toggle] = useToggle(false)

    <button onClick={toggle}>{isOpen ? "Close" : "Open"}</button>
    `,
    demo: ToggleDemo,
  },
];
