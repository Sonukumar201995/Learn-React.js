import { useRef } from "react";

function App()
{

 let inputRef=useRef(null);
 const handleRef=()=>{
  console.log(inputRef);
  inputRef.current.focus();
  inputRef.current.style.color = "red";
inputRef.current.style.backgroundColor = "yellow";
inputRef.current.style.fontSize = "20px";
inputRef.current.style.border = "2px solid black";
inputRef.current.style.padding = "10px";

 }
  return(
    <>
    <h1>useRef in React js</h1>
    <input ref={inputRef} type="text" placeholder="Enter Name" />
    <button onClick={handleRef}>click</button>
    </>
  )
}
export default App;