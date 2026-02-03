import { useState } from "react";

function App() {
  const [names, setNames] = useState(["Sonu", "Amit"]);

  const addName = () => {
    setNames([...names, "Rahul"]);
  };

  return (
    <div>
      <h1>Updating array in React</h1>

      {names.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}

      <button onClick={addName}>Add Name</button>
    </div>
  );
}

export default App;
