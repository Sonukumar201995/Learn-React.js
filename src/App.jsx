import { useState } from "react";

function App(){

  const [skill,Setskill]=useState([])
  let handle=(event)=>{
    console.log(event.target.value,event.target.checked)
    if(event.target.checked)
    {
      Setskill([...skill,event.target.value])
    }else
    {
      Setskill([...skill.filter((item)=>item!=event.target.value)])
    }
  }
  return (

    <div>
      <h1>Handled Checked box</h1>

      <input onChange={handle} type="checkbox" id="php" value="php"/>
      <label htmlFor="php">PHP</label>
      <br /><br />
      <input onChange={handle} type="checkbox" id="js" value="js"/>
      <label htmlFor="js">JS</label>
      <br /><br />
      <input onChange={handle} type="checkbox" id="node" value="node"/>
      <label htmlFor="node">Node</label>
      <br /><br />
      <h2>{skill.toString()}</h2>
    </div>
  )
}

export default App;

