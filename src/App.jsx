import { useRef } from "react";
import InputBox from "./InputBox";

function App() {
  const inputRef = useRef();

  return (
    <>
      <h2>forwardRef Example</h2>
      <InputBox ref={inputRef} />

      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </>
  );
}

export default App;
