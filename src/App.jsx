import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(true);

  const handle = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <h1>Hide and Show property</h1>
      <button onClick={handle}>Toggle</button>

      {display ? <h1>Sonu Kumar</h1> : null}
    </div>
  );
}

export default App;
