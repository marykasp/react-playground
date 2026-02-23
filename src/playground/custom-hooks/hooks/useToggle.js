import React, { useCallback } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle, setValue];
}
