function App(){
  function callFun(){
    alert("function called")
  }

  let fruit=(apple)=>{
    alert("Apple")
  }
  return(
    <div>
      <h1>Click Event and function call</h1>
      <button onClick={callFun}>Click Me</button>
      <button onClick={()=>fruit("hello")}>Click</button>
    </div>
  )
}

export default App;