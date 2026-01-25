import { useRef } from "react";

function App()
{

 let inputRef=useRef(null);
 const handleRef=()=>{
  console.log(inputRef);
  inputRef.current.focus();
 }
  return(
    <>
    <h1>useRef in React js</h1>
    <input ref={inputRef} type="text" placeholder="Enter Name" />
    <button onClick={handleRef}>focus</button>
    </>
  )
}
export default App;