import { useState } from "react";

function App(){
  const[val,setValue]=useState("");
  return (

    <>
    <h2>Get Input field Value</h2>
    <input type="text" value={val} onChange={(event)=>setValue(event.target.value)}placeholder="Enter Name"/>
    <h2>{val}</h2>
    <button onClick={()=>setValue("")}>clear</button>
    </>
  )
}

export default App;