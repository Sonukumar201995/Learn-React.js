import { useState } from "react";

function App(){
  const [fruit,setFruit]=useState('Apple');
  const handleFruit=()=>{
    setFruit("Banana");
  }
  return(
    <div>
    <h1>Use State and Hooks react.js</h1>
    <h2>{fruit}</h2>
    <button onClick={handleFruit}>change value</button>
    </div>
  )
}

export default App;