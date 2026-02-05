import { useState } from "react";

function useToggle(defaultVal = false) {
  const [value, setValue] = useState(defaultVal);

  function toggleValue(val) {
    if (typeof val !== "boolean") {
      setValue(prev => !prev);
    } else {
      setValue(val);
    }
  }

  return [value, toggleValue];
}

export default useToggle;
