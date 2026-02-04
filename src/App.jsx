import { useId } from "react";

function App() {
  const nameId = useId();

  return (
    <div>
      <label htmlFor={nameId}>Name:</label>
      <input id={nameId} type="text" />
      <p>{nameId}</p>
    </div>
  );
}

export default App;
