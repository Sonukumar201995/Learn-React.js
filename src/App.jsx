import { useState } from "react";
import Count from "./counter";


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
    <Count/>
    </div>
  )
}

export default App;