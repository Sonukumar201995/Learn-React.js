import { forwardRef } from "react";

const InputBox = forwardRef((props, ref) => {
  return <input type="text" ref={ref} placeholder="Type here..." />;
});

export default InputBox;
