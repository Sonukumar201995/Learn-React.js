import { useEffect, useState } from "react";

function App()
{

  const [counter,setCounter]=useState(0);

  function callOnce(){
    console.log("call once function called");
  }

  useEffect(()=>{
    callOnce();
  })
  // callOnce();
  return(

    <div>
      <h1>useEffect Hooks</h1>
      <button onClick={()=>setCounter(counter+1)}>Button</button>
    </div>
  )
}
export default App;