import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Multiple Condition</h1>
      <h2>Counter 0:{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      {
        count === 0 ? <h2>Condition 1</h2> :
        count === 1 ? <h2>Condition 2</h2> :
        <h3>Other Condition</h3>
      }
    </div>
  );
}

export default App;
